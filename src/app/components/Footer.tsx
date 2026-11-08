"use client";

import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy, navCopy } from "@/content/siteContent";
import Link from "./TransitionLink";
import { SiteContainer } from "./layout/SiteContainer";

const redditUrl = "https://www.reddit.com/user/Chickenfillet_dev/";
const githubUrl = "https://github.com/chickenfillett";
const contactEmail = "3371436706@qq.com";
const footerLinkClass = "hover:text-foreground transition-colors";

export default function Footer() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const labels = navCopy[locale] ?? navCopy.en;
  const subtitle = copy.footer.subtitle;
  const copyright = copy.footer.copyright;
  const privacyLabel = copy.common.privacy;
  const privacyTitle = copy.system.websitePrivacy.title;

  return (
    <footer className="site-footer">
      <SiteContainer>
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <div className="text-foreground font-medium tracking-tight">Chicken Fillet</div>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">{subtitle}</p>
          </div>

          <div className="site-footer-links">
            <div className="site-footer-group">
              <h3>{labels.work}</h3>
              <div>
                <Link className={footerLinkClass} href="/work">{labels.work}</Link>
                <Link className={footerLinkClass} href="/products/energyflow" data-analytics="product_view">EnergyFlow</Link>
                <Link className={footerLinkClass} href="/products/deskhaven" data-analytics="product_view">DeskHaven</Link>
                <Link className={footerLinkClass} href="/products/adhd-focus-timer" data-analytics="product_view">ADHD Focus Timer</Link>
              </div>
            </div>

            <div className="site-footer-group">
              <h3>{labels.now}</h3>
              <div>
                <Link className={footerLinkClass} href="/now">{labels.now}</Link>
              </div>
            </div>

            <div className="site-footer-group">
              <h3>GitHub</h3>
              <div>
                <a className={footerLinkClass} href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>

            <div className="site-footer-group">
              <h3>{labels.contact}</h3>
              <div>
                <Link className={footerLinkClass} href="/contact" data-analytics="contact_click">{labels.contact}</Link>
                <a className={footerLinkClass} href={`mailto:${contactEmail}`}>{contactEmail}</a>
                <a className={footerLinkClass} href={redditUrl} target="_blank" rel="noreferrer">Reddit</a>
              </div>
            </div>

            <div className="site-footer-group">
              <h3>{privacyLabel}</h3>
              <div>
                <Link className={footerLinkClass} href="/privacy">{privacyTitle}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer-meta">
          {copyright}
        </div>
      </SiteContainer>
    </footer>
  );
}
