import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { FleetCard } from "../components/sections/FleetCard";
import { BookingProcess } from "../components/sections/BookingProcess";
import { FinalCTA } from "../components/sections/FinalCTA";
import { fleet, images } from "../data/siteData";

const useCases = ["Liburan keluarga", "Perjalanan bisnis", "Antar jemput tamu", "Rombongan kampus", "Study tour", "Wedding guest transport"];
const benefits = ["Driver berpengalaman", "Armada bersih", "Rute fleksibel", "Bisa city tour", "Bisa luar kota", "Penjemputan hotel/stasiun/bandara"];

export function SewaMobil() {
  return (
    <>
      <PageHeader
        badge="Sewa Mobil + Driver"
        title="Sewa Mobil + Driver di Jogja untuk Perjalanan yang Lebih Nyaman"
        description="Pilih armada sesuai kebutuhan Anda, mulai dari city car hingga Hiace dan bus pariwisata untuk rombongan."
        cta="Cek Ketersediaan Armada"
        message="Halo SiTravel, saya ingin cek ketersediaan sewa mobil + driver."
        image={images.hero}
      />
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeader
            badge="Pilihan Armada"
            title="Armada untuk Personal sampai Rombongan"
            description="Setiap pilihan armada dapat dikonsultasikan berdasarkan tanggal, jumlah penumpang, dan tujuan perjalanan."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {fleet.map((item) => (
              <FleetCard key={item.name} item={item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-navy py-16 text-white md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader align="left" badge="Benefit" title="Transportasi Nyaman Tanpa Harus Menyetir Sendiri" description="Driver SiTravel membantu perjalanan terasa lebih praktis, terutama untuk tamu luar kota dan rombongan." light />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 text-navy">
              <h3 className="font-heading text-3xl">Cocok untuk</h3>
              <div className="mt-6 grid gap-3">
                {useCases.map((item) => (
                  <div key={item} className="rounded-2xl bg-ivory p-4 font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <BookingProcess />
      <FinalCTA
        title="Butuh Armada untuk Tanggal Tertentu?"
        description="Sampaikan tanggal, jumlah penumpang, dan tujuan perjalanan agar tim SiTravel bisa cek armada yang paling sesuai."
        cta="Cek Ketersediaan via WhatsApp"
        message="Halo SiTravel, saya ingin cek ketersediaan sewa mobil + driver.\nTanggal:\nJumlah penumpang:\nTujuan:"
      />
    </>
  );
}
