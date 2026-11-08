import type { ReactNode } from "react";
import { EditorialGrid } from "./EditorialGrid";

type SplitSectionProps = {
  content: ReactNode;
  media: ReactNode;
  reverse?: boolean;
  align?: "start" | "center";
  className?: string;
};

export function SplitSection({
  content,
  media,
  reverse = false,
  align = "center",
  className = "",
}: SplitSectionProps) {
  return (
    <EditorialGrid
      className={`split-section ${reverse ? "split-section-reverse" : ""} split-section-${align} ${className}`}
    >
      <div className="split-section-content">{content}</div>
      <div className="split-section-media">{media}</div>
    </EditorialGrid>
  );
}
