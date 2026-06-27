"use client";

import Link from "next/link";
import SmartScreenshot from "../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { adhdImages, allAdhdImages, allEnergyFlowImages, energyFlowImages } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function Products() {
  const { locale } = useLanguage();
  usePreloadImages([...allEnergyFlowImages(), ...allAdhdImages()]);

  const copy = locale === "zh"
    ? {
        eyebrow: "产品索引",
        title: "每一个产品都有自己的房间。",
        intro: "这里不是拥挤的产品市场，而是 SoloCraft 所有桌面工具的清晰入口。每个产品都有独立页面，用来展示真实截图、功能路径、隐私信息和后续下载入口。",
        status: { preview: "预览", building: "开发中", soon: "即将推出" },
        products: [
          {
            title: "EnergyFlow",
            href: "/products/energyflow",
            category: "职场能量仪表盘",
            description: "3 秒打卡精力，记录工作状态、能量来源与情绪，并用统计分析帮你看清哪些场景消耗或补充精力。",
            status: "预览",
            image: energyFlowImages[locale].quickLog,
          },
          {
            title: "DeskHaven",
            href: "/products/deskhaven",
            category: "桌面文件避风港",
            description: "为混乱桌面提供一个安静、安全、可找回的整理空间。正式截图尚未接入，因此此页会先作为开发中产品页。",
            status: "开发中",
            image: null,
          },
          {
            title: "ADHD Focus Timer",
            href: "/products/adhd-focus-timer",
            category: "低压力专注计时器",
            description: "正向计时、呼吸过渡、想法冰箱和沉浸式专注环境，让进入状态更温和。",
            status: "即将推出",
            image: adhdImages.focus,
          },
        ],
      }
    : {
        eyebrow: "Product index",
        title: "Every product has its own room.",
        intro: "This is not a crowded marketplace. It is the clear product entrance for SoloCraft desktop tools, with each product owning its own page for real screenshots, product flow, privacy information, and future download links.",
        status: { preview: "Preview", building: "In development", soon: "Coming soon" },
        products: [
          {
            title: "EnergyFlow",
            href: "/products/energyflow",
            category: "Workplace energy dashboard",
            description: "Capture energy in seconds, record work state and energy source, then use statistical insight to understand what drains or restores you.",
            status: "Preview",
            image: energyFlowImages[locale].quickLog,
          },
          {
            title: "DeskHaven",
            href: "/products/deskhaven",
            category: "Desktop file haven",
            description: "A quiet, safe, recoverable place for messy desktop files. No real screenshots exist in the repository yet, so the page is treated as in development.",
            status: "In development",
            image: null,
          },
          {
            title: "ADHD Focus Timer",
            href: "/products/adhd-focus-timer",
            category: "Low-pressure focus timer",
            description: "Forward timing, breathing transition, Idea Fridge, and a calm full-screen focus environment for low-resistance sessions.",
            status: "Coming soon",
            image: adhdImages.focus,
          },
        ],
      };

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24 animate-fade-in">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1 className="mt-7 text-[clamp(3rem,7vw,6rem)] leading-[0.94] tracking-[-0.075em] font-medium text-warm-gradient max-w-4xl">
          {copy.title}
        </h1>
        <p className="mt-8 text-lg md:text-xl leading-[1.75] text-muted max-w-3xl">
          {copy.intro}
        </p>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pb-24 md:pb-36">
        <div className="border-t border-white/10">
          {copy.products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="index-row grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr_0.55fr] gap-8 items-center py-10 md:py-12 border-b border-white/[0.07] text-muted"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{product.category}</span>
                <h2 className="mt-4 text-3xl md:text-5xl tracking-[-0.07em] leading-none text-foreground font-medium">
                  {product.title}
                </h2>
                <p className="mt-5 leading-[1.75] max-w-xl">{product.description}</p>
              </div>

              {product.image ? (
                <SmartScreenshot
                  src={product.image}
                  alt={product.title}
                  width={900}
                  height={620}
                  sizes="(max-width: 1024px) 90vw, 520px"
                  frameClassName="shadow-none"
                />
              ) : (
                <div className="screen-shell rounded-[1.75rem] p-5 min-h-[260px] grid grid-cols-3 gap-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] relative overflow-hidden">
                      <div className="absolute top-4 left-4 w-10 h-2 rounded-full bg-white/10" />
                      <div className="absolute bottom-4 left-4 right-4 h-1.5 rounded-full bg-[#b4835c]/25" />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex lg:justify-end">
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--faint)]">
                  {product.status} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
