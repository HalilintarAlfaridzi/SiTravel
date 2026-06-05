import { useMemo, useState } from "react";
import { galleryItems } from "../../data/siteData";

export function GalleryGrid() {
  const [filter, setFilter] = useState("Semua");
  const categories = ["Semua", ...Array.from(new Set(galleryItems.map((item) => item.category)))];
  const items = useMemo(
    () => (filter === "Semua" ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === category ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-borderSoft"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <figure key={`${item.title}-${index}`} className="group mb-5 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="relative">
              <img className="w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt={item.title} />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-5 text-white">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-white/70">{item.category}</p>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </>
  );
}
