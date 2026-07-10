"use client";

import Image from "next/image";
import { optimizedImagePath } from "@/lib/siteAssets";

type SmartScreenshotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  frameClassName?: string;
};

export default function SmartScreenshot({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 760px",
  className = "",
  frameClassName = "",
}: SmartScreenshotProps) {
  const preferredSrc = optimizedImagePath(src);

  return (
    <div className={`screenshot-frame ${frameClassName}`}>
      <Image
        key={preferredSrc}
        src={preferredSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={(event) => {
          const image = event.currentTarget;
          if (preferredSrc === src || image.dataset.fallbackApplied === "true") return;
          image.dataset.fallbackApplied = "true";
          image.src = src;
        }}
        className={`screenshot-image is-loaded ${className}`}
      />
    </div>
  );
}
