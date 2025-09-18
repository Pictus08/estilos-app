import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface ToggleSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
}

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  ({ className, checked, onChange, ...props }, ref) => {
    return (
      <label className={clsx("inline-flex items-center cursor-pointer select-none", className)}>
        <input
          ref={ref}
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <div className="relative h-6 w-11 rounded-full bg-slate-300 peer-checked:bg-secondary transition-all shadow-inner">
          <span className="absolute left-0.5 top-1/2 -translate-y-1/2 h-5 w-5 translate-x-0 peer-checked:translate-x-5 transition-transform rounded-full bg-white shadow" />
        </div>
      </label>
    );
  }
);

ToggleSwitch.displayName = "ToggleSwitch";
