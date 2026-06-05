import { MessageCircle, Users } from "lucide-react";
import { whatsappUrl } from "../../utils/whatsapp";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function FleetCard({ item }) {
  return (
    <Card>
      <img className="aspect-[4/3] w-full object-cover" src={item.image} alt={item.name} />
      <div className="p-6">
        <h3 className="font-heading text-2xl text-navy">{item.name}</h3>
        <p className="mt-3 flex items-center gap-2 font-semibold text-charcoal">
          <Users size={18} className="text-gold" /> {item.capacity}
        </p>
        <p className="mt-3 leading-7 text-muted">{item.bestFor}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.facilities.map((facility) => (
            <span key={facility} className="rounded-full bg-ivory px-3 py-1 text-sm font-medium text-navy">
              {facility}
            </span>
          ))}
        </div>
        <Button href={whatsappUrl(item.message)} className="mt-6 w-full" target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> Cek Ketersediaan
        </Button>
      </div>
    </Card>
  );
}
