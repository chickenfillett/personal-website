export function NumberedCardGrid({
  items,
  columns = 4,
  titleOffset = "large",
}: {
  items: readonly (readonly [string, string])[];
  columns?: 2 | 4;
  titleOffset?: "medium" | "large";
}) {
  const gridColumns = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-4";
  const titleMargin = titleOffset === "medium" ? "mt-12" : "mt-16";

  return (
    <div className={`mt-16 grid grid-cols-1 ${gridColumns} border-t border-l border-white/[0.07]`}>
      {items.map(([title, body], index) => (
        <div key={title} className="min-h-[220px] p-6 border-r border-b border-white/[0.07] bg-white/[0.012]">
          <span className="text-xs text-[var(--faint)] tracking-[0.14em]">0{index + 1}</span>
          <h3 className={`${titleMargin} text-xl tracking-[-0.045em] font-medium`}>{title}</h3>
          <p className="mt-4 text-sm leading-[1.75] text-muted">{body}</p>
        </div>
      ))}
    </div>
  );
}
