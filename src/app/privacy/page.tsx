"use client";

import { LegalDocumentHero, LegalDocumentSections } from "../components/LegalDocument";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import { SectionShell } from "../components/layout/SectionShell";

export default function Privacy() {
  const { locale } = useLanguage();
  const text = getSiteCopy(locale).system.websitePrivacy;

  return (
    <div className="flex flex-col">
      <LegalDocumentHero eyebrow="SoloCraft" title={text.title} intro={text.intro} updated={text.updated} />

      <SectionShell size="medium" bordered>
        <LegalDocumentSections sections={text.sections.map(([title, body]) => ({ title, body }))} />
      </SectionShell>
    </div>
  );
}
