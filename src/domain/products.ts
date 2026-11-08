export type ProductId = "energyflow" | "deskhaven" | "adhd";

// ProductStatus 是旧产品详情页冻结使用的 3 值域，保持不变。
// 更细的 WorkStatus 定义在 src/domain/work.ts，productCatalog 从 workCatalog
// 的 status 按单一数据源映射：released → "Release"，prototype → "Prototype"，
// paused → "Paused"；in-progress / archived 在此值域中没有对应项，不渲染状态徽标。
export type ProductStatus = "Prototype" | "Paused" | "Release";

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
