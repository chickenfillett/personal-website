"use client";

import type { ProductId } from "@/lib/productCommerce";
import { commerceLabels, productPricing } from "@/lib/productCommerce";
import { useLanguage } from "@/lib/i18n/context";

export default function ProductPricing({ product }: { product: ProductId }) {
  const { locale } = useLanguage();
  const labels = commerceLabels(locale);
  const pricing = productPricing(product, locale);

  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28 border-t border-white/[0.07]">
      <span className="eyebrow">{pricing.eyebrow}</span>
      <div className="mt-7 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
        <div>
          <h2 className="text-[clamp(2rem,3.8vw,3.55rem)] leading-[1.08] tracking-[-0.04em] font-medium max-w-3xl">
            {pricing.title}
          </h2>
          <p className="mt-6 text-lg leading-[1.85] text-muted">{pricing.summary}</p>
        </div>

        <div className="border border-white/[0.08] bg-white/[0.018]">
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-white/[0.07]">
            <div className="p-5 border-b sm:border-b-0 sm:border-r border-white/[0.07]">
              <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{labels.trial}</div>
              <p className="mt-3 text-sm leading-[1.75] text-muted">{pricing.trial}</p>
            </div>
            <div className="p-5">
              <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{labels.availability}</div>
              <p className="mt-3 text-sm leading-[1.75] text-muted">{pricing.availability}</p>
            </div>
          </div>

          <div className="divide-y divide-white/[0.07]">
            {pricing.prices.map((item) => (
              <div key={`${item.market}-${item.current}`} className="grid grid-cols-1 sm:grid-cols-[1fr_0.75fr_1fr] gap-3 p-5">
                <div className="text-sm text-foreground">{item.market}</div>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--faint)]">{labels.current}</div>
                  <div className="mt-1 text-sm text-muted">{item.current}</div>
                </div>
                <div>
                  {item.scheduled ? (
                    <>
                      <div className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--faint)]">{labels.scheduled}</div>
                      <div className="mt-1 text-sm text-muted">{item.scheduled}</div>
                    </>
                  ) : (
                    <div className="text-sm text-[var(--faint)]">-</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 border-t border-white/[0.07]">
            <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{labels.note}</div>
            <p className="mt-3 text-sm leading-[1.75] text-muted">{pricing.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
