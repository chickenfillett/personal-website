"use client";

import Link from "next/link";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { allDeskHavenImages, deskHavenImages } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function DeskHavenPage() {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  usePreloadImages(allDeskHavenImages());

  const copy = zh
    ? {
        eyebrow: "DeskHaven / 桌面文件避风港",
        title: "守护你的每一份文件。",
        intro: "DeskHaven 是一个本地优先的 Windows 桌面整理工具：给零散文件一个私有工作台，用文件仓、关系图谱、隐私控制和自动化后台，让桌面重新变得安静、可控、可找回。",
        status: "开发中",
        contact: "获取开发更新",
        products: "返回产品",
        promiseTitle: "A private desk：给重要内容一个专属工作台。",
        promise: "DeskHaven 的重点不是把文件藏起来，而是让内容之间的关系更清晰。文件仓负责安全归拢，关系图谱负责理解内容连接，隐私页负责密钥和控制权，设置页负责后台自动化。它应该像一张安静的私人桌面，而不是一个吵闹的文件管理器。",
        features: [
          { num: "01", title: "先看全局，再进入细节", body: "仪表盘汇总文件数量、关系数量、加密状态和存储趋势，让用户第一眼知道桌面内容是否可控。", image: deskHavenImages.dashboard },
          { num: "02", title: "文件仓：把内容放回秩序里", body: "文件仓集中管理本地文件、元数据和归档状态。它不是云盘，而是本机内容的安静收纳层。", image: deskHavenImages.vault },
          { num: "03", title: "关系图谱：看见内容之间的连接", body: "文件、标签、主题、项目之间的关系可以被看见。用户不只是找文件，也能理解文件为什么重要。", image: deskHavenImages.graph },
          { num: "04", title: "隐私与控制权", body: "密钥、导入导出、加密和控制选项都放在清晰的位置。重要数据应该由用户掌握。", image: deskHavenImages.privacy },
          { num: "05", title: "让整理在后台自动发生", body: "后台自动化、路径、开关和语言设置集中在设置页，整理不应该变成每天必须维护的新系统。", image: deskHavenImages.settings },
        ],
        principles: [
          ["本地优先", "重要文件和索引默认在本机处理。"],
          ["安全可控", "用户必须知道文件在哪里，也能随时导出或找回。"],
          ["关系可视", "文件不是孤立物，项目、标签和内容关系应该可以被理解。"],
          ["低打扰", "整理应该顺手发生，而不是制造新的负担。"],
        ],
      }
    : {
        eyebrow: "DeskHaven / Desktop File Haven",
        title: "A private desk for every file.",
        intro: "DeskHaven is a local-first Windows desktop organization tool: a private desk for loose files, with vaults, relationship maps, privacy controls, and background automation.",
        status: "In development",
        contact: "Get development updates",
        products: "Back to products",
        promiseTitle: "A calm workspace for content, not a noisy file manager.",
        promise: "DeskHaven is not about hiding files. It helps users understand local content. The vault gathers files safely, the relationship map reveals connections, privacy controls keep ownership clear, and settings keep automation understandable.",
        features: [
          { num: "01", title: "Overview before detail", body: "The dashboard summarizes file count, relationships, encryption state, and storage trends so users know whether their desktop is under control.", image: deskHavenImages.dashboard },
          { num: "02", title: "File vault", body: "The vault manages local files, metadata, and archive state. It is a quiet local layer, not another cloud drive.", image: deskHavenImages.vault },
          { num: "03", title: "Relationship map", body: "Files, tags, topics, and projects can be seen as relationships. Users do not only find files; they understand why files matter.", image: deskHavenImages.graph },
          { num: "04", title: "Privacy and control", body: "Keys, import, export, encryption, and control options live in one clear place. Important data should remain under user control.", image: deskHavenImages.privacy },
          { num: "05", title: "Automation that stays quiet", body: "Background automation, paths, switches, and language settings are grouped clearly, so cleanup does not become another daily system.", image: deskHavenImages.settings },
        ],
        principles: [
          ["Local-first", "Important files and indexes are handled locally by default."],
          ["Controlled", "Users should know where files are and how to recover them."],
          ["Relational", "Projects, tags, and content connections should be understandable."],
          ["Low-friction", "Organization should happen naturally without becoming a new burden."],
        ],
      };

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="product-page-grid">
          <div className="animate-fade-in">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h1 className="mt-7 text-[clamp(2.75rem,5.3vw,5.25rem)] leading-[1.04] tracking-[-0.055em] font-medium text-warm-gradient">
              {copy.title}
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{copy.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-muted">{copy.status}</span>
              <Link href="/contact" className="rounded-full bg-[#e6dccd] text-[#171410] px-5 py-3 text-sm font-medium hover-lift">{copy.contact}</Link>
              <Link href="/products" className="rounded-full border border-white/15 px-5 py-3 text-sm text-foreground hover:bg-white/[0.04] hover-lift">{copy.products}</Link>
            </div>
          </div>

          <SmartScreenshot
            src={deskHavenImages.hero}
            alt="DeskHaven hero"
            width={1920}
            height={1080}
            priority
            sizes="(max-width: 1024px) 92vw, 620px"
          />
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">Product promise</span>
        <h2 className="mt-7 text-[clamp(2.35rem,4.6vw,4.35rem)] leading-[1.03] tracking-[-0.06em] font-medium max-w-4xl">{copy.promiseTitle}</h2>
        <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{copy.promise}</p>
      </section>

      <section className="border-t border-white/[0.07]">
        {copy.features.map((feature, index) => (
          <div key={feature.title} className="max-w-[1180px] mx-auto px-5 md:px-8 py-16 md:py-24 border-b border-white/[0.07] last:border-b-0">
            <div className={`detail-rail ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="detail-sticky">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{feature.num}</span>
                <h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] leading-[1.03] tracking-[-0.06em] font-medium">{feature.title}</h2>
                <p className="mt-6 text-muted leading-[1.85] text-lg">{feature.body}</p>
              </div>
              <SmartScreenshot
                src={feature.image}
                alt={feature.title}
                width={1920}
                height={1080}
                sizes="(max-width: 1024px) 92vw, 680px"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">Design principles</span>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 border-t border-l border-white/[0.07]">
          {copy.principles.map(([title, body], index) => (
            <div key={title} className="min-h-[240px] p-6 border-r border-b border-white/[0.07] bg-white/[0.012]">
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
