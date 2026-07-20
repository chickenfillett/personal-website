import type { Locale } from "@/lib/i18n/context";
import type { ProductId, ProductPricingCopy } from "@/domain/products";
import { commerceContent } from "@/content/siteContent";

export function commerceLabels(locale: Locale) {
  return commerceContent.labels[locale] ?? commerceContent.labels.en;
}

export function productPricing(product: ProductId, locale: Locale): ProductPricingCopy {
  const market = commerceContent.marketNames[locale] ?? commerceContent.marketNames.en;
  const label = commerceLabels(locale);

  const text = commerceContent.pricingText[locale]?.[product] ?? commerceContent.pricingText.en[product];
  const rows = commerceContent.priceRows[product];

  return {
    ...text,
    prices: rows.map((row): ProductPricingCopy["prices"][number] => {
      const scheduled = "scheduled" in row && typeof row.scheduled === "string" && row.scheduled.length > 0
        ? row.scheduled
        : undefined;

      return {
        market: market[row.market] ?? row.market,
        current: row.current === "free" ? label.free : row.current,
        ...(scheduled ? { scheduled } : {}),
      };
    }),
  };
}
