"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProductId, ProductPricingCopy } from "@/lib/productCommerce";
import { commerceLabels, productPricing } from "@/lib/productCommerce";
import { useLanguage } from "@/lib/i18n/context";

type PriceItem = ProductPricingCopy["prices"][number];

function normalize(value: string) {
  return value.toLowerCase();
}

function includesAny(value: string, needles: string[]) {
  const normalized = normalize(value);
  return needles.some((needle) => normalized.includes(normalize(needle)));
}

function regionCodeFromLanguage(language: string) {
  const parts = language.replace("_", "-").split("-");
  return parts.length > 1 ? parts[1]?.toUpperCase() ?? "" : "";
}

function selectLocalPrice(prices: readonly PriceItem[], locale: string, browserLanguage: string) {
  const candidates = [browserLanguage, locale].filter(Boolean);
  const region = regionCodeFromLanguage(candidates[0] ?? "");
  const language = normalize(candidates[0] || locale);

  const marketMatchers: string[][] = [];

  if (region === "CN" || language === "zh" || language.startsWith("zh-cn")) {
    marketMatchers.push(["中国", "china", "cny"]);
  }

  if (region === "US") marketMatchers.push(["美国", "united states", "usd $14.99"]);
  if (region === "JP" || language.startsWith("ja")) marketMatchers.push(["日本", "japan", "jpy"]);
  if (region === "KR" || language.startsWith("ko")) marketMatchers.push(["韩国", "korea", "krw"]);
  if (region === "CA") marketMatchers.push(["加拿大", "canada", "cad"]);
  if (region === "SG") marketMatchers.push(["新加坡", "singapore", "sgd"]);
  if (region === "CH") marketMatchers.push(["瑞士", "switzerland", "chf"]);

  if (["DE", "FR", "ES", "IT", "NL", "BE", "AT", "FI", "IE", "PT"].includes(region) || language.startsWith("de") || language.startsWith("fr") || language.startsWith("es")) {
    marketMatchers.push(["德国/欧元市场", "germany / euro markets", "euro", "eur"]);
  }

  for (const matcher of marketMatchers) {
    const found = prices.find((price) => includesAny(`${price.market} ${price.current} ${price.scheduled ?? ""}`, matcher));
    if (found) return found;
  }

  return prices.find((price) => includesAny(price.market, ["默认市场组", "default market group"])) ?? prices[0];
}

export default function ProductPricing({ product }: { product: ProductId }) {
  const { locale } = useLanguage();
  const [browserLanguage, setBrowserLanguage] = useState(locale);
  const labels = commerceLabels(locale);
  const pricing = productPricing(product, locale);

  useEffect(() => {
    setBrowserLanguage(navigator.language || locale);
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
          <p className="mt-6 text-lg leading-[1.85] text-muted">{pricing.summary}</p>
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
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--faint)]">{labels.current}</div>
                <div className="mt-1 text-lg text-foreground">{localPrice?.current}</div>
              </div>
              <div>
                {localPrice?.scheduled ? (
                  <>
                    <div className="text-[0.65rem] uppercase tracking-[0.14em] text-[var(--faint)]">{labels.scheduled}</div>
                    <div className="mt-1 text-sm text-muted">{localPrice.scheduled}</div>
                  </>
                ) : (
                  <div className="text-sm text-[var(--faint)]">-</div>
                )}
              </div>
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
