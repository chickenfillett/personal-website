"use client";

import Link from "./TransitionLink";
import type { PolicyKind } from "@/lib/productPolicies";
import { productPolicyCopy } from "@/lib/productPolicies";
import type { ProductId } from "@/lib/productCommerce";
import { productPolicyMeta } from "@/lib/productCommerce";
import { useLanguage } from "@/lib/i18n/context";

export default function ProductPolicyPage({ product, kind }: { product: ProductId; kind: PolicyKind }) {
  const { locale } = useLanguage();
  const copy = productPolicyCopy(product, kind, locale);
  const meta = productPolicyMeta[product];
  const otherKind = kind === "privacy" ? "legal" : "privacy";
  const otherHref = otherKind === "privacy" ? meta.privacyPath : meta.legalPath;
  const otherLabel = locale === "zh" || locale === "zh-tw"
    ? otherKind === "privacy" ? "查看隐私政策" : "查看法律条款"
    : otherKind === "privacy" ? "View privacy policy" : "View legal terms";

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        <span className="eyebrow">{meta.name}</span>
        <h1 className="mt-7 text-[clamp(2.5rem,5vw,5rem)] leading-[1.06] tracking-[-0.045em] font-medium text-warm-gradient">
          {copy.title}
        </h1>
        <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-3xl">{copy.intro}</p>
        <p className="mt-6 text-sm text-[var(--faint)]">{copy.updated}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={meta.productPath} className="rounded-full bg-[#e6dccd] text-[#171410] px-5 py-3 text-sm font-medium hover-lift">{copy.back}</Link>
          <Link href={otherHref} className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{otherLabel}</Link>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl divide-y divide-white/[0.07] border-t border-white/[0.07]">
            {copy.sections.map((section, index) => (
              <article key={section.title} className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-5 py-8">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">0{index + 1}</span>
                <div>
                  <h2 className="text-xl md:text-2xl tracking-[-0.03em] font-medium">{section.title}</h2>
                  <p className="mt-4 text-muted leading-[1.85]">{section.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
