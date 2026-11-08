# Analytics 契约层与休眠服务端（L0–L6）

> **状态：休眠（Dormant）。当前不收集任何数据**：0 网络请求、0 落盘、0 第三方库、0 SDK。
> 本文为工程与合规视角的梳理，**非正式法律意见**。

---

## 0. 当前状态与「休眠」如何落地

用户明确：现在没买 VPS、不收集任何数据、也没有地方可发送；但要求「未来能和云端服务器联动的代码能力 100% 写完，先休眠」。落地方式：

| 机制 | 落地位置 |
| --- | --- |
| 开关默认关 | `NEXT_PUBLIC_ANALYTICS_ENABLED`（默认 `false`），`config.ts` 第一时间短路 |
| 关闭即纯 no-op | `track()` 立即返回，不创建会话、不读时钟、不构造请求 |
| 端点默认空 | `NEXT_PUBLIC_ANALYTICS_ENDPOINT`（默认空）；即便开关打开，端点为空仍 no-op |
| 尊重用户信号 | DNT / GPC / `prefers-reduced-motion` 命中即停用 |
| 服务端不进构建 | `services/analytics/` 在**仓库根目录**，Next 只编译 `src/`，静态导出天然不包含 |
| 无启动脚本 | 未写入 `netlify.toml`、未加入 `package.json`、无默认启动/常驻进程 |

前端代码能力已 100% 写完；将来启用**前端一行不改**。

## 1. 分层

| 层 | 文件 | 职责 |
| --- | --- | --- |
| L0 | `src/lib/analytics/contract.ts` | 类型 + 纯函数 `validateEvent`：白名单 / 枚举 / 清洗 / 校验 |
| L1 | `src/lib/analytics/session.ts` | 6–8 位临时随机会话 ID，会话级存储 + TTL |
| L2 | `src/app/components/analytics/AnalyticsBridge.tsx` | 全局埋点桥，默认导出返回 `null` |
| L3 | `src/lib/analytics/transport.ts` | `Transport` / `NoopTransport` / `HttpTransport` |
| L4 | `src/lib/analytics/config.ts` + `track.ts` + `index.ts` | 开关、隐私信号、唯一埋点入口、聚合出口 |
| L5 | `.env.example` + 本文 | 占位配置与隐私/合规说明 |
| L6 | `services/analytics/` | 休眠 Python 服务端（标准库 + SQLite） |

## 2. 五类事件（`e`）

| 枚举 | 触发时机 | 埋点方式 |
| --- | --- | --- |
| `page_view` | 首次挂载、`popstate`、内部链接点击（兼容静态导出） | Bridge 自动 |
| `product_view` | 产品曝光/查看 | `data-analytics="product_view"` |
| `cta_click` | 行动号召按钮 | `data-analytics="cta_click"` |
| `contact_click` | 联系方式点击 | `data-analytics="contact_click"` |
| `page_error` | `error` / `unhandledrejection` | Bridge 全局捕获 |

所有上报统一走 `track()`，Bridge 不直接发请求。

## 3. 固定 schema `{ e, p, l, s, t, r, d }`

单条约 100 字节，例如：

```json
{"e":"page_view","p":"/products","l":"zh","s":"k3f9az","t":1730000000,"r":"google.com","d":"mobile"}
```

| 字段 | 含义 | 类型 | 必填 | 上限 | 清洗规则 |
| --- | --- | --- | --- | --- | --- |
| `e` | 事件类型 | 5 类枚举 | 是 | — | 仅允许第 2 节 5 类 |
| `p` | 短页面路径 | string | 是 | 256 | **去掉查询串与 hash**，只留 pathname |
| `l` | locale | `zh\|en\|fr` | 是 | 3 | 仅三档，其余归一为 `en` |
| `s` | 临时随机会话 ID | string | 是 | 8 | 6–8 位 base36，随标签页失效 |
| `t` | 秒级 Unix 时间戳 | number | 是 | — | 2024-01-01 ~ 2100-01-01 合理区间 |
| `r` | 来源域名 | string | 否 | 128 | **只留域名**（去协议/端口/路径/`www.`） |
| `d` | 设备大类 | `desktop\|mobile\|tablet` | 否 | — | 仅三档，由媒体查询 + 视口宽度粗判 |

`validateEvent` 还执行：**字段白名单**（`{e,p,l,s,t,r,d}` 之外的未知键一律拒绝）、枚举校验、字符串长度上限；可选字段非法时直接省略而非污染事件。

## 4. 明确不采集（§10）

