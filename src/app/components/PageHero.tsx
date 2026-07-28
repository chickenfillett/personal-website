import { DisplayHeading } from "./Typography";
import { SectionShell } from "./layout/SectionShell";

export function PageHero({
  eyebrow,
  title,
  intro,
  wide = false,
  animated = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  wide?: boolean;
  animated?: boolean;
}) {
  return (
    <SectionShell
      size="large"
      className={`page-hero ${animated ? "animate-fade-in" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <DisplayHeading variant="page" gradient>{title}</DisplayHeading>
      <p className={`mt-8 text-lg md:text-xl text-muted leading-[1.8] ${wide ? "max-w-3xl" : "max-w-2xl"}`}>
        {intro}
      </p>
    </SectionShell>
  );
}
