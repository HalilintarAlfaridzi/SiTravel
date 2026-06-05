import { ArrowRight, MessageCircle } from "lucide-react";
import {
  destinations,
  images,
  packages,
  stats,
  trustPoints,
} from "../data/siteData";
import { whatsappUrl } from "../utils/whatsapp";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { ServiceOverview } from "../components/sections/ServiceOverview";
import { PackageCard } from "../components/sections/PackageCard";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { FleetShowcase } from "../components/sections/FleetShowcase";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { FAQSection } from "../components/sections/FAQSection";
import { FinalCTA } from "../components/sections/FinalCTA";

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          src={images.hero}
          alt="Pemandangan Yogyakarta dengan Gunung Merapi dan candi untuk perjalanan premium SiTravel"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/78 to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/10" />
        <Container className="relative grid min-h-[calc(100svh-128px)] items-center py-14 sm:py-16 lg:min-h-[720px]">
          <div className="max-w-4xl">
            <Badge className="bg-white/10 text-gold">Premium Travel Service in Yogyakarta</Badge>
            <h1 className="mt-6 max-w-4xl font-heading text-4xl leading-tight md:text-6xl lg:text-7xl">
              Jelajahi Jogja dengan Travel Premium yang Nyaman, Aman, dan Profesional
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              SiTravel membantu perjalanan wisata, study tour, sewa mobil, dan corporate trip di
              Yogyakarta dengan armada nyaman, driver berpengalaman, dan booking mudah via WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Konsultasi via WhatsApp
              </Button>
              <Button to="/paket-wisata" variant="light">
                Lihat Paket Wisata <ArrowRight size={18} />
              </Button>
            </div>
            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.label} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                    <Icon className="text-gold" size={20} />
                    <span className="text-sm font-semibold">{point.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-12">
        <Container>
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.value} className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                <p className="font-heading text-3xl text-navy">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ServiceOverview />

      <section className="bg-ivory py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeader
            badge="Paket Unggulan"
            title="Paket Wisata yang Mudah Dipilih"
            description="Mulai dari trip satu hari sampai perjalanan custom, setiap paket bisa dikonsultasikan langsung via WhatsApp."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((item) => (
              <PackageCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <FleetShowcase compact />

      <section className="bg-navy py-16 text-white md:py-20 lg:py-24">
        <Container>
          <SectionHeader
            badge="Destinasi Jogja"
            title="Highlight Destinasi Favorit"
            description="SiTravel membantu memilih rute yang masuk akal, nyaman, dan sesuai dengan tempo perjalanan Anda."
            light
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination, index) => (
              <div key={destination} className="relative min-h-44 overflow-hidden rounded-3xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={index % 2 === 0 ? images.jogja : images.hero}
                  alt={`Destinasi ${destination} di Yogyakarta`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 font-heading text-2xl">{destination}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
