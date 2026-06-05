import { Container } from "../components/common/Container";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <section className="bg-ivory py-24">
      <Container className="text-center">
        <p className="font-semibold text-gold">404</p>
        <h1 className="mt-3 font-heading text-5xl text-navy">Halaman tidak ditemukan</h1>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-muted">
          Halaman yang Anda cari tidak tersedia. Kembali ke halaman utama untuk melihat layanan SiTravel.
        </p>
        <Button to="/" className="mt-8">
          Kembali ke Home
        </Button>
      </Container>
    </section>
  );
}
