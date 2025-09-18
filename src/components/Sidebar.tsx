import type { ReactNode } from "react";
import clsx from "clsx";

export interface SidebarProps {
  children?: ReactNode;
  className?: string;
}

export function Sidebar({ children, className }: SidebarProps) {
  return <aside className={clsx("w-64 border-r bg-white p-4", className)}>{children}</aside>;
}

