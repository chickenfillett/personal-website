/** L0–L4 公共出口（聚合，方便集成阶段按名 import）。 */

export { track } from "./track";
export { validateEvent } from "./contract";
export type {
  AnalyticsEvent,
  AnalyticsEventInput,
  AnalyticsEventType,
  AnalyticsLocale,
  DeviceCategory,
} from "./contract";
export { getSessionId, SESSION_TTL_MS } from "./session";
export { getEndpoint, isAnalyticsEnabled } from "./config";
export {
  resolveTransport,
  NoopTransport,
  HttpTransport,
} from "./transport";
export type { Transport } from "./transport";
