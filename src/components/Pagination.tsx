import clsx from "clsx";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange?: (page: number) => void;
  className?: string;
}

export function Pagination({ page, totalPages, onChange, className }: PaginationProps) {
  const canPrev = page > 1;
  const canNext = page < totalPages;
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <button
        className={clsx(
          "rounded-lg border px-3 py-1.5 text-sm shadow-sm hover:shadow-md transition",
          canPrev ? "hover:bg-slate-50" : "opacity-50 cursor-not-allowed"
        )}
        onClick={() => canPrev && onChange?.(page - 1)}
      >
        Anterior
      </button>
      <span className="text-sm text-slate-600">
        {page} / {totalPages}
      </span>
      <button
        className={clsx(
          "rounded-lg border px-3 py-1.5 text-sm shadow-sm hover:shadow-md transition",
          canNext ? "hover:bg-slate-50" : "opacity-50 cursor-not-allowed"
        )}
        onClick={() => canNext && onChange?.(page + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}
