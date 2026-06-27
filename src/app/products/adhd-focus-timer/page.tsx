"use client";

import Link from "next/link";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { adhdImages, allAdhdImages } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function ADHDFocusTimerPage() {
  const { locale } = useLanguage();
  usePreloadImages(allAdhdImages());

  const copy = locale === "zh"
    ? {
        eyebrow: "ADHD Focus Timer / 低压力专注",
        title: "不惩罚注意力，而是温和地进入状态。",
        intro: "ADHD Focus Timer 是一个沉浸式专注工具：呼吸过渡、正向计时、粒子陪伴、想法冰箱和本地隐私，帮助你低摩擦地开始一段专注。",
        status: "即将推出",
        contact: "获取更新",
        privacy: "隐私政策",
        promiseTitle: "专注不应该像倒计时惩罚。",
        promise: "传统计时器很容易制造压力。这个工具把重点放在进入状态、延续状态和接住分心，而不是责备分心本身。",
        features: [
          { title: "进入前先降噪", body: "介绍弹窗和准备页让用户知道接下来会发生什么，降低开始任务时的心理阻力。", image: adhdImages.intro },
          { title: "准备，而不是逼迫", body: "时长、白噪音、语言、呼吸引导都在开始前确定，减少专注过程中的额外选择。", image: adhdImages.prep },
          { title: "呼吸过渡", body: "正式开始前用呼吸引导完成从混乱到专注的切换。", image: adhdImages.breathing },
          { title: "正向计时", body: "计时向前累积，而不是倒数制造失败感。粒子和进度给出轻微陪伴。", image: adhdImages.focus },
          { title: "想法冰箱", body: "突然冒出的想法不需要立刻处理，可以先放进冰箱，之后再回来。", image: adhdImages.ideaFridge },
          { title: "完成反馈", body: "结束不是审判，而是记录一次真实完成。成就页面给出温和反馈。", image: adhdImages.achievement },
          { title: "支持与隐私", body: "工具保持本地优先、最小数据、清晰隐私说明，避免把专注数据变成另一种压力。", image: adhdImages.privacy },
        ],
      }
    : {
        eyebrow: "ADHD Focus Timer / Low-pressure focus",
        title: "Focus without turning attention into a trial.",
        intro: "ADHD Focus Timer is an immersive focus tool with breathing transition, forward timing, particle companionship, Idea Fridge, and local-first privacy.",
        status: "Coming soon",
        contact: "Get updates",
        privacy: "Privacy policy",
        promiseTitle: "Focus should not feel like punishment by countdown.",
        promise: "A timer can easily become pressure. This product focuses on entering a session, sustaining it gently, and catching distractions without blaming the user.",
        features: [
          { title: "Lower the noise first", body: "The intro and preparation screens explain what will happen next, reducing resistance before a task begins.", image: adhdImages.intro },
          { title: "Prepare, do not pressure", body: "Duration, white noise, language, and breathing are selected before focus starts to reduce mid-session choices.", image: adhdImages.prep },
          { title: "Breathing transition", body: "A short breathing guide helps shift from scattered attention into a focused state.", image: adhdImages.breathing },
          { title: "Forward timing", body: "Time accumulates forward instead of counting down toward failure. Particles and progress provide quiet companionship.", image: adhdImages.focus },
          { title: "Idea Fridge", body: "Unexpected thoughts can be parked without being obeyed immediately, then revisited after the session.", image: adhdImages.ideaFridge },
          { title: "Gentle completion", body: "Ending a session is not a judgment. The achievement screen records a real completion with soft feedback.", image: adhdImages.achievement },
          { title: "Support and privacy", body: "Local-first behavior, minimal data, and clear privacy language keep focus data from becoming another source of pressure.", image: adhdImages.privacy },
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
              <Link href="/products/adhd-focus-timer/privacy" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.privacy}</Link>
            </div>
          </div>

          <SmartScreenshot
            src={adhdImages.focus}
            alt="ADHD Focus Timer focus session"
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
    </div>
  );
}
