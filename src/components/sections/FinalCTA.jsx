import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../utils/whatsapp";
import { Container } from "../common/Container";
import { Button } from "../ui/Button";

export function FinalCTA({
  title = "Siap Merencanakan Perjalanan Anda di Jogja?",
  description = "Konsultasikan kebutuhan wisata, study tour, sewa mobil, atau corporate trip Anda langsung dengan tim SiTravel.",
  cta = "Chat WhatsApp Sekarang",
  message = "Halo SiTravel, saya ingin konsultasi perjalanan di Jogja.",
}) {
  return (
    <section className="bg-navy py-16 text-white md:py-20">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="font-heading text-3xl leading-tight md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/75">{description}</p>
          </div>
          <div className="md:text-right">
            <Button href={whatsappUrl(message)} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> {cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
