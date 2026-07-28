import Link from "../TransitionLink";

export function ProductIndexRow({
  index,
  title,
  description,
  meta,
  href,
}: {
  index: string;
  title: string;
  description?: string;
  meta?: string;
  href: string;
}) {
  return (
    <Link href={href} className="product-index-row">
      <span className="product-index-number">{index}</span>
      <strong>{title}</strong>
      {description ? <span className="product-index-description">{description}</span> : null}
      {meta ? <span className="product-index-meta">{meta}</span> : null}
      <span className="product-index-arrow" aria-hidden="true">→</span>
    </Link>
  );
}
