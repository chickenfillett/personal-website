import { ContentRow } from "./ContentRow";

export function OutcomeList({
  items,
  className = "",
}: {
  items: readonly (readonly [string, string?])[];
  className?: string;
}) {
  return (
    <div className={`outcome-list ${className}`}>
      {items.map(([title, description], index) => (
        <ContentRow
          key={`${title}-${index}`}
          index={String(index + 1).padStart(2, "0")}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
