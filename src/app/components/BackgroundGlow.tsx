"use client";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow 1 - 蓝灰色调 */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px] animate-glow-1"
        style={{
          background: "radial-gradient(circle, #2a3a4a 0%, transparent 70%)",
        }}
      />
      {/* Glow 2 - 青灰色调 */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[100px] animate-glow-2"
        style={{
          background: "radial-gradient(circle, #2a4a3a 0%, transparent 70%)",
        }}
      />
      {/* Glow 3 - 紫灰色调 */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.03] blur-[140px] animate-glow-3"
        style={{
          background: "radial-gradient(circle, #3a2a4a 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
