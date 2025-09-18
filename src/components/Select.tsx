import { forwardRef, type SelectHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

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
        className={clsx(
          "block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary",
          className
        )}
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

