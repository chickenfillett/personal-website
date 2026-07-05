import type { ReactNode } from "react";
import { ProductHeroActions, type ProductAction } from "./ProductActions";

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
          <h1 className="hero-title mt-7 text-[clamp(2.45rem,5.4vw,5.2rem)] leading-[1.05] tracking-[-0.04em] font-medium text-warm-gradient">
            {title}
          </h1>
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
      <h2 className="section-title mt-7 text-[clamp(2.35rem,4.6vw,4.35rem)] leading-[1.05] tracking-[-0.045em] font-medium max-w-4xl">{title}</h2>
      <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{body}</p>
    </section>
  );
}
