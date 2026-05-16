"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";

export default function Home() {
  const { locale, t } = useLanguage();

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
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-medium text-muted uppercase tracking-wider">
                {t("home.featured.label")}
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-medium text-foreground">
                {t("home.featured.name")}
              </h2>
              <p className="mt-4 text-muted leading-[1.75]">
                {t("home.featured.description")}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-xs text-muted">
                <span>{t("home.featured.tags.zero")}</span>
                <span>·</span>
                <span>{t("home.featured.tags.forward")}</span>
                <span>·</span>
                <span>{t("home.featured.tags.particles")}</span>
                <span>·</span>
                <span>{t("home.featured.tags.local")}</span>
              </div>
              <Link
                href="/products/adhd-focus-timer"
                className="mt-8 inline-block text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background hover-lift transition-colors duration-200"
              >
                {t("home.featured.cta")}
              </Link>
            </div>
            <div className="hidden md:block flex-shrink-0 w-[500px]">
              <div className="screenshot-container">
                <Image
                  src="/photo/捕获3.PNG"
                  alt={t("home.featured.name")}
                  width={800}
                  height={600}
                  className="screenshot-img"
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
            <Link
              href="/products"
              className="p-6 card-premium group hover-lift flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-foreground font-medium group-hover:text-muted transition-colors duration-200">
                {t("home.products.viewAll")}
              </h3>
              <span className="mt-3 inline-block text-xs text-muted border border-white/10 px-3 py-1">
                {t("home.products.browse")}
              </span>
            </Link>
            <Link
              href="/products/energyflow"
              className="p-6 card-premium group hover-lift"
            >
              <div className="flex-shrink-0 mb-4">
                <div className="screenshot-container">
                  <Image
                    src={locale === "zh" ? "/photo/energyflow-zh-1.png" : "/photo/energyflow-en-1.png"}
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
            </Link>
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
            <Link
              href="/products/adhd-focus-timer/privacy"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {t("home.policyLinks.privacy")}
            </Link>
            <Link
              href="/products/adhd-focus-timer/refund"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {t("home.policyLinks.refund")}
            </Link>
            <Link
              href="/products/adhd-focus-timer/payment"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {t("home.policyLinks.payment")}
            </Link>
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
          <Link
            href="/contact"
            className="mt-8 inline-block text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background hover-lift transition-colors duration-200"
          >
            {t("home.cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
}
