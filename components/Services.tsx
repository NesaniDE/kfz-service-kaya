import ServiceVisual from "./ServiceVisual";

type ServiceId =
  | "wartung"
  | "reparaturen"
  | "diagnose"
  | "reifenservice"
  | "tuning"
  | "fahrzeughandel";

type Service = {
  id: ServiceId;
  title: string;
};

const services: Service[] = [
  { id: "wartung", title: "Wartung" },
  { id: "reparaturen", title: "Reparaturen" },
  { id: "diagnose", title: "Diagnose" },
  { id: "reifenservice", title: "Reifenservice" },
  { id: "tuning", title: "Tuning" },
  { id: "fahrzeughandel", title: "Fahrzeughandel" },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-brand-green">
            Unsere Leistungen
          </h2>
          <a
            href="/leistungen"
            className="inline-flex items-center gap-2 self-start sm:self-end text-sm font-semibold text-brand-ink hover:text-brand-green"
          >
            Alle Leistungen ansehen
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <a
              key={service.id}
              href={`/leistungen#${service.id}`}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-brand-line transition hover:-translate-y-1 hover:shadow-cardHover"
            >
              {/* Image-style panel with the rich service visual */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <ServiceVisual id={service.id} sizes="(min-width: 1024px) 30vw, 90vw" />
              </div>

              {/* Title + view */}
              <div className="relative p-5 sm:p-6">
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-brand-ink">
                  {service.title}
                </h3>
                <span className="mt-1 inline-flex items-center text-sm text-brand-gray transition group-hover:text-brand-green">
                  Ansehen
                </span>
                {/* Green underline that grows on hover */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-5 right-5 sm:left-6 sm:right-6 h-[3px] bg-brand-green origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
