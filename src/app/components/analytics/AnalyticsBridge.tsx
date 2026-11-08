"use client";

/**
 * L2 — 全局埋点桥（Agent C 在 layout 挂载一次）。
 *
 * 默认导出，返回 null，不渲染任何 DOM。
 * 所有上报统一走 track()，本组件绝不直接发请求。
 *
 * 覆盖：
 *  - page_view：首次挂载 + popstate + 内部链接点击委托（兼容静态导出）
 *  - cta_click / contact_click / product_view：data-analytics 属性事件委托
 *  - page_error：error / unhandledrejection 全局捕获
 */

import { useEffect } from "react";
import { track, type AnalyticsEventType } from "@/lib/analytics";

/** 允许由 data-analytics 触发的点击类事件（白名单，防注入其它类型）。 */
const CLICK_EVENTS = new Set<AnalyticsEventType>([
  "cta_click",
  "contact_click",
  "product_view",
]);

/** 模块级去重，避免 Link 客户端导航与内部链接委托、StrictMode 双挂载重复上报。 */
let lastPagePath = "";
let lastPageAt = 0;

export default function AnalyticsBridge(): null {
  useEffect(() => {
    const htmlLang = () => document.documentElement.lang || "en";
    const fullPath = () =>
      window.location.pathname + window.location.search + window.location.hash;

    // page_view 上报（500ms 内同路径去重）
    const reportPageView = () => {
      const path = window.location.pathname;
      const now = Date.now();
      if (path === lastPagePath && now - lastPageAt < 500) return;
      lastPagePath = path;
      lastPageAt = now;
      track({
        e: "page_view",
        p: fullPath(),
        l: htmlLang(),
        r: document.referrer || undefined,
      });
    };

    // 判断是否为「同源、非新窗口、非下载」的内部导航
    const isInternalNavigation = (
      ev: MouseEvent,
      anchor: HTMLAnchorElement | null,
    ): boolean => {
      if (!anchor) return false;
      if (ev.defaultPrevented || ev.button !== 0) return false;
      if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return false;
      if (anchor.target && anchor.target !== "_self") return false;
      if (anchor.hasAttribute("download")) return false;
      if (anchor.origin !== window.location.origin) return false;
      return true;
    };

    // 捕获阶段委托：既能读到 data-analytics，也不受子元素 stopPropagation 影响
    const handleClick = (ev: MouseEvent) => {
      const target = ev.target instanceof Element ? ev.target : null;

      // 1) data-analytics 属性事件委托
      const tagged = target?.closest("[data-analytics]");
      if (tagged) {
        const value = tagged.getAttribute("data-analytics");
        if (value && CLICK_EVENTS.has(value as AnalyticsEventType)) {
          track({
            e: value as AnalyticsEventType,
            p: fullPath(),
            l: htmlLang(),
          });
        }
      }

      // 2) 内部链接点击 → 延迟上报 page_view（等 URL 更新后）
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (isInternalNavigation(ev, anchor)) {
        window.setTimeout(reportPageView, 0);
      }
    };

    const handleError = () => {
      track({ e: "page_error", p: fullPath(), l: htmlLang() });
    };
    const handleRejection = () => {
      track({ e: "page_error", p: fullPath(), l: htmlLang() });
    };

    // 首次挂载
    reportPageView();

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", reportPageView);
    // 用 addEventListener("error", ...) 等价替代 window.onerror，避免覆盖他人钩子
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", reportPageView);
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}
