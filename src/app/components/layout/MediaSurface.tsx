import type { HTMLAttributes } from "react";

type MediaSurfaceProps = HTMLAttributes<HTMLDivElement> & {
  size?: "hero" | "feature" | "gallery";
  priority?: boolean;
};

export function MediaSurface({
  size = "feature",
  priority,
  className = "",
  ...props
}: MediaSurfaceProps) {
  void priority;
  return <div className={`media-surface media-surface-${size} ${className}`} {...props} />;
}
