"use client";

import Link from "../components/TransitionLink";
import SmartScreenshot from "../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";
import {
  adhdImages,
  allAdhdImages,
  allDeskHavenImages,
  allEnergyFlowImages,
  deskHavenImagesForLocale,
  energyFlowImages,
  imageLocale,
} from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function Products() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const assetLocale = imageLocale(locale);
  const deskHavenAssets = deskHavenImagesForLocale(locale);
  usePreloadImages([...allEnergyFlowImages(), ...allAdhdImages(), ...allDeskHavenImages(locale)]);

  const products = [
    {
      ...copy.productCards.energyflow,
      href: "/products/energyflow",
      image: energyFlowImages[assetLocale].quickLog,
    },
    {
      ...copy.productCards.deskhaven,
      href: "/products/deskhaven",
      image: deskHavenAssets.hero,
    },
    {
      ...copy.productCards.adhd,
      href: "/products/adhd-focus-timer",
      image: adhdImages.focus,
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24 animate-fade-in">
        <span className="eyebrow">{copy.products.eyebrow}</span>
        <h1 className="section-title mt-7 text-[clamp(2.35rem,4.5vw,4.55rem)] leading-[1.08] tracking-[-0.04em] font-medium text-warm-gradient max-w-4xl">
          {copy.products.title}
        </h1>
        <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-3xl">
          {copy.products.intro}
        </p>
      </section>

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
