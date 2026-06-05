import { Star } from "lucide-react";
import { testimonials } from "../../data/siteData";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";

export function TestimonialSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="Social Proof"
          title="Cerita Perjalanan Pelanggan"
          description="Dipercaya untuk perjalanan keluarga, sekolah, mahasiswa, dan perusahaan yang membutuhkan layanan rapi."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-borderSoft bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 leading-8 text-charcoal">"{item.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold text-navy">{item.name}</p>
                <p className="text-sm text-muted">{item.segment}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
