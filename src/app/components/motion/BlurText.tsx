"use client";
// Inspired by React Bits "Blur Text" (motion@12) — MIT + Commons Clause.
// prefers-reduced-motion: no per-char animation, text stays fully visible.
// Reimplemented from scratch with plain CSS @keyframes + IntersectionObserver (no motion library).
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useReducedMotion } from "./useReducedMotion";
import styles from "./BlurText.module.css";

export interface BlurTextProps {
  text: string;
  className?: string;
  /** Base delay in ms; each character adds a small stagger. */
  delay?: number;
}

export function BlurText({ text, className, delay = 0 }: BlurTextProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (reduced || !ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [reduced]);
  return (
    <span ref={ref} className={[styles.root, className].filter(Boolean).join(" ")} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={[styles.char, shown && !reduced ? styles.go : ""].filter(Boolean).join(" ")}
          style={{ "--d": `${delay + i * 32}ms` } as CSSProperties}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}
