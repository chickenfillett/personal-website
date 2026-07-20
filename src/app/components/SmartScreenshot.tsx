"use client";

import Image from "next/image";

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
  return (
    <div className={`screenshot-frame ${frameClassName}`}>
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
        className={`screenshot-image is-loaded ${className}`}
      />
    </div>
  );
}
