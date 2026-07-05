"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "../components/TransitionLink";
import { PageHero } from "../components/PageHero";
import SmartScreenshot from "../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";
import type { ProductId } from "@/lib/productCommerce";
import { productPricing } from "@/lib/productCommerce";
import { detectedBrowserLanguage, selectLocalPrice } from "@/lib/localPricing";
import {
  adhdImagesForLocale,
  allAdhdImages,
  allDeskHavenImages,
  allEnergyFlowImages,
  deskHavenImagesForLocale,
  energyFlowImages,
  imageLocale,
} from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

function localPriceBadge(product: ProductId, locale: Locale, browserLanguage: string) {
  const pricing = productPricing(product, locale);
  const localPrice = selectLocalPrice(pricing.prices, locale, browserLanguage);
  return localPrice?.current ?? "";
}

export default function Products() {
  const { locale } = useLanguage();
  const [browserLanguage, setBrowserLanguage] = useState<string>(() => detectedBrowserLanguage(locale));
  const copy = getSiteCopy(locale);
  const assetLocale = imageLocale(locale);
  const deskHavenAssets = deskHavenImagesForLocale(locale);
  const adhdAssets = adhdImagesForLocale(locale);
  usePreloadImages([...allEnergyFlowImages(), ...allAdhdImages(locale), ...allDeskHavenImages(locale)]);

  useEffect(() => {
    setBrowserLanguage(detectedBrowserLanguage(locale));
  }, [locale]);

  const products = useMemo(() => [
    {
      id: "energyflow" as const,
      ...copy.productCards.energyflow,
      href: "/products/energyflow",
      image: energyFlowImages[assetLocale].quickLog,
    },
    {
      id: "deskhaven" as const,
      ...copy.productCards.deskhaven,
      href: "/products/deskhaven",
      image: deskHavenAssets.hero,
    },
    {
      id: "adhd" as const,
      ...copy.productCards.adhd,
      href: "/products/adhd-focus-timer",
      image: adhdAssets.hero,
    },
  ], [adhdAssets.hero, assetLocale, copy.productCards.adhd, copy.productCards.deskhaven, copy.productCards.energyflow, deskHavenAssets.hero]);

  return (
    <div className="flex flex-col">
      <PageHero eyebrow={copy.products.eyebrow} title={copy.products.title} intro={copy.products.intro} wide animated />

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pb-24 md:pb-36">
        <div className="border-t border-white/10">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="index-row grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr_0.55fr] gap-8 items-center py-10 md:py-12 border-b border-white/[0.07] text-muted"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{product.category}</span>
                <h2 className="mt-4 text-3xl md:text-5xl tracking-[-0.055em] leading-[1.05] text-foreground font-medium">
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
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--faint)]">
                  {product.status} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
