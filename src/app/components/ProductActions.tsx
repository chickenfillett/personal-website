import Link from "./TransitionLink";
import { SectionShell } from "./layout/SectionShell";

export type ProductAction = {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "secondary";
};

function actionClass(variant: ProductAction["variant"] = "secondary", compact = false) {
  const base = compact ? "rounded-full px-4 py-2.5 text-sm hover-lift" : "rounded-full px-5 py-3 text-sm hover-lift";
  return variant === "primary"
    ? `primary-action font-medium ${base}`
    : `secondary-action ${base}`;
}

function ActionLink({ action, compact = false }: { action: ProductAction; compact?: boolean }) {
  const className = actionClass(action.variant, compact);

  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noreferrer" className={className} data-analytics="cta_click">
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}

export function ProductHeroActions({ actions }: { actions: readonly ProductAction[] }) {
  return (
    <div className="product-hero-actions mt-10">
      <div className="flex flex-wrap gap-3">
        {actions.map((action) => (
          <ActionLink key={`${action.href}-${action.label}`} action={action} />
        ))}
      </div>
    </div>
  );
}

export function ProductInfoLinks({ actions }: { actions: readonly ProductAction[] }) {
  return (
    <SectionShell size="small" className="product-info-links-section">
      <div className="product-info-links">
        {actions.map((action, index) => {
          const content = (
            <>
              <span>{action.label}</span>
              <span className="product-info-arrow" aria-hidden="true">→</span>
            </>
          );
          return (
            <span key={`${action.href}-${action.label}`} className="product-info-inline">
              {action.external ? (
                <a href={action.href} target="_blank" rel="noreferrer">{content}</a>
              ) : (
                <Link href={action.href}>{content}</Link>
              )}
              {index < actions.length - 1 ? <span className="product-info-divider" aria-hidden="true">·</span> : null}
            </span>
          );
        })}
      </div>
    </SectionShell>
  );
}
