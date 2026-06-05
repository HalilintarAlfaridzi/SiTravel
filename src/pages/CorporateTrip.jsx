import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { FinalCTA } from "../components/sections/FinalCTA";
import { corporatePackages, images } from "../data/siteData";

const needs = ["Butuh vendor profesional", "Butuh jadwal rapi", "Butuh transportasi nyaman", "Butuh acara yang berkesan", "Butuh komunikasi cepat"];
const solutions = ["Trip planning", "Armada", "Driver", "Destinasi", "Custom itinerary", "Dokumentasi opsional"];
const itinerary = {
  "Day 1": ["Penjemputan bandara/stasiun", "Hotel check-in", "Dinner", "Free time"],
  "Day 2": ["Team outing", "Wisata Jogja", "Gathering dinner"],
  "Day 3": ["Oleh-oleh", "Drop off"],
};

export function CorporateTrip() {
  return (
    <>
      <PageHeader
        badge="Corporate Trip"
        title="Corporate Trip & Gathering di Jogja dengan Layanan Profesional"
        description="Rancang perjalanan perusahaan yang nyaman, rapi, dan berkesan bersama SiTravel."
        cta="Diskusi Corporate Trip"
        message="Halo SiTravel, saya ingin diskusi Corporate Trip.\nNama perusahaan:\nJumlah peserta:\nTanggal rencana:\nKebutuhan acara:"
        image={images.hero}
      />
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader align="left" badge="Corporate Needs" title="Kebutuhan Perusahaan Perlu Vendor yang Rapi" description="SiTravel membantu HR, GA, dan panitia acara mengurangi risiko perjalanan berantakan melalui koordinasi yang jelas." />
              <div className="mt-8 grid gap-3">
                {needs.map((item) => (
                  <div key={item} className="rounded-2xl bg-ivory p-4 font-semibold text-navy">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-navy p-6 text-white">
              <h3 className="font-heading text-3xl">Solusi SiTravel</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {solutions.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-ivory py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeader badge="Jenis Paket" title="Fleksibel untuk Berbagai Agenda Perusahaan" description="Mulai dari perjalanan small team hingga rombongan besar, kebutuhan acara dapat disesuaikan." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {corporatePackages.map((item) => (
              <div key={item} className="rounded-2xl border border-white bg-white p-6 shadow-sm">
                <h3 className="font-heading text-2xl text-navy">{item}</h3>
                <p className="mt-3 leading-7 text-muted">Format perjalanan dapat disusun berdasarkan tujuan acara, jumlah peserta, dan target pengalaman tim.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader align="left" badge="Sample Itinerary" title="Contoh Alur Corporate Trip 3 Hari" description="Contoh ini bisa dipakai sebagai kerangka awal sebelum disesuaikan dengan kebutuhan acara perusahaan." />
            <div className="grid gap-4">
              {Object.entries(itinerary).map(([day, items]) => (
                <div key={day} className="rounded-3xl border border-borderSoft p-6 shadow-sm">
                  <h3 className="font-heading text-2xl text-navy">{day}</h3>
                  <ul className="mt-4 grid gap-3 text-muted">
                    {items.map((item) => (
                      <li key={item} className="rounded-2xl bg-ivory p-3">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <FinalCTA
        title="Rencanakan Perjalanan Perusahaan Anda dengan Lebih Mudah"
        description="Ceritakan agenda, jumlah peserta, dan tanggal rencana agar SiTravel bisa membantu menyusun opsi layanan yang sesuai."
        cta="Konsultasi Corporate Trip"
        message="Halo SiTravel, saya ingin diskusi Corporate Trip.\nNama perusahaan:\nJumlah peserta:\nTanggal rencana:\nKebutuhan acara:"
      />
    </>
  );
}
