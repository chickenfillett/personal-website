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
    <section className={`max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24 ${animated ? "animate-fade-in" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="section-title mt-7 text-[clamp(2.35rem,4.5vw,4.55rem)] leading-[1.08] tracking-[-0.04em] font-medium text-warm-gradient max-w-4xl">
        {title}
      </h1>
      <p className={`mt-8 text-lg md:text-xl text-muted leading-[1.8] ${wide ? "max-w-3xl" : "max-w-2xl"}`}>
        {intro}
      </p>
    </section>
  );
}
