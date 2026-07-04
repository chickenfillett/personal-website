"use client";

import Link from "../../components/TransitionLink";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { commerceLabels } from "@/lib/productCommerce";
import { getSiteCopy } from "@/lib/siteCopy";
import {
  allEnergyFlowImages,
  energyFlowGalleryImagesForLocale,
  energyFlowImages,
  imageLocale,
  microsoftStoreLinks,
} from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

const featureImages = ["quickLog", "themeSwitch", "desktopAlwaysOn", "analytics", "privacy"] as const;

function galleryCopy(locale: string) {
  const copy = {
    zh: { eyebrow: "真实界面", title: "查看 EnergyFlow 的完整界面截图。", body: "这里按截图自身比例展示真实界面，不再把图片硬塞进固定比例方框。截图会控制在较小尺寸，避免在大屏幕上被拉大后显得粗糙。" },
    "zh-tw": { eyebrow: "真實介面", title: "查看 EnergyFlow 的完整介面截圖。", body: "這裡按截圖自身比例展示真實介面，不再把圖片硬塞進固定比例方框。截圖會控制在較小尺寸，避免在大螢幕上被拉大後顯得粗糙。" },
    en: { eyebrow: "Real interface", title: "See the full EnergyFlow interface set.", body: "The gallery now follows each screenshot's natural proportion instead of forcing fixed frames. Captures are kept smaller so they do not look rough on large screens." },
    ja: { eyebrow: "実際の画面", title: "EnergyFlow の画面セットを見る。", body: "各スクリーンショットの自然な比率で表示し、固定フレームへ無理に押し込みません。大画面で粗く見えないよう控えめなサイズにしています。" },
    ko: { eyebrow: "실제 화면", title: "EnergyFlow 전체 화면을 살펴보세요.", body: "각 스크린샷의 원래 비율을 따라 표시하며 고정된 프레임에 억지로 넣지 않습니다. 큰 화면에서 거칠어 보이지 않도록 크기를 줄였습니다." },
    fr: { eyebrow: "Interface réelle", title: "Voir l'ensemble des écrans EnergyFlow.", body: "La galerie respecte les proportions naturelles de chaque capture au lieu de les forcer dans des cadres fixes. Les images restent plus petites pour éviter un rendu grossier sur grand écran." },
    de: { eyebrow: "Echte Oberfläche", title: "Die vollständige EnergyFlow-Oberfläche ansehen.", body: "Die Galerie folgt den natürlichen Proportionen der Screenshots und zwingt sie nicht mehr in feste Rahmen. Die Bilder bleiben kleiner, damit sie auf großen Displays nicht grob wirken." },
    es: { eyebrow: "Interfaz real", title: "Ver el conjunto completo de pantallas de EnergyFlow.", body: "La galería respeta la proporción natural de cada captura en lugar de forzar marcos fijos. Las imágenes se muestran más pequeñas para no verse ásperas en pantallas grandes." },
    ru: { eyebrow: "Реальный интерфейс", title: "Посмотрите полный набор экранов EnergyFlow.", body: "Галерея сохраняет естественные пропорции каждого снимка и больше не помещает их в жёсткие рамки. Изображения уменьшены, чтобы не выглядеть грубо на больших экранах." },
    pt: { eyebrow: "Interface real", title: "Veja o conjunto completo de telas do EnergyFlow.", body: "A galeria respeita a proporção natural de cada captura em vez de forçar molduras fixas. As imagens ficam menores para não parecerem ásperas em telas grandes." },
  } as const;

  return copy[locale as keyof typeof copy] ?? copy.en;
}

function flowIntro(locale: string) {
  const copy = {
    zh: { title: "从一次快速记录，到一段可调整的工作节奏。", body: "EnergyFlow 的流程不是为了制造更多管理负担，而是把很短的一次记录，逐步变成可回看的工作节奏证据。左侧是你要完成的动作，右侧是应用如何把这些动作转化为趋势、场景和调整依据。", cardTitle: "流程重点", cardBody: "记录越轻，长期数据才越容易坚持；长期数据越稳定，精力变化和工作场景之间的关系才更容易被看见。" },
    "zh-tw": { title: "從一次快速記錄，到一段可調整的工作節奏。", body: "EnergyFlow 的流程不是為了製造更多管理負擔，而是把很短的一次記錄，逐步變成可回看的工作節奏證據。左側是你要完成的動作，右側是應用如何把這些動作轉化為趨勢、場景和調整依據。", cardTitle: "流程重點", cardBody: "記錄越輕，長期資料才越容易堅持；長期資料越穩定，精力變化和工作場景之間的關係才更容易被看見。" },
    en: { title: "From one quick log to an adjustable work rhythm.", body: "EnergyFlow is not designed to create another management burden. A short log becomes evidence you can review later: what happened, where the energy changed, and which work patterns deserve adjustment.", cardTitle: "Flow principle", cardBody: "The lighter the log, the more likely the habit survives. The steadier the record, the easier it is to see how work context and energy influence each other." },
  } as const;
  return copy[locale as keyof typeof copy] ?? copy.en;
}

