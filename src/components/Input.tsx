import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";
import { controlBase } from "../lib/styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={clsx(
          controlBase,
          "[&[aria-invalid='true']]:border-danger focus-visible:ring-[var(--ring-color)]",
          className,
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
