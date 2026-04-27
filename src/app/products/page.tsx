"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Products() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24">
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
          {t("products.intro.title")}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          {t("products.intro.description")}
        </p>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/products/adhd-focus-timer"
              className="p-6 bg-surface group hover:border-white/20 border border-transparent transition-colors duration-200"
            >
              <h3 className="text-foreground font-medium group-hover:text-muted transition-colors duration-200">
                {t("products.adhd.title")}
              </h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {t("products.adhd.description")}
              </p>
              <span className="mt-6 inline-block text-xs text-muted border border-white/10 px-3 py-1">
                {t("products.adhd.details")}
              </span>
            </Link>
            <div className="p-6 bg-surface">
              <h3 className="text-foreground font-medium">{t("home.products.product2.title")}</h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {t("home.products.product2.description")}
              </p>
              <span className="mt-6 inline-block text-xs text-muted border border-white/10 px-3 py-1">
                {t("home.products.comingSoon")}
              </span>
            </div>
            <div className="p-6 bg-surface">
              <h3 className="text-foreground font-medium">{t("home.products.product3.title")}</h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {t("home.products.product3.description")}
              </p>
              <span className="mt-6 inline-block text-xs text-muted border border-white/10 px-3 py-1">
                {t("home.products.comingSoon")}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
