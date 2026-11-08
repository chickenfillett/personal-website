"use client";

import { useMemo } from "react";
import Link from "../components/TransitionLink";
import { PageHero } from "../components/PageHero";
import SmartScreenshot from "../components/SmartScreenshot";
import { MediaSurface } from "../components/layout/MediaSurface";
import { SectionShell } from "../components/layout/SectionShell";
import { SplitSection } from "../components/layout/SplitSection";
import { InlineMeta } from "../components/layout/InlineMeta";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import { productCatalog } from "@/lib/productCatalog";

export default function Products() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const work = copy.work;
  const products = useMemo(() => productCatalog(locale), [locale]);

  return (
    <div className="flex flex-col">
      <PageHero eyebrow={copy.products.eyebrow} title={copy.products.title} intro={copy.products.intro} wide animated />

      {/* Compatibility entry: the full catalogue now lives at /work. */}
      <SectionShell size="small" bordered>
        <div className="surface-info flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-muted leading-[1.85]">{work.intro}</p>
          <Link
            href="/work"
            className="secondary-action inline-flex items-center self-start text-sm hover-lift md:self-center"
            data-analytics="cta_click"
          >
            {work.viewLabel}
          </Link>
        </div>
      </SectionShell>

      <SectionShell size="small" bordered className="products-index">
        <div className="products-index-list">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="products-index-row"
              data-analytics="product_view"
            >
              <SplitSection
                align="center"
                content={
                  <div className="products-index-copy">
                    <h2 className="product-index-title">{product.title}</h2>
                    <p>{product.description}</p>
                    {product.status && <InlineMeta items={[product.status]} />}
                    <span className="products-index-action" aria-hidden="true">→</span>
                  </div>
                }
                media={
                  <MediaSurface size="feature">
                    <SmartScreenshot
                      src={product.image}
                      alt={product.title}
                      width={1200}
                      height={760}
                      sizes="(max-width: 1024px) 90vw, 680px"
                      className="object-contain"
                    />
                  </MediaSurface>
                }
              />
            </Link>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
