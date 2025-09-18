import type { ReactNode } from "react";
import clsx from "clsx";
import { cardBase } from "../lib/styles";

export interface CardProps {
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, children, className }: CardProps) {
  return (
    <div className={clsx(cardBase, className)}>
      {title && <h3 className="mb-3 text-base font-semibold text-slate-900">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
