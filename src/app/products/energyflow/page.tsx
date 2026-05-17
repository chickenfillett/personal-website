"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

const imageMap = {
  zh: {
    quickLog: "/photo/energyflow-zh-1.png",
    themeSwitch: "/photo/energyflow-zh-2.png",
    desktopAlwaysOn: "/photo/energyflow-zh-5.png",
    analytics: "/photo/energyflow-zh-4.png",
    privacy: "/photo/energyflow-zh-3.png",
  },
  en: {
    quickLog: "/photo/energyflow-en-2.png",
    themeSwitch: "/photo/energyflow-en-5.png",
    desktopAlwaysOn: "/photo/energyflow-en-1.png",
    analytics: "/photo/energyflow-en-4.png",
    privacy: "/photo/energyflow-en-3.png",
  },
} as const;

type ImageKey = keyof typeof imageMap.zh;

export default function EnergyFlowPage() {
  const { locale, t } = useLanguage();

  const img = (key: ImageKey) => imageMap[locale][key];

  return (
    <div className="flex flex-col">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-gradient-hero">
          {t("energyflowDetail.hero.title")}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-[1.75]">
          {t("energyflowDetail.hero.subtitle")}
        </p>
        <p className="mt-4 text-muted max-w-xl leading-[1.75]">
          {t("energyflowDetail.hero.description")}
        </p>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            <div className="flex-shrink-0 w-full md:w-[600px]">
              <div className="screenshot-container">
                <Image
                  src={img("quickLog")}
                  alt="EnergyFlow Quick Log"
                  width={800}
                  height={600}
                  className="screenshot-img"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
                {t("energyflowDetail.quickLog.title")}
              </h2>
              <p className="mt-6 text-foreground leading-[1.75]">
                {t("energyflowDetail.quickLog.description")}
              </p>
              <div className="mt-6 space-y-3 text-muted text-sm leading-[1.75]">
                <p>
                  <span className="text-foreground">{t("energyflowDetail.quickLog.features.level")}</span>{t("energyflowDetail.quickLog.features.levelDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("energyflowDetail.quickLog.features.status")}</span>{t("energyflowDetail.quickLog.features.statusDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("energyflowDetail.quickLog.features.source")}</span>{t("energyflowDetail.quickLog.features.sourceDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("energyflowDetail.quickLog.features.emoji")}</span>{t("energyflowDetail.quickLog.features.emojiDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row-reverse items-start gap-10 md:gap-16">
            <div className="flex-shrink-0 w-full md:w-[600px]">
              <div className="screenshot-container">
                <Image
                  src={img("themeSwitch")}
                  alt="EnergyFlow Theme Switch"
                  width={800}
                  height={600}
                  className="screenshot-img"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
                {t("energyflowDetail.themeSwitch.title")}
              </h2>
              <p className="mt-6 text-foreground leading-[1.75]">
                {t("energyflowDetail.themeSwitch.description")}
              </p>
              <div className="mt-6 space-y-3 text-muted text-sm leading-[1.75]">
                <p>
                  <span className="text-foreground">{t("energyflowDetail.themeSwitch.features.darkMode")}</span>{t("energyflowDetail.themeSwitch.features.darkModeDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("energyflowDetail.themeSwitch.features.lightMode")}</span>{t("energyflowDetail.themeSwitch.features.lightModeDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider text-center">
            {t("energyflowDetail.desktopAlwaysOn.title")}
          </h2>
          <p className="mt-4 text-muted text-center max-w-xl mx-auto leading-[1.75]">
            {t("energyflowDetail.desktopAlwaysOn.description")}
          </p>
          <div className="mt-12 flex justify-center">
            <div className="screenshot-container max-w-[700px] w-full">
              <Image
                src={img("desktopAlwaysOn")}
                alt="EnergyFlow Desktop Always-On"
                width={800}
                height={600}
                className="screenshot-img"
              />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-foreground font-medium">{t("energyflowDetail.desktopAlwaysOn.features.floatingIcon")}</h3>
              <p className="mt-2 text-muted text-sm leading-[1.75]">
                {t("energyflowDetail.desktopAlwaysOn.features.floatingIconDesc")}
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium">{t("energyflowDetail.desktopAlwaysOn.features.hotkey")}</h3>
              <p className="mt-2 text-muted text-sm leading-[1.75]">
                {t("energyflowDetail.desktopAlwaysOn.features.hotkeyDesc")}
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium">{t("energyflowDetail.desktopAlwaysOn.features.minimize")}</h3>
              <p className="mt-2 text-muted text-sm leading-[1.75]">
                {t("energyflowDetail.desktopAlwaysOn.features.minimizeDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider text-center">
            {t("energyflowDetail.analytics.title")}
          </h2>
          <p className="mt-4 text-muted text-center max-w-xl mx-auto leading-[1.75]">
            {t("energyflowDetail.analytics.description")}
          </p>
          <div className="mt-12 flex justify-center">
            <div className="screenshot-container max-w-[800px] w-full">
              <Image
                src={img("analytics")}
                alt="EnergyFlow Analytics"
                width={800}
                height={600}
                className="screenshot-img"
              />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-foreground font-medium">{t("energyflowDetail.analytics.features.pearson")}</h3>
              <p className="mt-2 text-muted text-sm leading-[1.75]">
                {t("energyflowDetail.analytics.features.pearsonDesc")}
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium">{t("energyflowDetail.analytics.features.chiSquare")}</h3>
              <p className="mt-2 text-muted text-sm leading-[1.75]">
                {t("energyflowDetail.analytics.features.chiSquareDesc")}
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium">{t("energyflowDetail.analytics.features.trends")}</h3>
              <p className="mt-2 text-muted text-sm leading-[1.75]">
                {t("energyflowDetail.analytics.features.trendsDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            <div className="flex-shrink-0 w-full md:w-[600px]">
              <div className="screenshot-container">
                <Image
                  src={img("privacy")}
                  alt="EnergyFlow Privacy Protection"
                  width={800}
                  height={600}
                  className="screenshot-img"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
                {t("energyflowDetail.privacy.title")}
              </h2>
              <p className="mt-6 text-foreground leading-[1.75]">
                {t("energyflowDetail.privacy.description")}
              </p>
              <div className="mt-6 space-y-3 text-muted text-sm leading-[1.75]">
                <p>
                  <span className="text-foreground">{t("energyflowDetail.privacy.features.encryption")}</span>{t("energyflowDetail.privacy.features.encryptionDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("energyflowDetail.privacy.features.antiCapture")}</span>{t("energyflowDetail.privacy.features.antiCaptureDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("energyflowDetail.privacy.features.password")}</span>{t("energyflowDetail.privacy.features.passwordDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
          <p className="text-2xl md:text-3xl font-medium text-foreground leading-snug">
            {t("energyflowDetail.cta.title")}
          </p>
          <p className="mt-4 text-muted leading-[1.75]">
            {t("energyflowDetail.cta.description")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm text-muted border border-white/10 px-6 py-3">
              {t("energyflowDetail.cta.status")}
            </span>
            <Link
                href="/contact"
                className="text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background hover-lift transition-colors duration-200"
              >
                {t("energyflowDetail.cta.button")}
              </Link>
            <Link
              href="/products/energyflow/privacy"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {t("energyflowDetail.cta.privacy")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
