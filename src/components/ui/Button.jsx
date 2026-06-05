import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-gold text-navy hover:bg-goldSoft shadow-sm hover:shadow-md focus-visible:ring-gold",
  secondary:
    "border border-navy text-navy hover:bg-navy hover:text-white focus-visible:ring-navy",
  light:
    "border border-white/30 bg-white/10 text-white hover:bg-white hover:text-navy focus-visible:ring-white",
  dark: "bg-navy text-white hover:bg-navySoft focus-visible:ring-navy",
  ghost: "text-navy hover:text-gold focus-visible:ring-gold px-0",
};

export function Button({ children, className = "", variant = "primary", href, to, ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
