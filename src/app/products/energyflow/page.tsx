"use client";

import Link from "next/link";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { allEnergyFlowImages, energyFlowImages } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function EnergyFlowPage() {
  const { locale } = useLanguage();
  const images = energyFlowImages[locale];
  usePreloadImages(allEnergyFlowImages());

  const copy = locale === "zh"
    ? {
        eyebrow: "EnergyFlow / 职场能量仪表盘",
        title: "看清工作日里，精力到底流向哪里。",
        intro: "3 秒打卡精力，5 级精力等级，记录工作状态、能量来源与情绪。EnergyFlow 用数据帮你回答：哪个会议让你耗竭？哪类任务让你充电？",
        status: "预览中",
        contact: "获取更新",
        privacy: "隐私政策",
        promiseTitle: "不是又一个待办工具，而是一块能量仪表盘。",
        promise: "EnergyFlow 的重点不是逼你更努力，而是帮你看见工作节奏的真实代价。开会、加班、深度工作、摸鱼、午休——不同场景如何消耗或恢复精力，应该由数据慢慢说清楚。",
        features: [
          { title: "3 秒打卡", body: "用最少步骤记录 5 级精力、工作状态、能量来源和心情，不把追踪本身变成负担。", image: images.quickLog },
          { title: "深浅模式", body: "深色模式适合专注，浅色模式适合日间办公。界面保持克制，不用视觉噪音抢走注意力。", image: images.themeSwitch },
          { title: "桌面常驻", body: "桌面悬浮入口和快捷键让记录可以随手完成：出现、记录、收起，尽量不打断当前工作。", image: images.desktopAlwaysOn },
          { title: "统计洞察", body: "通过 Pearson 相关和卡方检验观察能量与场景之间的关系，用长期记录发现真正的消耗源。", image: images.analytics },
          { title: "隐私保护", body: "精力状态属于敏感个人数据。EnergyFlow 以本地优先、隐私优先为默认设计方向。", image: images.privacy },
        ],
        flow: ["记录当下状态", "积累工作场景", "查看能量趋势", "调整工作节奏"],
      }
    : {
        eyebrow: "EnergyFlow / Workplace Energy Dashboard",
        title: "Understand where your workday energy goes.",
        intro: "Capture energy in three seconds with a five-level state, work context, energy source, and mood. EnergyFlow helps answer which meetings drain you and which tasks restore you.",
        status: "Preview",
        contact: "Get updates",
        privacy: "Privacy policy",
        promiseTitle: "Not another task app. A dashboard for your energy rhythm.",
        promise: "EnergyFlow is not about pushing you to work harder. It helps you see the hidden cost of your rhythm: meetings, overtime, deep work, breaks, and the moments that quietly shape performance.",
        features: [
          { title: "Three-second logging", body: "Record energy level, work status, energy source, and mood with minimal friction.", image: images.quickLog },
          { title: "Dark or light clarity", body: "Deep mode for focus and light mode for daytime work, without loud interface noise.", image: images.themeSwitch },
          { title: "Always on desktop", body: "A floating entry and hotkey make logging appear, record, and disappear without breaking flow.", image: images.desktopAlwaysOn },
          { title: "Statistical insight", body: "Pearson correlation and Chi-square analysis help reveal which contexts really affect energy.", image: images.analytics },
          { title: "Privacy protection", body: "Energy state data is sensitive. EnergyFlow is designed with local-first privacy as the default.", image: images.privacy },
        ],
        flow: ["Capture state", "Accumulate context", "Review energy patterns", "Adjust work rhythm"],
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
              <Link href="/products/energyflow/privacy" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.privacy}</Link>
            </div>
          </div>

          <SmartScreenshot
            src={images.quickLog}
            alt="EnergyFlow quick log"
            width={1200}
            height={820}
            priority
            sizes="(max-width: 1024px) 92vw, 620px"
          />
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">Product promise</span>
        <h2 className="mt-7 text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.07em] font-medium max-w-4xl">{copy.promiseTitle}</h2>
        <p className="mt-7 text-lg leading-[1.8] text-muted max-w-3xl">{copy.promise}</p>
      </section>

      <section className="border-t border-white/[0.07]">
        {copy.features.map((feature, index) => (
          <div key={feature.title} className="max-w-[1180px] mx-auto px-5 md:px-8 py-16 md:py-24 border-b border-white/[0.07] last:border-b-0">
            <div className={`detail-rail ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="detail-sticky">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">0{index + 1}</span>
                <h2 className="mt-5 text-[clamp(2.25rem,4vw,4rem)] leading-none tracking-[-0.07em] font-medium">{feature.title}</h2>
                <p className="mt-6 text-muted leading-[1.8] text-lg">{feature.body}</p>
              </div>
              <SmartScreenshot
                src={feature.image}
                alt={feature.title}
                width={1200}
                height={820}
                sizes="(max-width: 1024px) 92vw, 680px"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">Experience flow</span>
        <div className="mt-12 border-t border-white/10">
          {copy.flow.map((item, index) => (
            <div key={item} className="grid grid-cols-[5rem_1fr] md:grid-cols-[8rem_1fr] gap-6 py-7 border-b border-white/[0.07]">
              <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">Step {index + 1}</span>
              <p className="text-lg md:text-xl text-muted leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
