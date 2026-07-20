import type { ReactNode } from "react";
import { ProductHeroActions, type ProductAction } from "./ProductActions";
import { DisplayHeading } from "./Typography";

export function ProductHero({
  eyebrow,
  title,
  intro,
  status,
  actions,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  status: string;
  actions: readonly ProductAction[];
  children: ReactNode;
}) {
  return (
    <section className="product-hero-section">
      <div className="product-page-grid">
        <div className="product-hero-copy animate-fade-in">
          <span className="eyebrow">{eyebrow}</span>
          <DisplayHeading variant="hero" gradient>{title}</DisplayHeading>
          <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{intro}</p>
          <ProductHeroActions status={status} actions={actions} />
        </div>

        <div className="product-hero-media">{children}</div>
      </div>
    </section>
  );
}
