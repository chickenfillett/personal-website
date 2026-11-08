"use client";
// Inspired by React Bits "Click Spark" (https://reactbits.dev) — MIT + Commons Clause.
// prefers-reduced-motion: no sparks emitted, content stays fully visible.
import { useCallback, useRef, useState } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";
import styles from "./ClickSpark.module.css";

type Spark = { id: number; x: number; y: number; angle: number };

export interface ClickSparkProps {
  children?: ReactNode;
  className?: string;
  sparkColor?: string;
}

export function ClickSpark({ children, className, sparkColor }: ClickSparkProps) {
  const reduced = useReducedMotion();
  const [sparks, setSparks] = useState<Spark[]>([]);
  const seq = useRef(0);
  const onClick = (e: MouseEvent<HTMLSpanElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const batch: Spark[] = Array.from({ length: 8 }, (_, i) => ({
      id: ++seq.current,
      x,
      y,
      angle: (i / 8) * Math.PI * 2,
    }));
    setSparks((prev) => [...prev, ...batch]);
  };
  const onEnd = useCallback((id: number) => {
    setSparks((prev) => prev.filter((s) => s.id !== id));
  }, []);
  const color = sparkColor ?? "var(--accent, #83AEDD)";
  return (
    <span onClick={onClick} className={[styles.wrap, className].filter(Boolean).join(" ")}>
      {children}
      {sparks.map((s) => (
        <span
          key={s.id}
          className={styles.spark}
          onAnimationEnd={() => onEnd(s.id)}
          style={
            {
              left: s.x,
              top: s.y,
              "--spark-color": color,
              "--spark-dx": `${Math.cos(s.angle) * 38}px`,
              "--spark-dy": `${Math.sin(s.angle) * 38}px`,
            } as CSSProperties
          }
        />
      ))}
    </span>
  );
}
