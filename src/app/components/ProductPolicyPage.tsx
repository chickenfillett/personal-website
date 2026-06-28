"use client";

import Link from "./TransitionLink";
import type { PolicyKind } from "@/lib/productPolicies";
import { productPolicyCopy } from "@/lib/productPolicies";
import type { ProductId } from "@/lib/productCommerce";
import { productPolicyMeta } from "@/lib/productCommerce";
import { useLanguage } from "@/lib/i18n/context";

function renderBody(body: string | readonly string[]) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return paragraphs.map((paragraph) => (
    <p key={paragraph} className="mt-4 text-muted leading-[1.9]">
      {paragraph}
    </p>
  ));
}

export default function ProductPolicyPage({ product, kind }: { product: ProductId; kind: PolicyKind }) {
  const { locale } = useLanguage();
  const copy = productPolicyCopy(product, kind, locale);
  const meta = productPolicyMeta[product];
  const otherKind = kind === "privacy" ? "legal" : "privacy";
  const otherHref = otherKind === "privacy" ? meta.privacyPath : meta.legalPath;
  const isZh = locale === "zh" || locale === "zh-tw";
  const otherLabel = isZh
    ? otherKind === "privacy" ? "查看隐私政策" : "查看法律条款"
    : otherKind === "privacy" ? "View privacy policy" : "View legal terms";
  const tocLabel = isZh ? "文档目录" : "Contents";

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
        <span className="eyebrow">{meta.name}</span>
        <h1 className="mt-7 text-[clamp(2.15rem,3.8vw,3.65rem)] leading-[1.12] tracking-[-0.035em] font-medium text-warm-gradient max-w-4xl">
          {copy.title}
        </h1>
        <p className="mt-8 text-lg md:text-xl leading-[1.85] text-muted max-w-4xl">{copy.intro}</p>
        <p className="mt-6 text-sm text-[var(--faint)]">{copy.updated}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={meta.productPath} className="rounded-full bg-[#e6dccd] text-[#171410] px-5 py-3 text-sm font-medium hover-lift">{copy.back}</Link>
          <Link href={otherHref} className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{otherLabel}</Link>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[17rem_1fr] gap-10 lg:gap-16 items-start">
            <aside className="lg:sticky lg:top-24 rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6">
              <h2 className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{tocLabel}</h2>
              <nav className="mt-5 flex flex-col gap-3 text-sm text-muted">
                {copy.sections.map((section, index) => (
                  <a key={section.title} href={`#section-${index + 1}`} className="hover:text-foreground transition-colors leading-relaxed">
                    {String(index + 1).padStart(2, "0")} · {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="max-w-4xl border-t border-white/[0.07]">
              {copy.sections.map((section, index) => (
                <article id={`section-${index + 1}`} key={section.title} className="scroll-mt-28 grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-5 py-10 border-b border-white/[0.07]">
                  <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-xl md:text-2xl tracking-[-0.03em] font-medium">{section.title}</h2>
                    {renderBody(section.body)}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-5 space-y-3 text-muted leading-[1.8]">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-[0.72em] h-1.5 w-1.5 rounded-full bg-[var(--faint)] shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
