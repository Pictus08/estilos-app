import type { ReactNode } from "react";
import clsx from "clsx";

export interface TableProps {
  children?: ReactNode;
  className?: string;
}

export function Table({ children, className }: TableProps) {
  return (
    <div className={clsx("overflow-x-auto", className)}>
      <table className="min-w-full divide-y divide-slate-200">
        {children}
      </table>
    </div>
  );
}

export function THead({ children }: { children?: ReactNode }) {
  return <thead className="bg-slate-50 text-left text-sm text-slate-600">{children}</thead>;
}

export function TBody({ children }: { children?: ReactNode }) {
  return <tbody className="divide-y divide-slate-200 text-sm text-slate-800">{children}</tbody>;
}

export function TR({ children }: { children?: ReactNode }) {
  return <tr className="odd:bg-white even:bg-slate-50/50 hover:bg-slate-50">{children}</tr>;
}

export function TH({ children }: { children?: ReactNode }) {
  return <th className="px-4 py-2 font-semibold text-slate-700">{children}</th>;
}

export function TD({ children }: { children?: ReactNode }) {
  return <td className="px-4 py-2">{children}</td>;
}
