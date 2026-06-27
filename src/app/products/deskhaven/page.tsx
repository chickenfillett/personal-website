"use client";

import Link from "next/link";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";
import { allDeskHavenImages, deskHavenImages } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

const featureImages = [
  deskHavenImages.dashboard,
  deskHavenImages.vault,
  deskHavenImages.graph,
  deskHavenImages.privacy,
  deskHavenImages.settings,
] as const;

export default function DeskHavenPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  usePreloadImages(allDeskHavenImages());

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="product-page-grid">
          <div className="animate-fade-in">
            <span className="eyebrow">{copy.deskhaven.eyebrow}</span>
            <h1 className="mt-7 text-[clamp(2.7rem,5.2vw,5.1rem)] leading-[1.06] tracking-[-0.045em] font-medium text-warm-gradient">
              {copy.deskhaven.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{copy.deskhaven.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-muted">{copy.deskhaven.status}</span>
              <Link href="/contact" className="rounded-full bg-[#e6dccd] text-[#171410] px-5 py-3 text-sm font-medium hover-lift">{copy.common.getUpdates}</Link>
              <Link href="/products" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.common.backToProducts}</Link>
            </div>
          </div>

          <SmartScreenshot
            src={deskHavenImages.hero}
            alt="DeskHaven dashboard"
            width={1280}
            height={720}
            priority
            sizes="(max-width: 1024px) 92vw, 620px"
          />
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.common.productPromise}</span>
        <h2 className="mt-7 text-[clamp(2.35rem,4.6vw,4.35rem)] leading-[1.05] tracking-[-0.045em] font-medium max-w-4xl">{copy.deskhaven.promiseTitle}</h2>
        <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{copy.deskhaven.promise}</p>
      </section>

      <section className="border-t border-white/[0.07]">
        {copy.deskhaven.features.map(([title, body], index) => (
          <div key={title} className="max-w-[1180px] mx-auto px-5 md:px-8 py-16 md:py-24 border-b border-white/[0.07] last:border-b-0">
            <div className={`detail-rail ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="detail-sticky">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">0{index + 1}</span>
                <h2 className="mt-5 text-[clamp(2.15rem,3.9vw,3.9rem)] leading-[1.05] tracking-[-0.045em] font-medium">{title}</h2>
                <p className="mt-6 text-muted leading-[1.85] text-lg">{body}</p>
              </div>
              <SmartScreenshot
                src={featureImages[index]}
                alt={title}
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 92vw, 680px"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.common.designPrinciples}</span>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 border-t border-l border-white/[0.07]">
          {copy.deskhaven.principles.map(([title, body], index) => (
            <div key={title} className="min-h-[240px] p-6 border-r border-b border-white/[0.07] bg-white/[0.012]">
              <span className="text-xs text-[var(--faint)] tracking-[0.14em]">0{index + 1}</span>
              <h3 className="mt-16 text-xl tracking-[-0.045em] font-medium">{title}</h3>
              <p className="mt-4 text-sm leading-[1.7] text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
