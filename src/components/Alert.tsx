import clsx from "clsx";
import type { ReactNode } from "react";

export type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps {
  variant?: AlertVariant;
  children?: ReactNode;
  className?: string;
}

export function Alert({ variant = "info", children, className }: AlertProps) {
  const styles: Record<AlertVariant, string> = {
    info: "bg-sky-50 text-sky-800 border-sky-200",
    success: "bg-emerald-50 text-emerald-800 border-emerald-200",
    warning: "bg-amber-50 text-amber-800 border-amber-200",
    error: "bg-danger/10 text-danger border-danger/30",
  };
  return (
    <div className={clsx("rounded-md border px-4 py-3 text-sm", styles[variant], className)}>
      {children}
    </div>
  );
}

