"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProductId } from "@/domain/products";
import { commerceLabels, productPricing } from "@/lib/productCommerce";
import { detectedBrowserLanguage, selectLocalProductPrice } from "@/lib/localPricing";
import { useLanguage } from "@/lib/i18n/context";
import { DisplayHeading } from "./Typography";
import { ContentRow } from "./layout/ContentRow";
import { SectionShell } from "./layout/SectionShell";
import { EditorialGrid } from "./layout/EditorialGrid";

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
    <SectionShell size="medium" bordered className="product-pricing-section">
      <EditorialGrid className="product-pricing-grid">
        <div className="product-pricing-copy">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <DisplayHeading variant="section" className="mt-0">{pricing.title}</DisplayHeading>
          <p className="mt-6 text-lg leading-[1.85] text-muted">{pricing.summary}</p>
        </div>

        <div className="product-pricing-rows">
          <ContentRow
            index="01"
            title={isFree ? labels.free : labels.trial}
            description={pricing.trial}
          />
          <ContentRow index="02" title={labels.availability} description={pricing.availability} />
          <ContentRow
            index="03"
            title={localPrice?.market ?? labels.currentRegion}
            description={[
              `${labels.current}: ${localPrice?.current ?? ""}`,
              localPrice?.scheduled ? `${labels.scheduled}: ${localPrice.scheduled}` : "",
            ].filter(Boolean).join(" · ")}
          />
          <ContentRow index="04" title={labels.note} description={pricing.note} />
        </div>
      </EditorialGrid>
    </SectionShell>
  );
}
