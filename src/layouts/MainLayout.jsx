import { Outlet } from "react-router-dom";
import { FloatingWhatsApp } from "../components/common/FloatingWhatsApp";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { useScrollToTop } from "../hooks/useScrollToTop";

export function MainLayout() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white font-body text-charcoal">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
