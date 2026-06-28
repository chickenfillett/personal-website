import type { ProductPricingCopy } from "@/lib/productCommerce";

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

  if (region === "CN" || language === "zh" || language.startsWith("zh-cn")) marketMatchers.push(["中国", "china", "cny"]);
  if (region === "US") marketMatchers.push(["美国", "united states", "usd"]);
  if (region === "JP" || language.startsWith("ja")) marketMatchers.push(["日本", "japan", "jpy"]);
  if (region === "KR" || language.startsWith("ko")) marketMatchers.push(["韩国", "korea", "krw"]);
  if (region === "CA") marketMatchers.push(["加拿大", "canada", "cad"]);
  if (region === "SG") marketMatchers.push(["新加坡", "singapore", "sgd"]);
  if (region === "CH") marketMatchers.push(["瑞士", "switzerland", "chf"]);
  if (["DE", "FR", "ES", "IT", "NL", "BE", "AT", "FI", "IE", "PT"].includes(region) || language.startsWith("de") || language.startsWith("fr") || language.startsWith("es") || language.startsWith("pt")) {
    marketMatchers.push(["德国/欧元市场", "德國/歐元市場", "germany / euro markets", "euro", "eur"]);
  }

  for (const matcher of marketMatchers) {
    const found = prices.find((price) => includesAny(`${price.market} ${price.current} ${price.scheduled ?? ""}`, matcher));
    if (found) return found;
  }

  return prices.find((price) => includesAny(price.market, ["默认市场组", "預設市場組", "default market group", "standard", "padrão", "predeterminado"])) ?? prices[0];
}
