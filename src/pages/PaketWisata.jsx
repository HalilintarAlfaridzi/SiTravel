import { MessageCircle } from "lucide-react";
import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { PackageCard } from "../components/sections/PackageCard";
import { FAQSection } from "../components/sections/FAQSection";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Button } from "../components/ui/Button";
import { images, packages } from "../data/siteData";
import { whatsappUrl } from "../utils/whatsapp";

const itinerary = [
  "08.00 - Penjemputan hotel, stasiun, atau bandara",
  "09.00 - Kunjungan destinasi pertama",
  "12.00 - Makan siang dan istirahat",
  "14.00 - Destinasi budaya atau alam",
  "17.00 - Sunset destination",
  "19.00 - Drop off area Jogja",
];

const packageFaqs = [
  { question: "Bisa custom destinasi?", answer: "Bisa. Destinasi dapat disusun ulang sesuai minat, durasi, dan kondisi perjalanan." },
  { question: "Bisa jemput hotel, stasiun, atau bandara?", answer: "Bisa untuk area Yogyakarta dan sekitarnya. Detail titik jemput dikonfirmasi melalui WhatsApp." },
  { question: "Harga termasuk tiket wisata?", answer: "Tiket dapat dibuat termasuk atau terpisah sesuai kebutuhan paket dan jumlah peserta." },
  { question: "Minimal peserta berapa?", answer: "Paket dapat dikonsultasikan untuk personal, keluarga, grup kecil, atau rombongan." },
];

export function PaketWisata() {
  return (
    <>
      <PageHeader
        badge="Paket Wisata"
        title="Paket Wisata Jogja yang Nyaman, Fleksibel, dan Berkesan"
        description="Rancang perjalanan wisata di Yogyakarta tanpa ribet dengan itinerary fleksibel, armada nyaman, dan driver yang memahami rute lokal."
        cta="Tanya Paket Wisata"
        message="Halo SiTravel, saya ingin tanya Paket Wisata Jogja."
        image={images.hero}
      />
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeader
            badge="Pilihan Paket"
            title="Pilih Paket Sesuai Gaya Perjalanan"
            description="Setiap paket bisa disesuaikan untuk keluarga, mahasiswa, komunitas, atau wisatawan umum."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((item) => (
              <PackageCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-ivory py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                align="left"
                badge="Itinerary Preview"
                title="Contoh Alur Perjalanan 1 Hari"
                description="Jadwal dapat disesuaikan berdasarkan titik jemput, destinasi, jumlah peserta, dan tempo perjalanan."
              />
              <Button href={whatsappUrl("Halo SiTravel, saya ingin buat Paket Custom Trip di Jogja.")} className="mt-8" target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Buat Paket Custom
              </Button>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                {itinerary.map((item) => (
                  <div key={item} className="rounded-2xl border border-borderSoft p-4 font-medium text-charcoal">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <FAQSection items={packageFaqs} title="FAQ Paket Wisata" />
      <FinalCTA
        title="Punya Rencana Destinasi Sendiri?"
        description="Ceritakan durasi, jumlah peserta, dan destinasi impian Anda. SiTravel akan bantu susun rute yang lebih nyaman."
        cta="Buat Paket Custom via WhatsApp"
        message="Halo SiTravel, saya ingin buat Paket Custom Trip di Jogja."
      />
    </>
  );
}
