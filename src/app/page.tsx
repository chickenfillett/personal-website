"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import SmartScreenshot from "./components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { usePreloadImages } from "@/lib/usePreloadImages";
import { adhdImages, allAdhdImages, allEnergyFlowImages, energyFlowImages } from "@/lib/siteAssets";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const lerp = (a: number, b: number, t: number) => a + (b - a, t);
const smoothStep = (edge0: number, edge1: number, x: number) => {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

function mix(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function Home() {
  const { locale } = useLanguage();
  const chapterRefs = useRef<HTMLElement[]>([]);
  const stageRefs = useRef<HTMLElement[]>([]);
  const valuesRef = useRef(new Map<string, number>());

  usePreloadImages([...allEnergyFlowImages(), ...allAdhdImages()]);

  const copy = useMemo(() => {
    const zh = locale === "zh";

    return {
      eyebrow: zh ? "独立桌面软件工作室" : "Independent desktop software studio",
      title: zh ? "为专注工作打造安静的桌面工具。" : "Quiet tools for focused desktop work.",
      intro: zh
        ? "SoloCraft 是 Chicken Fillet 的产品主页。我做的是小而克制的 Windows 桌面软件：记录精力、保护专注、整理桌面，并且尽量不打扰用户。"
        : "SoloCraft is the product home for Chicken Fillet: small, restrained Windows desktop tools for tracking energy, protecting focus, and keeping the desktop calm.",
      primary: zh ? "滑动了解理念" : "Scroll the story",
      secondary: zh ? "查看产品" : "View products",
      contact: zh ? "联系我" : "Contact",
      currentProduct: zh ? "当前产品预览" : "Current product preview",
      notes: zh
        ? [
            ["本地优先", "数据默认留在设备上，除非真的有必要离开。"],
            ["低摩擦", "工具应该在需要时出现，完成后安静退场。"],
            ["克制界面", "不要焦虑徽章，不要假紧迫感，不要让界面大喊大叫。"],
          ]
        : [
            ["Local-first", "Data stays on the device unless there is a clear reason to leave."],
            ["Low-friction", "Tools appear when needed, then step away."],
            ["Calm UI", "No fake urgency, no noisy badges, no anxiety loops."],
          ],
      chapters: zh
        ? [
            {
              id: "energyflow",
              num: "01 / EnergyFlow",
              title: "看清每一天精力流向。",
              body: "3 秒打卡精力，记录等级、状态、来源与心情。它不是另一个工作量表，而是帮你发现会议、任务和节奏如何影响表现。",
              bullets: ["5 级精力等级", "职场场景与能量来源", "Pearson 相关 + 卡方检验", "本地隐私优先"],
            },
            {
              id: "deskhaven",
              num: "02 / DeskHaven",
              title: "让混乱桌面重新变成工作表面。",
              body: "DeskHaven 是一个桌面文件避风港。它不应该像沉重的文件管理器，而应该像一个安全、安静、随手可用的整理空间。",
              bullets: ["桌面文件归拢", "Windows 桌面习惯", "安全可找回", "开发中"],
            },
            {
              id: "adhd",
              num: "03 / ADHD Focus Timer",
              title: "不惩罚注意力的专注工具。",
              body: "正向计时、呼吸过渡、想法冰箱和全屏专注环境。它不是催促你完成任务，而是帮你更温和地进入状态。",
              bullets: ["正向计时", "呼吸引导", "想法冰箱", "本地隐私"],
            },
          ]
        : [
            {
              id: "energyflow",
              num: "01 / EnergyFlow",
              title: "Understand where your energy goes.",
              body: "Capture energy in seconds, then see how meetings, tasks, overtime, and recovery shape the way you work.",
              bullets: ["5-level energy state", "Work context and source", "Pearson + Chi-square insight", "Local privacy first"],
            },
            {
              id: "deskhaven",
              num: "02 / DeskHaven",
              title: "A quiet haven for messy desktops.",
              body: "DeskHaven is a safe working surface for loose files: less like a heavy file manager, more like a calm place to put things down.",
              bullets: ["Desktop file gathering", "Windows-native habits", "Safe and recoverable", "In development"],
            },
            {
              id: "adhd",
              num: "03 / ADHD Focus Timer",
              title: "Focus without punishment.",
              body: "Forward timing, breathing transition, idea parking, and a calm full-screen focus environment for low-resistance sessions.",
              bullets: ["Forward timer", "Breathing guide", "Idea Fridge", "Local privacy"],
            },
          ],
      principlesTitle: zh ? "设计成不打扰人的工具。" : "Designed to stay out of the way.",
      principlesBody: zh
        ? "首页只介绍我是谁、做什么、产品气质是什么。每个产品的完整说明、真实截图、隐私政策和下载入口，都放进独立产品页。"
        : "The home page introduces the studio and product philosophy. Detailed product stories, real screenshots, policies, and calls to action live on individual product pages.",
      productTitle: zh ? "清晰入口，而不是拥挤详情。" : "Clear entrances, not crowded detail.",
      studioTitle: zh ? "小工具，也应该认真设计。" : "Small tools, built with restraint.",
      studioBody: zh
        ? "这些产品服务于同一个方向：把桌面工作从噪音、混乱和压力中稍微解放出来。"
        : "These products share one direction: making desktop work quieter, more recoverable, and less stressful.",
    };
  }, [locale]);

  const stages = useMemo(() => [
    {
      id: "energyflow",
      href: "/products/energyflow",
      title: "EnergyFlow",
      status: locale === "zh" ? "预览" : "Preview",
      description: locale === "zh" ? "职场能量仪表盘" : "Workplace energy dashboard",
      image: energyFlowImages[locale].quickLog,
    },
    {
      id: "deskhaven",
      href: "/products/deskhaven",
      title: "DeskHaven",
      status: locale === "zh" ? "开发中" : "In development",
      description: locale === "zh" ? "桌面文件避风港" : "Desktop file haven",
      image: null,
    },
    {
      id: "adhd",
      href: "/products/adhd-focus-timer",
      title: "ADHD Focus Timer",
      status: locale === "zh" ? "即将推出" : "Coming soon",
      description: locale === "zh" ? "低压力专注计时器" : "Low-pressure focus timer",
      image: adhdImages.focus,
    },
  ], [locale]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const viewportCenter = window.innerHeight * 0.52;
      const strengths = chapterRefs.current.map((chapter) => {
        if (!chapter) return 0;
        const rect = chapter.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);
        const range = Math.max(window.innerHeight * 0.6, rect.height * 0.52);
        return smoothStep(0.08, 0.92, 1 - clamp(distance / range, 0, 1));
      });

      const total = strengths.reduce((sum, value) => sum + value, 0) || 1;

      chapterRefs.current.forEach((chapter, index) => {
        if (!chapter) return;
        const key = `chapter-${index}`;
        const previous = valuesRef.current.get(key) ?? strengths[index] ?? 0;
        const next = mix(previous, strengths[index] ?? 0, 0.18);
        valuesRef.current.set(key, next);
        chapter.style.setProperty("--story-strength", next.toFixed(4));
      });

      stageRefs.current.forEach((stage, index) => {
        if (!stage) return;
        const normalized = (strengths[index] ?? 0) / total;
        const key = `stage-${index}`;
        const previous = valuesRef.current.get(key) ?? normalized;
        const next = mix(previous, normalized, 0.2);
        const opacity = clamp(next * 1.35, 0, 1);
        valuesRef.current.set(key, next);
        stage.style.setProperty("--story-opacity", opacity.toFixed(4));
        stage.style.zIndex = String(Math.round(opacity * 1000));
        stage.style.pointerEvents = opacity > 0.55 ? "auto" : "none";
      });

      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  const heroTitleClass = locale === "zh"
    ? "mt-7 text-[clamp(2.75rem,5.4vw,5.25rem)] leading-[1.04] tracking-[-0.055em] font-medium text-warm-gradient max-w-4xl"
    : "mt-7 text-[clamp(3rem,7vw,6rem)] leading-[0.94] tracking-[-0.075em] font-medium text-warm-gradient max-w-4xl";

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 min-h-[calc(100vh-4rem)] grid items-center pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-14 lg:gap-20 items-center">
          <div className="animate-fade-in">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h1 className={heroTitleClass}>{copy.title}</h1>
            <p className="mt-8 text-lg md:text-xl leading-[1.75] text-muted max-w-2xl">{copy.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#story" className="rounded-full bg-[#e6dccd] text-[#171410] px-5 py-3 text-sm font-medium hover-lift">{copy.primary}</Link>
              <Link href="/products" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.secondary}</Link>
            </div>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              {copy.notes.map(([title, body]) => (
                <div key={title} className="text-sm leading-relaxed text-[var(--faint)]">
                  <strong className="block mb-2 text-muted font-medium">{title}</strong>
                  {body}
                </div>
              ))}
            </div>
          </div>

          <div className="screen-shell rounded-[2rem] p-4 md:p-5 min-h-[470px] flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs text-[var(--faint)] uppercase tracking-[0.14em] px-1">
              <span>{copy.currentProduct}</span>
              <span>EnergyFlow</span>
            </div>
            <SmartScreenshot
              src={energyFlowImages[locale].quickLog}
              alt="EnergyFlow preview"
              width={1200}
              height={820}
              priority
              sizes="(max-width: 1024px) 92vw, 560px"
              frameClassName="shadow-none flex-1"
            />
            <div className="grid grid-cols-2 gap-3">
              <Link href="/products/energyflow" className="rounded-2xl border border-white/[0.08] bg-white/[0.018] p-4 hover:bg-white/[0.035] transition-colors">
                <div className="text-sm text-foreground font-medium">EnergyFlow</div>
                <div className="mt-1 text-xs text-muted">{locale === "zh" ? "职场能量仪表盘" : "Energy dashboard"}</div>
              </Link>
              <Link href="/products/adhd-focus-timer" className="rounded-2xl border border-white/[0.08] bg-white/[0.018] p-4 hover:bg-white/[0.035] transition-colors">
                <div className="text-sm text-foreground font-medium">ADHD Timer</div>
                <div className="mt-1 text-xs text-muted">{locale === "zh" ? "低压力专注" : "Gentle focus"}</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="max-w-[1180px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-12 lg:gap-20 py-20 md:py-28">
        <div className="py-4 md:py-12">
          {copy.chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              ref={(element) => {
                if (element) chapterRefs.current[index] = element;
              }}
              className="story-chapter min-h-[72vh] flex flex-col justify-center"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{chapter.num}</span>
              <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,4.5rem)] leading-[0.98] tracking-[-0.07em] font-medium text-foreground">{chapter.title}</h2>
              <p className="mt-6 text-muted leading-[1.8] text-lg max-w-xl">{chapter.body}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {chapter.bullets.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="lg:sticky lg:top-24 h-[620px] grid place-items-center">
          <div className="screen-shell relative w-full max-w-[640px] h-[560px] rounded-[2.125rem] overflow-hidden">
            <div className="absolute top-7 left-8 text-[0.68rem] uppercase tracking-[0.14em] text-[var(--faint)]">Product stage follows scroll</div>
            {stages.map((stage, index) => (
              <Link
                key={stage.id}
                href={stage.href}
                ref={(element) => {
                  if (element) stageRefs.current[index] = element;
                }}
                className="story-stage-product absolute inset-[4.8rem_2rem_2rem] block"
              >
                <div className="h-full rounded-[1.5rem] border border-white/10 bg-[#14120f] overflow-hidden">
                  <div className="h-12 border-b border-white/[0.07] flex items-center justify-between px-4 text-xs text-[var(--faint)]">
                    <span className="text-muted">{stage.title}</span>
                    <span>{stage.status}</span>
                  </div>
                  <div className="p-5 h-[calc(100%-3rem)] flex flex-col justify-between gap-5">
                    {stage.image ? (
                      <SmartScreenshot src={stage.image} alt={stage.title} width={900} height={640} priority={index === 0} sizes="(max-width: 1024px) 90vw, 560px" frameClassName="shadow-none flex-1" />
                    ) : (
                      <div className="flex-1 rounded-[1.25rem] border border-white/[0.08] bg-white/[0.018] grid grid-cols-3 gap-3 p-5">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] relative overflow-hidden">
                            <div className="absolute top-4 left-4 w-10 h-2 rounded-full bg-white/10" />
                            <div className="absolute bottom-4 left-4 right-4 h-1.5 rounded-full bg-[#b4835c]/25" />
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <h3 className="text-2xl tracking-[-0.05em] text-foreground font-medium">{stage.title}</h3>
                        <p className="mt-1 text-sm text-muted">{stage.description}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[var(--faint)]">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">Operating principles</span>
        <h2 className="mt-7 text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.07em] font-medium max-w-3xl">{copy.principlesTitle}</h2>
        <p className="mt-7 text-lg leading-[1.8] text-muted max-w-2xl">{copy.principlesBody}</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 border-t border-l border-white/[0.07]">
          {[...copy.notes, ["Desktop-native", "Built around actual desktop workflows, not another web dashboard in disguise."]].map(([title, body], index) => (
            <div key={title} className="min-h-[220px] p-6 border-r border-b border-white/[0.07] bg-white/[0.012]">
              <span className="text-xs text-[var(--faint)] tracking-[0.14em]">0{index + 1}</span>
              <h3 className="mt-16 text-xl tracking-[-0.045em] font-medium">{title}</h3>
              <p className="mt-4 text-sm leading-[1.7] text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">Product index</span>
        <h2 className="mt-7 text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.07em] font-medium max-w-3xl">{copy.productTitle}</h2>
        <div className="mt-14 border-t border-white/10">
          {stages.map((stage) => (
            <Link key={stage.id} href={stage.href} className="index-row grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_0.7fr_3rem] gap-4 md:gap-8 items-center py-8 border-b border-white/[0.07] text-muted">
              <strong className="text-2xl md:text-3xl tracking-[-0.06em] text-foreground font-medium">{stage.title}</strong>
              <span className="leading-relaxed">{stage.description}</span>
              <span className="text-sm text-[var(--faint)]">{stage.status}</span>
              <span className="w-10 h-10 rounded-full border border-white/10 grid place-items-center text-[var(--faint)]">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="eyebrow">Studio note</span>
            <h2 className="mt-7 text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.07em] font-medium">{copy.studioTitle}</h2>
            <p className="mt-7 text-lg leading-[1.8] text-muted">{copy.studioBody}</p>
          </div>
          <div className="card-premium rounded-[1.75rem] p-8 md:p-10 self-start">
            <p className="text-muted leading-[1.8]">
              {locale === "zh"
                ? "每个产品页会承载真实截图、详细介绍、下载入口和隐私政策。首页只保持安静、清晰和可信。"
                : "Each product page carries real screenshots, product details, downloads, and privacy links. The home page stays quiet, clear, and trustworthy."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="rounded-full bg-[#e6dccd] text-[#171410] px-5 py-3 text-sm font-medium hover-lift">{copy.secondary}</Link>
              <Link href="/contact" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.contact}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
