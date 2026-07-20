import type { Locale } from "@/lib/i18n/context";
import type { ProductId, ProductPricingCopy } from "@/domain/products";
import { productPricing } from "@/lib/productCommerce";

export type PriceItem = ProductPricingCopy["prices"][number];

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

export function detectedBrowserLanguage(fallback: string) {
  if (typeof navigator === "undefined") return fallback;
  return navigator.language || fallback;
}

export function selectLocalPrice(prices: readonly PriceItem[], locale: string, browserLanguage: string) {
  const candidate = browserLanguage || locale;
  const region = regionCodeFromLanguage(candidate);
  const language = normalize(candidate || locale);
  const marketMatchers: string[][] = [];

  if (region === "CN" || language === "zh" || language.startsWith("zh-cn")) marketMatchers.push(["china", "cny", "¥"]);
  if (region === "US") marketMatchers.push(["united states", "usd $14.99"]);
  if (region === "JP" || language.startsWith("ja")) marketMatchers.push(["japan", "jpy"]);
  if (region === "KR" || language.startsWith("ko")) marketMatchers.push(["korea", "krw"]);
  if (region === "CA") marketMatchers.push(["canada", "cad"]);
  if (region === "SG") marketMatchers.push(["singapore", "sgd"]);
  if (region === "CH") marketMatchers.push(["switzerland", "chf"]);
  if (["DE", "FR", "ES", "IT", "NL", "BE", "AT", "FI", "IE", "PT"].includes(region) || language.startsWith("de") || language.startsWith("fr") || language.startsWith("es") || language.startsWith("pt")) {
    marketMatchers.push(["germany / euro markets", "euro", "eur"]);
  }

  for (const matcher of marketMatchers) {
    const found = prices.find((price) => includesAny(`${price.market} ${price.current} ${price.scheduled ?? ""}`, matcher));
    if (found) return found;
  }

  return prices.find((price) => includesAny(price.market, ["default market group", "standard", "padrão", "predeterminado"])) ?? prices[0];
}

export function selectLocalProductPrice(product: ProductId, locale: Locale, browserLanguage: string) {
  return selectLocalPrice(productPricing(product, locale).prices, locale, browserLanguage);
}
