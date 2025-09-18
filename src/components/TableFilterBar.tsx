import type { ReactNode } from "react";
import clsx from "clsx";
import { Input } from "./Input";

export interface TableFilterBarProps {
  value?: string;
  onChange?: (v: string) => void;
  children?: ReactNode;
  className?: string;
}

export function TableFilterBar({ value, onChange, children, className }: TableFilterBarProps) {
  return (
    <div className={clsx("mb-3 flex items-center justify-between gap-2", className)}>
      <div className="flex-1">
        <Input
          placeholder="Buscar..."
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
}

