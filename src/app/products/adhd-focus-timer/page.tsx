"use client";

import Image from "next/image";
import Link from "../../components/TransitionLink";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { commerceLabels } from "@/lib/productCommerce";
import { getSiteCopy } from "@/lib/siteCopy";
import { adhdImagesForLocale, allAdhdImages, microsoftStoreLinks } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function ADHDFocusTimerPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const adhdAssets = adhdImagesForLocale(locale);
  const legalLabel = commerceLabels(locale).legal;
  const labels = commerceLabels(locale);
  usePreloadImages(allAdhdImages(locale));
  const galleryItems = copy.adhd.galleryItems as readonly (readonly [string, string])[];

  const featureImages = [
    adhdAssets.setup,
    adhdAssets.soundscape,
    adhdAssets.soundscape,
    adhdAssets.breathing,
    adhdAssets.focus,
    adhdAssets.ideaFridge,
    adhdAssets.stats,
  ] as const;

  const galleryCards = [
    { image: adhdAssets.screenshots[0], copy: galleryItems[0] },
    { image: adhdAssets.screenshots[1], copy: galleryItems[2] },
    { image: adhdAssets.screenshots[2], copy: galleryItems[3] },
    { image: adhdAssets.screenshots[3], copy: galleryItems[6] },
    { image: adhdAssets.screenshots[4], copy: galleryItems[4] },
    { image: adhdAssets.screenshots[5], copy: galleryItems[5] },
    { image: adhdAssets.screenshots[6], copy: galleryItems[7] },
  ].filter((item): item is { image: string; copy: readonly [string, string] } => Boolean(item.image && item.copy));

  const heroTitleClass = locale === "zh"
    ? "mt-7 text-[clamp(2.55rem,5vw,5rem)] leading-[1.08] tracking-[-0.04em] font-medium text-warm-gradient"
    : "mt-7 text-[clamp(3rem,7vw,6rem)] leading-[0.96] tracking-[-0.07em] font-medium text-warm-gradient";

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="product-page-grid">
          <div className="animate-fade-in">
            <span className="eyebrow">{copy.adhd.eyebrow}</span>
            <h1 className={heroTitleClass}>{copy.adhd.title}</h1>
            <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{copy.adhd.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-muted">{copy.adhd.status}</span>
              <a href={microsoftStoreLinks.adhd} target="_blank" rel="noreferrer" className="primary-action rounded-full px-5 py-3 text-sm font-medium hover-lift">{copy.common.microsoftStore}</a>
              <Link href="#product-info" className="secondary-action rounded-full px-5 py-3 text-sm hover-lift">{labels.priceEyebrow}</Link>
            </div>
          </div>

          <SmartScreenshot
            src={adhdAssets.hero}
            alt="ADHD Focus Timer focus session"
            width={1200}
            height={675}
            priority
            sizes="(max-width: 1024px) 92vw, 620px"
          />
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.common.productPromise}</span>
        <h2 className="mt-7 text-[clamp(2.35rem,4.7vw,4.55rem)] leading-[1.04] tracking-[-0.05em] font-medium max-w-4xl">{copy.adhd.promiseTitle}</h2>
        <p className="mt-7 text-lg leading-[1.8] text-muted max-w-3xl">{copy.adhd.promise}</p>
      </section>

      <div id="product-info" />
      <ProductPricing product="adhd" />

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="flex flex-wrap gap-3 border-t border-white/[0.07] pt-8 text-sm">
          <Link href="/products/adhd-focus-timer/privacy" className="secondary-action rounded-full px-4 py-2.5 hover-lift">{copy.common.privacy}</Link>
          <Link href="/products/adhd-focus-timer/legal" className="secondary-action rounded-full px-4 py-2.5 hover-lift">{legalLabel}</Link>
          <Link href="/contact" className="secondary-action rounded-full px-4 py-2.5 hover-lift">{copy.common.getUpdates}</Link>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        {copy.adhd.features.map(([title, body], index) => (
          <div key={title} className="max-w-[1180px] mx-auto px-5 md:px-8 py-16 md:py-24 border-b border-white/[0.07] last:border-b-0">
            <div className={`detail-rail ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="detail-sticky">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">0{index + 1}</span>
                <h2 className="mt-5 text-[clamp(2.15rem,3.9vw,3.9rem)] leading-[1.05] tracking-[-0.045em] font-medium">{title}</h2>
                <p className="mt-6 text-muted leading-[1.8] text-lg">{body}</p>
              </div>
              <SmartScreenshot
                src={featureImages[index]}
                alt={title}
                width={1200}
                height={675}
                sizes="(max-width: 1024px) 92vw, 680px"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.adhd.galleryEyebrow}</span>
        <h2 className="mt-7 text-[clamp(2.15rem,4vw,3.8rem)] leading-[1.08] tracking-[-0.04em] font-medium max-w-4xl">
          {copy.adhd.galleryTitle}
        </h2>
        <p className="mt-6 text-lg leading-[1.8] text-muted max-w-3xl">{copy.adhd.galleryIntro}</p>

        <div className="adhd-gallery-grid mt-14">
          {galleryCards.map(({ image, copy: [title, body] }, index) => (
            <figure key={`${image}-${title}`} className="adhd-gallery-card">
              <Image
                src={image}
                alt={title}
                width={1180}
                height={664}
                sizes="(max-width: 720px) 92vw, (max-width: 1100px) 44vw, 340px"
                className="adhd-gallery-image"
              />
              <figcaption className="adhd-gallery-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
