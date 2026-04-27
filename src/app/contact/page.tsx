"use client";

import { useLanguage } from "@/lib/i18n/context";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24">
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
          {t("contact.intro.title")}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          {t("contact.intro.description")}
        </p>
      </section>

      {/* Contact Info */}
      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider">
            {t("contact.info.title")}
          </h2>
          <div className="mt-8 space-y-4">
            <div>
              <span className="text-muted text-sm">{t("contact.info.email")}</span>
              <p className="mt-1 text-foreground">
                <a
                  href="mailto:3371436706@qq.com"
                  className="hover:text-muted transition-colors duration-200"
                >
                  3371436706@qq.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
