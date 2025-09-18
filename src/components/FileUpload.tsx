import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="file"
      className={clsx(
        "block w-full text-sm text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-white hover:file:bg-secondary/90",
        className
      )}
      {...props}
    />
  )
);

FileUpload.displayName = "FileUpload";

