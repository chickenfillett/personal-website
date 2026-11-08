/**
 * L0 — Analytics 契约层（纯类型 + 纯函数，零副作用、零依赖）。
 *
 * 固定 schema：{ e, p, l, s, t, r, d }，单条约 100 字节。
 * 本文件不含任何设备指纹 / 访客画像 / 完整 UA / 精确位置 / 原始 IP 字段。
 * 详见 docs/ANALYTICS.md（§9 / §10 裁决：以 §10 为准）。
 */

/** 5 类事件枚举（冻结契约，不得增删）。 */
export type AnalyticsEventType =
  | "page_view"
  | "product_view"
  | "cta_click"
  | "contact_click"
  | "page_error";

/** locale 只保留三档（与站点 i18n 解耦，避免采集多余语言明细）。 */
export type AnalyticsLocale = "zh" | "en" | "fr";

/** 设备大类：仅粗粒度三档，不做指纹、不读完整 UA。 */
export type DeviceCategory = "desktop" | "mobile" | "tablet";

/** 校验通过后的最终事件（r / d 可选，缺省时不写入，保持 ~100 字节）。 */
export interface AnalyticsEvent {
  e: AnalyticsEventType;
  p: string;
  l: AnalyticsLocale;
  s: string;
  t: number;
  r?: string;
  d?: DeviceCategory;
}

/** 调用方传入的未清洗事件；validateEvent 会做白名单 + 清洗 + 校验。 */
export interface AnalyticsEventInput {
  e: AnalyticsEventType | string;
  p?: string;
  l?: string;
  s?: string;
  t?: number;
  r?: string | null;
  d?: string | null;
}

const EVENT_TYPES: readonly AnalyticsEventType[] = [
  "page_view",
  "product_view",
  "cta_click",
  "contact_click",
  "page_error",
];
const DEVICES: readonly DeviceCategory[] = ["desktop", "mobile", "tablet"];

/** 允许出现在 input 顶层的键；任何其它键一律拒绝（防字段膨胀 / 夹带）。 */
const ALLOWED_KEYS = new Set(["e", "p", "l", "s", "t", "r", "d"]);

const MAX_PATH_LEN = 256;
const MAX_DOMAIN_LEN = 128;
const SESSION_ID_RE = /^[0-9a-z]{6,8}$/;
const DOMAIN_RE = /^[a-z0-9.-]+\.[a-z]{2,}$/i;

/** 秒级时间戳的合理绝对区间（2024-01-01 ~ 2100-01-01），保持纯函数确定性。 */
const MIN_TIMESTAMP = 1704067200;
const MAX_TIMESTAMP = 4102444800;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** 只保留路径、去掉查询串与 hash；若传入绝对 URL 则取 pathname。 */
export function normalizePath(raw: string): string {
  let path = String(raw).split("?")[0].split("#")[0];
  if (path.includes("://")) {
    try {
      path = new URL(path).pathname;
    } catch {
      // 解析失败时退回已截取的片段
    }
  }
  if (!path.startsWith("/")) path = `/${path}`;
  path = path.slice(0, MAX_PATH_LEN);
  return path || "/";
}

/** 来源只留域名：去协议 / 端口 / 路径 / www.，无法解析则丢弃。 */
export function extractDomain(raw: string): string | undefined {
  let host = String(raw).trim();
  if (!host) return undefined;
  if (host.includes("://")) {
    try {
      host = new URL(host).hostname;
    } catch {
      return undefined;
    }
  }
  host = host.split("/")[0].split(":")[0].toLowerCase();
  if (host.startsWith("www.")) host = host.slice(4);
  if (!DOMAIN_RE.test(host)) return undefined;
  return host.slice(0, MAX_DOMAIN_LEN);
}

/** locale 归一化：仅 zh / fr / en，其余（含站点其它语言）一律归为 en。 */
export function normalizeLocale(raw: string): AnalyticsLocale {
  const value = String(raw).toLowerCase();
  if (value.startsWith("zh")) return "zh";
  if (value.startsWith("fr")) return "fr";
  return "en";
}

/**
 * 纯函数：字段白名单 + 枚举校验 + 长度上限 + 路径/来源/设备清洗。
 * 拒绝未知键；必填字段非法返回 null；可选字段非法则直接省略。
 * 不生成会话 ID、不读时钟、不发请求 —— 网络与副作用均在 L3/L4。
 */
export function validateEvent(input: unknown): AnalyticsEvent | null {
  if (!isRecord(input)) return null;

  for (const key of Object.keys(input)) {
    if (!ALLOWED_KEYS.has(key)) return null;
  }

  // e：必填，5 类枚举
  const e = input.e;
  if (typeof e !== "string" || !EVENT_TYPES.includes(e as AnalyticsEventType)) return null;

  // p：必填，去查询串
  if (input.p === undefined || input.p === null) return null;
  const p = normalizePath(String(input.p));

  // l：缺省按 en 归一化，只保留三档
  const l = normalizeLocale(
    input.l === undefined || input.l === null ? "en" : String(input.l),
  );

  // s：必填，6–8 位临时随机会话 ID（base36）
  const s = input.s;
  if (typeof s !== "string" || !SESSION_ID_RE.test(s)) return null;

  // t：必填，秒级时间戳且落在合理绝对区间
  const t = input.t;
  if (typeof t !== "number" || !Number.isFinite(t)) return null;
  const ts = Math.floor(t);
  if (ts < MIN_TIMESTAMP || ts > MAX_TIMESTAMP) return null;

  const event: AnalyticsEvent = { e: e as AnalyticsEventType, p, l, s, t: ts };

  // r / d：可选，值不合法则省略，不阻断整条事件
  if (typeof input.r === "string") {
    const r = extractDomain(input.r);
    if (r) event.r = r;
  }
  if (typeof input.d === "string" && DEVICES.includes(input.d as DeviceCategory)) {
    event.d = input.d as DeviceCategory;
  }

  return event;
}
