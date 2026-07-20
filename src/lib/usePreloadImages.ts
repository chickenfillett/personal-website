"use client";

import { useEffect } from "react";

type NetworkInformationLike = {
  saveData?: boolean;
  effectiveType?: string;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformationLike;
};

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export function usePreloadImages(sources: string[], enabled = true, limit = 6) {
  const sourceKey = sources.join("|");

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const connection = (navigator as NavigatorWithConnection).connection;
    if (connection?.saveData || connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") return;

    const unique = Array.from(new Set(sourceKey.split("|").filter(Boolean))).slice(0, limit);
    if (unique.length === 0) return;

    const idleWindow = window as IdleWindow;
    let cancelled = false;
    let idleHandle = 0;
    let timeoutHandle = 0;

    const preload = () => {
      if (cancelled) return;

      for (const src of unique) {
        const image = new window.Image();
        image.decoding = "async";
        image.setAttribute("fetchpriority", "low");
        image.src = src;
      }
    };

    if (idleWindow.requestIdleCallback) {
      idleHandle = idleWindow.requestIdleCallback(preload, { timeout: 1400 });
    } else {
      timeoutHandle = window.setTimeout(preload, 320);
    }

    return () => {
      cancelled = true;
      if (idleHandle) idleWindow.cancelIdleCallback?.(idleHandle);
      if (timeoutHandle) window.clearTimeout(timeoutHandle);
    };
  }, [enabled, limit, sourceKey]);
}
