import type { Locale } from "@/lib/i18n/context";
import { commerceContent } from "@/lib/siteContent";

export type ProductId = "energyflow" | "deskhaven" | "adhd";

export type ProductPricingCopy = {
  eyebrow: string;
  title: string;
  summary: string;
  trial: string;
  availability: string;
  note: string;
  prices: readonly {
    market: string;
    current: string;
    scheduled?: string;
  }[];
};

export function commerceLabels(locale: Locale) {
  return commerceContent.labels[locale] ?? commerceContent.labels.en;
}

export function productPricing(product: ProductId, locale: Locale): ProductPricingCopy {
  const market = commerceContent.marketNames[locale] ?? commerceContent.marketNames.en;
  const text = commerceContent.pricingText[locale]?.[product] ?? commerceContent.pricingText.en[product];
  const label = commerceLabels(locale);
  const rows = commerceContent.priceRows[product];

  return {
    ...text,
    prices: rows.map((row) => ({
      market: market[row.market] ?? row.market,
      current: row.current === "free" ? label.free : row.current,
      ...("scheduled" in row && row.scheduled ? { scheduled: row.scheduled } : {}),
    })),
  };
}

export const productPolicyMeta = {
  energyflow: {
    name: "EnergyFlow",
    productPath: "/products/energyflow",
    privacyPath: "/products/energyflow/privacy",
    legalPath: "/products/energyflow/legal",
  },
  deskhaven: {
    name: "DeskHaven",
    productPath: "/products/deskhaven",
    privacyPath: "/products/deskhaven/privacy",
    legalPath: "/products/deskhaven/legal",
  },
  adhd: {
    name: "ADHD Focus Timer",
    productPath: "/products/adhd-focus-timer",
    privacyPath: "/products/adhd-focus-timer/privacy",
    legalPath: "/products/adhd-focus-timer/legal",
  },
} as const satisfies Record<ProductId, { name: string; productPath: string; privacyPath: string; legalPath: string }>;
