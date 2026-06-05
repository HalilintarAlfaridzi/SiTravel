import { bookingSteps } from "../../data/siteData";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";

export function BookingProcess() {
  return (
    <section className="bg-ivory py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="Proses Booking"
          title="Booking Simpel Tanpa Form Rumit"
          description="Alur dibuat WhatsApp-first agar konsultasi, konfirmasi tanggal, dan kebutuhan perjalanan bisa langsung jelas."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {bookingSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-2xl border border-borderSoft bg-white p-5 text-center shadow-sm">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-navy text-gold">
                  <Icon size={22} />
                </div>
                <p className="mt-4 text-sm font-semibold text-gold">0{index + 1}</p>
                <h3 className="mt-1 font-semibold text-navy">{step.title}</h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
