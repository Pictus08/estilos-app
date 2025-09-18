import type { ReactNode } from "react";
import clsx from "clsx";

export interface StatsCardProps {
  label: ReactNode;
  value: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function StatsCard({ label, value, icon, className }: StatsCardProps) {
  return (
    <div className={clsx("flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm", className)}>
      <div>
        <div className="text-sm text-slate-600">{label}</div>
        <div className="text-2xl font-semibold text-slate-900">{value}</div>
      </div>
      {icon && <div className="text-secondary">{icon}</div>}
    </div>
  );
}

