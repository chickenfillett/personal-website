import SmartScreenshot from "./SmartScreenshot";
import { DisplayHeading } from "./Typography";
import { MediaSurface } from "./layout/MediaSurface";
import { SectionShell } from "./layout/SectionShell";
import { SplitSection } from "./layout/SplitSection";

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
    <section className="product-feature-section">
      {features.map(([title, body], index) => (
        <SectionShell
          key={`${title}-${index}`}
          size="large"
          bordered
          className="product-feature-row"
        >
          <SplitSection
            reverse={index % 2 === 1}
            className="detail-rail"
            content={
              <div className="product-feature-copy">
              <span className="product-feature-index">{String(index + 1).padStart(2, "0")}</span>
              <DisplayHeading variant="feature">{title}</DisplayHeading>
              <p>{body}</p>
            </div>
            }
            media={
              <MediaSurface size="feature" className="product-feature-media">
              <SmartScreenshot
                src={images[index] ?? images[0]}
                alt={title}
                width={imageWidth}
                height={imageHeight}
                sizes="(max-width: 1024px) 92vw, 680px"
              />
              </MediaSurface>
            }
          />
        </SectionShell>
      ))}
    </section>
  );
}
