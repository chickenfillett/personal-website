"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function DeskHavenPage() {
  const { locale } = useLanguage();

  const copy = locale === "zh"
    ? {
        eyebrow: "DeskHaven / 桌面文件避风港",
        title: "让混乱桌面重新变成一个安静的工作表面。",
        intro: "DeskHaven 是正在开发中的 Windows 桌面整理工具。仓库里目前还没有真实截图和正式图标，所以这个页面不会伪造界面，只先展示产品方向和页面结构。",
        status: "开发中",
        contact: "获取开发更新",
        promiseTitle: "桌面不是垃圾桶，而是工作空间。",
        promise: "很多人的桌面会不断堆积截图、安装包、导出文件、临时文档和半成品。DeskHaven 的目标不是制造一个复杂的文件管理系统，而是给这些文件一个安全、可恢复、低打扰的暂存空间。",
        principles: [
          ["安全归拢", "把散落文件放进可理解的位置，而不是让它们突然消失。"],
          ["尊重桌面习惯", "围绕真实 Windows 桌面使用习惯设计，而不是套一个通用云盘逻辑。"],
          ["低负担整理", "整理应该是顺手发生的，不应该变成每天必须维护的新系统。"],
          ["可找回", "用户必须知道文件去了哪里，也能轻松取回来。"],
        ],
      }
    : {
        eyebrow: "DeskHaven / Desktop File Haven",
        title: "Turn a messy desktop back into a calm working surface.",
        intro: "DeskHaven is an in-development Windows desktop organization tool. The repository does not contain real screenshots or a final icon yet, so this page avoids fake UI and presents the product direction honestly.",
        status: "In development",
        contact: "Get development updates",
        promiseTitle: "The desktop is not a trash can. It is a working surface.",
        promise: "Desktops accumulate screenshots, installers, exports, temporary documents, and unfinished drafts. DeskHaven is not meant to become a heavy file-management system; it gives loose files a safe, recoverable, low-friction place to land.",
        principles: [
          ["Safe gathering", "Move loose files into understandable places instead of making them disappear."],
          ["Respect desktop habits", "Designed around real Windows desktop behavior, not generic cloud-drive logic."],
          ["Low-burden organization", "Cleaning should happen naturally, not become a new daily system to maintain."],
          ["Recoverable", "Users should know where files went and how to bring them back."],
        ],
      };

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="product-page-grid">
          <div className="animate-fade-in">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h1 className="mt-7 text-[clamp(3rem,7vw,6rem)] leading-[0.94] tracking-[-0.075em] font-medium text-warm-gradient">
              {copy.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-[1.75] text-muted max-w-2xl">{copy.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-muted">{copy.status}</span>
              <Link href="/contact" className="rounded-full bg-[#e6dccd] text-[#171410] px-5 py-3 text-sm font-medium hover-lift">{copy.contact}</Link>
              <Link href="/products" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">Products</Link>
            </div>
          </div>

          <div className="screen-shell rounded-[2rem] p-6 min-h-[520px] grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] relative overflow-hidden">
                <div className="absolute top-4 left-4 w-10 h-2 rounded-full bg-white/10" />
                <div className="absolute bottom-4 left-4 right-4 h-1.5 rounded-full bg-[#b4835c]/25" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">Product promise</span>
        <h2 className="mt-7 text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.07em] font-medium max-w-4xl">{copy.promiseTitle}</h2>
        <p className="mt-7 text-lg leading-[1.8] text-muted max-w-3xl">{copy.promise}</p>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-white/[0.07]">
          {copy.principles.map(([title, body], index) => (
            <div key={title} className="min-h-[260px] p-6 border-r border-b border-white/[0.07] bg-white/[0.012]">
              <span className="text-xs text-[var(--faint)] tracking-[0.14em]">0{index + 1}</span>
              <h3 className="mt-16 text-xl tracking-[-0.045em] font-medium">{title}</h3>
              <p className="mt-4 text-sm leading-[1.7] text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
