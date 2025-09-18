import type { ReactNode } from "react";
import clsx from "clsx";

export interface ChartProps {
  children?: ReactNode;
  className?: string;
}

// Placeholder container to host any chart implementation chosen by the app
export function Chart({ children, className }: ChartProps) {
  return (
    <div className={clsx("rounded-lg border bg-white p-4", className)}>
      {children}
    </div>
  );
}

