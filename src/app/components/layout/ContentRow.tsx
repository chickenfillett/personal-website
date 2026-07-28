import type { ReactNode } from "react";

export type ContentRowProps = {
  index?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function ContentRow({
  index,
  title,
  description,
  action,
  className = "",
}: ContentRowProps) {
  return (
    <div className={`content-row ${className}`}>
      {index ? <span className="content-row-index">{index}</span> : null}
      <div className="content-row-copy">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
      {action ? <div className="content-row-action">{action}</div> : null}
    </div>
  );
}
