import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/siteData";
import { whatsappUrl } from "../../utils/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "./Container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }) =>
    `text-sm font-semibold transition hover:text-gold ${isActive ? "text-gold" : "text-charcoal"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-borderSoft/80 bg-white/90 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-lg font-bold text-gold">
            ST
          </span>
          <span>
            <span className="block font-heading text-2xl leading-none text-navy">SiTravel</span>
            <span className="text-xs font-medium text-muted">Premium Jogja Travel</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href={whatsappUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Konsultasi WhatsApp
          </Button>
        </div>

        <button
          aria-label="Buka menu navigasi"
          className="grid h-11 w-11 place-items-center rounded-full border border-borderSoft text-navy xl:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-borderSoft bg-white xl:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-charcoal hover:bg-ivory"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button href={whatsappUrl()} className="mt-2" target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Konsultasi WhatsApp
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
