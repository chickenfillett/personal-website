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
} as const satisfies Record<
  ProductId,
  { name: string; productPath: string; privacyPath: string; legalPath: string }
>;
