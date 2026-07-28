"use client";

import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import { commerceLabels } from "@/lib/productCommerce";
import Link from "./TransitionLink";
import { SiteContainer } from "./layout/SiteContainer";

const redditUrl = "https://www.reddit.com/user/Chickenfillet_dev/";

const footerLinkClass = "hover:text-foreground transition-colors";

export default function Footer() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const { footer } = copy;
  const labels = commerceLabels(locale);

  return (
    <footer className="site-footer">
      <SiteContainer>
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <div className="text-foreground font-medium tracking-tight">SoloCraft</div>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">{footer.subtitle}</p>
          </div>

          <div className="site-footer-links">
            <div className="site-footer-group">
              <h3>{footer.studio}</h3>
              <div>
              <Link className={footerLinkClass} href="/about">{footer.about}</Link>
              <Link className={footerLinkClass} href="/contact">{footer.contact}</Link>
              <a className={footerLinkClass} href={redditUrl} target="_blank" rel="noreferrer">Reddit</a>
              </div>
            </div>

            <div className="site-footer-group">
              <h3>{footer.products}</h3>
              <div>
              <Link className={footerLinkClass} href="/products/energyflow">EnergyFlow</Link>
              <Link className={footerLinkClass} href="/products/deskhaven">DeskHaven</Link>
              <Link className={footerLinkClass} href="/products/adhd-focus-timer">ADHD Focus Timer</Link>
              </div>
            </div>

            <div className="site-footer-group">
              <h3>{footer.privacy}</h3>
              <div>
              <Link className={footerLinkClass} href="/privacy">{copy.system.websitePrivacy.title}</Link>
              <Link className={footerLinkClass} href="/products/energyflow/privacy">EnergyFlow {labels.privacy}</Link>
              <Link className={footerLinkClass} href="/products/deskhaven/privacy">DeskHaven {labels.privacy}</Link>
              <Link className={footerLinkClass} href="/products/adhd-focus-timer/privacy">ADHD Focus Timer {labels.privacy}</Link>
              </div>
            </div>

            <div className="site-footer-group">
              <h3>{footer.legal}</h3>
              <div>
              <Link className={footerLinkClass} href="/products/energyflow/legal">EnergyFlow {labels.legal}</Link>
              <Link className={footerLinkClass} href="/products/deskhaven/legal">DeskHaven {labels.legal}</Link>
              <Link className={footerLinkClass} href="/products/adhd-focus-timer/legal">ADHD Focus Timer {labels.legal}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer-meta">
          &copy; {new Date().getFullYear()} SoloCraft.
        </div>
      </SiteContainer>
    </footer>
  );
}
