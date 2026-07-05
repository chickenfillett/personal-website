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

type CommerceLabelCopy = {
  priceEyebrow: string;
  priceTitle: string;
  current: string;
  scheduled: string;
  trial: string;
  availability: string;
  note: string;
  privacy: string;
  legal: string;
  toc: string;
  pricingIntro: string;
  currentRegion: string;
};

const labels: Record<Locale, CommerceLabelCopy> = {
  zh: { priceEyebrow: "价格与可用性", priceTitle: "购买前先看清价格、试用和市场规则。", current: "当前价格", scheduled: "计划调整", trial: "免费试用", availability: "可用性", note: "说明", privacy: "隐私政策", legal: "法律与条款", toc: "文档目录", pricingIntro: "价格会根据访问者当前浏览器地区自动匹配。本页只展示当前地区对应的价格；最终价格以 Microsoft Store 当前显示为准。", currentRegion: "当前地区" },
  "zh-tw": { priceEyebrow: "價格與可用性", priceTitle: "購買前先看清價格、試用和市場規則。", current: "目前價格", scheduled: "計畫調整", trial: "免費試用", availability: "可用性", note: "說明", privacy: "隱私政策", legal: "法律與條款", toc: "文件目錄", pricingIntro: "價格會依訪問者目前瀏覽器地區自動匹配。本頁只展示目前地區對應的價格；最終價格以 Microsoft Store 當前顯示為準。", currentRegion: "目前地區" },
  en: { priceEyebrow: "Pricing and availability", priceTitle: "Review price, trial, and market rules before installing.", current: "Current price", scheduled: "Scheduled change", trial: "Free trial", availability: "Availability", note: "Note", privacy: "Privacy policy", legal: "Legal terms", toc: "Contents", pricingIntro: "Pricing is matched automatically from the visitor's browser region. This page shows only the current region price; the Microsoft Store listing remains authoritative.", currentRegion: "Current region" },
  ja: { priceEyebrow: "価格と提供状況", priceTitle: "インストール前に価格、試用、地域ルールを確認できます。", current: "現在の価格", scheduled: "予定されている変更", trial: "無料試用", availability: "提供状況", note: "注記", privacy: "プライバシーポリシー", legal: "法的条項", toc: "目次", pricingIntro: "価格はブラウザーの地域に基づいて自動的に選ばれます。このページでは現在地域の価格のみを表示し、最終価格は Microsoft Store の表示を優先します。", currentRegion: "現在の地域" },
  ko: { priceEyebrow: "가격 및 제공 여부", priceTitle: "설치 전 가격, 체험판, 시장 규칙을 확인하세요.", current: "현재 가격", scheduled: "예정된 변경", trial: "무료 체험", availability: "제공 여부", note: "참고", privacy: "개인정보 처리방침", legal: "법률 및 약관", toc: "문서 목차", pricingIntro: "가격은 방문자의 브라우저 지역에 따라 자동으로 선택됩니다. 이 페이지에는 현재 지역 가격만 표시되며 최종 가격은 Microsoft Store 표시를 기준으로 합니다.", currentRegion: "현재 지역" },
  fr: { priceEyebrow: "Prix et disponibilité", priceTitle: "Vérifiez le prix, l'essai et les règles de marché avant d'installer.", current: "Prix actuel", scheduled: "Changement prévu", trial: "Essai gratuit", availability: "Disponibilité", note: "Note", privacy: "Confidentialité", legal: "Mentions légales", toc: "Sommaire", pricingIntro: "Le prix est choisi automatiquement selon la région du navigateur. Cette page n'affiche que le prix de la région actuelle ; Microsoft Store reste la référence.", currentRegion: "Région actuelle" },
  de: { priceEyebrow: "Preis und Verfügbarkeit", priceTitle: "Prüfe Preis, Testzeitraum und Marktregeln vor der Installation.", current: "Aktueller Preis", scheduled: "Geplante Änderung", trial: "Kostenlose Testphase", availability: "Verfügbarkeit", note: "Hinweis", privacy: "Datenschutz", legal: "Rechtliche Hinweise", toc: "Inhalt", pricingIntro: "Der Preis wird automatisch anhand der Browser-Region gewählt. Diese Seite zeigt nur den Preis der aktuellen Region; maßgeblich bleibt Microsoft Store.", currentRegion: "Aktuelle Region" },
  es: { priceEyebrow: "Precio y disponibilidad", priceTitle: "Revisa precio, prueba y reglas de mercado antes de instalar.", current: "Precio actual", scheduled: "Cambio programado", trial: "Prueba gratuita", availability: "Disponibilidad", note: "Nota", privacy: "Privacidad", legal: "Términos legales", toc: "Contenido", pricingIntro: "El precio se selecciona automáticamente según la región del navegador. Esta página solo muestra el precio de la región actual; Microsoft Store es la referencia final.", currentRegion: "Región actual" },
  ru: { priceEyebrow: "Цена и доступность", priceTitle: "Перед установкой проверьте цену, пробный период и правила рынка.", current: "Текущая цена", scheduled: "Запланированное изменение", trial: "Бесплатный пробный период", availability: "Доступность", note: "Примечание", privacy: "Конфиденциальность", legal: "Правовые условия", toc: "Содержание", pricingIntro: "Цена выбирается автоматически по региону браузера. На странице показана только цена текущего региона; окончательной считается цена в Microsoft Store.", currentRegion: "Текущий регион" },
  pt: { priceEyebrow: "Preço e disponibilidade", priceTitle: "Veja preço, teste e regras de mercado antes de instalar.", current: "Preço atual", scheduled: "Alteração prevista", trial: "Teste gratuito", availability: "Disponibilidade", note: "Nota", privacy: "Privacidade", legal: "Termos legais", toc: "Conteúdo", pricingIntro: "O preço é escolhido automaticamente pela região do navegador. Esta página mostra apenas o preço da região atual; a Microsoft Store continua sendo a referência final.", currentRegion: "Região atual" },
};

