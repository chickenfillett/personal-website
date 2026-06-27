"use client";

import Link from "../../components/TransitionLink";
import SmartScreenshot from "../../components/SmartScreenshot";
import { Locale, useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";
import { allDeskHavenImages, deskHavenImagesForLocale } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

const posterNotes = {
  zh: {
    eyebrow: "核心能力",
    title: "从收纳到找回，DeskHaven 覆盖文件整理的完整路径。",
    body: "下面的产品图对应真实功能：建立本地文件空间、快速检索、理解内容关系、自动整理，并把备份、加密和控制权交还给用户。",
    galleryEyebrow: "真实界面",
    galleryTitle: "查看 DeskHaven 的实际工作界面。",
    galleryBody: "从仪表盘、文件台到设置与隐私控制，这里展示的是当前语言版本的真实界面。",
    download: "联系开发者",
  },
  en: {
    eyebrow: "Core capabilities",
    title: "From storing to finding again, DeskHaven covers the full file-organization path.",
    body: "The product visuals below map to real features: local file space, fast search, content relationships, quiet automation, backup, encryption, and user control.",
    galleryEyebrow: "Real interface",
    galleryTitle: "See DeskHaven's actual working screens.",
    galleryBody: "From dashboard and file desk to settings and privacy controls, this gallery shows the real interface for the selected language.",
    download: "Contact developer",
  },
} as const;

const posterStories = {
  zh: [
    ["专属私域空间", "把文件、照片、导出资料和敏感内容放进一个本地私域，不再让桌面承担所有记忆。"],
    ["本地内容工作台", "在同一个工作台里查看文件列表、详情、统计和最近操作，先建立秩序，再处理细节。"],
    ["更快找到目标", "搜索、标签、路径和文件夹入口并列出现，让找文件不再只依赖模糊的文件名回忆。"],
    ["关系清晰可见", "用关系图谱看见文件、标签、项目和主题之间的连接，理解内容为什么重要。"],
    ["归档更有秩序", "批量归档、状态管理、时间线和恢复入口放在一起，整理之后也能安心找回。"],
    ["先看全局再进入细节", "仪表盘汇总文件数量、分类、趋势和最近变化，适合每天打开先扫一眼。"],
    ["后台自动整理", "路径、规则、开关和语言设置集中管理，让整理在后台稳定发生。"],
    ["接入 AI 工具链", "把摘要、标签、归类等能力接进文件工作流，帮助理解内容，而不是替你失控操作。"],
    ["白天清爽，夜晚专注", "深浅模式对应不同工作环境，界面保持克制，不用视觉噪音抢走注意力。"],
    ["数据和控制权", "导入导出、备份恢复、加密和密钥管理放在明确位置，重要文件始终可控。"],
  ],
  en: [
    ["A private file space", "Keep files, photos, exports, and sensitive material in a local space instead of letting the desktop carry every memory."],
    ["A local content workbench", "Review file lists, details, stats, and recent actions from one workbench before diving into cleanup."],
    ["Find the right file faster", "Search, tags, paths, and folder entry points work together so recall is not limited to file names."],
    ["Visible relationships", "The relationship graph shows how files, tags, projects, and topics connect."],
    ["Cleaner archiving", "Batch archive tools, status, timelines, and recovery entries keep organization reversible."],
    ["Overview before detail", "The dashboard summarizes counts, categories, trends, and recent changes for a quick daily scan."],
    ["Automation in the background", "Rules, paths, switches, and language settings stay centralized so organization can keep running quietly."],
    ["An AI tool chain", "Summaries, tags, and classification can join the file workflow without taking control away from you."],
    ["Light by day, focused by night", "Light and dark modes serve different work environments while keeping the interface restrained."],
    ["Data and control", "Import, export, backup, restore, encryption, and keys stay visible and understandable."],
  ],
} as const;

function posterCopyForLocale(locale: Locale) {
  return locale === "zh" || locale === "zh-tw" ? posterStories.zh : posterStories.en;
}

export default function DeskHavenPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const assets = deskHavenImagesForLocale(locale);
  const note = locale === "zh" || locale === "zh-tw" ? posterNotes.zh : posterNotes.en;
  const posterCopy = posterCopyForLocale(locale);
  usePreloadImages(allDeskHavenImages(locale));

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="product-page-grid">
          <div className="animate-fade-in">
            <span className="eyebrow">{copy.deskhaven.eyebrow}</span>
            <h1 className="mt-7 text-[clamp(2.7rem,5.2vw,5.1rem)] leading-[1.06] tracking-[-0.045em] font-medium text-warm-gradient">
              {copy.deskhaven.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{copy.deskhaven.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-muted">{copy.deskhaven.status}</span>
              <Link href="/contact" className="rounded-full bg-[#e6dccd] text-[#171410] px-5 py-3 text-sm font-medium hover-lift">{copy.common.getUpdates}</Link>
              <Link href="/products" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.common.backToProducts}</Link>
            </div>
          </div>

          <SmartScreenshot
            src={assets.hero}
            alt="DeskHaven product poster"
            width={1120}
            height={630}
            priority
            sizes="(max-width: 1024px) 92vw, 620px"
          />
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.common.productPromise}</span>
        <h2 className="mt-7 text-[clamp(2.35rem,4.6vw,4.35rem)] leading-[1.05] tracking-[-0.045em] font-medium max-w-4xl">{copy.deskhaven.promiseTitle}</h2>
        <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{copy.deskhaven.promise}</p>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <span className="eyebrow">{note.eyebrow}</span>
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="detail-sticky">
              <h2 className="section-title text-[clamp(2rem,3.7vw,3.45rem)] leading-[1.08] tracking-[-0.04em] font-medium max-w-3xl">
                {note.title}
              </h2>
              <p className="mt-6 text-lg leading-[1.85] text-muted">{note.body}</p>
            </div>

            <div className="poster-stack">
              {assets.posters.map((poster, index) => {
                const story = posterCopy[index] ?? posterCopy[0];

                return (
                  <article key={poster} className="poster-story-card">
                    <SmartScreenshot
                      src={poster}
                      alt={`DeskHaven poster ${index + 1}`}
                      width={1120}
                      height={630}
                      sizes="(max-width: 1024px) 92vw, 680px"
                      frameClassName="shadow-none"
                    />
                    <div className="poster-story-copy">
                      <span>0{index + 1}</span>
                      <h3>{story[0]}</h3>
                      <p>{story[1]}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.common.designPrinciples}</span>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 border-t border-l border-white/[0.07]">
          {copy.deskhaven.principles.map(([title, body], index) => (
            <div key={title} className="min-h-[240px] p-6 border-r border-b border-white/[0.07] bg-white/[0.012]">
              <span className="text-xs text-[var(--faint)] tracking-[0.14em]">0{index + 1}</span>
              <h3 className="mt-16 text-xl tracking-[-0.045em] font-medium">{title}</h3>
              <p className="mt-4 text-sm leading-[1.7] text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <span className="eyebrow">{note.galleryEyebrow}</span>
          <h2 className="section-title mt-7 text-[clamp(2rem,3.8vw,3.55rem)] leading-[1.08] tracking-[-0.04em] font-medium max-w-4xl">
            {note.galleryTitle}
          </h2>
          <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{note.galleryBody}</p>

          <div className="mt-14 screenshot-gallery">
            {assets.screenshots.map((screenshot, index) => (
              <SmartScreenshot
                key={screenshot}
                src={screenshot}
                alt={`DeskHaven interface screenshot ${index + 1}`}
                width={1180}
                height={664}
                sizes="(max-width: 768px) 92vw, (max-width: 1180px) 44vw, 540px"
                frameClassName="shadow-none"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
