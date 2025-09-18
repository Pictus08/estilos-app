import clsx from "clsx";
import type { ReactNode } from "react";

export interface DrawerProps {
  open: boolean;
  side?: "left" | "right";
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}

export function Drawer({ open, side = "right", onClose, children, className }: DrawerProps) {
  if (!open) return null;
  return (
    <div className={clsx("fixed inset-0 z-50", className)}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" onClick={onClose} />
      <div
        className={clsx(
          "absolute top-0 h-full w-80 bg-white shadow-xl transition-transform duration-200",
          side === "right" ? "right-0 translate-x-0" : "left-0 translate-x-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}
