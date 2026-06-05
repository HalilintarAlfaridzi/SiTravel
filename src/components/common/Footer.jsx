import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { areas, navItems, services } from "../../data/siteData";
import { whatsappUrl } from "../../utils/whatsapp";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-navy pt-16 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="font-heading text-3xl text-gold">SiTravel</div>
            <p className="mt-4 max-w-sm leading-7 text-white/70">
              Travel premium di Yogyakarta untuk paket wisata, sewa mobil + driver, study tour,
              dan corporate trip dengan booking mudah via WhatsApp.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} className="text-white/70 transition hover:text-gold" to={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="text-white/70 transition hover:text-gold" to="/about">
                About
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Layanan</h3>
            <div className="mt-4 grid gap-3">
              {services.map((service) => (
                <Link key={service.href} className="text-white/70 transition hover:text-gold" to={service.href}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <div className="mt-4 grid gap-3 text-white/70">
              <a className="flex items-center gap-3 hover:text-gold" href={whatsappUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp SiTravel
              </a>
              <a className="flex items-center gap-3 hover:text-gold" href="mailto:hello@sitravel.id">
                <Mail size={18} /> hello@sitravel.id
              </a>
              <a className="flex items-center gap-3 hover:text-gold" href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram size={18} /> @sitravel.jogja
              </a>
              <span className="flex items-center gap-3">
                <MapPin size={18} /> Yogyakarta, Indonesia
              </span>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/55">Area layanan: {areas.join(", ")}.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 py-6 text-sm text-white/55">
          Copyright {new Date().getFullYear()} SiTravel. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
