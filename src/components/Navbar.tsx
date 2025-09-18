import type { ReactNode } from "react";
import clsx from "clsx";

export interface NavbarProps {
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
}

export function Navbar({ left, right, className }: NavbarProps) {
  return (
    <header className={clsx("flex items-center justify-between border-b bg-white px-4 py-3 shadow-sm", className)}>
      <div className="flex items-center gap-2">{left}</div>
      <div className="flex items-center gap-2">{right}</div>
    </header>
  );
}

