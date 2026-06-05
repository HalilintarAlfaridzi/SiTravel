import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { FinalCTA } from "../components/sections/FinalCTA";
import { GalleryGrid } from "../components/sections/GalleryGrid";
import { educationDestinations, images } from "../data/siteData";

const benefits = ["Itinerary edukatif", "Armada rombongan", "Driver berpengalaman", "Koordinasi rapi", "Cocok untuk SD/SMP/SMA", "Bisa custom tujuan"];
const options = ["Study Tour 1 Hari", "Study Tour 2 Hari 1 Malam", "Study Tour 3 Hari 2 Malam", "Custom Study Tour"];

export function StudyTour() {
  return (
    <>
      <PageHeader
        badge="Study Tour"
        title="Study Tour Sekolah ke Jogja yang Aman, Edukatif, dan Terorganisir"
        description="SiTravel membantu sekolah merancang perjalanan study tour dengan itinerary edukatif, armada nyaman, dan koordinasi profesional."
        cta="Minta Penawaran Study Tour"
        message="Halo SiTravel, saya ingin konsultasi paket study tour sekolah ke Jogja.\nJumlah peserta:\nTanggal perjalanan:\nAsal sekolah:"
        image={images.hero}
      />
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeader
            badge="Keamanan & Koordinasi"
            title="Dirancang untuk Membantu Panitia Sekolah"
            description="Fokus utama study tour adalah keamanan peserta, jadwal yang terstruktur, dan komunikasi yang mudah dengan panitia."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div key={item} className="rounded-2xl border border-borderSoft bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-navy">{item}</h3>
                <p className="mt-3 leading-7 text-muted">Dapat disesuaikan dengan kebutuhan sekolah, jumlah peserta, durasi, dan tujuan edukasi.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-ivory py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader align="left" badge="Destinasi Edukasi" title="Pilihan Destinasi Edukatif di Yogyakarta" description="Gabungkan wisata budaya, sejarah, sains, dan alam dalam satu itinerary yang relevan untuk siswa." />
              <div className="mt-8 flex flex-wrap gap-3">
                {educationDestinations.map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-navy p-6 text-white">
              <h3 className="font-heading text-3xl">Opsi Paket</h3>
              <div className="mt-6 grid gap-3">
                {options.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeader badge="Dokumentasi" title="Visual yang Membantu Membangun Kepercayaan" description="Gunakan halaman gallery sebagai bukti visual untuk rombongan, armada, dan aktivitas perjalanan." />
          <div className="mt-10">
            <GalleryGrid />
          </div>
        </Container>
      </section>
      <FinalCTA
        title="Diskusikan Rencana Study Tour Sekolah Anda"
        description="Sampaikan jumlah peserta, tanggal perjalanan, asal sekolah, dan durasi agar penawaran lebih tepat."
        cta="Minta Penawaran via WhatsApp"
        message="Halo SiTravel, saya ingin konsultasi paket study tour sekolah ke Jogja.\nJumlah peserta:\nTanggal perjalanan:\nAsal sekolah:"
      />
    </>
  );
}
