"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProductId } from "@/lib/productCommerce";
import { commerceLabels, productPricing } from "@/lib/productCommerce";
import { detectedBrowserLanguage, selectLocalPrice } from "@/lib/localPricing";
import { useLanguage } from "@/lib/i18n/context";

function pricingIntro(locale: string) {
  const copy = {
    zh: "价格会根据访问者当前浏览器地区自动匹配。本页只展示当前地区对应的价格；最终价格以 Microsoft Store 当前显示为准。",
    "zh-tw": "價格會依訪問者目前瀏覽器地區自動匹配。本頁只展示目前地區對應的價格；最終價格以 Microsoft Store 當前顯示為準。",
    en: "Pricing is matched automatically from the visitor's browser region. This page shows only the current region price; the Microsoft Store listing remains authoritative.",
    ja: "価格はブラウザーの地域に基づいて自動的に選ばれます。このページでは現在地域の価格のみを表示し、最終価格は Microsoft Store の表示を優先します。",
    ko: "가격은 방문자의 브라우저 지역에 따라 자동으로 선택됩니다. 이 페이지에는 현재 지역 가격만 표시되며 최종 가격은 Microsoft Store 표시를 기준으로 합니다.",
    fr: "Le prix est choisi automatiquement selon la région du navigateur. Cette page n'affiche que le prix de la région actuelle ; Microsoft Store reste la référence.",
    de: "Der Preis wird automatisch anhand der Browser-Region gewählt. Diese Seite zeigt nur den Preis der aktuellen Region; maßgeblich bleibt Microsoft Store.",
    es: "El precio se selecciona automáticamente según la región del navegador. Esta página solo muestra el precio de la región actual; Microsoft Store es la referencia final.",
    ru: "Цена выбирается автоматически по региону браузера. На странице показана только цена текущего региона; окончательной считается цена в Microsoft Store.",
    pt: "O preço é escolhido automaticamente pela região do navegador. Esta página mostra apenas o preço da região atual; a Microsoft Store continua sendo a referência final.",
  } as const;
  return copy[locale as keyof typeof copy] ?? copy.en;
}

export default function ProductPricing({ product }: { product: ProductId }) {
  const { locale } = useLanguage();
  const [browserLanguage, setBrowserLanguage] = useState<string>(() => detectedBrowserLanguage(locale));
  const labels = commerceLabels(locale);
  const pricing = productPricing(product, locale);

  useEffect(() => {
    setBrowserLanguage(detectedBrowserLanguage(locale));
  }, [locale]);

  const localPrice = useMemo(
    () => selectLocalPrice(pricing.prices, locale, browserLanguage),
    [browserLanguage, locale, pricing.prices],
  );

  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28 border-t border-white/[0.07]">
      <span className="eyebrow">{pricing.eyebrow}</span>
      <div className="mt-7 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
        <div>
          <h2 className="text-[clamp(2rem,3.8vw,3.55rem)] leading-[1.08] tracking-[-0.04em] font-medium max-w-3xl">
            {pricing.title}
          </h2>
          <p className="mt-6 text-lg leading-[1.85] text-muted">{pricingIntro(locale)}</p>
        </div>

        <div className="border border-white/[0.08] bg-white/[0.018]">
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-white/[0.07]">
            <div className="p-5 border-b sm:border-b-0 sm:border-r border-white/[0.07]">
              <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{labels.trial}</div>
              <p className="mt-3 text-sm leading-[1.75] text-muted">{pricing.trial}</p>
            </div>
            <div className="p-5">
              <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{labels.availability}</div>
              <p className="mt-3 text-sm leading-[1.75] text-muted">{pricing.availability}</p>
            </div>
          </div>

          <div className="p-5 border-b border-white/[0.07]">
            <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">
              {localPrice?.market ?? (locale === "zh" || locale === "zh-tw" ? "当前地区" : "Current region")}
            </div>
            <div className="mt-4">
              <div className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--faint)]">{labels.current}</div>
              <div className="mt-2 text-2xl text-foreground tracking-[-0.035em]">{localPrice?.current}</div>
              {localPrice?.scheduled ? <div className="mt-2 text-sm text-muted">{labels.scheduled}: {localPrice.scheduled}</div> : null}
            </div>
          </div>

          <div className="p-5">
            <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{labels.note}</div>
            <p className="mt-3 text-sm leading-[1.75] text-muted">{pricing.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
