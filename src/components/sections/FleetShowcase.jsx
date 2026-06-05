import { fleet } from "../../data/siteData";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { Button } from "../ui/Button";
import { FleetCard } from "./FleetCard";

export function FleetShowcase({ compact = false }) {
  const items = compact ? fleet.slice(0, 3) : fleet;

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="Armada"
          title="Armada Nyaman untuk Perjalanan Anda"
          description="Pilih kendaraan sesuai jumlah peserta dan kebutuhan perjalanan, lengkap dengan driver berpengalaman."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FleetCard key={item.name} item={item} />
          ))}
        </div>
        {compact ? (
          <div className="mt-10 text-center">
            <Button to="/sewa-mobil" variant="secondary">
              Lihat Semua Armada
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
