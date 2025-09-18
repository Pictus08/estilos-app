import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "danger"
  | "success"
  | "icon";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md active:scale-[0.99]",
  {
    variants: {
      variant: {
        primary: "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] hover:brightness-110",
        secondary: "bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)] hover:brightness-110",
        outline: "border border-[var(--btn-outline-border)] bg-transparent text-[var(--btn-primary-fg)] hover:bg-white/5",
        danger: "bg-[var(--btn-danger-bg)] text-[var(--btn-danger-fg)] hover:brightness-110",
        success: "bg-emerald-600 text-white hover:bg-emerald-600/90",
        icon: "h-9 w-9 p-0 bg-transparent hover:bg-slate-100 text-slate-700 rounded-full",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  className?: string;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(buttonStyles({ variant, size }), className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
