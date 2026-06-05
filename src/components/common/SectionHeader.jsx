import { Badge } from "../ui/Badge";

export function SectionHeader({ badge, title, description, align = "center", light = false }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}>
      {badge ? <Badge className={light ? "bg-white/10 text-gold" : ""}>{badge}</Badge> : null}
      <h2
        className={`mt-4 font-heading text-3xl leading-tight md:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 md:text-lg ${light ? "text-white/75" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
