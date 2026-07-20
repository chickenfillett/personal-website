"use client";

import { ProductInfoLinks } from "../../components/ProductActions";
import { ProductFeatureSections } from "../../components/ProductFeatureSections";
import { ProductHero } from "../../components/ProductHero";
import { ProductMediaGallery } from "../../components/ProductMediaGallery";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { commerceLabels } from "@/lib/productCommerce";
import { deskHavenPosterSectionCopy, deskHavenPosterStories } from "@/lib/deskhavenPosterCopy";
import { getSiteCopy } from "@/content/siteContent";
import { deskHavenImagesForLocale, microsoftStoreLinks } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function DeskHavenPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const assets = deskHavenImagesForLocale(locale);
  const note = deskHavenPosterSectionCopy(locale);
  const posterCopy = deskHavenPosterStories(locale, assets.locale);
  const legalLabel = commerceLabels(locale).legal;
  const labels = commerceLabels(locale);
  usePreloadImages([assets.hero, assets.posters[0], ...assets.screenshots.slice(0, 2)], true, 6);

  return (
    <div className="product-page" data-product="deskhaven">
      <ProductHero
        eyebrow={copy.deskhaven.eyebrow}
        title={copy.deskhaven.title}
        intro={copy.deskhaven.intro}
        status={copy.deskhaven.status}
        actions={[
          { href: microsoftStoreLinks.deskhaven, label: copy.common.microsoftStore, external: true, variant: "primary" },
          { href: "#product-info", label: labels.priceEyebrow },
        ]}
      >
        <SmartScreenshot
          src={assets.hero}
          alt="DeskHaven product poster"
          width={1120}
          height={630}
          priority
          sizes="(max-width: 1024px) 92vw, 620px"
        />
      </ProductHero>

      <div id="product-info" />
      <ProductPricing product="deskhaven" />

      <ProductInfoLinks
        actions={[
          { href: "/products/deskhaven/privacy", label: copy.common.privacy },
          { href: "/products/deskhaven/legal", label: legalLabel },
          { href: "/products", label: copy.common.backToProducts },
        ]}
      />

      <ProductFeatureSections
        features={posterCopy}
        images={assets.posters}
        imageWidth={1120}
        imageHeight={630}
      />

      <ProductMediaGallery
        eyebrow={note.galleryEyebrow}
        title={note.galleryTitle}
        intro={note.galleryBody}
        images={assets.screenshots}
        imageWidth={1180}
        imageHeight={664}
        imageShape="landscape"
        productName="DeskHaven"
      />
    </div>
  );
}
