import Image from "next/image";
import { DisplayHeading } from "./Typography";

type GalleryItem = readonly [title: string, body: string];

export function ProductMediaGallery({
  eyebrow,
  title,
  intro,
  images,
  items,
  imageWidth,
  imageHeight,
  imageShape,
  productName,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  images: readonly string[];
  items?: readonly GalleryItem[];
  imageWidth: number;
  imageHeight: number;
  imageShape: "portrait" | "landscape";
  productName: string;
}) {
  return (
    <section className="product-gallery-section">
      <div className="product-section-inner">
        <div className="product-section-heading">
          <span className="eyebrow">{eyebrow}</span>
          <DisplayHeading variant="section">{title}</DisplayHeading>
          <p>{intro}</p>
        </div>

        <div className={`product-gallery-grid product-gallery-grid-${imageShape}`}>
          {images.map((image, index) => {
            const item = items?.[index];
            const imageTitle = item?.[0] ?? `${productName} ${String(index + 1).padStart(2, "0")}`;

            return (
              <figure key={image} className="product-gallery-card">
                <div className="product-gallery-media">
                  <Image
                    src={image}
                    alt={imageTitle}
                    width={imageWidth}
                    height={imageHeight}
                    loading="lazy"
                    decoding="async"
                    sizes={imageShape === "portrait"
                      ? "(max-width: 620px) 88vw, (max-width: 980px) 42vw, 300px"
                      : "(max-width: 720px) 92vw, (max-width: 1180px) 45vw, 540px"}
                  />
                </div>

                {item ? (
                  <figcaption className="product-gallery-copy">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{item[0]}</h3>
                      <p>{item[1]}</p>
                    </div>
                  </figcaption>
                ) : (
                  <figcaption className="product-gallery-index">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{productName}</span>
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
