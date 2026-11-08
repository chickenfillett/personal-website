/**
 * L4 — 开关与隐私信号（默认全关）。
 *
 * 环境变量名（冻结）：NEXT_PUBLIC_ANALYTICS_ENABLED / NEXT_PUBLIC_ANALYTICS_ENDPOINT
 * 未显式置为 "true" 时 isAnalyticsEnabled() 第一时间短路返回，
 * 不读取任何浏览器能力、不创建会话、不构造请求。
 */

interface PrivacySignals {
  doNotTrack?: string | null;
  msDoNotTrack?: string | null;
  globalPrivacyControl?: boolean;
}

/** 读取上报端点，默认空字符串；为空时 track() 直接 no-op。 */
export function getEndpoint(): string {
  return (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT ?? "").trim();
}

/**
 * 综合开关：构建期开关 + DNT + GPC + prefers-reduced-motion。
 * 尊重用户「不追踪 / 减少动效」等系统偏好，任一命中即停用。
 */
export function isAnalyticsEnabled(): boolean {
  // 1) 主开关（默认 false）。静态构建时 Next 会把该字面量内联。
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== "true") return false;

  // 2) SSR 保护：没有浏览器环境一律停用。
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;

  const nav = navigator as unknown as PrivacySignals;

  // 3) DNT（含旧版 msDoNotTrack）
  if (nav.doNotTrack === "1" || nav.msDoNotTrack === "1") return false;

  // 4) GPC（Global Privacy Control）
  if (nav.globalPrivacyControl === true) return false;

  // 5) prefers-reduced-motion：尊重用户系统偏好，保守停用
  if (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return false;
  }

  return true;
}
