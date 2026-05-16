"use client";

import { useLanguage } from "@/lib/i18n/context";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Intro */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24 animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
          {t("about.intro.title")}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          {t("about.intro.description")}
        </p>
      </section>

      {/* Story */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-foreground leading-relaxed">
              {t("about.story.p1")}
            </p>
            <p className="mt-6 text-foreground leading-relaxed">
              {t("about.story.p2")}
            </p>
            <p className="mt-6 text-foreground leading-relaxed">
              {t("about.story.p3")}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
            {t("about.philosophy.title")}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 bg-surface">
              <h3 className="text-foreground font-medium">{t("about.philosophy.items.minimal.title")}</h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {t("about.philosophy.items.minimal.description")}
              </p>
            </div>
            <div className="p-6 bg-surface">
              <h3 className="text-foreground font-medium">{t("about.philosophy.items.immersive.title")}</h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {t("about.philosophy.items.immersive.description")}
              </p>
            </div>
            <div className="p-6 bg-surface">
              <h3 className="text-foreground font-medium">{t("about.philosophy.items.restraint.title")}</h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {t("about.philosophy.items.restraint.description")}
              </p>
            </div>
            <div className="p-6 bg-surface">
              <h3 className="text-foreground font-medium">{t("about.philosophy.items.dark.title")}</h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {t("about.philosophy.items.dark.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
            {t("about.tech.title")}
          </h2>
          <ul className="mt-8 space-y-3 text-foreground">
            <li>{t("about.tech.items.0")}</li>
            <li>{t("about.tech.items.1")}</li>
            <li>{t("about.tech.items.2")}</li>
            <li>{t("about.tech.items.3")}</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
          <p className="text-xl md:text-2xl font-medium text-foreground">
            {t("about.cta.title")}
          </p>
          <p className="mt-4 text-muted">
            {t("about.cta.description")}
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            {t("about.cta.button")}
          </a>
        </div>
      </section>
    </div>
  );
}
