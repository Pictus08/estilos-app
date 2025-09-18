import clsx from "clsx";
import type { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}

export function Modal({ open, onClose, children, className }: ModalProps) {
  if (!open) return null;
  return (
    <div className={clsx("fixed inset-0 z-50 flex items-center justify-center", className)}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">{children}</div>
    </div>
  );
}
