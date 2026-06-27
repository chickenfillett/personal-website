"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [loaded, setLoaded] = useState(false);
  const optimizedSrc = optimizedImagePath(src);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className={`screenshot-frame ${frameClassName}`}>
      <picture>
        <source srcSet={optimizedSrc} type="image/webp" />
        <Image
          key={src}
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`screenshot-image ${loaded ? "is-loaded" : ""} ${className}`}
        />
      </picture>
    </div>
  );
}
