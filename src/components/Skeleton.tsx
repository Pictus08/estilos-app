import clsx from "clsx";

export interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={clsx("animate-pulse rounded-md bg-slate-200", className)} />;
}

