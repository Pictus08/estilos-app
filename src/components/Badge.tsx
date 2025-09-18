import clsx from "clsx";
import type { ReactNode } from "react";

export type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

export interface BadgeProps {
  children?: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const styles: Record<BadgeVariant, string> = {
    default: "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200",
    success: "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
    warning: "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
    danger: "bg-danger/10 text-danger ring-1 ring-danger/20",
    info: "bg-sky-100 text-sky-700 ring-1 ring-sky-200",
  };
  return (
    <span className={clsx("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", styles[variant], className)}>
      {children}
    </span>
  );
}
