"use client";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute left-[-12%] top-[-18%] w-[640px] h-[640px] rounded-full opacity-[0.10] blur-[150px]"
        style={{ background: "radial-gradient(circle, #74a7ff 0%, transparent 68%)" }}
      />
      <div
        className="absolute right-[-12%] top-[-10%] w-[620px] h-[620px] rounded-full opacity-[0.07] blur-[150px]"
        style={{ background: "radial-gradient(circle, #7d8668 0%, transparent 70%)" }}
      />
      <div
        className="absolute left-[25%] bottom-[-24%] w-[760px] h-[760px] rounded-full opacity-[0.06] blur-[180px]"
        style={{ background: "radial-gradient(circle, #6f7b82 0%, transparent 70%)" }}
      />
    </div>
  );
}
