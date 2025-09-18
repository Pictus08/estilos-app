import clsx from "clsx";

export interface StepperProps {
  steps: string[];
  active: number; // 0-based
  className?: string;
}

export function Stepper({ steps, active, className }: StepperProps) {
  return (
    <ol className={clsx("flex items-center gap-4", className)}>
      {steps.map((label, i) => {
        const status = i < active ? "done" : i === active ? "active" : "todo";
        return (
          <li key={i} className="flex items-center gap-2">
            <span
              className={clsx(
                "flex h-6 w-6 items-center justify-center rounded-full text-xs",
                status === "done" && "bg-secondary text-white",
                status === "active" && "border border-secondary text-secondary",
                status === "todo" && "border border-slate-300 text-slate-500"
              )}
            >
              {i + 1}
            </span>
            <span className="text-sm text-slate-700">{label}</span>
          </li>
        );
      })}
    </ol>
  );
}

