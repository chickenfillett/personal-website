import type { ReactNode } from "react";

export function InlineMeta({
  items,
  className = "",
}: {
  items: readonly ReactNode[];
  className?: string;
}) {
  return (
    <div className={`inline-meta ${className}`}>
      {items.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
}
