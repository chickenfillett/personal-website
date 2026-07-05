import SmartScreenshot from "./SmartScreenshot";

export function ProductFeatureSections({
  features,
  images,
  imageWidth,
  imageHeight,
}: {
  features: readonly (readonly [string, string])[];
  images: readonly string[];
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <section className="border-t border-white/[0.07]">
      {features.map(([title, body], index) => (
        <div key={title} className="max-w-[1180px] mx-auto px-5 md:px-8 py-16 md:py-24 border-b border-white/[0.07] last:border-b-0">
          <div className={`detail-rail ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="detail-sticky">
              <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">0{index + 1}</span>
              <h2 className="mt-5 text-[clamp(2.15rem,3.9vw,3.9rem)] leading-[1.05] tracking-[-0.045em] font-medium">{title}</h2>
              <p className="mt-6 text-muted leading-[1.85] text-lg">{body}</p>
            </div>
            <SmartScreenshot
              src={images[index] ?? images[0]}
              alt={title}
              width={imageWidth}
              height={imageHeight}
              sizes="(max-width: 1024px) 92vw, 680px"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
