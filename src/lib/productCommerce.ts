import type { Locale } from "@/lib/i18n/context";

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

const labels = {
  zh: {
    priceEyebrow: "价格与可用性",
    priceTitle: "购买前先看清价格、试用和市场规则。",
    current: "当前价格",
    scheduled: "计划调整",
    trial: "免费试用",
    availability: "可用性",
    note: "说明",
    privacy: "隐私政策",
    legal: "法律与条款",
  },
  en: {
    priceEyebrow: "Pricing and availability",
    priceTitle: "Review price, trial, and market rules before installing.",
    current: "Current price",
    scheduled: "Scheduled change",
    trial: "Free trial",
    availability: "Availability",
    note: "Note",
    privacy: "Privacy policy",
    legal: "Legal terms",
  },
} as const;

function labelLocale(locale: Locale) {
  return locale === "zh" || locale === "zh-tw" ? "zh" : "en";
}

export function commerceLabels(locale: Locale) {
  return labels[labelLocale(locale)];
}

export function productPricing(product: ProductId, locale: Locale): ProductPricingCopy {
  const zh = labelLocale(locale) === "zh";

  if (product === "energyflow") {
    return {
      eyebrow: zh ? "EnergyFlow 价格" : "EnergyFlow pricing",
      title: zh ? "付费下载，提供 7 天免费试用。" : "Paid download with a 7-day free trial.",
      summary: zh
        ? "EnergyFlow 在 Microsoft Store 面向全球公开市场提供。基础价格为 USD $9.99，中国市场为 ¥45；已计划在 2026-07-16 09:00 UTC 调整为 USD $12.99，中国市场 ¥68。"
        : "EnergyFlow is available in public Microsoft Store markets. The base price is USD $9.99, with China priced at CNY ¥45; a scheduled change on 2026-07-16 09:00 UTC moves the base price to USD $12.99 and China to CNY ¥68.",
      trial: zh ? "7 天，面向所有用户，基础试用开始日期为尽快，结束日期为永不。" : "7 days, available to everyone. Trial starts as soon as the Store listing is available and has no planned end date.",
      availability: zh ? "全球所有市场公开可发现，Microsoft Store 会按用户所在市场显示最终价格、税费和货币。" : "Publicly discoverable in global Store markets. Microsoft Store shows the final market price, taxes, and currency for each customer.",
      note: zh ? "价格调整只适用于 Windows 10/11（包括 Xbox）客户；最终价格以 Microsoft Store 当前显示为准。" : "Price changes apply to Windows 10/11 customers, including Xbox where applicable. Final pricing is the price shown by Microsoft Store.",
      prices: [
        { market: zh ? "默认市场组" : "Default market group", current: "USD $9.99", scheduled: "USD $12.99 / 2026-07-16 09:00 UTC" },
        { market: zh ? "中国" : "China", current: "CNY ¥45", scheduled: "CNY ¥68 / 2026-07-16 09:00 UTC" },
      ],
    };
  }

  if (product === "deskhaven") {
    return {
      eyebrow: zh ? "DeskHaven 价格" : "DeskHaven pricing",
      title: zh ? "付费下载，提供 15 天免费试用。" : "Paid download with a 15-day free trial.",
      summary: zh
        ? "DeskHaven 在 Microsoft Store 使用基础价格和特定市场价格组合。默认市场组为 USD $8.99；部分市场使用当地价格，例如美国 USD $14.99、中国 ¥59、德国/欧元区 €9.99、日本 ¥1,200、韩国 ₩13,400。"
        : "DeskHaven uses a base Microsoft Store price with market-specific overrides. The default market group is USD $8.99; selected markets use local prices such as United States USD $14.99, China CNY ¥59, Germany/Euro markets €9.99, Japan ¥1,200, and Korea ₩13,400.",
      trial: zh ? "15 天，面向所有用户，基础试用开始日期为尽快，结束日期为永不。" : "15 days, available to everyone. Trial starts as soon as the Store listing is available and has no planned end date.",
      availability: zh ? "全球公开市场可用并可发现；部分市场有单独价格覆盖。" : "Available and discoverable in public global markets, with selected market-specific price overrides.",
      note: zh ? "Microsoft 可能根据市场、税费、汇率和商店政策调整最终显示价格；请以商店页面为准。" : "Microsoft may adjust the final displayed price based on market, taxes, currency conversion, and Store policy. The Store listing is authoritative.",
      prices: [
        { market: zh ? "默认市场组" : "Default market group", current: "USD $8.99" },
        { market: zh ? "美国" : "United States", current: "USD $14.99" },
        { market: zh ? "中国" : "China", current: "CNY ¥59" },
        { market: zh ? "德国/欧元市场" : "Germany / Euro markets", current: "EUR €9.99" },
        { market: zh ? "日本" : "Japan", current: "JPY ¥1,200" },
        { market: zh ? "韩国" : "Korea", current: "KRW ₩13,400" },
        { market: zh ? "加拿大" : "Canada", current: "CAD $13.99" },
        { market: zh ? "新加坡" : "Singapore", current: "SGD $19.50" },
        { market: zh ? "瑞士" : "Switzerland", current: "CHF 19.50" },
      ],
    };
  }

  return {
    eyebrow: zh ? "ADHD Focus Timer 价格" : "ADHD Focus Timer pricing",
    title: zh ? "免费下载，核心功能免费使用。" : "Free download with core features available for free.",
    summary: zh
      ? "ADHD Focus Timer 当前作为免费应用提供。用户可以直接从 Microsoft Store 下载并使用核心专注功能。"
      : "ADHD Focus Timer is currently offered as a free app. Users can download it from Microsoft Store and use the core focus features at no cost.",
    trial: zh ? "不需要试用期；应用本身免费。" : "No time-limited trial is needed because the app itself is free.",
    availability: zh ? "Microsoft Store 公开可用。最终可用性以商店页面显示为准。" : "Available through Microsoft Store. Final availability follows the Store listing.",
    note: zh ? "如果商店在不同市场显示附加说明或税费信息，请以 Microsoft Store 为准。" : "If Microsoft Store displays market-specific notes or taxes, the Store listing is authoritative.",
    prices: [
      { market: zh ? "所有公开市场" : "All public markets", current: zh ? "免费" : "Free" },
    ],
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
