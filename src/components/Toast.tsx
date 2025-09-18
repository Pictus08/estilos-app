import clsx from "clsx";
import type { ReactNode } from "react";

export interface ToastProps {
  children?: ReactNode;
  className?: string;
}

export function Toast({ children, className }: ToastProps) {
  return (
    <div className={clsx("fixed bottom-4 right-4 rounded-md bg-slate-800 px-4 py-2 text-white shadow-lg", className)}>
      {children}
    </div>
  );
}

