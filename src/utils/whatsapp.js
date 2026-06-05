import { WHATSAPP_NUMBER } from "../data/siteData";

export function whatsappUrl(message = "Halo SiTravel, saya ingin konsultasi perjalanan di Jogja.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