export default function EnergyFlowPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const images = energyFlowImages[imageLocale(locale)];
  const gallery = energyFlowGalleryImagesForLocale(locale);
  const galleryText = galleryCopy(locale);
  const flowText = flowIntro(locale);
  const legalLabel = commerceLabels(locale).legal;
  const labels = commerceLabels(locale);
  usePreloadImages(allEnergyFlowImages());

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="product-page-grid">
          <div className="animate-fade-in">
            <span className="eyebrow">{copy.energyflow.eyebrow}</span>
            <h1 className="mt-7 text-[clamp(2.7rem,5.2vw,5.15rem)] leading-[1.06] tracking-[-0.045em] font-medium text-warm-gradient">
              {copy.energyflow.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{copy.energyflow.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-muted">{copy.energyflow.status}</span>
              <a href={microsoftStoreLinks.energyflow} target="_blank" rel="noreferrer" className="primary-action rounded-full px-5 py-3 text-sm font-medium hover-lift">{copy.common.microsoftStore}</a>
              <Link href="#product-info" className="secondary-action rounded-full px-5 py-3 text-sm hover-lift">{labels.priceEyebrow}</Link>
            </div>
          </div>

          <SmartScreenshot src={images.quickLog} alt="EnergyFlow quick log" width={1200} height={820} priority sizes="(max-width: 1024px) 92vw, 620px" />
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.common.productPromise}</span>
        <h2 className="mt-7 text-[clamp(2.35rem,4.6vw,4.35rem)] leading-[1.05] tracking-[-0.045em] font-medium max-w-4xl">{copy.energyflow.promiseTitle}</h2>
        <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{copy.energyflow.promise}</p>
      </section>

      <div id="product-info" />
      <ProductPricing product="energyflow" />

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="flex flex-wrap gap-3 border-t border-white/[0.07] pt-8 text-sm">
          <Link href="/products/energyflow/privacy" className="secondary-action rounded-full px-4 py-2.5 hover-lift">{copy.common.privacy}</Link>
          <Link href="/products/energyflow/legal" className="secondary-action rounded-full px-4 py-2.5 hover-lift">{legalLabel}</Link>
          <Link href="/contact" className="secondary-action rounded-full px-4 py-2.5 hover-lift">{copy.common.getUpdates}</Link>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        {copy.energyflow.features.map(([title, body], index) => (
          <div key={title} className="max-w-[1180px] mx-auto px-5 md:px-8 py-16 md:py-24 border-b border-white/[0.07] last:border-b-0">
            <div className={`detail-rail ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="detail-sticky">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">0{index + 1}</span>
                <h2 className="mt-5 text-[clamp(2.15rem,3.9vw,3.9rem)] leading-[1.05] tracking-[-0.045em] font-medium">{title}</h2>
                <p className="mt-6 text-muted leading-[1.85] text-lg">{body}</p>
              </div>
              <SmartScreenshot src={images[featureImages[index]]} alt={title} width={1200} height={820} sizes="(max-width: 1024px) 92vw, 680px" />
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">{copy.common.experienceFlow}</span>
            <h2 className="mt-7 text-[clamp(2rem,3.8vw,3.55rem)] leading-[1.08] tracking-[-0.04em] font-medium max-w-3xl">{flowText.title}</h2>
            <p className="mt-7 text-lg leading-[1.85] text-muted max-w-2xl">{flowText.body}</p>
            <div className="mt-10 rounded-3xl border border-white/[0.08] bg-white/[0.018] p-6 md:p-7">
              <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{flowText.cardTitle}</div>
              <p className="mt-4 text-muted leading-[1.8]">{flowText.cardBody}</p>
            </div>
          </div>

          <div className="border-t border-white/10">
            {copy.energyflow.flow.map((item, index) => (
              <div key={item} className="grid grid-cols-[5rem_1fr] md:grid-cols-[8rem_1fr] gap-6 py-8 md:py-10 border-b border-white/[0.07]">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{copy.common.step} {index + 1}</span>
                <p className="text-2xl md:text-3xl text-foreground/80 leading-[1.25] tracking-[-0.035em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <span className="eyebrow">{galleryText.eyebrow}</span>
          <h2 className="section-title mt-7 text-[clamp(2rem,3.8vw,3.55rem)] leading-[1.08] tracking-[-0.04em] font-medium max-w-4xl">
            {galleryText.title}
          </h2>
          <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{galleryText.body}</p>

          <div className="mt-14 energy-gallery-grid">
            {gallery.map((screenshot, index) => (
              <figure key={screenshot} className="energy-gallery-card">
                <img
                  src={screenshot}
                  alt={`EnergyFlow interface screenshot ${index + 1}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="energy-gallery-image"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
