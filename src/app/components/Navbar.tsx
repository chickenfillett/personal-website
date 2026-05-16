"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Navbar() {
  const { locale, toggleLocale, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-[1200px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <Link href="/" className="text-foreground font-medium tracking-tight">
          Chicken Fillet
        </Link>
        <ul className="flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLocale}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200 border border-white/10 px-3 py-1 hover:border-white/20"
            >
              {locale === "zh" ? "English" : "中文"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
