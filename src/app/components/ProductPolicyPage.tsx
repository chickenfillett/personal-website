"use client";

import { LegalDocumentHero, LegalDocumentSections } from "./LegalDocument";
import Link from "./TransitionLink";
import type { PolicyKind } from "@/lib/productPolicies";
import { productPolicyCopy } from "@/lib/productPolicies";
import type { ProductId } from "@/lib/productCommerce";
import { commerceLabels, productPolicyMeta } from "@/lib/productCommerce";
import { useLanguage } from "@/lib/i18n/context";

export default function ProductPolicyPage({ product, kind }: { product: ProductId; kind: PolicyKind }) {
  const { locale } = useLanguage();
  const copy = productPolicyCopy(product, kind, locale);
  const meta = productPolicyMeta[product];
  const otherKind = kind === "privacy" ? "legal" : "privacy";
  const otherHref = otherKind === "privacy" ? meta.privacyPath : meta.legalPath;
  const labels = commerceLabels(locale);
  const otherLabel = otherKind === "privacy" ? labels.privacy : labels.legal;

  return (
    <div className="flex flex-col">
      <LegalDocumentHero
        eyebrow={meta.name}
        title={copy.title}
        intro={copy.intro}
        updated={copy.updated}
        actions={(
          <>
            <Link href={meta.productPath} className="primary-action rounded-full px-5 py-3 text-sm font-medium hover-lift">{copy.back}</Link>
            <Link href={otherHref} className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{otherLabel}</Link>
          </>
        )}
      />

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[17rem_1fr] gap-10 lg:gap-16 items-start">
            <aside className="lg:sticky lg:top-24 rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6">
              <h2 className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{labels.toc}</h2>
              <nav className="mt-5 flex flex-col gap-3 text-sm text-muted">
                {copy.sections.map((section, index) => (
                  <a key={section.title} href={`#section-${index + 1}`} className="hover:text-foreground transition-colors leading-relaxed">
                    {String(index + 1).padStart(2, "0")} {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            <LegalDocumentSections sections={copy.sections} />
          </div>
        </div>
      </section>
    </div>
  );
}
