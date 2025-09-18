import { useState, type ReactNode } from "react";
import clsx from "clsx";

export interface AccordionItemProps {
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className={clsx("divide-y rounded-md border", className)}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium hover:bg-slate-50"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.title}
            <span className="text-slate-400">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <div className="px-4 py-3 text-sm text-slate-700">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

