"use client";

import Link from "../components/TransitionLink";
import SmartScreenshot from "../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";
import type { ProductId } from "@/lib/productCommerce";
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

function priceBadge(product: ProductId, locale: string) {
  const badges = {
    zh: { adhd: "免费", energyflow: "USD $9.99 / ¥45 · 7 天试用", deskhaven: "USD $8.99 起 / ¥59 · 15 天试用" },
    "zh-tw": { adhd: "免費", energyflow: "USD $9.99 / ¥45 · 7 天試用", deskhaven: "USD $8.99 起 / ¥59 · 15 天試用" },
    en: { adhd: "Free", energyflow: "USD $9.99 / CNY ¥45 · 7-day trial", deskhaven: "From USD $8.99 / CNY ¥59 · 15-day trial" },
    ja: { adhd: "無料", energyflow: "USD $9.99 / CNY ¥45 · 7 日間試用", deskhaven: "USD $8.99 から / CNY ¥59 · 15 日間試用" },
    ko: { adhd: "무료", energyflow: "USD $9.99 / CNY ¥45 · 7일 체험", deskhaven: "USD $8.99부터 / CNY ¥59 · 15일 체험" },
    fr: { adhd: "Gratuit", energyflow: "USD $9.99 / CNY ¥45 · essai 7 jours", deskhaven: "Dès USD $8.99 / CNY ¥59 · essai 15 jours" },
    de: { adhd: "Kostenlos", energyflow: "USD $9.99 / CNY ¥45 · 7 Tage Test", deskhaven: "Ab USD $8.99 / CNY ¥59 · 15 Tage Test" },
    es: { adhd: "Gratis", energyflow: "USD $9.99 / CNY ¥45 · prueba 7 días", deskhaven: "Desde USD $8.99 / CNY ¥59 · prueba 15 días" },
    ru: { adhd: "Бесплатно", energyflow: "USD $9.99 / CNY ¥45 · 7 дней пробно", deskhaven: "От USD $8.99 / CNY ¥59 · 15 дней пробно" },
    pt: { adhd: "Grátis", energyflow: "USD $9.99 / CNY ¥45 · teste 7 dias", deskhaven: "A partir de USD $8.99 / CNY ¥59 · teste 15 dias" },
  } as const;

  const copy = badges[locale as keyof typeof badges] ?? badges.en;
  return copy[product];
}

export default function Products() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const assetLocale = imageLocale(locale);
  const deskHavenAssets = deskHavenImagesForLocale(locale);
  usePreloadImages([...allEnergyFlowImages(), ...allAdhdImages(), ...allDeskHavenImages(locale)]);

  const products = [
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
                <p className="mt-4 text-sm text-[var(--faint)]">{priceBadge(product.id, locale)}</p>
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
