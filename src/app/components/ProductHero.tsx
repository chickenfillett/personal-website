"use client";

import type { ReactNode } from "react";
import { useMemo } from "react";
import { useLanguage } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import { productCatalog } from "@/lib/productCatalog";
import type { ProductId } from "@/domain/products";
import {
  microsoftStoreLinks,
  energyFlowImagesForLocale,
  deskHavenImagesForLocale,
  adhdImagesForLocale,
} from "@/lib/siteAssets";
import SmartScreenshot from "./SmartScreenshot";
import { DisplayHeading } from "./Typography";
import { MediaSurface } from "./layout/MediaSurface";
import { SectionShell } from "./layout/SectionShell";
import { SplitSection } from "./layout/SplitSection";
import { InlineMeta } from "./layout/InlineMeta";
import { ProductHeroActions, ProductInfoLinks, type ProductAction } from "./ProductActions";
import { ProductFeatureSections } from "./ProductFeatureSections";
import { ProductMediaGallery } from "./ProductMediaGallery";

export function ProductHero({
  eyebrow,
  title,
  intro,
  status,
  actions,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  status?: string;
  actions: readonly ProductAction[];
  children: ReactNode;
}) {
  return (
    <SectionShell size="large" className="product-hero-section">
      <SplitSection
        className="product-page-grid"
        content={
          <div className="product-hero-copy animate-fade-in">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <DisplayHeading variant="hero" gradient>{title}</DisplayHeading>
            {status ? (
              <span className="mt-6 inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs text-muted">{status}</span>
            ) : null}
            <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{intro}</p>
            <ProductHeroActions actions={actions} />
          </div>
        }
        media={<MediaSurface size="hero" className="product-hero-media">{children}</MediaSurface>}
      />
    </SectionShell>
  );
}

function productImages(id: ProductId, locale: Locale) {
  if (id === "energyflow") return energyFlowImagesForLocale(locale);
  if (id === "deskhaven") return deskHavenImagesForLocale(locale);
  return adhdImagesForLocale(locale);
}

// 无实际发布记录时整块不渲染，不建立空白栏目。
const RELEASE_NOTES: readonly { date: string; body: string }[] = [];

export function ProductDetailTemplate({ id, productName }: { id: ProductId; productName: string }) {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const products = useMemo(() => productCatalog(locale), [locale]);
  const product = products.find((item) => item.id === id) ?? products[0];
  const detail = copy[id];
  const images = productImages(id, locale);

  const isZh = locale === "zh";
  const isFr = locale === "fr";
  const problemLabel = isZh ? "解决的问题" : isFr ? "Le problème" : "The problem";
  const platformLabel = isZh ? "平台：Windows · Microsoft Store" : isFr ? "Plateforme : Windows · Microsoft Store" : "Platform: Windows · Microsoft Store";
  const galleryEyebrow = isZh ? "真实界面" : isFr ? "Interface réelle" : "Real interface";
  const galleryTitle = isZh ? `${productName} 界面` : isFr ? `Interface de ${productName}` : `${productName} interface`;
  const galleryIntro = isZh ? "以下为应用的真实截图。" : isFr ? "Captures d'écran réelles de l'application." : "Real screenshots from the application.";
  const updatesTitle = isZh ? "更新记录" : isFr ? "Journal des versions" : "Release notes";

  const storeLabel = copy.common.microsoftStore ?? "Microsoft Store";
  const privacyLabel = copy.common.privacy ?? "Privacy";
  const backLabel = copy.common.backToProducts ?? "All products";
  const features = detail.features ?? [];
  const promiseTitle = detail.promiseTitle ?? problemLabel;
  const promise = detail.promise ?? product?.description ?? "";

  return (
    <div className="product-page" data-product={id}>
      {/* 1. 名称与定位 / status / 真实 Microsoft Store 下载入口 */}
      <ProductHero
        eyebrow={detail.eyebrow}
        title={detail.title}
        intro={detail.intro}
        status={product?.status}
        actions={[{ href: microsoftStoreLinks[id], label: storeLabel, external: true, variant: "primary" }]}
      >
        <SmartScreenshot src={images.hero} alt={`${productName} screenshot`} width={1400} height={788} priority sizes="(max-width: 1024px) 92vw, 620px" />
      </ProductHero>

      {/* 平台信息与 status */}
      <SectionShell size="small" bordered>
        <InlineMeta items={[product?.status, platformLabel]} />
      </SectionShell>

      {/* 单一法律链接 + 返回产品列表 */}
      <ProductInfoLinks
        actions={[
          { href: "/privacy", label: privacyLabel },
          { href: "/products", label: backLabel },
        ]}
      />

      {/* 2. 解决的问题 */}
      <SectionShell size="medium" bordered>
        <div className="editorial-grid editorial-split">
          <span className="eyebrow">{problemLabel}</span>
          <div className="max-w-3xl">
            <DisplayHeading variant="section">{promiseTitle}</DisplayHeading>
            <p className="mt-6 text-lg leading-[1.85] text-muted">{promise}</p>
          </div>
        </div>
      </SectionShell>

      {/* 3. 实际功能 */}
      {features.length > 0 ? (
        <ProductFeatureSections features={features} images={images.posters} imageWidth={1400} imageHeight={788} />
      ) : null}

      {/* 4. 真实截图 */}
      <ProductMediaGallery
        eyebrow={galleryEyebrow}
        title={galleryTitle}
        intro={galleryIntro}
        images={images.screenshots.slice(0, 5)}
        imageWidth={1400}
        imageHeight={788}
        imageShape="landscape"
        productName={productName}
      />

      {/* 7. 更新记录：无实际记录整块不渲染 */}
      {RELEASE_NOTES.length > 0 ? (
        <SectionShell size="medium" bordered>
          <div className="editorial-grid editorial-split">
            <span className="eyebrow">{updatesTitle}</span>
            <div className="max-w-3xl border-t border-white/[0.07]">
              {RELEASE_NOTES.map((note) => (
                <div key={note.date} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-3 py-6 border-b border-white/[0.07] text-sm">
                  <span className="text-muted">{note.date}</span>
                  <span className="text-muted leading-[1.8]">{note.body}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>
      ) : null}
    </div>
  );
}
