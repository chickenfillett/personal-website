"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "./components/TransitionLink";
import SmartScreenshot from "./components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { NumberedCardGrid } from "./components/NumberedCardGrid";
import { DisplayHeading } from "./components/Typography";
import { productCatalog, productCatalogPreloadImages, productPreviewSlides } from "@/lib/productCatalog";
import { getSiteCopy } from "@/lib/siteCopy";
import { usePreloadImages } from "@/lib/usePreloadImages";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const smoothStep = (edge0: number, edge1: number, x: number) => {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

export default function Home() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const chapterRefs = useRef<HTMLElement[]>([]);
  const stageRefs = useRef<HTMLElement[]>([]);
  const valuesRef = useRef(new Map<string, number>());
  const [heroIndex, setHeroIndex] = useState(0);

  usePreloadImages(productCatalogPreloadImages(locale));

  const stages = useMemo(() => productCatalog(locale), [locale]);

  const heroItems = useMemo(() => productPreviewSlides(locale), [locale]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroItems.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [heroItems.length]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const viewportCenter = window.innerHeight * 0.52;
      const strengths = chapterRefs.current.map((chapter) => {
        if (!chapter) return 0;
        const rect = chapter.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);
        const range = Math.max(window.innerHeight * 0.6, rect.height * 0.52);
        return smoothStep(0.08, 0.92, 1 - clamp(distance / range, 0, 1));
      });

      const total = strengths.reduce((sum, value) => sum + value, 0) || 1;

      chapterRefs.current.forEach((chapter, index) => {
        if (!chapter) return;
        const key = `chapter-${index}`;
        const previous = valuesRef.current.get(key) ?? strengths[index] ?? 0;
        const next = mix(previous, strengths[index] ?? 0, 0.18);
        valuesRef.current.set(key, next);
        chapter.style.setProperty("--story-strength", next.toFixed(4));
      });

      stageRefs.current.forEach((stage, index) => {
        if (!stage) return;
        const normalized = (strengths[index] ?? 0) / total;
        const key = `stage-${index}`;
        const previous = valuesRef.current.get(key) ?? normalized;
        const next = mix(previous, normalized, 0.2);
        const opacity = clamp(next * 1.35, 0, 1);
        valuesRef.current.set(key, next);
        stage.style.setProperty("--story-opacity", opacity.toFixed(4));
        stage.style.zIndex = String(Math.round(opacity * 1000));
        stage.style.pointerEvents = opacity > 0.55 ? "auto" : "none";
      });

      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 min-h-[calc(100vh-4rem)] grid items-center pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-14 lg:gap-20 items-center">
          <div className="animate-fade-in">
            <span className="eyebrow">{copy.home.eyebrow}</span>
            <DisplayHeading variant="hero" gradient>{copy.home.title}</DisplayHeading>
            <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{copy.home.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#story" className="primary-action rounded-full px-5 py-3 text-sm font-medium hover-lift">{copy.home.primary}</Link>
              <Link href="/products" className="secondary-action rounded-full px-5 py-3 text-sm hover-lift">{copy.home.secondary}</Link>
            </div>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              {copy.home.notes.map(([title, body]) => (
                <div key={title} className="text-sm leading-relaxed text-[var(--faint)]">
                  <strong className="block mb-2 text-muted font-medium">{title}</strong>
                  {body}
                </div>
              ))}
            </div>
          </div>

          <div className="screen-shell surface-depth depth-lift rounded-[2rem] p-4 md:p-5 min-h-[470px] flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs text-[var(--faint)] uppercase tracking-[0.14em] px-1">
              <span>{copy.home.currentProduct}</span>
              <span className="hero-preview-label" key={heroItems[heroIndex]?.title}>{heroItems[heroIndex]?.title}</span>
            </div>
            <div className="hero-preview-stage flex-1 min-h-0">
              {heroItems.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  aria-hidden={index !== heroIndex}
                  tabIndex={index === heroIndex ? 0 : -1}
                  className={`hero-preview-card ${index === heroIndex ? "is-active" : ""}`}
                >
                  <SmartScreenshot
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={820}
                    priority={index === 0}
                    sizes="(max-width: 1024px) 92vw, 560px"
                    frameClassName="shadow-none h-full"
                    className="h-full object-contain"
                  />
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {stages.map((item) => (
                <Link key={item.id} href={item.href} className="surface-depth rounded-2xl border border-white/[0.08] bg-white/[0.018] p-4 hover:bg-white/[0.03] transition-colors">
                  <div className="text-sm text-foreground font-medium">{item.title}</div>
                  <div className="mt-1 text-xs text-muted">{item.category}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="max-w-[1180px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-12 lg:gap-20 py-20 md:py-28">
        <div className="py-4 md:py-12">
          {copy.home.chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              ref={(element) => {
                if (element) chapterRefs.current[index] = element;
              }}
              className="story-chapter min-h-[72vh] flex flex-col justify-center"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{chapter.num}</span>
              <DisplayHeading variant="feature">{chapter.title}</DisplayHeading>
              <p className="mt-6 text-muted leading-[1.85] text-lg max-w-xl">{chapter.body}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {chapter.bullets.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="lg:sticky lg:top-24 h-[620px] grid place-items-center">
          <div className="screen-shell surface-depth depth-lift relative w-full max-w-[640px] h-[560px] rounded-[2.125rem] overflow-hidden">
            <div className="absolute top-7 left-8 text-[0.68rem] uppercase tracking-[0.14em] text-[var(--faint)]">{copy.home.currentProduct}</div>
            {stages.map((stage, index) => (
              <Link
                key={stage.id}
                href={stage.href}
                ref={(element) => {
                  if (element) stageRefs.current[index] = element;
                }}
                className="story-stage-product absolute inset-[4.8rem_2rem_2rem] block"
              >
                <div className="surface-depth h-full rounded-[1.5rem] border border-white/10 bg-[var(--surface)] overflow-hidden">
                  <div className="h-12 border-b border-white/[0.07] flex items-center justify-between px-4 text-xs text-[var(--faint)]">
                    <span className="text-muted">{stage.title}</span>
                    <span>{stage.status}</span>
                  </div>
                  <div className="p-5 h-[calc(100%-3rem)] flex flex-col justify-between gap-5">
                    <SmartScreenshot src={stage.image} alt={stage.title} width={900} height={640} priority={index === 0} sizes="(max-width: 1024px) 90vw, 560px" frameClassName="shadow-none flex-1" className="h-full object-contain" />
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <h3 className="text-2xl tracking-[-0.05em] text-foreground font-medium">{stage.title}</h3>
                        <p className="mt-1 text-sm text-muted">{stage.category}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[var(--faint)]">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.common.operatingPrinciples}</span>
        <DisplayHeading variant="section">{copy.home.principlesTitle}</DisplayHeading>
        <p className="mt-7 text-lg leading-[1.8] text-muted max-w-2xl">{copy.home.principlesBody}</p>
        <NumberedCardGrid items={copy.home.notes} />
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.common.productIndex}</span>
        <DisplayHeading variant="section">{copy.home.productTitle}</DisplayHeading>
        <div className="mt-14 border-t border-white/10">
          {stages.map((stage) => (
            <Link key={stage.id} href={stage.href} className="index-row grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_0.7fr_3rem] gap-4 md:gap-8 items-center py-8 border-b border-white/[0.07] text-muted">
              <strong className="text-2xl md:text-3xl tracking-[-0.06em] text-foreground font-medium">{stage.title}</strong>
              <span className="leading-relaxed">{stage.description}</span>
              <span className="text-sm text-[var(--faint)]">{stage.status}</span>
              <span className="w-10 h-10 rounded-full border border-white/10 grid place-items-center text-[var(--faint)]">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="eyebrow">{copy.footer.studio}</span>
            <DisplayHeading variant="section">{copy.home.studioTitle}</DisplayHeading>
            <p className="mt-7 text-lg leading-[1.8] text-muted">{copy.home.studioBody}</p>
          </div>
          <div className="card-premium surface-depth rounded-[1.75rem] p-8 md:p-10 self-start">
            <p className="text-muted leading-[1.8]">{copy.home.studioNote}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="primary-action rounded-full px-5 py-3 text-sm font-medium hover-lift">{copy.common.viewProducts}</Link>
              <Link href="/contact" className="secondary-action rounded-full px-5 py-3 text-sm hover-lift">{copy.common.contact}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
