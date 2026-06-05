import { whyChoose } from "../../data/siteData";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";

export function WhyChooseUs() {
  return (
    <section className="bg-ivory py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="Trust First"
          title="Kenapa Memilih SiTravel?"
          description="Setiap perjalanan dirancang agar pelanggan tidak perlu repot mengurus rute, jadwal, dan transportasi sendiri."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-white bg-white p-5 shadow-sm">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-skySoft text-navy">
                  <Icon size={22} />
                </span>
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
