"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "../components/TransitionLink";
import { PageHero } from "../components/PageHero";
import SmartScreenshot from "../components/SmartScreenshot";
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

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pb-24 md:pb-36">
        <div className="border-t border-white/10">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="index-row grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr_auto] gap-8 lg:gap-10 items-center py-10 md:py-12 border-b border-white/[0.07] text-muted"
            >
              <div className="min-w-0">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{product.category}</span>
                <h2 className="mt-4 product-index-title text-foreground font-medium">
                  {product.title}
                </h2>
                <p className="mt-5 leading-[1.75] max-w-xl">{product.description}</p>
                <p className="mt-4 text-sm text-[var(--faint)]">{localPriceBadge(product.id, locale, browserLanguage)}</p>
              </div>

              <SmartScreenshot
                src={product.image}
                alt={product.title}
                width={1200}
                height={760}
                sizes="(max-width: 1024px) 90vw, 520px"
                frameClassName="shadow-none"
                className="object-contain"
              />

              <div className="flex lg:justify-end">
                <span className="product-index-action rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--faint)]">
                  {product.status} <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
