"use client";

import { PageHero } from "../components/PageHero";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";

export default function Contact() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);

  return (
    <div className="flex flex-col">
      <PageHero eyebrow="SoloCraft" title={copy.contact.title} intro={copy.contact.intro} />

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
          <span className="eyebrow">{copy.contact.infoTitle}</span>
          <div className="mt-10 border-t border-white/10 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-3 sm:gap-8 py-7 border-b border-white/[0.07]">
              <span className="text-sm text-[var(--faint)]">{copy.contact.email}</span>
              <a
                href="mailto:3371436706@qq.com"
                className="text-foreground hover:text-muted transition-colors duration-200"
              >
                3371436706@qq.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
