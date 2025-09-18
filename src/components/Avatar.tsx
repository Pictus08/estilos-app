import clsx from "clsx";

export interface AvatarProps {
  src?: string | null;
  alt?: string;
  name?: string; // for initials fallback
  size?: number; // px
  className?: string;
}

function initials(name?: string) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return (first + last).toUpperCase();
}

export function Avatar({ src, alt, name, size = 40, className }: AvatarProps) {
  const style = { width: size, height: size } as const;
  if (src) {
    return <img src={src} alt={alt || name || "avatar"} className={clsx("rounded-full object-cover", className)} style={style} />;
  }
  return (
    <div className={clsx("flex items-center justify-center rounded-full bg-slate-200 text-slate-700", className)} style={style}>
      <span className="text-sm font-medium">{initials(name)}</span>
    </div>
  );
}

