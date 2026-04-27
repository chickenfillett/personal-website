"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function ProductRefund() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24">
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
          {t("productRefund.intro.title")}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          {t("productRefund.intro.description")}
        </p>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className="text-foreground font-medium">{t("productRefund.sections.freeDownload.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productRefund.sections.freeDownload.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("productRefund.sections.voluntary.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productRefund.sections.voluntary.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("productRefund.sections.noRefund.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productRefund.sections.noRefund.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("productRefund.sections.special.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productRefund.sections.special.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("productRefund.sections.responseTime.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productRefund.sections.responseTime.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("productRefund.sections.contact.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productRefund.sections.contact.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
          <Link
            href="/products/adhd-focus-timer"
            className="text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            {t("productRefund.backButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}
