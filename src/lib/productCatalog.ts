import type { Locale } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import type { ProductId, ProductStatus } from "@/domain/products";
import type { WorkStatus } from "@/domain/work";
import { workCatalog } from "@/lib/workCatalog";
import {
  adhdImagesForLocale,
  deskHavenImagesForLocale,
  energyFlowImagesForLocale,
} from "@/lib/siteAssets";

export type ProductCatalogItem = {
  id: ProductId;
  href: string;
  title: string;
  category: string;
  description: string;
  status?: ProductStatus;
  image: string;
};

// WorkStatus → ProductStatus（旧详情页冻结的 3 值域）；无对应值的状态不渲染徽标。
const productStatusByWorkStatus: Record<WorkStatus, ProductStatus | undefined> = {
  released: "Release",
  "in-progress": undefined,
  prototype: "Prototype",
  paused: "Paused",
  archived: undefined,
};

export function productCatalog(locale: Locale): ProductCatalogItem[] {
  const copy = getSiteCopy(locale);
  const energyFlowAssets = energyFlowImagesForLocale(locale);
  const deskHavenAssets = deskHavenImagesForLocale(locale);
  const adhdAssets = adhdImagesForLocale(locale);

  const statusById = new Map<string, ProductStatus>();
  for (const item of workCatalog(locale)) {
    if (item.status === undefined) continue;
    const mapped = productStatusByWorkStatus[item.status];
    if (mapped !== undefined) statusById.set(item.id, mapped);
  }

  return [
    {
      id: "energyflow",
      ...copy.productCards.energyflow,
      status: statusById.get("energyflow"),
      href: "/products/energyflow",
      image: energyFlowAssets.quickRecord,
    },
    {
      id: "deskhaven",
      ...copy.productCards.deskhaven,
      status: statusById.get("deskhaven"),
      href: "/products/deskhaven",
      image: deskHavenAssets.hero,
    },
    {
      id: "adhd",
      ...copy.productCards.adhd,
      status: statusById.get("adhd"),
      href: "/products/adhd-focus-timer",
      image: adhdAssets.hero,
    },
  ];
}

export function productCatalogPreloadImages(locale: Locale) {
  return Array.from(new Set(productCatalog(locale).map((item) => item.image)));
}
