import { useId } from "react";
import clsx from "clsx";

export interface RadioOption {
  label: string;
  value: string | number;
}

export interface RadioGroupProps {
  name?: string;
  options: RadioOption[];
  value?: string | number;
  onChange?: (value: string) => void;
  className?: string;
}

export function RadioGroup({ name, options, value, onChange, className }: RadioGroupProps) {
  const groupId = useId();
  return (
    <div className={clsx("flex flex-col gap-2", className)} role="radiogroup">
      {options.map((opt) => {
        const id = `${groupId}-${opt.value}`;
        return (
          <label key={opt.value} htmlFor={id} className="inline-flex items-center gap-2">
            <input
              id={id}
              type="radio"
              name={name || groupId}
              value={String(opt.value)}
              checked={value === opt.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="h-4 w-4 border-slate-300 text-secondary focus:ring-secondary"
            />
            <span className="text-sm text-slate-700">{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}