- 设备指纹（canvas / webgl / 字体 / 插件 / `deviceMemory` / 电池 / 精确屏幕参数等）
- 长期访客画像、跨设备标识
- `localStorage` 持久 ID（会话 ID 仅存 `sessionStorage`，关标签即失效，TTL 30 分钟兜底）
- 完整 User-Agent 长期留存（设备大类只读粗粒度信号，不读 UA 字符串）
- 精确地理位置、**原始 IP**（服务端仅保留截断末字节后哈希的短标识用于限流）
- 查询串、hash、来源 URL 路径

## 5. §9 / §10 裁决说明

报告 §9 写「采集设备指纹 / 建立长期访客画像」，§10「禁止采集」又明列设备指纹且要求临时随机会话 —— **已裁决以 §10 为准**：

- **删除**设备指纹与长期访客画像；
- **保留**随机临时 Session ID（6–8 位 base36，会话级存储）；
- Device Category **只留粗粒度三档** `desktop|mobile|tablet`。

## 6. 最短必要保留期

- 客户端：会话 ID 随标签页销毁，TTL 30 分钟兜底；无任何持久存储。
- 服务端：默认 **90 天**（`ANALYTICS_RETENTION_DAYS`），每次写入按索引清理过期行；`/summary` 只返回聚合计数，不返回会话 ID / 哈希标识明细。
- 目的限定：仅用于站点流量与转化概览，不用于识别个人。

## 7. 启用步骤（将来，前端零改动）

1. 部署 `services/analytics/server.py`（Python 3 标准库，零依赖）；反向代理**仅把 `/event` 暴露到公网**，`/summary`、`/dashboard` 仅内网可达。
2. 设置服务端 `ANALYTICS_ADMIN_TOKEN`、`ANALYTICS_RETENTION_DAYS` 等环境变量。
3. 站点部署环境填 `NEXT_PUBLIC_ANALYTICS_ENDPOINT=https://<host>/event`。
4. 打开 `NEXT_PUBLIC_ANALYTICS_ENABLED=true`。
5. 页面元素由 Agent C 加 `data-analytics="cta_click" | "contact_click" | "product_view"`；`AnalyticsBridge` 已在 layout 挂载一次。
6. 复核 Privacy 文案与 privacy 页措辞一致，重新构建站点。

**前端代码一行不改**：端点与开关均为环境变量，埋点、校验、传输逻辑已就绪。

## 8. 对外导出（供集成 / Agent C 核对 import）

- `@/lib/analytics/track` → `track(event: AnalyticsEventInput): void`（**冻结**）
- `@/app/components/analytics/AnalyticsBridge` → `default AnalyticsBridge(): null`（**冻结**，`"use client"`，在 layout 挂一次）
- 环境变量名（**冻结**）：`NEXT_PUBLIC_ANALYTICS_ENABLED`、`NEXT_PUBLIC_ANALYTICS_ENDPOINT`
- 其余：`validateEvent` / `normalizePath` / `extractDomain` / `normalizeLocale` / `getSessionId` / `SESSION_TTL_MS` / `getEndpoint` / `isAnalyticsEnabled` / `resolveTransport` / `Transport` / `NoopTransport` / `HttpTransport`
- 类型：`AnalyticsEventType` / `AnalyticsEvent` / `AnalyticsEventInput` / `AnalyticsLocale` / `DeviceCategory`

## 9. 法律边界简述（工程与合规视角，非正式法律意见）

- **PIPL（中国个人信息保护法）**：以「匿名化」为目标 —— 不采集可直接/间接识别个人的信息，无持久 ID、无原始 IP、无指纹；匿名化信息不属于个人信息。仍建议在隐私政策中披露统计机制与开关。
- **GDPR / ePrivacy（欧盟）**：访问终端存储/读取通常需同意；本方案会话 ID 存于会话级存储且为低影响/严格必要范畴，仍以 DNT / GPC 为优先停用信号、默认关闭，启用前建议完成同意评估。
- **CNIL 免同意 7 条件（法国）**：受众与目的限定、生命周期短、不跨站追踪、不富集第三方数据、只产出聚合统计、不用于识别个人等；本方案按这些方向设计（粗粒度设备、临时会话、只存聚合、90 天保留），启用前需逐条复核。
- **CCPA/CPRA（加州）**：不「出售/共享」个人信息、不建画像；尊重 GPC 作为法定的「不追踪」信号。

> 以上为工程与合规视角的梳理，**非正式法律意见**；正式启用前请由法务结合部署地域与受众复核。

## 10. 与 Privacy 文案的一致性

本站当前**不收集任何数据**。Privacy 文案（Agent A）与 privacy 页（Agent C）应使用同一措辞：「统计能力已就绪但处于休眠，默认关闭，不产生任何数据收集」。开关状态若变化，需同步更新本文、Privacy 文案与 privacy 页三处。
