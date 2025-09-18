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
      <div className="flex gap-2 border-b">
        {items.map((it, i) => (
          <button
            key={i}
            className={clsx(
              "px-3 py-2 text-sm",
              i === index ? "border-b-2 border-secondary text-secondary" : "text-slate-600 hover:text-slate-900"
            )}
            onClick={() => setIndex(i)}
          >
            {it.label}
          </button>
        ))}
      </div>
      <div className="pt-3">{items[index]?.content}</div>
    </div>
  );
}

