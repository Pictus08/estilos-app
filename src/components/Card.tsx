import type { ReactNode } from "react";
import clsx from "clsx";

export interface CardProps {
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, children, className }: CardProps) {
  return (
    <div className={clsx("rounded-lg border bg-white p-4 shadow-sm", className)}>
      {title && <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}

