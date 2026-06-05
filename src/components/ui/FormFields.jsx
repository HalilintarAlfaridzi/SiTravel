const base =
  "w-full rounded-2xl border border-borderSoft bg-white px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-muted focus:border-gold focus:ring-2 focus:ring-gold/30";

export function Input(props) {
  return <input className={base} {...props} />;
}

export function Textarea(props) {
  return <textarea className={`${base} min-h-32 resize-y`} {...props} />;
}

export function Select({ children, ...props }) {
  return (
    <select className={base} {...props}>
      {children}
    </select>
  );
}
