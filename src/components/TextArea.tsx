import { forwardRef, type TextareaHTMLAttributes } from "react";
import clsx from "clsx";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={clsx(
          "block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary",
          className
        )}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

