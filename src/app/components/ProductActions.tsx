import Link from "./TransitionLink";
import { InlineMeta } from "./layout/InlineMeta";
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
      <a href={action.href} target="_blank" rel="noreferrer" className={className}>
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

export function ProductHeroActions({
  status,
  actions,
}: {
  status: string;
  actions: readonly ProductAction[];
}) {
  return (
    <div className="product-hero-actions mt-10">
      <InlineMeta items={[status]} />
      <div className="mt-6 flex flex-wrap gap-3">
        {actions.map((action) => (
          <ActionLink key={`${action.href}-${action.label}`} action={action} />
        ))}
      </div>
    </div>
  );
}

export function ProductInfoLinks({ actions }: { actions: readonly ProductAction[] }) {
  return (
    <SectionShell size="small" bordered className="product-info-links-section">
      <div className="product-info-links">
        {actions.map((action) => (
          action.external ? (
            <a
              key={`${action.href}-${action.label}`}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className="product-info-row"
            >
              <span>{action.label}</span><span aria-hidden="true">→</span>
            </a>
          ) : (
            <Link key={`${action.href}-${action.label}`} href={action.href} className="product-info-row">
              <span>{action.label}</span><span aria-hidden="true">→</span>
            </Link>
          )
        ))}
      </div>
    </SectionShell>
  );
}
