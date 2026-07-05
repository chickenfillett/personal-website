"use client";

import Link from "../../components/TransitionLink";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { commerceLabels } from "@/lib/productCommerce";
import { getSiteCopy } from "@/lib/siteCopy";
import {
  allEnergyFlowImages,
  energyFlowGalleryImagesForLocale,
  energyFlowImages,
  imageLocale,
  microsoftStoreLinks,
} from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

const featureImages = ["quickLog", "themeSwitch", "desktopAlwaysOn", "analytics", "privacy"] as const;

export default function EnergyFlowPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const images = energyFlowImages[imageLocale(locale)];
  const gallery = energyFlowGalleryImagesForLocale(locale);
  const galleryText = copy.energyflow.gallery;
  const flowText = copy.energyflow.flowIntro;
  const legalLabel = commerceLabels(locale).legal;
  const labels = commerceLabels(locale);
  usePreloadImages(allEnergyFlowImages());

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="product-page-grid">
          <div className="animate-fade-in">
            <span className="eyebrow">{copy.energyflow.eyebrow}</span>
            <h1 className="mt-7 text-[clamp(2.7rem,5.2vw,5.15rem)] leading-[1.06] tracking-[-0.045em] font-medium text-warm-gradient">
              {copy.energyflow.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{copy.energyflow.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-muted">{copy.energyflow.status}</span>
              <a href={microsoftStoreLinks.energyflow} target="_blank" rel="noreferrer" className="primary-action rounded-full px-5 py-3 text-sm font-medium hover-lift">{copy.common.microsoftStore}</a>
              <Link href="#product-info" className="secondary-action rounded-full px-5 py-3 text-sm hover-lift">{labels.priceEyebrow}</Link>
            </div>
          </div>

          <SmartScreenshot src={images.quickLog} alt="EnergyFlow quick log" width={1200} height={820} priority sizes="(max-width: 1024px) 92vw, 620px" />
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.common.productPromise}</span>
        <h2 className="mt-7 text-[clamp(2.35rem,4.6vw,4.35rem)] leading-[1.05] tracking-[-0.045em] font-medium max-w-4xl">{copy.energyflow.promiseTitle}</h2>
        <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{copy.energyflow.promise}</p>
      </section>

      <div id="product-info" />
      <ProductPricing product="energyflow" />

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="flex flex-wrap gap-3 border-t border-white/[0.07] pt-8 text-sm">
          <Link href="/products/energyflow/privacy" className="secondary-action rounded-full px-4 py-2.5 hover-lift">{copy.common.privacy}</Link>
          <Link href="/products/energyflow/legal" className="secondary-action rounded-full px-4 py-2.5 hover-lift">{legalLabel}</Link>
          <Link href="/contact" className="secondary-action rounded-full px-4 py-2.5 hover-lift">{copy.common.getUpdates}</Link>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        {copy.energyflow.features.map(([title, body], index) => (
          <div key={title} className="max-w-[1180px] mx-auto px-5 md:px-8 py-16 md:py-24 border-b border-white/[0.07] last:border-b-0">
            <div className={`detail-rail ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="detail-sticky">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">0{index + 1}</span>
                <h2 className="mt-5 text-[clamp(2.15rem,3.9vw,3.9rem)] leading-[1.05] tracking-[-0.045em] font-medium">{title}</h2>
                <p className="mt-6 text-muted leading-[1.85] text-lg">{body}</p>
              </div>
              <SmartScreenshot src={images[featureImages[index]]} alt={title} width={1200} height={820} sizes="(max-width: 1024px) 92vw, 680px" />
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">{copy.common.experienceFlow}</span>
            <h2 className="mt-7 text-[clamp(2rem,3.8vw,3.55rem)] leading-[1.08] tracking-[-0.04em] font-medium max-w-3xl">{flowText.title}</h2>
            <p className="mt-7 text-lg leading-[1.85] text-muted max-w-2xl">{flowText.body}</p>
            <div className="mt-10 rounded-3xl border border-white/[0.08] bg-white/[0.018] p-6 md:p-7">
              <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{flowText.cardTitle}</div>
              <p className="mt-4 text-muted leading-[1.8]">{flowText.cardBody}</p>
            </div>
          </div>

          <div className="border-t border-white/10">
            {copy.energyflow.flow.map((item, index) => (
              <div key={item} className="grid grid-cols-[5rem_1fr] md:grid-cols-[8rem_1fr] gap-6 py-8 md:py-10 border-b border-white/[0.07]">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{copy.common.step} {index + 1}</span>
                <p className="text-2xl md:text-3xl text-foreground/80 leading-[1.25] tracking-[-0.035em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <span className="eyebrow">{galleryText.eyebrow}</span>
          <h2 className="section-title mt-7 text-[clamp(2rem,3.8vw,3.55rem)] leading-[1.08] tracking-[-0.04em] font-medium max-w-4xl">
            {galleryText.title}
          </h2>
          <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{galleryText.body}</p>

          <div className="mt-14 energy-gallery-grid">
            {gallery.map((screenshot, index) => (
              <figure key={screenshot} className="energy-gallery-card">
                <img
                  src={screenshot}
                  alt={`EnergyFlow interface screenshot ${index + 1}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="energy-gallery-image"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
