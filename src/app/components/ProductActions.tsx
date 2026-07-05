import Link from "./TransitionLink";

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
    <div className="mt-10 flex flex-wrap gap-3">
      <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-muted">{status}</span>
      {actions.map((action) => (
        <ActionLink key={`${action.href}-${action.label}`} action={action} />
      ))}
    </div>
  );
}

export function ProductInfoLinks({ actions }: { actions: readonly ProductAction[] }) {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
      <div className="flex flex-wrap gap-3 border-t border-white/[0.07] pt-8 text-sm">
        {actions.map((action) => (
          <ActionLink key={`${action.href}-${action.label}`} action={action} compact />
        ))}
      </div>
    </section>
  );
}
