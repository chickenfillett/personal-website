"use client";

import Link from "../../components/TransitionLink";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";
import { adhdImages, allAdhdImages, microsoftStoreLinks } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

const featureImages = [
  adhdImages.intro,
  adhdImages.prep,
  adhdImages.breathing,
  adhdImages.focus,
  adhdImages.ideaFridge,
  adhdImages.achievement,
  adhdImages.privacy,
] as const;

export default function ADHDFocusTimerPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const legalLabel = locale === "zh" || locale === "zh-tw" ? "法律条款" : "Legal";
  usePreloadImages(allAdhdImages());

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
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-muted">{copy.adhd.status}</span>
              <a href={microsoftStoreLinks.adhd} target="_blank" rel="noreferrer" className="rounded-full bg-[#e6dccd] text-[#171410] px-5 py-3 text-sm font-medium hover-lift">{copy.common.microsoftStore}</a>
              <Link href="/contact" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.common.getUpdates}</Link>
              <Link href="/products/adhd-focus-timer/privacy" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.common.privacy}</Link>
              <Link href="/products/adhd-focus-timer/legal" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{legalLabel}</Link>
            </div>
          </div>

          <SmartScreenshot
            src={adhdImages.focus}
            alt="ADHD Focus Timer focus session"
            width={1200}
            height={820}
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

      <ProductPricing product="adhd" />

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
                height={820}
                sizes="(max-width: 1024px) 92vw, 680px"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
