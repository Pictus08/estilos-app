import type { ReactNode } from "react";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
}

export function Breadcrumbs({ items, separator = "/" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
      <ol className="flex items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <a href={item.href} className="hover:text-slate-900">
                {item.label}
              </a>
            ) : (
              <span className="text-slate-900">{item.label}</span>
            )}
            {i < items.length - 1 && <span className="opacity-60">{separator}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

