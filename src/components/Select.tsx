import { forwardRef, type SelectHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";
import { controlBase } from "../lib/styles";

export interface Option {
  label: ReactNode;
  value: string | number;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: Option[];
  className?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, children, multiple, ...props }, ref) => {
    return (
      <select
        ref={ref}
        multiple={multiple}
        className={clsx(controlBase, className)}
        {...props}
      >
        {options
          ? options.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
    );
  }
);

Select.displayName = "Select";
