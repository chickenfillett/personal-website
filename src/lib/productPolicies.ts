import type { Locale } from "@/lib/i18n/context";
import type { ProductId } from "@/lib/productCommerce";
import { productPricing } from "@/lib/productCommerce";
import { productPolicyContent } from "@/lib/siteContent";

export type PolicyKind = "privacy" | "legal";
export type PolicySection = { title: string; body: string | readonly string[]; bullets?: readonly string[] };
export type ProductPolicyCopy = { title: string; intro: string; updated: string; sections: PolicySection[]; back: string };

function sections(titles: readonly string[], bodies: readonly (readonly string[])[], bullets?: readonly string[]): PolicySection[] {
  return titles.map((title, index) => ({
    title,
    body: bodies[index] ?? [],
    bullets: index === 1 ? bullets : undefined,
  }));
}

function pack(locale: Locale) {
  return productPolicyContent.localized[locale] ?? productPolicyContent.localized.en;
}

function privacySections(product: ProductId, locale: Locale): PolicySection[] {
  const text = pack(locale);
  const name = productPolicyContent.productNames[product];
  return sections(
    text.privacyTitles,
    text.privacyBodies(name, text.topic[product], text.sensitive[product]),
    text.privacyBullets,
  );
}

function legalSections(product: ProductId, locale: Locale): PolicySection[] {
  const text = pack(locale);
  const name = productPolicyContent.productNames[product];
  const pricing = productPricing(product, locale);
  return sections(text.legalTitles, text.legalBodies(name, pricing.summary, pricing.trial));
}

export function productPolicyCopy(product: ProductId, kind: PolicyKind, locale: Locale): ProductPolicyCopy {
  const text = pack(locale);
  const name = productPolicyContent.productNames[product];

  if (kind === "privacy") {
    return {
      title: text.privacyTitle(name),
      intro: text.privacyIntro(name, text.topic[product]),
      updated: text.updated,
      back: text.back(name),
      sections: privacySections(product, locale),
    };
  }

  return {
    title: text.legalTitle(name),
    intro: text.legalIntro(name),
    updated: text.updated,
    back: text.back(name),
    sections: legalSections(product, locale),
  };
}
