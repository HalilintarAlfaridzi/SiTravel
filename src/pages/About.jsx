import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { FinalCTA } from "../components/sections/FinalCTA";
import { areas, images } from "../data/siteData";

const values = ["Safety", "Comfort", "Professional service", "Easy booking", "Customer satisfaction"];
const missions = [
  "Memberikan layanan perjalanan yang aman dan nyaman.",
  "Membantu pelanggan merencanakan perjalanan tanpa ribet.",
  "Menyediakan armada dan driver profesional.",
  "Membangun pengalaman wisata yang berkesan.",
];

export function About() {
  return (
    <>
      <PageHeader
        badge="Tentang SiTravel"
        title="Travel Premium di Yogyakarta untuk Perjalanan yang Lebih Tenang"
        description="SiTravel hadir untuk membantu perjalanan di Yogyakarta menjadi lebih nyaman, aman, dan mudah direncanakan."
        cta="Hubungi Kami"
        image={images.hero}
      />
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader align="left" badge="Brand Story" title="Berawal dari Kebutuhan Travel yang Lebih Rapi" description="SiTravel menyediakan solusi perjalanan untuk wisata pribadi, sekolah, mahasiswa, dan perusahaan yang membutuhkan layanan travel terpercaya di Yogyakarta." />
              <p className="mt-6 leading-8 text-muted">
                Kami percaya perjalanan yang baik bukan hanya soal destinasi, tetapi juga koordinasi,
                armada, driver, jadwal, dan komunikasi yang membuat pelanggan merasa tenang sejak awal.
              </p>
            </div>
            <img className="h-full min-h-80 rounded-3xl object-cover shadow-premium" src={images.driver} alt="Tim SiTravel membantu konsultasi perjalanan" />
          </div>
        </Container>
      </section>
      <section className="bg-ivory py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-navy p-8 text-white">
              <h2 className="font-heading text-4xl">Visi</h2>
              <p className="mt-4 text-lg leading-8 text-white/75">Menjadi layanan travel premium terpercaya di Yogyakarta.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="font-heading text-4xl text-navy">Misi</h2>
              <div className="mt-6 grid gap-3">
                {missions.map((item) => (
                  <p key={item} className="rounded-2xl bg-ivory p-4 font-medium text-charcoal">{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {values.map((item) => (
              <div key={item} className="rounded-2xl border border-white bg-white p-5 text-center font-semibold text-navy shadow-sm">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center leading-8 text-muted">
            Berbasis di Yogyakarta dengan area layanan {areas.join(", ")}.
          </p>
        </Container>
      </section>
      <FinalCTA title="Siap Merencanakan Perjalanan Bersama SiTravel?" cta="Hubungi Kami" />
    </>
  );
}
