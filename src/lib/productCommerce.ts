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

const energyFlowFreePricing: Record<Locale, Omit<ProductPricingCopy, "prices">> = {
  zh: {
    eyebrow: "免费与可用性",
    title: "EnergyFlow 现已免费开放。",
    summary: "EnergyFlow 可在 Microsoft Store 免费获取，核心功能无需购买或订阅。",
    trial: "无需试用期，安装后即可使用全部核心功能。",
    availability: "面向 Microsoft Store 的公开市场提供，实际可见范围以商店页面为准。",
    note: "下载、更新与地区可用性由 Microsoft Store 提供和管理。",
  },
  "zh-tw": {
    eyebrow: "免費與可用性",
    title: "EnergyFlow 現已免費開放。",
    summary: "EnergyFlow 可在 Microsoft Store 免費取得，核心功能不需要購買或訂閱。",
    trial: "不需要試用期，安裝後即可使用全部核心功能。",
    availability: "面向 Microsoft Store 的公開市場提供，實際可見範圍以商店頁面為準。",
    note: "下載、更新與地區可用性由 Microsoft Store 提供和管理。",
  },
  en: {
    eyebrow: "Free and available",
    title: "EnergyFlow is now free to use.",
    summary: "EnergyFlow is available free from Microsoft Store, with no purchase or subscription required for its core experience.",
    trial: "No trial period is required. Core features are available after installation.",
    availability: "Available through public Microsoft Store markets, subject to the listing shown in each region.",
    note: "Downloads, updates, and regional availability are handled by Microsoft Store.",
  },
  ja: {
    eyebrow: "無料提供と配信状況",
    title: "EnergyFlow は無料で利用できます。",
    summary: "EnergyFlow は Microsoft Store から無料で入手でき、主要機能に購入やサブスクリプションは必要ありません。",
    trial: "試用期間はありません。インストール後すぐに主要機能を利用できます。",
    availability: "Microsoft Store の公開市場で提供され、実際の表示状況は地域ごとのストアページに準じます。",
    note: "ダウンロード、更新、地域別の提供状況は Microsoft Store によって管理されます。",
  },
  ko: {
    eyebrow: "무료 제공 및 이용 가능 지역",
    title: "EnergyFlow는 이제 무료로 이용할 수 있습니다.",
    summary: "EnergyFlow는 Microsoft Store에서 무료로 제공되며 핵심 기능에 구매나 구독이 필요하지 않습니다.",
    trial: "체험 기간 없이 설치 후 핵심 기능을 바로 사용할 수 있습니다.",
    availability: "Microsoft Store의 공개 시장에서 제공되며 실제 노출 여부는 지역별 스토어 페이지를 따릅니다.",
    note: "다운로드, 업데이트, 지역별 제공 여부는 Microsoft Store에서 관리합니다.",
  },
  fr: {
    eyebrow: "Gratuit et disponible",
    title: "EnergyFlow est désormais gratuit.",
    summary: "EnergyFlow est disponible gratuitement sur Microsoft Store, sans achat ni abonnement pour l’expérience principale.",
    trial: "Aucune période d’essai n’est nécessaire. Les fonctions principales sont disponibles après l’installation.",
    availability: "Disponible sur les marchés publics de Microsoft Store, selon la fiche affichée dans chaque région.",
    note: "Le téléchargement, les mises à jour et la disponibilité régionale sont gérés par Microsoft Store.",
  },
  de: {
    eyebrow: "Kostenlos und verfügbar",
    title: "EnergyFlow ist jetzt kostenlos nutzbar.",
    summary: "EnergyFlow ist kostenlos im Microsoft Store erhältlich. Für die Kernfunktionen sind weder Kauf noch Abonnement erforderlich.",
    trial: "Eine Testphase ist nicht erforderlich. Die Kernfunktionen stehen nach der Installation bereit.",
    availability: "In öffentlichen Microsoft-Store-Märkten verfügbar, abhängig von der jeweiligen regionalen Store-Seite.",
    note: "Download, Updates und regionale Verfügbarkeit werden über den Microsoft Store verwaltet.",
  },
  es: {
    eyebrow: "Gratis y disponible",
    title: "EnergyFlow ahora es gratuito.",
    summary: "EnergyFlow está disponible gratis en Microsoft Store, sin compra ni suscripción para la experiencia principal.",
    trial: "No se necesita periodo de prueba. Las funciones principales están disponibles tras la instalación.",
    availability: "Disponible en los mercados públicos de Microsoft Store, según la ficha mostrada en cada región.",
    note: "La descarga, las actualizaciones y la disponibilidad regional se gestionan mediante Microsoft Store.",
  },
  ru: {
    eyebrow: "Бесплатно и доступно",
    title: "EnergyFlow теперь доступен бесплатно.",
    summary: "EnergyFlow можно бесплатно получить в Microsoft Store. Для основных функций не нужны покупка или подписка.",
    trial: "Пробный период не требуется. Основные функции доступны сразу после установки.",
    availability: "Доступно в публичных регионах Microsoft Store в соответствии со страницей приложения для конкретного рынка.",
    note: "Загрузка, обновления и региональная доступность управляются через Microsoft Store.",
  },
  pt: {
    eyebrow: "Grátis e disponível",
    title: "EnergyFlow agora é gratuito.",
    summary: "EnergyFlow está disponível gratuitamente na Microsoft Store, sem compra ou assinatura para a experiência principal.",
    trial: "Não é necessário período de teste. Os recursos principais ficam disponíveis após a instalação.",
    availability: "Disponível nos mercados públicos da Microsoft Store, conforme a página apresentada em cada região.",
    note: "Download, atualizações e disponibilidade regional são geridos pela Microsoft Store.",
  },
};

export function commerceLabels(locale: Locale) {
  return commerceContent.labels[locale] ?? commerceContent.labels.en;
}

export function productPricing(product: ProductId, locale: Locale): ProductPricingCopy {
  const market = commerceContent.marketNames[locale] ?? commerceContent.marketNames.en;
  const label = commerceLabels(locale);

  if (product === "energyflow") {
    return {
      ...(energyFlowFreePricing[locale] ?? energyFlowFreePricing.en),
      prices: [{ market: market.all ?? label.availability, current: label.free }],
    };
  }

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
