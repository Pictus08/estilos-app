import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={clsx(
          "h-4 w-4 rounded border-slate-300 text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
          className
        )}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
