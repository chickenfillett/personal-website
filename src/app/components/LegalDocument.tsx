import type { ReactNode } from "react";

export type LegalDocumentSection = {
  title: string;
  body: string | readonly string[];
  bullets?: readonly string[];
};

function renderParagraphs(body: LegalDocumentSection["body"]) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return paragraphs.map((paragraph) => (
    <p key={paragraph} className="mt-4 text-muted leading-[1.9]">
      {paragraph}
    </p>
  ));
}

export function LegalDocumentHero({
  eyebrow,
  title,
  intro,
  updated,
  actions,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-7 text-[clamp(2.15rem,3.8vw,3.65rem)] leading-[1.12] tracking-[-0.035em] font-medium text-warm-gradient max-w-4xl">
        {title}
      </h1>
      <p className="mt-8 text-lg md:text-xl leading-[1.85] text-muted max-w-4xl">{intro}</p>
      {updated && <p className="mt-6 text-sm text-[var(--faint)]">{updated}</p>}
      {actions && <div className="mt-10 flex flex-wrap gap-4">{actions}</div>}
    </section>
  );
}

export function LegalDocumentSections({
  sections,
  idPrefix = "section",
}: {
  sections: readonly LegalDocumentSection[];
  idPrefix?: string;
}) {
  return (
    <div className="max-w-4xl border-t border-white/[0.07]">
      {sections.map((section, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <article
            id={`${idPrefix}-${index + 1}`}
            key={section.title}
            className="scroll-mt-28 grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-5 py-10 border-b border-white/[0.07]"
          >
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{number}</span>
            <div>
              <h2 className="text-xl md:text-2xl tracking-[-0.03em] font-medium">{section.title}</h2>
              {renderParagraphs(section.body)}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-5 space-y-3 text-muted leading-[1.8]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[0.72em] h-1.5 w-1.5 rounded-full bg-[var(--faint)] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
