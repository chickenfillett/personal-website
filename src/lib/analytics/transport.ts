/**
 * L3 — 传输层（默认 Noop，开关开启后才有网络行为）。
 *
 * 零依赖：仅用浏览器原生异步上报能力。
 * 所有网络调用都位于 isAnalyticsEnabled() 开关守卫之后；
 * 开关默认关 → 0 网络请求、0 落盘、0 第三方库、0 SDK。
 */

import type { AnalyticsEvent } from "./contract";
import { isAnalyticsEnabled } from "./config";

export interface Transport {
  send(endpoint: string, event: AnalyticsEvent): void;
}

/** 默认传输：纯空操作。 */
export class NoopTransport implements Transport {
  send(): void {
    // 故意留空：休眠态不产生任何副作用。
  }
}

/** 客户端简单限流：滑动窗口内最多 N 条，超出静默丢弃。 */
const RATE_WINDOW_MS = 10_000;
const RATE_MAX_EVENTS = 20;
/** 兜底请求的超时（首选 API 本身不阻塞主线程，无超时接口）。 */
const REQUEST_TIMEOUT_MS = 3_000;

export class HttpTransport implements Transport {
  private timestamps: number[] = [];

  private allow(): boolean {
    const now = Date.now();
    this.timestamps = this.timestamps.filter((ts) => now - ts < RATE_WINDOW_MS);
    if (this.timestamps.length >= RATE_MAX_EVENTS) return false;
    this.timestamps.push(now);
    return true;
  }

  send(endpoint: string, event: AnalyticsEvent): void {
    // 开关守卫：关闭时立即返回，绝不触碰任何网络 API。
    if (!isAnalyticsEnabled()) return;
    if (!this.allow()) return;

    let body: string;
    try {
      body = JSON.stringify(event);
    } catch {
      return;
    }

    // 1) 首选异步上报：不阻塞、页面卸载也尽量送达。
    if (
      typeof navigator !== "undefined" &&
      typeof navigator.sendBeacon === "function"
    ) {
      try {
        if (navigator.sendBeacon(endpoint, body)) return;
      } catch {
        // 失败静默，继续尝试兜底
      }
    }

    // 2) 异步请求兜底：keepalive + 超时、不 await、失败静默。
    if (typeof fetch !== "function") return;
    const controller =
      typeof AbortController === "function" ? new AbortController() : null;
    const timer = controller
      ? setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
      : null;
    try {
      void fetch(endpoint, {
        method: "POST",
        body,
        keepalive: true,
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        ...(controller ? { signal: controller.signal } : {}),
      })
        .catch(() => {
          // 失败静默：统计绝不影响主流程
        })
        .finally(() => {
          if (timer !== null) clearTimeout(timer);
        });
    } catch {
      if (timer !== null) clearTimeout(timer);
    }
  }
}

const noopTransport = new NoopTransport();
const httpTransport = new HttpTransport();

/** 由开关决定使用哪一个；默认返回 NoopTransport。 */
export function resolveTransport(): Transport {
  return isAnalyticsEnabled() ? httpTransport : noopTransport;
}
