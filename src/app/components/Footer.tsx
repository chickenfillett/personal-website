"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";

export default function Footer() {
  const { locale } = useLanguage();
  const { footer } = getSiteCopy(locale);

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="text-foreground font-medium tracking-tight">SoloCraft</div>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">{footer.subtitle}</p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--faint)]">{footer.studio}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link className="hover:text-foreground transition-colors" href="/about">{footer.about}</Link>
              <Link className="hover:text-foreground transition-colors" href="/contact">{footer.contact}</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--faint)]">{footer.products}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link className="hover:text-foreground transition-colors" href="/products/energyflow">EnergyFlow</Link>
              <Link className="hover:text-foreground transition-colors" href="/products/deskhaven">DeskHaven</Link>
              <Link className="hover:text-foreground transition-colors" href="/products/adhd-focus-timer">ADHD Focus Timer</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--faint)]">{footer.legal}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link className="hover:text-foreground transition-colors" href="/privacy">{footer.privacy}</Link>
              <Link className="hover:text-foreground transition-colors" href="/products/energyflow/privacy">EnergyFlow Privacy</Link>
              <Link className="hover:text-foreground transition-colors" href="/products/adhd-focus-timer/privacy">ADHD Privacy</Link>
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
