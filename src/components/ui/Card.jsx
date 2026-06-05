export function Card({ children, className = "" }) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-borderSoft bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium ${className}`}
    >
      {children}
    </article>
  );
}
