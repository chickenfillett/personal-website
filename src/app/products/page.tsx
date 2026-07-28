"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "../components/TransitionLink";
import { PageHero } from "../components/PageHero";
import SmartScreenshot from "../components/SmartScreenshot";
import { MediaSurface } from "../components/layout/MediaSurface";
import { SectionShell } from "../components/layout/SectionShell";
import { SplitSection } from "../components/layout/SplitSection";
import { InlineMeta } from "../components/layout/InlineMeta";
import { useLanguage } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import type { ProductId } from "@/domain/products";
import { detectedBrowserLanguage, selectLocalProductPrice } from "@/lib/localPricing";
import { productCatalog, productCatalogPreloadImages } from "@/lib/productCatalog";
import { usePreloadImages } from "@/lib/usePreloadImages";

function localPriceBadge(product: ProductId, locale: Locale, browserLanguage: string) {
  const localPrice = selectLocalProductPrice(product, locale, browserLanguage);
  return localPrice?.current ?? "";
}

export default function Products() {
  const { locale } = useLanguage();
  const [browserLanguage, setBrowserLanguage] = useState<string>(() => detectedBrowserLanguage(locale));
  const copy = getSiteCopy(locale);
  usePreloadImages(productCatalogPreloadImages(locale));

  useEffect(() => {
    setBrowserLanguage(detectedBrowserLanguage(locale));
  }, [locale]);

  const products = useMemo(() => productCatalog(locale), [locale]);

  return (
    <div className="flex flex-col">
      <PageHero eyebrow={copy.products.eyebrow} title={copy.products.title} intro={copy.products.intro} wide animated />

      <SectionShell size="small" bordered className="products-index">
        <div className="products-index-list">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="products-index-row"
            >
              <SplitSection
                align="center"
                content={
                  <div className="products-index-copy">
                    <span className="eyebrow">{product.category}</span>
                    <h2 className="product-index-title">{product.title}</h2>
                    <p>{product.description}</p>
                    <InlineMeta items={[
                      localPriceBadge(product.id, locale, browserLanguage),
                      product.status,
                    ]} />
                    <span className="products-index-action" aria-hidden="true">→</span>
                  </div>
                }
                media={
                  <MediaSurface size="feature">
                    <SmartScreenshot
                      src={product.image}
                      alt={product.title}
                      width={1200}
                      height={760}
                      sizes="(max-width: 1024px) 90vw, 680px"
                      className="object-contain"
                    />
                  </MediaSurface>
                }
              />
            </Link>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
