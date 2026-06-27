"use client";

import Link from "../../components/TransitionLink";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";
import { allEnergyFlowImages, energyFlowImages, imageLocale, microsoftStoreLinks } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

const featureImages = ["quickLog", "themeSwitch", "desktopAlwaysOn", "analytics", "privacy"] as const;

export default function EnergyFlowPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const images = energyFlowImages[imageLocale(locale)];
  const legalLabel = locale === "zh" || locale === "zh-tw" ? "法律条款" : "Legal";
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
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-muted">{copy.energyflow.status}</span>
              <a href={microsoftStoreLinks.energyflow} target="_blank" rel="noreferrer" className="rounded-full bg-[#e6dccd] text-[#171410] px-5 py-3 text-sm font-medium hover-lift">{copy.common.microsoftStore}</a>
              <Link href="/contact" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.common.getUpdates}</Link>
              <Link href="/products/energyflow/privacy" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.common.privacy}</Link>
              <Link href="/products/energyflow/legal" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{legalLabel}</Link>
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

      <ProductPricing product="energyflow" />

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
        <span className="eyebrow">{copy.common.experienceFlow}</span>
        <div className="mt-12 border-t border-white/10">
          {copy.energyflow.flow.map((item, index) => (
            <div key={item} className="grid grid-cols-[5rem_1fr] md:grid-cols-[8rem_1fr] gap-6 py-7 border-b border-white/[0.07]">
              <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{copy.common.step} {index + 1}</span>
              <p className="text-lg md:text-xl text-muted leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
