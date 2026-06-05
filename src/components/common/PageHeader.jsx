import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Container } from "./Container";
import { whatsappUrl } from "../../utils/whatsapp";
import { MessageCircle } from "lucide-react";

const DEFAULT_HEADER_IMAGE = `${import.meta.env.BASE_URL}images/hero-jogja-landscape.png`;

export function PageHeader({ badge, title, description, cta = "Konsultasi via WhatsApp", message, image }) {
  const headerImage = image || DEFAULT_HEADER_IMAGE;

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-24 lg:py-28">
      <img
        className="absolute inset-0 h-full w-full object-cover object-[60%_center] opacity-80"
        src={headerImage}
        alt=""
        onError={(event) => {
          if (event.currentTarget.src !== new URL(DEFAULT_HEADER_IMAGE, window.location.origin).href) {
            event.currentTarget.src = DEFAULT_HEADER_IMAGE;
          }
        }}
      />
      <div className="absolute inset-0 bg-navy/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/78 to-navy/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/10" />
      <Container className="relative">
        <div className="max-w-3xl">
          <Badge className="bg-white/10 text-gold">{badge}</Badge>
          <h1 className="mt-5 font-heading text-4xl leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 md:text-lg">{description}</p>
          <Button href={whatsappUrl(message)} className="mt-8" target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> {cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
