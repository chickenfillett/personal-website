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
  kind: "dust" | "streak" | "facet";
  length: number;
  angle: number;
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
      kind: Math.random() > 0.86 ? "facet" : Math.random() > 0.58 ? "streak" : "dust",
      length: 12 + Math.random() * 46,
      angle: -0.9 + Math.random() * 0.34,
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

    const drawOrbit = (time: number, index: number) => {
      const phase = time * 0.00012 + index * 1.7;
      const cx = width * (0.34 + Math.sin(phase) * 0.08);
      const cy = height * (0.42 + Math.cos(phase * 0.8) * 0.05);
      const rx = width * (0.34 + index * 0.045);
      const ry = height * (0.1 + index * 0.018);
      const start = -0.25 * Math.PI + Math.sin(phase) * 0.18;
      const end = start + Math.PI * (0.92 + index * 0.12);
      const gradient = context.createLinearGradient(cx - rx, cy, cx + rx, cy);
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(0.42, "rgba(114, 167, 255, 0.16)");
      gradient.addColorStop(0.7, "rgba(110, 231, 210, 0.09)");
      gradient.addColorStop(1, "transparent");

      context.save();
      context.globalAlpha = reducedMotion ? 0.08 : 0.18 - index * 0.025;
      context.strokeStyle = gradient;
      context.lineWidth = 0.8;
      context.translate(cx, cy);
      context.rotate(-0.22 + index * 0.08);
      context.beginPath();
      context.ellipse(0, 0, rx, ry, 0, start, end);
      context.stroke();
      context.restore();
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
      for (let i = 0; i < 3; i += 1) drawOrbit(time, i);

      context.globalAlpha = reducedMotion ? 0.1 : 0.14;
      context.strokeStyle = "rgba(150, 190, 255, 0.18)";
      context.lineWidth = 1;
      for (let i = 0; i < 4; i += 1) {
        const y = height * (0.18 + i * 0.18) + Math.sin(time * 0.00022 + i) * 18;
        context.beginPath();
        context.moveTo(width * -0.05, y);
        context.bezierCurveTo(width * 0.25, y - 42, width * 0.64, y + 58, width * 1.06, y - 26);
        context.stroke();
      }

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

        if (particle.kind === "streak") {
          const length = particle.length * depth;
          context.globalAlpha *= 0.64;
          context.strokeStyle = `hsla(${particle.hue}, 92%, 72%, 0.82)`;
          context.lineWidth = Math.max(0.45, particle.size * 0.42);
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(particle.x + Math.cos(particle.angle) * length, particle.y + Math.sin(particle.angle) * length);
          context.stroke();
        } else if (particle.kind === "facet") {
          const size = particle.size * depth * 2.4;
          context.save();
          context.translate(particle.x, particle.y);
          context.rotate(particle.angle + Math.sin(particle.phase) * 0.18);
          context.fillRect(-size * 0.5, -size * 0.5, size, size);
          context.restore();
        } else {
          context.beginPath();
          context.arc(particle.x, particle.y, particle.size * depth, 0, Math.PI * 2);
          context.fill();
        }
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
