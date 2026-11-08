"use client";
// Inspired by React Bits "Scroll Stack" (https://reactbits.dev) — MIT + Commons Clause.
// prefers-reduced-motion: no stagger animation, every item stays fully visible.
import { Children, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";
import styles from "./ScrollStack.module.css";

export interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

export function ScrollStack({ children, className }: ScrollStackProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (reduced || !ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [reduced]);
  const items = Children.toArray(children);
  return (
    <div ref={ref} className={[styles.stack, className].filter(Boolean).join(" ")}>
      {items.map((child, i) => (
        <div
          key={i}
          className={[styles.item, visible && !reduced ? styles.enter : ""].filter(Boolean).join(" ")}
          style={{ "--i": String(i) } as CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
