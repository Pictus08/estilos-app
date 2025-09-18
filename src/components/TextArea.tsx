import { forwardRef, type TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import { controlBase } from "../lib/styles";

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
        className={clsx(controlBase, className)}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";