const marketNames: Record<Locale, Record<string, string>> = {
  zh: { default: "默认市场组", us: "美国", cn: "中国", eu: "德国/欧元市场", jp: "日本", kr: "韩国", ca: "加拿大", sg: "新加坡", ch: "瑞士", all: "所有公开市场" },
  "zh-tw": { default: "預設市場組", us: "美國", cn: "中國", eu: "德國/歐元市場", jp: "日本", kr: "韓國", ca: "加拿大", sg: "新加坡", ch: "瑞士", all: "所有公開市場" },
  en: { default: "Default market group", us: "United States", cn: "China", eu: "Germany / Euro markets", jp: "Japan", kr: "Korea", ca: "Canada", sg: "Singapore", ch: "Switzerland", all: "All public markets" },
  ja: { default: "標準市場グループ", us: "米国", cn: "中国", eu: "ドイツ / ユーロ市場", jp: "日本", kr: "韓国", ca: "カナダ", sg: "シンガポール", ch: "スイス", all: "すべての公開市場" },
  ko: { default: "기본 시장 그룹", us: "미국", cn: "중국", eu: "독일 / 유로 시장", jp: "일본", kr: "한국", ca: "캐나다", sg: "싱가포르", ch: "스위스", all: "모든 공개 시장" },
  fr: { default: "Groupe de marché par défaut", us: "États-Unis", cn: "Chine", eu: "Allemagne / marchés en euro", jp: "Japon", kr: "Corée", ca: "Canada", sg: "Singapour", ch: "Suisse", all: "Tous les marchés publics" },
  de: { default: "Standard-Marktgruppe", us: "USA", cn: "China", eu: "Deutschland / Euro-Märkte", jp: "Japan", kr: "Korea", ca: "Kanada", sg: "Singapur", ch: "Schweiz", all: "Alle öffentlichen Märkte" },
  es: { default: "Grupo de mercado predeterminado", us: "Estados Unidos", cn: "China", eu: "Alemania / mercados en euro", jp: "Japón", kr: "Corea", ca: "Canadá", sg: "Singapur", ch: "Suiza", all: "Todos los mercados públicos" },
  ru: { default: "Стандартная группа рынков", us: "США", cn: "Китай", eu: "Германия / рынки евро", jp: "Япония", kr: "Корея", ca: "Канада", sg: "Сингапур", ch: "Швейцария", all: "Все публичные рынки" },
  pt: { default: "Grupo de mercado padrão", us: "Estados Unidos", cn: "China", eu: "Alemanha / mercados em euro", jp: "Japão", kr: "Coreia", ca: "Canadá", sg: "Singapura", ch: "Suíça", all: "Todos os mercados públicos" },
};

