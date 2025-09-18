import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "danger"
  | "success"
  | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, disabled, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants: Record<ButtonVariant, string> = {
      primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
      secondary:
        "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
      outline:
        "border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-300",
      danger: "bg-danger text-white hover:bg-danger/90 focus:ring-danger",
      success:
        "bg-emerald-600 text-white hover:bg-emerald-600/90 focus:ring-emerald-600",
      icon: "p-2 h-9 w-9 bg-transparent hover:bg-slate-100 text-slate-700",
    };

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
