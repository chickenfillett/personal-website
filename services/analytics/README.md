# 休眠分析服务端（L6）

> **休眠**：本目录**不默认启动**、**不进构建**、**不写进 `netlify.toml`**、**未加入 `package.json`**。
> 仓库根目录下的 `services/` 不在 Next 编译的 `src/` 内，静态导出 `output: export` 天然不会包含它。
> 前端开关 `NEXT_PUBLIC_ANALYTICS_ENABLED` 默认 `false`，当前**不收集任何数据**：0 网络请求、0 落盘、0 第三方库、0 SDK。

## 组成

| 文件 | 说明 |
| --- | --- |
| `server.py` | Python 3 标准库 `http.server` + `sqlite3`，零第三方依赖 |
| `schema.sql` | `events` 表 + 索引 + 按 page / locale / 日期 / 事件类型的聚合视图 |
| `README.md` | 本文件 |

## 端点

| 方法 | 路径 | 鉴权 | 暴露建议 |
| --- | --- | --- | --- |
| `POST` | `/event` | 无（公开写入）+ 大小限制 + 频率限流 | 唯一建议经反向代理暴露到公网 |
| `GET` | `/summary` | `Authorization: Bearer $ANALYTICS_ADMIN_TOKEN` | **仅内网/本机**，不公网暴露 |
| `GET` | `/dashboard` | 私有静态页（数据仍走 `/summary`） | **仅内网/本机**，不公网暴露 |
| `OPTIONS` | `/event` | CORS 预检 | 同上 |

- `/summary` 未配置 `ANALYTICS_ADMIN_TOKEN` 时**一律拒绝**（防误暴露）；token 比较用常量时间比较。
- `/dashboard` 只是静态说明页，不返回任何数据；页面内让用户填入 token 再调用 `/summary`。
- 服务默认监听 `127.0.0.1`（`ANALYTICS_HOST`），即「不公网暴露」的第一道落地。

## 隐私约束

- **不存原始 IP**：先把 IPv4 末段置 0 / IPv6 取前缀粗化，再做不可逆短哈希（`ip_hash`），仅用于内存频率限流。
- 不存完整 User-Agent、不采集设备指纹、不建长期画像。
- 前端固定 schema `{e,p,l,s,t,r,d}`，单条约 100 字节；路径去查询串、来源只留域名、设备仅三档；服务端对同一批字段再次校验。
- **最短必要保留期**：默认 90 天（`ANALYTICS_RETENTION_DAYS`），每次写入按索引清理过期行；`/summary` 只返回聚合计数，不返回会话 ID / `ip_hash` 明细。

## 环境变量

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ANALYTICS_HOST` | `127.0.0.1` | 监听地址，保持仅本机/内网 |
| `ANALYTICS_PORT` | `8787` | 监听端口 |
| `ANALYTICS_DB_PATH` | `services/analytics/analytics.db` | SQLite 文件 |
| `ANALYTICS_ADMIN_TOKEN` | 空 | `/summary` 的 Bearer token；**空则接口拒绝** |
| `ANALYTICS_RETENTION_DAYS` | `90` | 最短必要保留期（天） |
| `ANALYTICS_ALLOWED_ORIGIN` | `*` | `/event` 的 CORS 来源 |

## 将来启用（前端一行不改）

1. 部署本目录（Python 3，零依赖）：`ANALYTICS_ADMIN_TOKEN=... python3 server.py`。
2. 反向代理**只把 `/event` 暴露到公网**；`/summary`、`/dashboard` 仅内网可达（或加网络层白名单）。
3. 站点部署环境填 `NEXT_PUBLIC_ANALYTICS_ENDPOINT=https://<host>/event`。
4. 打开 `NEXT_PUBLIC_ANALYTICS_ENABLED=true`。
5. 前端埋点（`AnalyticsBridge` + `track()` + `HttpTransport`）已就绪，**无需改动任何前端代码**；重新构建站点即可。
6. 复核 Privacy 文案 / privacy 页措辞与合规评估（见 `docs/ANALYTICS.md`）。

## 本地自检

```bash
python3 -m py_compile services/analytics/server.py
```

> 本目录无默认启动脚本、无常驻进程；冒烟测试可用 `create_server()` 临时起一次并立即 `shutdown()`。
