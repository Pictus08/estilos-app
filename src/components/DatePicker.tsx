import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="date"
      className={clsx(
        "block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary",
        className
      )}
      {...props}
    />
  )
);

DatePicker.displayName = "DatePicker";

