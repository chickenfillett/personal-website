import SmartScreenshot from "./SmartScreenshot";
import { DisplayHeading } from "./Typography";

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
        <div key={`${title}-${index}`} className="product-feature-row">
          <div className={`detail-rail ${index % 2 === 1 ? "product-feature-row-reverse" : ""}`}>
            <div className="detail-sticky product-feature-copy">
              <span className="product-feature-index">{String(index + 1).padStart(2, "0")}</span>
              <DisplayHeading variant="feature">{title}</DisplayHeading>
              <p>{body}</p>
            </div>
            <div className="product-feature-media">
              <SmartScreenshot
                src={images[index] ?? images[0]}
                alt={title}
                width={imageWidth}
                height={imageHeight}
                sizes="(max-width: 1024px) 92vw, 680px"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
