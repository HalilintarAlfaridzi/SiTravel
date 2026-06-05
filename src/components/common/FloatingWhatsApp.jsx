import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsappUrl } from "../../utils/whatsapp";

export function FloatingWhatsApp() {
  return (
    <>
      <a
        aria-label="Chat WhatsApp SiTravel"
        className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-full bg-gold text-navy shadow-premium transition hover:bg-goldSoft md:grid"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={24} />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t border-borderSoft bg-white p-3 shadow-lg md:hidden">
        <a
          className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-navy"
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={17} /> Chat WhatsApp
        </a>
        <Link
          className="flex min-h-11 items-center justify-center rounded-full border border-navy px-4 text-sm font-semibold text-navy"
          to="/paket-wisata"
        >
          Lihat Paket
        </Link>
      </div>
    </>
  );
}
