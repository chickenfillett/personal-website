import type { HTMLAttributes } from "react";

export function SiteContainer({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={`site-container ${className}`} {...props} />;
}
