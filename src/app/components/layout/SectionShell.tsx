import type { HTMLAttributes } from "react";
import { SiteContainer } from "./SiteContainer";

type SectionShellProps = HTMLAttributes<HTMLElement> & {
  size?: "large" | "medium" | "small";
  bordered?: boolean;
  containerClassName?: string;
};

export function SectionShell({
  children,
  size = "large",
  bordered = false,
  className = "",
  containerClassName = "",
  ...props
}: SectionShellProps) {
  return (
    <section
      className={`section-shell section-shell-${size} ${bordered ? "section-shell-bordered" : ""} ${className}`}
      {...props}
    >
      <SiteContainer className={containerClassName}>{children}</SiteContainer>
    </section>
  );
}
