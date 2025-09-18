import clsx from "clsx";
import { Button } from "./Button";
import type { ReactNode } from "react";

export interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  description?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
}

export function ConfirmDialog({
  open,
  title = "Confirmar",
  description,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
  className,
}: ConfirmDialogProps) {
  if (!open) return null;
  return (
    <div className={clsx("fixed inset-0 z-50 flex items-center justify-center", className)}>
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />
      <div className="relative z-10 w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
        {title && <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>}
        {description && <div className="mb-4 text-sm text-slate-600">{description}</div>}
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}

