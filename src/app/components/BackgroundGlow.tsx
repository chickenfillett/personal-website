"use client";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute left-[-18%] top-[8%] h-[28rem] w-[82rem] opacity-[0.16] blur-[92px] rotate-[-18deg]"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(116,167,255,.55) 42%, rgba(105,230,197,.3) 58%, transparent 100%)" }}
      />
      <div
        className="absolute right-[-22%] top-[18%] h-[24rem] w-[78rem] opacity-[0.12] blur-[110px] rotate-[22deg]"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(149,121,255,.4) 44%, rgba(116,167,255,.32) 60%, transparent 100%)" }}
      />
      <div
        className="absolute left-[8%] bottom-[-10%] h-[18rem] w-[90rem] opacity-[0.10] blur-[120px] rotate-[-7deg]"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(105,230,197,.34) 48%, rgba(226,232,240,.14) 64%, transparent 100%)" }}
      />
    </div>
  );
}
