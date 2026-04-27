"use client";

import { useLanguage } from "@/lib/i18n/context";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24">
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
          {t("privacy.intro.title")}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          {t("privacy.intro.description")}
        </p>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className="text-foreground font-medium">{t("privacy.sections.collection.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("privacy.sections.collection.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("privacy.sections.usage.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("privacy.sections.usage.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("privacy.sections.security.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("privacy.sections.security.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("privacy.sections.cookies.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("privacy.sections.cookies.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("privacy.sections.updates.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("privacy.sections.updates.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("privacy.sections.contact.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("privacy.sections.contact.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
