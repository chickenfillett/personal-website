"use client";

export default function BackgroundGlow() {
  return (
    <div className="ambient-lightfield fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div className="ambient-spectrum ambient-spectrum-a" />
      <div className="ambient-spectrum ambient-spectrum-b" />
      <div className="ambient-spectrum ambient-spectrum-c" />
      <div className="ambient-refraction" />
      <div className="ambient-caustics" />
      <div className="ambient-horizon" />
      <div className="ambient-structure ambient-structure-a" />
      <div className="ambient-structure ambient-structure-b" />
      <div className="ambient-filament ambient-filament-a" />
      <div className="ambient-filament ambient-filament-b" />
      <div className="ambient-prism ambient-prism-a" />
      <div className="ambient-prism ambient-prism-b" />
    </div>
  );
}
