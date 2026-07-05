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
    <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
      <div className="product-page-grid">
        <div className="animate-fade-in">
          <span className="eyebrow">{eyebrow}</span>
          <DisplayHeading variant="hero" gradient>{title}</DisplayHeading>
          <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{intro}</p>
          <ProductHeroActions status={status} actions={actions} />
        </div>

        {children}
      </div>
    </section>
  );
}

export function ProductPromise({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
      <span className="eyebrow">{eyebrow}</span>
      <DisplayHeading variant="section">{title}</DisplayHeading>
      <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{body}</p>
    </section>
  );
}
