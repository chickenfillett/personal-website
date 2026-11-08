/**
 * L4 — 唯一对外埋点入口（冻结签名）。
 *
 * export function track(event: AnalyticsEventInput): void
 *
 * 开关关闭 / DNT / GPC / reduced-motion / 端点为空时：
 * 立即返回，不创建会话、不读时钟、不构造任何请求（纯 no-op）。
 */

import {
  validateEvent,
  type AnalyticsEventInput,
  type DeviceCategory,
} from "./contract";
import { getSessionId } from "./session";
import { getEndpoint, isAnalyticsEnabled } from "./config";
import { resolveTransport } from "./transport";

/** 粗粒度设备大类：仅用媒体查询 + 视口宽度，不读 UA、不做指纹。 */
function resolveDeviceCategory(): DeviceCategory | undefined {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return undefined;
  }
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const width = window.innerWidth;
  if (coarse && width < 768) return "mobile";
  if (coarse) return "tablet";
  return "desktop";
}

export function track(event: AnalyticsEventInput): void {
  // 开关守卫：关闭时立即返回，纯 no-op。
  if (!isAnalyticsEnabled()) return;

  // enabled 但端点为空：同样 no-op（休眠态，没有任何地方可发送）。
  const endpoint = getEndpoint();
  if (!endpoint) return;

  // 以下副作用只在开关真正开启后才发生。
  const candidate: AnalyticsEventInput = {
    ...event,
    s: event.s ?? getSessionId(),
    t: event.t ?? Math.floor(Date.now() / 1000),
    d: event.d ?? resolveDeviceCategory(),
  };

  const validated = validateEvent(candidate);
  if (!validated) return;

  resolveTransport().send(endpoint, validated);
}
