"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";

const CAROUSEL_INTERVAL = 6000;

const energyflowImages = {
  zh: "/photo/energyflow-zh-1.png",
  en: "/photo/energyflow-en-2.png",
};

export default function Home() {
  const { locale, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const products = [
    {
      href: "/products/energyflow",
      image: energyflowImages[locale],
      label: t("home.featuredEnergyflow.label"),
      name: t("home.featuredEnergyflow.name"),
      description: t("home.featuredEnergyflow.description"),
      tags: [
        t("home.featuredEnergyflow.tags.quick"),
        t("home.featuredEnergyflow.tags.analysis"),
        t("home.featuredEnergyflow.tags.privacy"),
        t("home.featuredEnergyflow.tags.desktop"),
      ],
      cta: t("home.featuredEnergyflow.cta"),
    },
    {
      href: "/products/adhd-focus-timer",
      image: "/photo/捕获3.PNG",
      label: t("home.featured.label"),
      name: t("home.featured.name"),
      description: t("home.featured.description"),
      tags: [
        t("home.featured.tags.zero"),
        t("home.featured.tags.forward"),
        t("home.featured.tags.particles"),
        t("home.featured.tags.local"),
      ],
      cta: t("home.featured.cta"),
    },
  ];

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % products.length);
  }, [activeIndex, products.length, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + products.length) % products.length);
  }, [activeIndex, products.length, goTo]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, CAROUSEL_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }, [next, prev]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  const current = products[activeIndex];
  const efImage = energyflowImages[locale];

  return (
    <div className="flex flex-col">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-48 md:pb-20 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-gradient-hero">
          {t("home.hero.title")}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-[1.75]">
          {t("home.hero.subtitle")}
        </p>
      </section>

      <section className="bg-white/[0.02] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <div
            ref={containerRef}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={`flex-1 text-center md:text-left transition-all duration-500 ease-out ${
                isAnimating
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <span className="text-xs font-medium text-muted uppercase tracking-wider">
                {current.label}
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-medium text-foreground">
                {current.name}
              </h2>
              <p className="mt-4 text-muted leading-[1.75]">
                {current.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-xs text-muted">
                {current.tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-x-3">
                    <span>{tag}</span>
                    {i < current.tags.length - 1 && <span>·</span>}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-6">
                <a
                  href={current.href}
                  className="text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background hover-lift transition-colors duration-200"
                >
                  {current.cta}
                </a>
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                    aria-label="Previous"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-2">
                    {products.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? "bg-foreground w-6"
                            : "bg-white/20 hover:bg-white/40 w-2"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                    aria-label="Next"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`hidden md:block flex-shrink-0 w-[500px] transition-all duration-500 ease-out ${
                isAnimating
                  ? "opacity-0 -translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div className="screenshot-container">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={800}
                  height={600}
                  className="screenshot-img"
                  priority={activeIndex === 0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
                {t("home.philosophy.title")}
              </h2>
              <p className="mt-8 text-2xl md:text-3xl font-medium text-foreground leading-snug">
                {t("home.philosophy.intro")}
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-foreground font-medium">{t("home.philosophy.items.minimal.title")}</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  {t("home.philosophy.items.minimal.description")}
                </p>
              </div>
              <div>
                <h3 className="text-foreground font-medium">{t("home.philosophy.items.immersive.title")}</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  {t("home.philosophy.items.immersive.description")}
                </p>
              </div>
              <div>
                <h3 className="text-foreground font-medium">{t("home.philosophy.items.practical.title")}</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  {t("home.philosophy.items.practical.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-36">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
            {t("home.products.title")}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/products"
              className="p-6 card-premium group hover-lift flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-foreground font-medium group-hover:text-muted transition-colors duration-200">
                {t("home.products.viewAll")}
              </h3>
              <span className="mt-3 inline-block text-xs text-muted border border-white/10 px-3 py-1">
                {t("home.products.browse")}
              </span>
            </a>
            <a
              href="/products/energyflow"
              className="p-6 card-premium group hover-lift"
            >
              <div className="flex-shrink-0 mb-4">
                <div className="screenshot-container">
                  <Image
                    src={efImage}
                    alt="EnergyFlow"
                    width={400}
                    height={300}
                    className="screenshot-img"
                  />
                </div>
              </div>
              <h3 className="text-foreground font-medium group-hover:text-muted transition-colors duration-200">
                {t("products.energyflow.title")}
              </h3>
              <p className="mt-3 text-muted text-sm leading-[1.75]">
                {t("products.energyflow.description")}
              </p>
              <span className="mt-4 inline-block text-xs text-muted border border-white/10 px-3 py-1">
                {t("products.energyflow.details")}
              </span>
            </a>
            <div className="p-6 card-premium">
              <h3 className="text-foreground font-medium">{t("home.products.product3.title")}</h3>
              <p className="mt-3 text-muted text-sm leading-[1.75]">
                {t("home.products.product3.description")}
              </p>
              <span className="mt-6 inline-block text-xs text-muted border border-white/10 px-3 py-1">
                {t("home.products.comingSoon")}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <a
              href="/products/adhd-focus-timer/privacy"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {t("home.policyLinks.privacy")}
            </a>
            <a
              href="/products/adhd-focus-timer/refund"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {t("home.policyLinks.refund")}
            </a>
            <a
              href="/products/adhd-focus-timer/payment"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {t("home.policyLinks.payment")}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-36 text-center">
          <p className="text-2xl md:text-3xl font-medium text-foreground leading-snug">
            {t("home.cta.title")}
          </p>
          <p className="mt-4 text-muted">
            {t("home.cta.description")}
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background hover-lift transition-colors duration-200"
          >
            {t("home.cta.button")}
          </a>
        </div>
      </section>
    </div>
  );
}
