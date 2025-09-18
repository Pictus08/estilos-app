export const controlBase = [
  "block w-full rounded-lg border px-3 py-2",
  "text-sm",
  // colors via tokens
  "border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--input-fg)]",
  "placeholder:text-[var(--placeholder-fg)]",
  // interaction
  "shadow-inner transition-colors",
  "hover:border-[var(--input-border)]/80",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)] focus-visible:ring-offset-1",
  "disabled:cursor-not-allowed disabled:opacity-60",
].join(" ");

export const cardBase = [
  "rounded-xl border p-5",
  // colors via tokens
  "border-[var(--panel-border)] bg-[var(--panel-bg)] text-[var(--panel-fg)]",
  "shadow-sm backdrop-blur transition-shadow hover:shadow-md",
].join(" ");

