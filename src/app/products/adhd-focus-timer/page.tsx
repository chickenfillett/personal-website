"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";

export default function ADHDFocusTimerPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-gradient-hero">
          {t("productDetail.hero.title")}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-[1.75]">
          {t("productDetail.hero.subtitle")}
        </p>
        <p className="mt-4 text-muted max-w-xl leading-[1.75]">
          {t("productDetail.hero.description")}
        </p>
      </section>

      {/* Screenshot 1: Intro Popup */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            <div className="flex-shrink-0 w-full md:w-[600px]">
              <div className="screenshot-container">
                <Image
                  src="/photo/捕获.PNG"
                  alt="ADHD Focus Timer 产品介绍弹窗"
                  width={800}
                  height={600}
                  className="screenshot-img"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
                {t("productDetail.intro.title")}
              </h2>
              <p className="mt-6 text-foreground leading-[1.75]">
                {t("productDetail.intro.description")}
              </p>
              <p className="mt-4 text-foreground leading-[1.75]">
                {t("productDetail.intro.steps")}
              </p>
              <p className="mt-4 text-muted text-sm leading-[1.75]">
                {t("productDetail.intro.credit")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot 2: Prep Screen */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row-reverse items-start gap-10 md:gap-16">
            <div className="flex-shrink-0 w-full md:w-[600px]">
              <div className="screenshot-container">
                <Image
                  src="/photo/捕获1.PNG"
                  alt="ADHD Focus Timer 准备页面"
                  width={800}
                  height={600}
                  className="screenshot-img"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
                {t("productDetail.interaction.title")}
              </h2>
              <p className="mt-6 text-foreground leading-[1.75]">
                {t("productDetail.interaction.description")}
              </p>
              <div className="mt-6 space-y-3 text-muted text-sm leading-[1.75]">
                <p>
                  <span className="text-foreground">{t("productDetail.interaction.features.duration")}</span> {t("productDetail.interaction.features.durationDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("productDetail.interaction.features.whiteNoise")}</span> {t("productDetail.interaction.features.whiteNoiseDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("productDetail.interaction.features.breathing")}</span> {t("productDetail.interaction.features.breathingDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("productDetail.interaction.features.language")}</span> {t("productDetail.interaction.features.languageDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot 3: Breathing Guide */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider text-center">
            {t("productDetail.breathing.title")}
          </h2>
          <p className="mt-4 text-muted text-center max-w-xl mx-auto leading-[1.75]">
            {t("productDetail.breathing.description")}
          </p>
          <div className="mt-12 flex justify-center">
            <div className="screenshot-container max-w-[700px] w-full">
              <Image
                src="/photo/捕获2.PNG"
                alt="ADHD Focus Timer 呼吸引导"
                width={800}
                height={600}
                className="screenshot-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot 4: Focus Session */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider text-center">
            {t("productDetail.focus.title")}
          </h2>
          <div className="mt-12 flex justify-center">
            <div className="screenshot-container max-w-[800px] w-full">
              <Image
                src="/photo/捕获3.PNG"
                alt="ADHD Focus Timer 专注进行中"
                width={800}
                height={600}
                className="screenshot-img"
              />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-foreground font-medium">{t("productDetail.focus.features.forward.title")}</h3>
              <p className="mt-2 text-muted text-sm leading-[1.75]">
                {t("productDetail.focus.features.forward.description")}
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium">{t("productDetail.focus.features.particles.title")}</h3>
              <p className="mt-2 text-muted text-sm leading-[1.75]">
                {t("productDetail.focus.features.particles.description")}
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium">{t("productDetail.focus.features.progress.title")}</h3>
              <p className="mt-2 text-muted text-sm leading-[1.75]">
                {t("productDetail.focus.features.progress.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot 5: Idea Fridge */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider text-center">
            {t("productDetail.ideaFridge.title")}
          </h2>
          <p className="mt-4 text-muted text-center max-w-xl mx-auto leading-[1.75]">
            {t("productDetail.ideaFridge.description")}
          </p>
          <div className="mt-12 flex justify-center">
            <div className="screenshot-container max-w-[700px] w-full">
              <Image
                src="/photo/捕获4.PNG"
                alt="ADHD Focus Timer 想法冰箱"
                width={800}
                height={600}
                className="screenshot-img"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 max-w-xl mx-auto">
            <div className="text-muted text-sm leading-[1.75]">
              <span className="text-foreground">{t("productDetail.ideaFridge.features.text")}</span> {t("productDetail.ideaFridge.features.textDesc")}
            </div>
            <div className="text-muted text-sm leading-[1.75]">
              <span className="text-foreground">{t("productDetail.ideaFridge.features.voice")}</span> {t("productDetail.ideaFridge.features.voiceDesc")}
            </div>
            <div className="text-muted text-sm leading-[1.75]">
              <span className="text-foreground">{t("productDetail.ideaFridge.features.history")}</span> {t("productDetail.ideaFridge.features.historyDesc")}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot 6: Achievement */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider text-center">
            {t("productDetail.achievement.title")}
          </h2>
          <p className="mt-4 text-muted text-center max-w-xl mx-auto leading-[1.75]">
            {t("productDetail.achievement.description")}
          </p>
          <div className="mt-12 flex justify-center">
            <div className="screenshot-container max-w-[700px] w-full">
              <Image
                src="/photo/捕获5.PNG"
                alt="ADHD Focus Timer 成就页面"
                width={800}
                height={600}
                className="screenshot-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot 7: Support/Privacy */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            <div className="flex-shrink-0 w-full md:w-[600px]">
              <div className="screenshot-container">
                <Image
                  src="/photo/捕获6.PNG"
                  alt="ADHD Focus Timer 支持与隐私"
                  width={800}
                  height={600}
                  className="screenshot-img"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
                {t("productDetail.privacy.title")}
              </h2>
              <p className="mt-6 text-foreground leading-[1.75]">
                {t("productDetail.privacy.description")}
              </p>
              <div className="mt-6 space-y-3 text-muted text-sm leading-[1.75]">
                <p>
                  <span className="text-foreground">{t("productDetail.privacy.features.offline")}</span> {t("productDetail.privacy.features.offlineDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("productDetail.privacy.features.local")}</span> {t("productDetail.privacy.features.localDesc")}
                </p>
                <p>
                  <span className="text-foreground">{t("productDetail.privacy.features.minimal")}</span> {t("productDetail.privacy.features.minimalDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
          <p className="text-2xl md:text-3xl font-medium text-foreground leading-snug">
            {t("productDetail.cta.title")}
          </p>
          <p className="mt-4 text-muted leading-[1.75]">
            {t("productDetail.cta.description")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm text-muted border border-white/10 px-6 py-3">
              {t("productDetail.cta.status")}
            </span>
            <Link
              href="/contact"
              className="text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background hover-lift transition-colors duration-200"
            >
              {t("productDetail.cta.button")}
            </Link>
            <Link
              href="/products/adhd-focus-timer/privacy"
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {t("productDetail.cta.privacy")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
