"use client";
// Inspired by React Bits "Magnet" (https://reactbits.dev) — MIT + Commons Clause.
// prefers-reduced-motion: no magnetic pull, content stays fully visible.
import type { MouseEvent, ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";
import styles from "./Magnet.module.css";

export interface MagnetProps {
  children: ReactNode;
  className?: string;
  /** Pull factor, 0..1. */
  strength?: number;
}

export function Magnet({ children, className, strength = 0.3 }: MagnetProps) {
  const reduced = useReducedMotion();
  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    if (reduced) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = (e: MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.transform = "translate(0, 0)";
  };
  return (
    <span
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={[styles.magnet, reduced ? styles.static : "", className].filter(Boolean).join(" ")}
    >
      {children}
    </span>
  );
}
