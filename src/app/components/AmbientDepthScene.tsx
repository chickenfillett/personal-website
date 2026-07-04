"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  hue: number;
  size: number;
  phase: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function AmbientDepthScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let resizeFrame = 0;
    let lastTime = performance.now();
    let particles: Particle[] = [];
    const reducedMotion = prefersReducedMotion();

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.018,
      vy: -0.018 - Math.random() * 0.03,
      hue: Math.random() > 0.58 ? 170 : Math.random() > 0.35 ? 214 : 258,
      size: 0.45 + Math.random() * 1.65,
      phase: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const nextWidth = Math.max(1, rect.width || window.innerWidth);
      const nextHeight = Math.max(1, rect.height || window.innerHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      const nextCanvasWidth = Math.round(nextWidth * dpr);
      const nextCanvasHeight = Math.round(nextHeight * dpr);
      if (canvas.width === nextCanvasWidth && canvas.height === nextCanvasHeight) return;

      width = nextWidth;
      height = nextHeight;
      canvas.width = nextCanvasWidth;
      canvas.height = nextCanvasHeight;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = reducedMotion ? 34 : width < 760 ? 58 : 118;
      particles = Array.from({ length: targetCount }, createParticle);
    };

    const scheduleResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(resize);
    };

    const drawBeam = (
      gradientLine: [number, number, number, number],
      color: string,
      alpha: number,
      offset: number,
    ) => {
      const gradient = context.createLinearGradient(...gradientLine);
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(0.42, color);
      gradient.addColorStop(1, "transparent");
      context.globalAlpha = alpha;
      context.fillStyle = gradient;
      context.beginPath();
      context.moveTo(width * (0.04 + offset), height * 0.08);
      context.bezierCurveTo(width * 0.32, height * 0.2, width * 0.58, height * 0.72, width * (1.05 + offset), height * 0.58);
      context.lineTo(width * (1.08 + offset), height * 0.8);
      context.bezierCurveTo(width * 0.64, height * 0.93, width * 0.28, height * 0.46, width * (-0.04 + offset), height * 0.24);
      context.closePath();
      context.fill();
    };

    const render = (time: number) => {
      const delta = clamp(time - lastTime, 8, 34);
      lastTime = time;
      const pointer = pointerRef.current;
      pointer.x += (pointer.tx - pointer.x) * 0.045;
      pointer.y += (pointer.ty - pointer.y) * 0.045;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "screen";

      const drift = reducedMotion ? 0 : Math.sin(time * 0.00018) * 0.08;
      drawBeam([0, 0, width, height], "rgba(85, 145, 255, 0.12)", 0.72, drift);
      drawBeam([width, 0, 0, height], "rgba(90, 235, 204, 0.09)", 0.56, -drift * 0.7);

      for (const particle of particles) {
        if (!reducedMotion) {
          particle.x += (particle.vx * delta * (0.3 + particle.z) + pointer.x * 0.018 * particle.z);
          particle.y += (particle.vy * delta * (0.4 + particle.z) + pointer.y * 0.012 * particle.z);
          particle.phase += 0.008 * delta;
        }

        if (particle.y < -20 || particle.x < -40 || particle.x > width + 40) {
          Object.assign(particle, createParticle(), { y: height + Math.random() * 30 });
        }

        const depth = 0.35 + particle.z * 0.95;
        const twinkle = 0.46 + Math.sin(particle.phase) * 0.18;
        context.globalAlpha = (0.15 + particle.z * 0.33) * twinkle;
        context.fillStyle = `hsla(${particle.hue}, 92%, 72%, 1)`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size * depth, 0, Math.PI * 2);
        context.fill();
      }

      context.globalCompositeOperation = "source-over";
      context.globalAlpha = 1;
      if (!reducedMotion) frame = requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current.tx = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerRef.current.ty = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    resize();
    scheduleResize();
    const observer = new ResizeObserver(scheduleResize);
    observer.observe(canvas);
    window.addEventListener("resize", scheduleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeFrame);
      observer.disconnect();
      window.removeEventListener("resize", scheduleResize);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="ambient-depth-scene" aria-hidden="true">
      <div className="ambient-depth-grid" />
      <div className="ambient-depth-plane ambient-depth-plane-a" />
      <div className="ambient-depth-plane ambient-depth-plane-b" />
      <canvas ref={canvasRef} className="ambient-depth-canvas" />
      <div className="ambient-depth-vignette" />
    </div>
  );
}
