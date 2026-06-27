"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Footer() {
  const { locale } = useLanguage();

  const copy = locale === "zh"
    ? {
        title: "SoloCraft",
        subtitle: "Chicken Fillet 的独立桌面软件工作室。",
        studio: "工作室",
        products: "产品",
        legal: "法务",
        about: "关于",
        contact: "联系",
        privacy: "隐私政策",
        energyflow: "EnergyFlow",
        adhd: "ADHD Focus Timer",
        deskhaven: "DeskHaven",
        copyright: "安静、克制、隐私优先的桌面工具。",
      }
    : {
        title: "SoloCraft",
        subtitle: "Independent desktop software by Chicken Fillet.",
        studio: "Studio",
        products: "Products",
        legal: "Legal",
        about: "About",
        contact: "Contact",
        privacy: "Privacy Policy",
        energyflow: "EnergyFlow",
        adhd: "ADHD Focus Timer",
        deskhaven: "DeskHaven",
        copyright: "Quiet, restrained, privacy-first desktop tools.",
      };

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="text-foreground font-medium tracking-tight">{copy.title}</div>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">{copy.subtitle}</p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--faint)]">{copy.studio}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link className="hover:text-foreground transition-colors" href="/about">{copy.about}</Link>
              <Link className="hover:text-foreground transition-colors" href="/contact">{copy.contact}</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--faint)]">{copy.products}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link className="hover:text-foreground transition-colors" href="/products/energyflow">{copy.energyflow}</Link>
              <Link className="hover:text-foreground transition-colors" href="/products/deskhaven">{copy.deskhaven}</Link>
              <Link className="hover:text-foreground transition-colors" href="/products/adhd-focus-timer">{copy.adhd}</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-[var(--faint)]">{copy.legal}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <Link className="hover:text-foreground transition-colors" href="/privacy">{copy.privacy}</Link>
              <Link className="hover:text-foreground transition-colors" href="/products/energyflow/privacy">EnergyFlow Privacy</Link>
              <Link className="hover:text-foreground transition-colors" href="/products/adhd-focus-timer/privacy">ADHD Privacy</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] text-xs text-[var(--faint)]">
          &copy; {new Date().getFullYear()} SoloCraft. {copy.copyright}
        </div>
      </div>
    </footer>
  );
}
