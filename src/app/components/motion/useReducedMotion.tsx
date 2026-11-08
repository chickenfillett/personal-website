"use client";
// Inspired by React Bits (https://reactbits.dev) — MIT + Commons Clause.
// Shared helper: prefers-reduced-motion detection, content stays fully visible.
import { useEffect, useState } from "react";

/** Returns true when the user prefers reduced motion. Never hide or fade content. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}
