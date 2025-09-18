import { useState, type ReactNode } from "react";
import clsx from "clsx";

export interface TabItem {
  label: ReactNode;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultIndex?: number;
  className?: string;
}

export function Tabs({ items, defaultIndex = 0, className }: TabsProps) {
  const [index, setIndex] = useState(defaultIndex);
  return (
    <div className={className}>
      <div className="flex gap-2 border-b border-slate-200">
        {items.map((it, i) => (
          <button
            key={i}
            className={clsx(
              "relative px-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors",
              i === index && "text-secondary",
            )}
            onClick={() => setIndex(i)}
          >
            {it.label}
            <span
              className={clsx(
                "absolute inset-x-2 -bottom-[1px] h-0.5 rounded-full bg-transparent transition-colors",
                i === index && "bg-secondary"
              )}
            />
          </button>
        ))}
      </div>
      <div className="pt-3">{items[index]?.content}</div>
    </div>
  );
}
