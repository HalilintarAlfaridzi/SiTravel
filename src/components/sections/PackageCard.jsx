import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../utils/whatsapp";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function PackageCard({ item }) {
  return (
    <Card>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img className="h-full w-full object-cover transition duration-500 hover:scale-105" src={item.image} alt={item.title} />
        <Badge className="absolute left-4 top-4 bg-white/90">{item.duration}</Badge>
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-gold">{item.category}</p>
        <h3 className="mt-2 font-heading text-2xl leading-tight text-navy">{item.title}</h3>
        <p className="mt-3 leading-7 text-muted">{item.description}</p>
        <p className="mt-4 text-sm font-semibold text-charcoal">Cocok untuk: {item.audience}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.destinations.map((destination) => (
            <span key={destination} className="rounded-full bg-graySoft px-3 py-1 text-sm text-muted">
              {destination}
            </span>
          ))}
        </div>
        <Button href={whatsappUrl(item.message)} className="mt-6 w-full" target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> Tanya Paket Ini
        </Button>
      </div>
    </Card>
  );
}
