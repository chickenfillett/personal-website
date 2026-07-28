"use client";

import { PageHero } from "../components/PageHero";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import { EditorialGrid } from "../components/layout/EditorialGrid";
import { SectionShell } from "../components/layout/SectionShell";

export default function Contact() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);

  return (
    <div className="flex flex-col">
      <PageHero eyebrow="SoloCraft" title={copy.contact.title} intro={copy.contact.intro} />

      <SectionShell size="medium" bordered>
        <EditorialGrid>
          <div className="contact-section-label">
          <span className="eyebrow">{copy.contact.infoTitle}</span>
          </div>
          <div className="surface-info contact-email-panel">
            <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-3 sm:gap-8">
              <span className="text-sm text-[var(--faint)]">{copy.contact.email}</span>
              <a
                href="mailto:3371436706@qq.com"
                className="text-foreground hover:text-muted transition-colors duration-200"
              >
                3371436706@qq.com
              </a>
            </div>
          </div>
        </EditorialGrid>
      </SectionShell>
    </div>
  );
}
