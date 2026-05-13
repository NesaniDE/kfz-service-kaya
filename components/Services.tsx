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
  lead: string;
};

const services: Service[] = [
  { id: "wartung", title: "Wartung", lead: "Inspektion, TÜV, Bremsen, Klima" },
  { id: "reparaturen", title: "Reparaturen", lead: "Motor, Getriebe, Elektrik" },
  { id: "diagnose", title: "Diagnose", lead: "Fehlerspeicher & Software" },
  { id: "reifenservice", title: "Reifenservice", lead: "Montage, Wuchten, Einlagerung" },
  { id: "tuning", title: "Tuning", lead: "Optik, Performance, Pflege" },
  { id: "fahrzeughandel", title: "Fahrzeughandel", lead: "Neu- und Gebrauchtwagen" },
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
            className="group inline-flex items-center gap-2 self-start sm:self-end text-sm font-semibold text-brand-ink hover:text-brand-green"
          >
            Alle Leistungen ansehen
            <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <a
              key={service.id}
              href={`/leistungen#${service.id}`}
              className="group relative overflow-hidden rounded-xl bg-white p-6 sm:p-7 ring-1 ring-brand-line transition hover:-translate-y-1 hover:ring-brand-green/40 hover:shadow-cardHover"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-extrabold tracking-wider text-brand-green tabular-nums">
                  0{idx + 1}
                </span>
                <ArrowIcon className="h-4 w-4 text-brand-gray transition group-hover:translate-x-0.5 group-hover:text-brand-green" />
              </div>

              <h3 className="mt-8 sm:mt-10 font-heading text-xl sm:text-2xl font-extrabold text-brand-ink">
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm text-brand-gray">{service.lead}</p>

              <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-ink transition group-hover:text-brand-green">
                Mehr erfahren
              </span>

              <span
                aria-hidden
                className="absolute bottom-0 left-6 right-6 sm:left-7 sm:right-7 h-[3px] bg-brand-green origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
