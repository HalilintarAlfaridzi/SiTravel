import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "../../data/siteData";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";

export function FAQSection({ items = faqs, title = "Pertanyaan yang Sering Ditanyakan" }) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-ivory py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="FAQ"
          title={title}
          description="Jawaban singkat untuk membantu Anda mengambil keputusan sebelum menghubungi SiTravel."
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-borderSoft rounded-2xl border border-borderSoft bg-white">
          {items.map((item, index) => (
            <div key={item.question}>
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-navy"
                onClick={() => setActive(active === index ? -1 : index)}
              >
                {item.question}
                <ChevronDown className={`shrink-0 transition ${active === index ? "rotate-180" : ""}`} size={20} />
              </button>
              {active === index ? <p className="px-5 pb-5 leading-7 text-muted">{item.answer}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
