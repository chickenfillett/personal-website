"use client";

import Link from "next/link";
import { supportedLocales, useLanguage } from "@/lib/i18n/context";

const navCopy = {
  zh: { home: "首页", about: "关于", products: "产品", contact: "联系" },
  en: { home: "Home", about: "About", products: "Products", contact: "Contact" },
  ja: { home: "ホーム", about: "概要", products: "製品", contact: "連絡" },
  ko: { home: "홈", about: "소개", products: "제품", contact: "문의" },
  fr: { home: "Accueil", about: "À propos", products: "Produits", contact: "Contact" },
  de: { home: "Start", about: "Über", products: "Produkte", contact: "Kontakt" },
  es: { home: "Inicio", about: "Acerca", products: "Productos", contact: "Contacto" },
} as const;

export default function Navbar() {
  const { locale, setLocale } = useLanguage();
  const labels = navCopy[locale] ?? navCopy.en;

  const navLinks = [
    { href: "/", label: labels.home },
    { href: "/about", label: labels.about },
    { href: "/products", label: labels.products },
    { href: "/contact", label: labels.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <nav className="max-w-[1180px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-baseline gap-2 text-foreground tracking-tight shrink-0">
          <span className="font-semibold">SoloCraft</span>
          <span className="hidden sm:inline text-xs text-muted tracking-normal">by Chicken Fillet</span>
        </Link>

        <div className="flex items-center gap-3 md:gap-7 text-sm text-muted">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden sm:inline hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/products" className="sm:hidden hover:text-foreground transition-colors">
            {labels.products}
          </Link>
          <select
            value={locale}
            onChange={(event) => setLocale(event.target.value as typeof locale)}
            aria-label="Select language"
            className="bg-transparent border border-white/10 px-3 py-2 text-sm text-muted hover:text-foreground hover:border-white/20 transition-colors outline-none"
          >
            {supportedLocales.map((item) => (
              <option key={item.code} value={item.code} className="bg-background text-foreground">
                {item.nativeName}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}
