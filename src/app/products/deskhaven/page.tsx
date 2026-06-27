"use client";

import Link from "next/link";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";
import { allDeskHavenImages, deskHavenImagesForLocale } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

const posterNotes = {
  zh: {
    eyebrow: "海报图",
    title: "先用产品海报理解 DeskHaven 的完整气质。",
    body: "这些图来自你的海报图文件夹，适合承担产品介绍，而不是用单张界面截图硬解释所有功能。",
    galleryEyebrow: "界面截图",
    galleryTitle: "当前语言的全部界面截图。",
    galleryBody: "这里直接陈列真实界面。切换网站语言后，DeskHaven 的截图会自动切换到对应语言版本。",
    download: "Microsoft Store 暂未提供",
  },
  en: {
    eyebrow: "Poster set",
    title: "Understand DeskHaven through the official product posters.",
    body: "These images come from the poster folder and carry the product story better than forcing one screenshot to explain every feature.",
    galleryEyebrow: "Interface screenshots",
    galleryTitle: "All interface screenshots for this language.",
    galleryBody: "This section shows the real UI set. Switching the website language also switches the DeskHaven screenshot language.",
    download: "Microsoft Store link pending",
  },
} as const;

export default function DeskHavenPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const assets = deskHavenImagesForLocale(locale);
  const note = locale === "zh" ? posterNotes.zh : posterNotes.en;
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
            width={1400}
            height={788}
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
              <h2 className="text-[clamp(2.25rem,4.4vw,4.2rem)] leading-[1.05] tracking-[-0.045em] font-medium max-w-3xl">
                {note.title}
              </h2>
              <p className="mt-6 text-lg leading-[1.85] text-muted">{note.body}</p>
            </div>

            <div className="poster-stack">
              {assets.posters.map((poster, index) => (
                <SmartScreenshot
                  key={poster}
                  src={poster}
                  alt={`DeskHaven poster ${index + 1}`}
                  width={1400}
                  height={788}
                  sizes="(max-width: 1024px) 92vw, 680px"
                  frameClassName="shadow-none"
                />
              ))}
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
          <h2 className="mt-7 text-[clamp(2.35rem,4.6vw,4.35rem)] leading-[1.05] tracking-[-0.045em] font-medium max-w-4xl">
            {note.galleryTitle}
          </h2>
          <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{note.galleryBody}</p>

          <div className="mt-14 screenshot-gallery">
            {assets.screenshots.map((screenshot, index) => (
              <SmartScreenshot
                key={screenshot}
                src={screenshot}
                alt={`DeskHaven interface screenshot ${index + 1}`}
                width={1500}
                height={844}
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