const pricingText: Record<Locale, Record<ProductId, Omit<ProductPricingCopy, "prices">>> = {
  zh: {
    energyflow: { eyebrow: "EnergyFlow 价格", title: "付费下载，提供 7 天免费试用。", summary: "EnergyFlow 在 Microsoft Store 面向全球公开市场提供。基础价格为 USD $9.99，中国市场为 ¥45；已计划在 2026-07-16 09:00 UTC 调整为 USD $12.99，中国市场 ¥68。", trial: "7 天，面向所有用户。", availability: "全球所有市场公开可发现，Microsoft Store 会按用户所在市场显示最终价格、税费和货币。", note: "最终价格以 Microsoft Store 当前显示为准。" },
    deskhaven: { eyebrow: "DeskHaven 价格", title: "付费下载，提供 15 天免费试用。", summary: "DeskHaven 在 Microsoft Store 使用基础价格和特定市场价格组合。默认市场组为 USD $8.99；部分市场使用当地价格。", trial: "15 天，面向所有用户。", availability: "全球公开市场可用并可发现；部分市场有单独价格覆盖。", note: "Microsoft 可能根据市场、税费、汇率和商店政策调整最终显示价格；请以商店页面为准。" },
    adhd: { eyebrow: "ADHD Focus Timer 价格", title: "免费下载，核心功能免费使用。", summary: "ADHD Focus Timer 当前作为免费应用提供。", trial: "不需要试用期；应用本身免费。", availability: "Microsoft Store 公开可用。最终可用性以商店页面显示为准。", note: "如果商店在不同市场显示附加说明或税费信息，请以 Microsoft Store 为准。" },
  },
  "zh-tw": {
    energyflow: { eyebrow: "EnergyFlow 價格", title: "付費下載，提供 7 天免費試用。", summary: "EnergyFlow 於 Microsoft Store 面向全球公開市場提供。基礎價格為 USD $9.99，中國市場為 ¥45；已計畫在 2026-07-16 09:00 UTC 調整為 USD $12.99，中國市場 ¥68。", trial: "7 天，面向所有使用者。", availability: "全球市場公開可見，Microsoft Store 會依使用者所在市場顯示最終價格、稅費和貨幣。", note: "最終價格以 Microsoft Store 當前顯示為準。" },
    deskhaven: { eyebrow: "DeskHaven 價格", title: "付費下載，提供 15 天免費試用。", summary: "DeskHaven 在 Microsoft Store 使用基礎價格與特定市場價格組合。預設市場組為 USD $8.99；部分市場使用當地價格。", trial: "15 天，面向所有使用者。", availability: "全球公開市場可用並可被發現；部分市場有單獨價格覆蓋。", note: "Microsoft 可能根據市場、稅費、匯率和商店政策調整最終顯示價格；請以商店頁面為準。" },
    adhd: { eyebrow: "ADHD Focus Timer 價格", title: "免費下載，核心功能免費使用。", summary: "ADHD Focus Timer 目前作為免費應用提供。", trial: "不需要試用期；應用本身免費。", availability: "Microsoft Store 公開可用。最終可用性以商店頁面顯示為準。", note: "若商店在不同市場顯示附加說明或稅費資訊，請以 Microsoft Store 為準。" },
  },
  en: {
    energyflow: { eyebrow: "EnergyFlow pricing", title: "Paid download with a 7-day free trial.", summary: "EnergyFlow is available in public Microsoft Store markets. The base price is USD $9.99, with China priced at CNY ¥45; a scheduled change on 2026-07-16 09:00 UTC moves the base price to USD $12.99 and China to CNY ¥68.", trial: "7 days, available to everyone.", availability: "Publicly discoverable in global Store markets. Microsoft Store shows the final market price, taxes, and currency for each customer.", note: "Final pricing is the price shown by Microsoft Store." },
    deskhaven: { eyebrow: "DeskHaven pricing", title: "Paid download with a 15-day free trial.", summary: "DeskHaven uses a base Microsoft Store price with market-specific overrides. The default market group is USD $8.99; selected markets use local prices.", trial: "15 days, available to everyone.", availability: "Available and discoverable in public global markets, with selected market-specific price overrides.", note: "Microsoft may adjust the final displayed price based on market, taxes, currency conversion, and Store policy. The Store listing is authoritative." },
    adhd: { eyebrow: "ADHD Focus Timer pricing", title: "Free download with core features available for free.", summary: "ADHD Focus Timer is currently offered as a free app.", trial: "No time-limited trial is needed because the app itself is free.", availability: "Available through Microsoft Store. Final availability follows the Store listing.", note: "If Microsoft Store displays market-specific notes or taxes, the Store listing is authoritative." },
  },
  ja: {
    energyflow: { eyebrow: "EnergyFlow の価格", title: "有料ダウンロード。7 日間の無料試用があります。", summary: "EnergyFlow は Microsoft Store の公開市場で提供されます。基本価格は USD $9.99、中国市場は CNY ¥45 です。", trial: "7 日間、すべてのユーザーが利用できます。", availability: "公開 Store 市場で利用可能です。最終価格、税、通貨は Microsoft Store が表示します。", note: "最終価格は Microsoft Store の表示を優先してください。" },
    deskhaven: { eyebrow: "DeskHaven の価格", title: "有料ダウンロード。15 日間の無料試用があります。", summary: "DeskHaven は Microsoft Store の基本価格と地域別価格を使用します。標準市場は USD $8.99 です。", trial: "15 日間、すべてのユーザーが利用できます。", availability: "公開市場で利用可能で、一部の市場では地域別価格があります。", note: "税、為替、Store ポリシーにより最終価格は変わる場合があります。" },
    adhd: { eyebrow: "ADHD Focus Timer の価格", title: "無料ダウンロード。主要機能は無料です。", summary: "ADHD Focus Timer は現在無料アプリとして提供されています。", trial: "アプリ自体が無料のため、試用期間は不要です。", availability: "Microsoft Store で公開されています。", note: "市場別の税や注記は Store 表示を優先してください。" },
  },
  ko: {
    energyflow: { eyebrow: "EnergyFlow 가격", title: "유료 다운로드, 7일 무료 체험 제공.", summary: "EnergyFlow는 Microsoft Store 공개 시장에서 제공됩니다. 기본 가격은 USD $9.99, 중국 시장은 CNY ¥45입니다.", trial: "7일, 모든 사용자에게 제공됩니다.", availability: "전 세계 공개 Store 시장에서 표시됩니다. 최종 가격, 세금, 통화는 Microsoft Store가 표시합니다.", note: "최종 가격은 Microsoft Store 표시를 기준으로 합니다." },
    deskhaven: { eyebrow: "DeskHaven 가격", title: "유료 다운로드, 15일 무료 체험 제공.", summary: "DeskHaven은 Microsoft Store 기본 가격과 지역별 가격을 함께 사용합니다. 기본 시장 그룹은 USD $8.99입니다.", trial: "15일, 모든 사용자에게 제공됩니다.", availability: "전 세계 공개 시장에서 이용 가능하며 일부 시장은 지역별 가격을 사용합니다.", note: "세금, 환율, Store 정책에 따라 최종 가격이 달라질 수 있습니다." },
    adhd: { eyebrow: "ADHD Focus Timer 가격", title: "무료 다운로드, 핵심 기능 무료 사용.", summary: "ADHD Focus Timer는 현재 무료 앱으로 제공됩니다.", trial: "앱 자체가 무료이므로 시간 제한 체험판이 필요하지 않습니다.", availability: "Microsoft Store에서 공개적으로 이용할 수 있습니다.", note: "시장별 세금이나 안내는 Microsoft Store 표시를 따릅니다." },
  },
  fr: {
    energyflow: { eyebrow: "Prix d'EnergyFlow", title: "Téléchargement payant avec essai gratuit de 7 jours.", summary: "EnergyFlow est disponible sur les marchés publics du Microsoft Store. Le prix de base est USD $9.99.", trial: "7 jours, disponible pour tous les utilisateurs.", availability: "Disponible publiquement dans les marchés Store. Le prix final, les taxes et la devise sont affichés par Microsoft Store.", note: "Le prix affiché par Microsoft Store fait foi." },
    deskhaven: { eyebrow: "Prix de DeskHaven", title: "Téléchargement payant avec essai gratuit de 15 jours.", summary: "DeskHaven utilise un prix de base Microsoft Store et des prix locaux pour certains marchés. Le groupe par défaut est USD $8.99.", trial: "15 jours, disponible pour tous les utilisateurs.", availability: "Disponible sur les marchés publics mondiaux, avec prix spécifiques selon certains marchés.", note: "Le prix final peut varier selon taxes, devise et politiques Store." },
    adhd: { eyebrow: "Prix d'ADHD Focus Timer", title: "Téléchargement gratuit, fonctions principales gratuites.", summary: "ADHD Focus Timer est actuellement proposé comme application gratuite.", trial: "Aucun essai limité n'est nécessaire car l'application est gratuite.", availability: "Disponible via Microsoft Store.", note: "Les informations de marché affichées par Microsoft Store font foi." },
  },
  de: {
    energyflow: { eyebrow: "EnergyFlow Preis", title: "Kostenpflichtiger Download mit 7 Tagen Testphase.", summary: "EnergyFlow ist in öffentlichen Microsoft-Store-Märkten verfügbar. Der Basispreis beträgt USD $9.99.", trial: "7 Tage, für alle Nutzer verfügbar.", availability: "Öffentlich in globalen Store-Märkten auffindbar. Microsoft Store zeigt Endpreis, Steuern und Währung.", note: "Maßgeblich ist der im Microsoft Store angezeigte Preis." },
    deskhaven: { eyebrow: "DeskHaven Preis", title: "Kostenpflichtiger Download mit 15 Tagen Testphase.", summary: "DeskHaven nutzt einen Microsoft-Store-Basispreis und regionale Preise. Die Standardgruppe liegt bei USD $8.99.", trial: "15 Tage, für alle Nutzer verfügbar.", availability: "Weltweit in öffentlichen Märkten verfügbar; ausgewählte Märkte haben eigene Preise.", note: "Endpreise können sich durch Steuern, Währungen und Store-Regeln ändern." },
    adhd: { eyebrow: "ADHD Focus Timer Preis", title: "Kostenloser Download, Kernfunktionen gratis.", summary: "ADHD Focus Timer wird derzeit kostenlos angeboten.", trial: "Keine zeitlich begrenzte Testphase nötig, da die App kostenlos ist.", availability: "Über Microsoft Store verfügbar.", note: "Marktspezifische Hinweise im Microsoft Store sind maßgeblich." },
  },
  es: {
    energyflow: { eyebrow: "Precio de EnergyFlow", title: "Descarga de pago con prueba gratuita de 7 días.", summary: "EnergyFlow está disponible en mercados públicos de Microsoft Store. El precio base es USD $9.99.", trial: "7 días, disponible para todos los usuarios.", availability: "Visible públicamente en mercados globales de Store. Microsoft Store muestra precio final, impuestos y moneda.", note: "El precio mostrado por Microsoft Store es el definitivo." },
    deskhaven: { eyebrow: "Precio de DeskHaven", title: "Descarga de pago con prueba gratuita de 15 días.", summary: "DeskHaven usa precio base de Microsoft Store y precios locales en mercados concretos. El grupo predeterminado es USD $8.99.", trial: "15 días, disponible para todos los usuarios.", availability: "Disponible en mercados públicos globales, con precios específicos en algunos mercados.", note: "El precio final puede variar por impuestos, moneda y política de Store." },
    adhd: { eyebrow: "Precio de ADHD Focus Timer", title: "Descarga gratuita con funciones principales gratis.", summary: "ADHD Focus Timer se ofrece actualmente como app gratuita.", trial: "No se necesita prueba limitada porque la app es gratuita.", availability: "Disponible mediante Microsoft Store.", note: "Las notas específicas de mercado en Microsoft Store son la referencia." },
  },
  ru: {
    energyflow: { eyebrow: "Цена EnergyFlow", title: "Платная загрузка с 7-дневным пробным периодом.", summary: "EnergyFlow доступен в публичных рынках Microsoft Store. Базовая цена — USD $9.99.", trial: "7 дней для всех пользователей.", availability: "Доступно в глобальных рынках Store. Итоговую цену, налоги и валюту показывает Microsoft Store.", note: "Окончательной считается цена, показанная в Microsoft Store." },
    deskhaven: { eyebrow: "Цена DeskHaven", title: "Платная загрузка с 15-дневным пробным периодом.", summary: "DeskHaven использует базовую цену Microsoft Store и локальные цены для отдельных рынков. Стандартная группа — USD $8.99.", trial: "15 дней для всех пользователей.", availability: "Доступно в публичных мировых рынках, с локальными ценами для некоторых регионов.", note: "Цена может меняться из-за налогов, валюты и правил Store." },
    adhd: { eyebrow: "Цена ADHD Focus Timer", title: "Бесплатная загрузка, основные функции бесплатны.", summary: "ADHD Focus Timer сейчас доступен как бесплатное приложение.", trial: "Пробный период не нужен, приложение бесплатно.", availability: "Доступно через Microsoft Store.", note: "Рыночные примечания Microsoft Store являются основными." },
  },
  pt: {
    energyflow: { eyebrow: "Preço do EnergyFlow", title: "Download pago com teste gratuito de 7 dias.", summary: "EnergyFlow está disponível nos mercados públicos da Microsoft Store. O preço base é USD $9.99.", trial: "7 dias, disponível para todos os usuários.", availability: "Disponível publicamente nos mercados globais da Store. A Microsoft Store mostra preço final, impostos e moeda.", note: "O preço exibido pela Microsoft Store é a referência." },
    deskhaven: { eyebrow: "Preço do DeskHaven", title: "Download pago com teste gratuito de 15 dias.", summary: "DeskHaven usa preço base da Microsoft Store e preços locais para mercados específicos. O grupo padrão é USD $8.99.", trial: "15 dias, disponível para todos os usuários.", availability: "Disponível em mercados públicos globais, com preços específicos em alguns mercados.", note: "O preço final pode variar por impostos, moeda e política da Store." },
    adhd: { eyebrow: "Preço do ADHD Focus Timer", title: "Download gratuito com recursos principais gratuitos.", summary: "ADHD Focus Timer é oferecido atualmente como aplicativo gratuito.", trial: "Não é necessário teste limitado porque o aplicativo é gratuito.", availability: "Disponível pela Microsoft Store.", note: "As informações específicas de mercado da Microsoft Store são a referência." },
  },
};

