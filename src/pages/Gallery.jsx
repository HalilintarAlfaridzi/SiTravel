import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { GalleryGrid } from "../components/sections/GalleryGrid";
import { FinalCTA } from "../components/sections/FinalCTA";
import { images } from "../data/siteData";

export function Gallery() {
  return (
    <>
      <PageHeader
        badge="Gallery"
        title="Momen Perjalanan Bersama SiTravel"
        description="Lihat dokumentasi destinasi, armada, study tour, dan corporate trip yang menggambarkan pengalaman perjalanan bersama SiTravel."
        cta="Booking via WhatsApp"
        message="Halo SiTravel, saya ingin konsultasi perjalanan setelah melihat gallery."
        image={images.hero}
      />
      <section className="bg-ivory py-16 md:py-20 lg:py-24">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
      <FinalCTA
        title="Ingin Perjalanan Anda Jadi Momen Berikutnya?"
        description="Konsultasikan kebutuhan perjalanan Anda dan biarkan SiTravel membantu menyusun pengalaman yang nyaman."
        cta="Booking via WhatsApp"
      />
    </>
  );
}
