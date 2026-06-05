import {
  BriefcaseBusiness,
  Building2,
  Bus,
  CalendarCheck,
  Car,
  GraduationCap,
  MapPin,
  MessageCircle,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export const WHATSAPP_NUMBER = "6281234567890";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Paket Wisata", href: "/paket-wisata" },
  { label: "Sewa Mobil", href: "/sewa-mobil" },
  { label: "Study Tour", href: "/study-tour" },
  { label: "Corporate Trip", href: "/corporate-trip" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const seo = {
  "/": {
    title: "SiTravel — Travel Premium Jogja, Paket Wisata, Sewa Mobil & Study Tour",
    description:
      "SiTravel menyediakan layanan travel premium di Yogyakarta untuk paket wisata Jogja, sewa mobil plus driver, study tour sekolah, dan corporate trip dengan booking mudah via WhatsApp.",
  },
  "/paket-wisata": {
    title: "Paket Wisata Jogja Premium & Custom — SiTravel",
    description:
      "Pilih paket wisata Jogja bersama SiTravel. Tersedia paket 1 hari, 2H1M, wisata keluarga, rombongan, dan custom trip dengan driver berpengalaman.",
  },
  "/sewa-mobil": {
    title: "Sewa Mobil Jogja + Driver — Armada Nyaman SiTravel",
    description:
      "Sewa mobil di Jogja dengan driver berpengalaman untuk wisata, bisnis, keluarga, dan rombongan. Booking mudah melalui WhatsApp.",
  },
  "/study-tour": {
    title: "Paket Study Tour Jogja untuk Sekolah — SiTravel",
    description:
      "SiTravel membantu sekolah merancang study tour ke Jogja yang aman, edukatif, dan terorganisir dengan armada nyaman dan itinerary fleksibel.",
  },
  "/corporate-trip": {
    title: "Corporate Trip & Gathering Jogja — SiTravel",
    description:
      "Rancang company trip, outing kantor, dan corporate gathering di Jogja bersama SiTravel dengan layanan profesional dan itinerary custom.",
  },
  "/gallery": {
    title: "Gallery Perjalanan SiTravel — Dokumentasi Travel Jogja",
    description:
      "Lihat dokumentasi perjalanan, armada, destinasi wisata Jogja, study tour, dan corporate trip bersama SiTravel.",
  },
  "/about": {
    title: "Tentang SiTravel — Travel Premium di Yogyakarta",
    description:
      "Kenali SiTravel, layanan travel premium di Yogyakarta untuk wisata, sewa mobil, study tour, dan corporate trip.",
  },
  "/contact": {
    title: "Hubungi SiTravel — Konsultasi Travel Jogja via WhatsApp",
    description:
      "Hubungi SiTravel untuk konsultasi paket wisata Jogja, sewa mobil, study tour, dan corporate trip. Booking mudah melalui WhatsApp.",
  },
};

export const images = {
  hero: "/images/hero-jogja-landscape.png",
  jogja:
    "https://images.unsplash.com/photo-1604998103924-89e012e5265a?auto=format&fit=crop&w=1400&q=85",
  car:
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
  family:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  bus:
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
  corporate:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  students:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
  driver:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
};

export const trustPoints = [
  { label: "Driver Berpengalaman", icon: ShieldCheck },
  { label: "Armada Nyaman", icon: Car },
  { label: "Booking Mudah", icon: MessageCircle },
  { label: "Layanan Rombongan", icon: Users },
];

export const stats = [
  { value: "Wisata", label: "Paket pribadi, keluarga, mahasiswa, dan komunitas" },
  { value: "Sekolah", label: "Study tour dengan itinerary edukatif dan koordinasi rapi" },
  { value: "Corporate", label: "Company trip, outing, dan transportasi acara kantor" },
  { value: "Driver", label: "Pendamping perjalanan yang memahami rute Yogyakarta" },
];

export const services = [
  {
    title: "Paket Wisata Jogja",
    href: "/paket-wisata",
    icon: MapPin,
    badge: "Custom Trip",
    cta: "Lihat Paket Wisata",
    message: "Halo SiTravel, saya ingin konsultasi Paket Wisata Jogja.",
    description:
      "Paket wisata Jogja untuk keluarga, komunitas, mahasiswa, dan wisatawan umum dengan itinerary fleksibel.",
  },
  {
    title: "Sewa Mobil + Driver",
    href: "/sewa-mobil",
    icon: Car,
    badge: "Driver Included",
    cta: "Cek Armada",
    message: "Halo SiTravel, saya ingin cek ketersediaan sewa mobil + driver.",
    description:
      "Armada nyaman dengan driver berpengalaman untuk city tour, perjalanan bisnis, atau rombongan.",
  },
  {
    title: "Study Tour Sekolah",
    href: "/study-tour",
    icon: GraduationCap,
    badge: "Study Tour",
    cta: "Minta Penawaran",
    message: "Halo SiTravel, saya ingin konsultasi paket study tour sekolah ke Jogja.",
    description:
      "Perjalanan edukatif untuk SD, SMP, dan SMA dengan koordinasi rapi dan destinasi yang relevan.",
  },
  {
    title: "Corporate Gathering",
    href: "/corporate-trip",
    icon: Building2,
    badge: "Corporate Friendly",
    cta: "Diskusi Corporate",
    message: "Halo SiTravel, saya ingin diskusi Corporate Trip di Jogja.",
    description:
      "Company trip, outing, gathering, dan perjalanan tim dengan layanan profesional dan jadwal terstruktur.",
  },
];

export const packages = [
  {
    title: "Paket Jogja Classic 1 Hari",
    duration: "1 Hari",
    category: "Paket 1 Hari",
    audience: "Keluarga, pasangan, wisatawan umum",
    image: images.jogja,
    description:
      "Nikmati ikon utama Yogyakarta dalam jadwal singkat yang nyaman dan tidak terburu-buru.",
    destinations: ["Prambanan", "Keraton", "Malioboro", "Sunset Spot"],
    facilities: ["Mobil + driver", "BBM", "Air mineral", "Itinerary"],
    message: "Halo SiTravel, saya ingin bertanya tentang Paket Wisata Jogja Classic 1 Hari.",
  },
  {
    title: "Paket Jogja 2H1M Premium",
    duration: "2 Hari 1 Malam",
    category: "Paket 2H1M",
    audience: "Rombongan kecil, komunitas, keluarga",
    image: images.family,
    description:
      "Paket dua hari untuk menjelajahi destinasi populer, kuliner, dan spot sunset Jogja.",
    destinations: ["Malioboro", "Lava Tour Merapi", "HeHa Sky View", "Pantai Gunungkidul"],
    facilities: ["Mobil + driver", "Rute fleksibel", "Rekomendasi kuliner", "Pickup area Jogja"],
    message: "Halo SiTravel, saya ingin bertanya tentang Paket Wisata Jogja 2H1M Premium.",
  },
  {
    title: "Paket Wisata Keluarga",
    duration: "Fleksibel",
    category: "Paket Keluarga",
    audience: "Keluarga dengan anak dan orang tua",
    image: images.family,
    description:
      "Rute ramah keluarga dengan tempo perjalanan yang tenang, nyaman, dan mudah disesuaikan.",
    destinations: ["Taman Pintar", "Keraton", "Hutan Pinus", "Obelix Hills"],
    facilities: ["Driver ramah", "Jadwal santai", "Armada nyaman", "Rekomendasi makan"],
    message: "Halo SiTravel, saya ingin bertanya tentang Paket Wisata Keluarga di Jogja.",
  },
  {
    title: "Paket Custom Trip",
    duration: "Sesuai kebutuhan",
    category: "Paket Custom",
    audience: "Komunitas, mahasiswa, kantor, keluarga",
    image: images.hero,
    description:
      "Susun destinasi, durasi, dan armada sesuai kebutuhan perjalanan Anda di Yogyakarta.",
    destinations: ["Destinasi bebas", "Wisata alam", "Kuliner", "Belanja oleh-oleh"],
    facilities: ["Konsultasi itinerary", "Pilihan armada", "Estimasi jadwal", "Koordinasi WhatsApp"],
    message: "Halo SiTravel, saya ingin membuat Paket Custom Trip di Jogja.",
  },
];

export const fleet = [
  {
    name: "Avanza / Xenia",
    capacity: "4-6 penumpang",
    bestFor: "Wisata keluarga kecil dan city tour",
    image: images.car,
    facilities: ["AC", "Driver", "Bagasi ringan", "Pickup Jogja"],
    message: "Halo SiTravel, saya ingin cek ketersediaan Avanza/Xenia + driver.",
  },
  {
    name: "Innova / Reborn",
    capacity: "5-6 penumpang",
    bestFor: "Perjalanan keluarga, tamu bisnis, dan trip premium",
    image: images.car,
    facilities: ["Kabin lega", "Driver", "Nyaman jarak jauh", "Rute fleksibel"],
    message: "Halo SiTravel, saya ingin cek ketersediaan Innova/Reborn + driver.",
  },
  {
    name: "Hiace",
    capacity: "10-14 penumpang",
    bestFor: "Rombongan sekolah, kantor, dan komunitas",
    image: images.bus,
    facilities: ["AC", "Kursi nyaman", "Driver", "Cocok rombongan"],
    message: "Halo SiTravel, saya ingin cek ketersediaan Hiace untuk rombongan.",
  },
  {
    name: "Bus Pariwisata",
    capacity: "30-50 penumpang",
    bestFor: "Study tour dan corporate gathering",
    image: images.bus,
    facilities: ["Armada rombongan", "Driver", "Koordinasi jadwal", "Bagasi"],
    message: "Halo SiTravel, saya ingin cek ketersediaan bus pariwisata di Jogja.",
  },
];

export const destinations = [
  "Malioboro",
  "Candi Prambanan",
  "Keraton Yogyakarta",
  "HeHa Sky View",
  "Pantai Gunungkidul",
  "Lava Tour Merapi",
  "Hutan Pinus",
  "Obelix Hills",
];

export const whyChoose = [
  { title: "Booking mudah via WhatsApp", icon: MessageCircle },
  { title: "Driver berpengalaman", icon: ShieldCheck },
  { title: "Armada bersih dan nyaman", icon: Car },
  { title: "Itinerary fleksibel", icon: Route },
  { title: "Cocok untuk personal dan rombongan", icon: Users },
  { title: "Pelayanan profesional", icon: Sparkles },
];

export const testimonials = [
  {
    name: "Rina",
    segment: "Corporate Trip",
    quote:
      "Trip kantor kami berjalan rapi dari penjemputan sampai acara selesai. Komunikasi cepat dan driver sangat membantu.",
  },
  {
    name: "Pak Budi",
    segment: "Study Tour",
    quote:
      "Panitia sekolah terbantu karena itinerary jelas, armada nyaman, dan koordinasi selama perjalanan sangat tertata.",
  },
  {
    name: "Andi & keluarga",
    segment: "Wisata Keluarga",
    quote:
      "Liburan di Jogja jadi lebih santai. Driver paham rute dan rekomendasi destinasinya cocok untuk keluarga.",
  },
];

export const faqs = [
  {
    question: "Apakah itinerary bisa custom?",
    answer:
      "Bisa. Tim SiTravel dapat membantu menyesuaikan destinasi, durasi, armada, dan tempo perjalanan sesuai kebutuhan Anda.",
  },
  {
    question: "Apakah bisa untuk rombongan sekolah atau perusahaan?",
    answer:
      "Bisa. SiTravel melayani study tour, company trip, gathering, outing, dan kebutuhan transportasi rombongan.",
  },
  {
    question: "Apakah harga sudah termasuk driver?",
    answer:
      "Layanan sewa mobil yang ditampilkan berfokus pada mobil plus driver. Detail biaya lain dapat dikonfirmasi melalui WhatsApp sesuai rute dan durasi.",
  },
  {
    question: "Bagaimana cara booking?",
    answer:
      "Pilih layanan yang dibutuhkan, klik CTA WhatsApp, lalu sampaikan tanggal perjalanan, jumlah peserta, dan kebutuhan utama.",
  },
  {
    question: "Apakah tersedia invoice atau penawaran untuk perusahaan?",
    answer:
      "Ya, kebutuhan penawaran corporate dapat didiskusikan melalui WhatsApp agar detail layanan dan jadwalnya jelas.",
  },
];

export const educationDestinations = [
  "Candi Prambanan",
  "Museum Ullen Sentalu",
  "Keraton Yogyakarta",
  "Taman Pintar",
  "Museum Dirgantara",
  "Sentra Batik",
  "Desa Wisata",
  "Lava Tour Merapi",
];

export const corporatePackages = [
  "Company Trip",
  "Corporate Gathering",
  "Outing Kantor",
  "Team Building Trip",
  "Executive Travel",
  "Client Visit Transport",
];

export const bookingSteps = [
  { title: "Pilih layanan", icon: Route },
  { title: "Chat WhatsApp", icon: MessageCircle },
  { title: "Tentukan tanggal", icon: CalendarCheck },
  { title: "Konfirmasi", icon: ShieldCheck },
  { title: "Perjalanan", icon: Car },
];

export const galleryItems = [
  { title: "Destinasi Jogja", category: "Destinasi Jogja", image: images.hero },
  { title: "Armada SiTravel", category: "Armada", image: images.car },
  { title: "Study Tour", category: "Study Tour", image: images.students },
  { title: "Corporate Trip", category: "Corporate Trip", image: images.corporate },
  { title: "Wisata Keluarga", category: "Wisata Keluarga", image: images.family },
  { title: "Rombongan Nyaman", category: "Armada", image: images.bus },
  { title: "Konsultasi Trip", category: "Corporate Trip", image: images.driver },
  { title: "Yogyakarta Experience", category: "Destinasi Jogja", image: images.jogja },
];

export const inquiryOptions = [
  {
    title: "Tanya Paket Wisata",
    icon: MapPin,
    message: "Halo SiTravel, saya ingin tanya Paket Wisata Jogja.\nTanggal perjalanan:\nJumlah peserta:\nDurasi:",
  },
  {
    title: "Tanya Sewa Mobil",
    icon: Car,
    message:
      "Halo SiTravel, saya ingin cek ketersediaan sewa mobil + driver.\nTanggal:\nJumlah penumpang:\nTujuan:",
  },
  {
    title: "Minta Penawaran Study Tour",
    icon: GraduationCap,
    message:
      "Halo SiTravel, saya ingin minta penawaran Study Tour.\nNama sekolah:\nJumlah peserta:\nTanggal rencana:\nDurasi:",
  },
  {
    title: "Diskusi Corporate Trip",
    icon: BriefcaseBusiness,
    message:
      "Halo SiTravel, saya ingin diskusi Corporate Trip.\nNama perusahaan:\nJumlah peserta:\nTanggal rencana:\nKebutuhan acara:",
  },
];

export const areas = ["Kota Yogyakarta", "Sleman", "Bantul", "Gunungkidul", "Kulon Progo"];
