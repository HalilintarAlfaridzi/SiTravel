export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-ivory px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy ${className}`}
    >
      {children}
    </span>
  );
}
