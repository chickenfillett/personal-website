import type { HTMLAttributes } from "react";

export function EditorialGrid({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={`editorial-grid ${className}`} {...props} />;
}
