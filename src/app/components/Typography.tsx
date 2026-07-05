import type { ElementType, ReactNode } from "react";

type HeadingVariant = "hero" | "page" | "section" | "feature" | "legal";

const defaultTagByVariant: Record<HeadingVariant, ElementType> = {
  hero: "h1",
  page: "h1",
  section: "h2",
  feature: "h2",
  legal: "h1",
};

function classNames(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function DisplayHeading({
  as,
  variant,
  gradient = false,
  className,
  children,
}: {
  as?: ElementType;
  variant: HeadingVariant;
  gradient?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const Component = as ?? defaultTagByVariant[variant];

  return (
    <Component
      className={classNames(
        "site-heading",
        `site-heading-${variant}`,
        gradient && "text-warm-gradient",
        className,
      )}
    >
      {children}
    </Component>
  );
}
