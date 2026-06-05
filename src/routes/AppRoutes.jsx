import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { CorporateTrip } from "../pages/CorporateTrip";
import { Gallery } from "../pages/Gallery";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { PaketWisata } from "../pages/PaketWisata";
import { SewaMobil } from "../pages/SewaMobil";
import { StudyTour } from "../pages/StudyTour";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/paket-wisata", element: <PaketWisata /> },
      { path: "/sewa-mobil", element: <SewaMobil /> },
      { path: "/study-tour", element: <StudyTour /> },
      { path: "/corporate-trip", element: <CorporateTrip /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
