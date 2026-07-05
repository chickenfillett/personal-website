"use client";

import { LegalDocumentHero, LegalDocumentSections } from "../components/LegalDocument";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";

export default function Privacy() {
  const { locale } = useLanguage();
  const text = getSiteCopy(locale).system.websitePrivacy;

  return (
    <div className="flex flex-col">
      <LegalDocumentHero eyebrow="SoloCraft" title={text.title} intro={text.intro} updated={text.updated} />

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-12 md:py-20">
          <LegalDocumentSections sections={text.sections.map(([title, body]) => ({ title, body }))} />
        </div>
      </section>
    </div>
  );
}
