"use client";

import { type Locale, useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";
import { commerceLabels } from "@/lib/productCommerce";
import Link from "./TransitionLink";

const redditUrl = "https://www.reddit.com/user/Chickenfillet_dev/";

const footerNavigationCopy: Record<Locale, { privacy: string; websitePrivacy: string; reddit: string }> = {
  zh: { privacy: "隐私政策", websitePrivacy: "网站隐私政策", reddit: "Reddit" },
  "zh-tw": { privacy: "隱私政策", websitePrivacy: "網站隱私政策", reddit: "Reddit" },
  en: { privacy: "Privacy", websitePrivacy: "Website privacy", reddit: "Reddit" },
  ja: { privacy: "プライバシー", websitePrivacy: "ウェブサイトのプライバシー", reddit: "Reddit" },
  ko: { privacy: "개인정보 보호", websitePrivacy: "웹사이트 개인정보 처리방침", reddit: "Reddit" },
  fr: { privacy: "Confidentialité", websitePrivacy: "Confidentialité du site", reddit: "Reddit" },
  de: { privacy: "Datenschutz", websitePrivacy: "Website-Datenschutz", reddit: "Reddit" },
  es: { privacy: "Privacidad", websitePrivacy: "Privacidad del sitio web", reddit: "Reddit" },
  ru: { privacy: "Конфиденциальность", websitePrivacy: "Конфиденциальность сайта", reddit: "Reddit" },
  pt: { privacy: "Privacidade", websitePrivacy: "Privacidade do site", reddit: "Reddit" },
};

const footerLinkClass = "hover:text-foreground transition-colors";

export default function Footer() {
  const { locale } = useLanguage();
  const { footer } = getSiteCopy(locale);
  const labels = commerceLabels(locale);
  const navigation = footerNavigationCopy[locale] ?? footerNavigationCopy.en;

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr_1fr] gap-x-10 gap-y-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-foreground font-medium tracking-tight">SoloCraft</div>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">{footer.subtitle}</p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--faint)]">{footer.studio}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link className={footerLinkClass} href="/about">{footer.about}</Link>
              <Link className={footerLinkClass} href="/contact">{footer.contact}</Link>
              <a className={footerLinkClass} href={redditUrl} target="_blank" rel="noreferrer">{navigation.reddit}</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--faint)]">{footer.products}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link className={footerLinkClass} href="/products/energyflow">EnergyFlow</Link>
              <Link className={footerLinkClass} href="/products/deskhaven">DeskHaven</Link>
              <Link className={footerLinkClass} href="/products/adhd-focus-timer">ADHD Focus Timer</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--faint)]">{navigation.privacy}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link className={footerLinkClass} href="/privacy">{navigation.websitePrivacy}</Link>
              <Link className={footerLinkClass} href="/products/energyflow/privacy">EnergyFlow {labels.privacy}</Link>
              <Link className={footerLinkClass} href="/products/deskhaven/privacy">DeskHaven {labels.privacy}</Link>
              <Link className={footerLinkClass} href="/products/adhd-focus-timer/privacy">ADHD Focus Timer {labels.privacy}</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--faint)]">{footer.legal}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link className={footerLinkClass} href="/products/energyflow/legal">EnergyFlow {labels.legal}</Link>
              <Link className={footerLinkClass} href="/products/deskhaven/legal">DeskHaven {labels.legal}</Link>
              <Link className={footerLinkClass} href="/products/adhd-focus-timer/legal">ADHD Focus Timer {labels.legal}</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] text-xs text-[var(--faint)]">
          &copy; {new Date().getFullYear()} SoloCraft. {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
