"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProductId } from "@/lib/productCommerce";
import { commerceLabels, productPricing } from "@/lib/productCommerce";
import { detectedBrowserLanguage, selectLocalProductPrice } from "@/lib/localPricing";
import { useLanguage } from "@/lib/i18n/context";
import { DisplayHeading } from "./Typography";

export default function ProductPricing({ product }: { product: ProductId }) {
  const { locale } = useLanguage();
  const [browserLanguage, setBrowserLanguage] = useState<string>(() => detectedBrowserLanguage(locale));
  const labels = commerceLabels(locale);
  const pricing = productPricing(product, locale);
  const isFree = pricing.prices.length > 0 && pricing.prices.every((item) => item.current === labels.free);

  useEffect(() => {
    setBrowserLanguage(detectedBrowserLanguage(locale));
  }, [locale]);

  const localPrice = useMemo(
    () => selectLocalProductPrice(product, locale, browserLanguage),
    [browserLanguage, locale, product],
  );

  return (
    <section className="product-pricing-section">
      <span className="eyebrow">{pricing.eyebrow}</span>
      <div className="product-pricing-grid">
        <div className="product-pricing-copy">
          <DisplayHeading variant="section" className="mt-0">{pricing.title}</DisplayHeading>
          <p className="mt-6 text-lg leading-[1.85] text-muted">{pricing.summary}</p>
        </div>

        <div className="product-pricing-panel border border-white/[0.08] bg-white/[0.018]">
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-white/[0.07]">
            <div className="p-5 border-b sm:border-b-0 sm:border-r border-white/[0.07]">
              <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{isFree ? labels.free : labels.trial}</div>
              <p className="mt-3 text-sm leading-[1.75] text-muted">{pricing.trial}</p>
            </div>
            <div className="p-5">
              <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{labels.availability}</div>
              <p className="mt-3 text-sm leading-[1.75] text-muted">{pricing.availability}</p>
            </div>
          </div>

          <div className="p-5 border-b border-white/[0.07]">
            <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">
              {localPrice?.market ?? labels.currentRegion}
            </div>
            <div className="mt-4">
              <div className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--faint)]">{labels.current}</div>
              <div className="mt-2 text-2xl text-foreground tracking-[-0.035em]">{localPrice?.current}</div>
              {localPrice?.scheduled ? <div className="mt-2 text-sm text-muted">{labels.scheduled}: {localPrice.scheduled}</div> : null}
            </div>
          </div>

          <div className="p-5">
            <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{labels.note}</div>
            <p className="mt-3 text-sm leading-[1.75] text-muted">{pricing.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
