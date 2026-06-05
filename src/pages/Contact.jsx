import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { Button } from "../components/ui/Button";
import { Input, Select, Textarea } from "../components/ui/FormFields";
import { inquiryOptions, images } from "../data/siteData";
import { whatsappUrl } from "../utils/whatsapp";

const services = ["Paket Wisata", "Sewa Mobil", "Study Tour", "Corporate Trip", "Custom Trip"];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    service: "Paket Wisata",
    date: "",
    participants: "",
    message: "",
  });

  const generatedMessage = `Halo SiTravel, saya ingin konsultasi perjalanan.\nNama: ${form.name}\nJenis layanan: ${form.service}\nTanggal perjalanan: ${form.date}\nJumlah peserta: ${form.participants}\nPesan: ${form.message}`;

  return (
    <>
      <PageHeader
        badge="Contact"
        title="Hubungi SiTravel"
        description="Konsultasikan kebutuhan paket wisata, sewa mobil, study tour, atau corporate trip Anda langsung melalui WhatsApp."
        cta="Chat WhatsApp"
        image={images.hero}
      />
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <SectionHeader
            badge="Quick Inquiry"
            title="Pilih Jalur Konsultasi Paling Sesuai"
            description="Setiap tombol membawa pesan WhatsApp otomatis sesuai kebutuhan agar chat pertama lebih jelas."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {inquiryOptions.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  className="rounded-2xl border border-borderSoft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium"
                  href={whatsappUrl(item.message)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold">
                    <Icon size={23} />
                  </span>
                  <h3 className="mt-5 font-heading text-2xl text-navy">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">Buka WhatsApp dengan format pesan yang sudah siap diisi.</p>
                </a>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="bg-ivory py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              align="left"
              badge="WhatsApp Generator"
              title="Isi Detail Singkat, Kirim ke WhatsApp"
              description="Form ini tidak menyimpan data. Saat dikirim, website akan membuka WhatsApp dengan pesan yang sudah disusun dari input Anda."
            />
            <form
              className="rounded-3xl bg-white p-6 shadow-sm"
              onSubmit={(event) => {
                event.preventDefault();
                window.open(whatsappUrl(generatedMessage), "_blank", "noopener,noreferrer");
              }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Input aria-label="Nama" placeholder="Nama" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <Select aria-label="Jenis layanan" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </Select>
                <Input aria-label="Tanggal perjalanan" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                <Input aria-label="Jumlah peserta" placeholder="Jumlah peserta" value={form.participants} onChange={(e) => setForm({ ...form, participants: e.target.value })} />
                <div className="md:col-span-2">
                  <Textarea aria-label="Pesan" placeholder="Ceritakan kebutuhan perjalanan Anda" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
              </div>
              <Button className="mt-6 w-full" type="submit">
                <MessageCircle size={18} /> Kirim Inquiry ke WhatsApp
              </Button>
            </form>
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["WhatsApp SiTravel", "@sitravel.jogja", "hello@sitravel.id", "Yogyakarta, Indonesia"].map((item) => (
              <div key={item} className="rounded-2xl border border-borderSoft p-6 shadow-sm">
                <p className="font-semibold text-navy">{item}</p>
                <p className="mt-2 text-sm text-muted">Jam operasional konsultasi: 08.00 - 21.00 WIB.</p>
              </div>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-borderSoft">
            <iframe
              title="Peta area layanan SiTravel Yogyakarta"
              className="h-80 w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Yogyakarta%2C%20Indonesia&output=embed"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
