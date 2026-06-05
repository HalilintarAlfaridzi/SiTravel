import { ArrowRight } from "lucide-react";
import { services } from "../../data/siteData";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";

export function ServiceOverview() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="Layanan Utama"
          title="Layanan Travel untuk Berbagai Kebutuhan"
          description="Pilih jalur layanan sesuai kebutuhan perjalanan Anda, mulai dari wisata pribadi hingga rombongan perusahaan."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold">
                  <Icon size={24} />
                </div>
                <Badge className="mt-5">{service.badge}</Badge>
                <h3 className="mt-4 font-heading text-2xl text-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted">{service.description}</p>
                <Button to={service.href} variant="ghost" className="mt-5 justify-start">
                  {service.cta} <ArrowRight size={17} />
                </Button>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
