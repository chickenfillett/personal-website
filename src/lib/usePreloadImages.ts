"use client";

import { useEffect } from "react";
import { optimizedImagePath } from "./siteAssets";

export function usePreloadImages(sources: string[], enabled = true) {
  const sourceKey = sources.join("|");

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const unique = Array.from(new Set(sourceKey.split("|").filter(Boolean)));

    for (const src of unique) {
      for (const candidate of [optimizedImagePath(src), src]) {
        const image = new window.Image();
        image.decoding = "async";
        image.src = candidate;
      }
    }
  }, [enabled, sourceKey]);
}
