"use client";

import { useEffect, useRef, useState } from "react";
import { Locale, supportedLocales, useLanguage } from "@/lib/i18n/context";
import { navCopy } from "@/lib/siteCopy";
import Link from "./TransitionLink";

export default function Navbar() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const labels = navCopy[locale] ?? navCopy.en;
  const currentLocale = supportedLocales.find((item) => item.code === locale) ?? supportedLocales[2];

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const navLinks = [
    { href: "/", label: labels.home },
    { href: "/about", label: labels.about },
    { href: "/products", label: labels.products },
    { href: "/contact", label: labels.contact },
  ];

  const chooseLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setOpen(false);
  };

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

          <div ref={menuRef} className="language-menu">
            <button
              type="button"
              className="language-menu-button"
              aria-label={labels.language}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span>{currentLocale.nativeName}</span>
              <span className="language-menu-chevron" aria-hidden="true">⌄</span>
            </button>
            {open && (
              <div className="language-menu-panel" role="menu">
                {supportedLocales.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={item.code === locale}
                    className={`language-menu-item ${item.code === locale ? "is-active" : ""}`}
                    onClick={() => chooseLocale(item.code)}
                  >
                    <span className="language-menu-code">{item.code.toUpperCase()}</span>
                    <span>{item.nativeName}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
