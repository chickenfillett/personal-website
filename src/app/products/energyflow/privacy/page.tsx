"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function EnergyFlowPrivacy() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24">
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
          {t("energyflowPrivacy.intro.title")}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          {t("energyflowPrivacy.intro.description")}
        </p>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className="text-foreground font-medium">{t("energyflowPrivacy.sections.encryptedStorage.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("energyflowPrivacy.sections.encryptedStorage.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("energyflowPrivacy.sections.noCloud.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("energyflowPrivacy.sections.noCloud.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("energyflowPrivacy.sections.noAccount.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("energyflowPrivacy.sections.noAccount.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("energyflowPrivacy.sections.antiCapture.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("energyflowPrivacy.sections.antiCapture.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("energyflowPrivacy.sections.dataControl.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("energyflowPrivacy.sections.dataControl.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("energyflowPrivacy.sections.contact.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("energyflowPrivacy.sections.contact.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
          <Link
            href="/products/energyflow"
            className="text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            {t("energyflowPrivacy.backButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}
