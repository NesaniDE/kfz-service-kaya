import type { ReactNode } from "react";

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
  icon: ReactNode;
};

const services: Service[] = [
  {
    id: "wartung",
    title: "Wartung",
    lead: "Inspektion, TÜV, Bremsen, Klima.",
    icon: <GearIcon />,
  },
  {
    id: "reparaturen",
    title: "Reparaturen",
    lead: "Motor, Getriebe, Elektrik & Unfall.",
    icon: <WrenchIcon />,
  },
  {
    id: "diagnose",
    title: "Diagnose",
    lead: "Fehlerspeicher & Software-Update.",
    icon: <ScanIcon />,
  },
  {
    id: "reifenservice",
    title: "Reifenservice",
    lead: "Montage, Wuchten, Einlagerung.",
    icon: <TireIcon />,
  },
  {
    id: "tuning",
    title: "Tuning",
    lead: "Optik, Performance & Pflege.",
    icon: <BoltIcon />,
  },
  {
    id: "fahrzeughandel",
    title: "Fahrzeughandel",
    lead: "Neu- und Gebrauchtwagen, An- & Verkauf.",
    icon: <CarIcon />,
  },
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
          {services.map((service) => (
            <a
              key={service.id}
              href={`/leistungen#${service.id}`}
              className="group relative overflow-hidden rounded-xl bg-white p-6 sm:p-7 ring-1 ring-brand-line transition hover:-translate-y-1 hover:ring-brand-green/40 hover:shadow-cardHover"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-greenLight text-brand-greenDark transition group-hover:bg-brand-green group-hover:text-white group-hover:rotate-3">
                  {service.icon}
                </div>
                <ArrowIcon className="h-4 w-4 text-brand-gray transition group-hover:translate-x-0.5 group-hover:text-brand-green" />
              </div>

              <h3 className="mt-7 font-heading text-xl sm:text-2xl font-extrabold text-brand-ink">
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm text-brand-gray leading-relaxed">
                {service.lead}
              </p>

              <span className="mt-6 inline-flex items-center text-sm font-semibold text-brand-ink transition group-hover:text-brand-green">
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

function GearIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 1 5.7 5.6l-.7.7a4 4 0 0 1-4.6.7l-7 7a2 2 0 1 1-2.8-2.8l7-7a4 4 0 0 1 .7-4.6l.7-.7a4 4 0 0 1 1-.7" />
      <path d="M3 21l4.5-4.5" />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M21 7V5a2 2 0 0 0-2-2h-2" />
      <path d="M3 17v2a2 2 0 0 0 2 2h2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M3 12h3l2-3 4 6 2-3h7" />
    </svg>
  );
}

function TireIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h14" />
      <path d="M5 17v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" />
      <path d="M15 17v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" />
      <path d="M3 13l2-6a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 7l2 6" />
      <path d="M3 13h18" />
      <circle cx="7.5" cy="14.5" r="1.5" />
      <circle cx="16.5" cy="14.5" r="1.5" />
    </svg>
  );
}
