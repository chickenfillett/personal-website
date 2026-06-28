"use client";

import { useLanguage } from "@/lib/i18n/context";

const copy = {
  zh: {
    title: "网站隐私说明",
    intro: "SoloCraft 官网本身不收集访客信息，不设置联系表单，不要求注册账户，不使用网站分析脚本，也不在网页内收集你的姓名、邮箱、设备文件或浏览行为。",
    updated: "最后更新：2026 年 6 月 28 日",
    sections: [
      ["网站不收集信息", "本网站是用于展示 SoloCraft 产品信息的静态网站。浏览网页时，网站代码不会主动收集你的姓名、邮箱、电话号码、文件内容、桌面数据、精力记录、专注记录或其他个人资料。"],
      ["没有联系表单", "网站目前不提供会把信息提交到站点后端的联系表单。如果你点击邮箱并主动发送邮件，你的邮件内容会通过你选择的邮件服务发送；这属于你主动联系开发者，而不是网站自动收集。"],
      ["没有网站分析和广告跟踪", "本站不接入 Google Analytics、广告像素、行为画像、第三方营销追踪或用于统计访客身份的脚本。页面中展示的图片和文字只用于说明产品功能。"],
      ["产品数据与网站分开", "EnergyFlow、DeskHaven 和 ADHD Focus Timer 的应用数据由对应桌面应用在本地处理。网站不会读取你的应用数据库、文件索引、关系图谱、精力记录、专注记录或本地偏好。"],
      ["托管服务的基础日志", "网站托管服务商或浏览器网络请求可能在基础设施层面产生常规访问日志，例如 IP 地址、时间、User-Agent 或请求路径。这些日志由托管平台用于安全、缓存和故障排查，不是 SoloCraft 官网主动建立的用户资料。"],
      ["联系", "如果你对网站或产品隐私有问题，可以主动发送邮件至 3371436706@qq.com。请不要在邮件中发送不必要的密码、私钥、身份证件或其它高度敏感内容。"],
    ],
  },
  en: {
    title: "Website Privacy Notice",
    intro: "The SoloCraft website itself does not collect visitor information, does not provide a contact form, does not require an account, does not use analytics scripts, and does not collect your name, email, local files, or browsing behavior through the page.",
    updated: "Last updated: June 28, 2026",
    sections: [
      ["No website data collection", "This is a static website for presenting SoloCraft product information. The page code does not actively collect your name, email, phone number, file content, desktop data, energy logs, focus records, or other personal information."],
      ["No contact form", "The website does not provide a form that submits information to a website backend. If you click an email link and send a message, that message is sent through the email service you choose; it is a voluntary support contact, not automatic website collection."],
      ["No analytics or advertising tracking", "The website does not include Google Analytics, ad pixels, behavioral profiling, third-party marketing tracking, or scripts used to identify visitors. Images and text are used only to explain product features."],
      ["Product data is separate", "EnergyFlow, DeskHaven, and ADHD Focus Timer process their application data locally in the corresponding desktop apps. The website does not read app databases, file indexes, relationship maps, energy logs, focus records, or local preferences."],
      ["Hosting infrastructure logs", "The hosting provider or browser network layer may generate standard infrastructure logs such as IP address, time, User-Agent, or request path. Those logs are used by the hosting platform for security, caching, and troubleshooting, and are not user profiles actively created by the SoloCraft website."],
      ["Contact", "For privacy questions, contact 3371436706@qq.com. Do not send unnecessary passwords, private keys, identity documents, or other highly sensitive content by email."],
    ],
  },
} as const;

export default function Privacy() {
  const { locale } = useLanguage();
  const text = locale === "zh" || locale === "zh-tw" ? copy.zh : copy.en;

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
        <span className="eyebrow">SoloCraft</span>
        <h1 className="mt-7 text-[clamp(2.15rem,3.8vw,3.65rem)] leading-[1.12] tracking-[-0.035em] font-medium text-warm-gradient max-w-4xl">
          {text.title}
        </h1>
        <p className="mt-8 text-lg md:text-xl leading-[1.85] text-muted max-w-4xl">{text.intro}</p>
        <p className="mt-6 text-sm text-[var(--faint)]">{text.updated}</p>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-12 md:py-20">
          <div className="max-w-4xl border-t border-white/[0.07]">
            {text.sections.map(([title, body], index) => (
              <article key={title} className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-5 py-10 border-b border-white/[0.07]">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-xl md:text-2xl tracking-[-0.03em] font-medium">{title}</h2>
                  <p className="mt-4 text-muted leading-[1.9]">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
