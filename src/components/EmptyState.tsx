import type { ReactNode } from "react";
import clsx from "clsx";

export interface EmptyStateProps {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title = "Sin datos", description, action, className }: EmptyStateProps) {
  return (
    <div className={clsx("flex flex-col items-center justify-center rounded-lg border bg-white p-8 text-center", className)}>
      <div className="mb-2 text-lg font-semibold text-slate-900">{title}</div>
      {description && <div className="mb-4 text-sm text-slate-600">{description}</div>}
      {action}
    </div>
  );
}

