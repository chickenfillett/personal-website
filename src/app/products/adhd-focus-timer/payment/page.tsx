"use client";

import { useLanguage } from "@/lib/i18n/context";

export default function ProductPayment() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24">
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
          {t("productPayment.intro.title")}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          {t("productPayment.intro.description")}
        </p>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className="text-foreground font-medium">{t("productPayment.sections.freeProduct.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productPayment.sections.freeProduct.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("productPayment.sections.voluntarySupport.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productPayment.sections.voluntarySupport.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("productPayment.sections.paymentMethod.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productPayment.sections.paymentMethod.description")}
              </p>
              <div className="mt-4 p-4 bg-surface border border-white/10">
                <p className="text-foreground font-medium">{t("productPayment.sections.paymentMethod.paypalMe")}</p>
                <p className="mt-2 text-muted text-sm">
                  {t("productPayment.sections.paymentMethod.paypalMeDescription")}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("productPayment.sections.notPurchase.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productPayment.sections.notPurchase.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("productPayment.sections.paymentFlow.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productPayment.sections.paymentFlow.description")}
              </p>
            </div>
            <div>
              <h2 className="text-foreground font-medium">{t("productPayment.sections.contact.title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">
                {t("productPayment.sections.contact.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
          <a
            href="/products/adhd-focus-timer/refund"
            className="text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            {t("productPayment.backButton")}
          </a>
        </div>
      </section>
    </div>
  );
}