export function commerceLabels(locale: Locale) {
  return labels[locale] ?? labels.en;
}

export function productPricing(product: ProductId, locale: Locale): ProductPricingCopy {
  const market = marketNames[locale] ?? marketNames.en;
  const text = pricingText[locale]?.[product] ?? pricingText.en[product];

  if (product === "energyflow") {
    return {
      ...text,
      prices: [
        { market: market.default, current: "USD $9.99", scheduled: "USD $12.99 / 2026-07-16 09:00 UTC" },
        { market: market.cn, current: "CNY ¥45", scheduled: "CNY ¥68 / 2026-07-16 09:00 UTC" },
      ],
    };
  }

  if (product === "deskhaven") {
    return {
      ...text,
      prices: [
        { market: market.default, current: "USD $8.99" },
        { market: market.us, current: "USD $14.99" },
        { market: market.cn, current: "CNY ¥59" },
        { market: market.eu, current: "EUR €9.99" },
        { market: market.jp, current: "JPY ¥1,200" },
        { market: market.kr, current: "KRW ₩13,400" },
        { market: market.ca, current: "CAD $13.99" },
        { market: market.sg, current: "SGD $19.50" },
        { market: market.ch, current: "CHF 19.50" },
      ],
    };
  }

  return {
    ...text,
    prices: [{ market: market.all, current: locale === "zh" || locale === "zh-tw" ? "免费" : locale === "ja" ? "無料" : locale === "ko" ? "무료" : locale === "fr" ? "Gratuit" : locale === "de" ? "Kostenlos" : locale === "es" ? "Gratis" : locale === "ru" ? "Бесплатно" : locale === "pt" ? "Grátis" : "Free" }],
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
