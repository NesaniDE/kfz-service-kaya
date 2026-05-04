import { ReactNode } from "react";

type ServiceGroup = {
  title: string;
  description: string;
  items: string[];
  icon: ReactNode;
};

const services: ServiceGroup[] = [
  {
    title: "Wartungsarbeiten",
    description:
      "Regelmäßige Wartung für volle Zuverlässigkeit und lange Lebensdauer Ihres Fahrzeugs.",
    items: [
      "Reparatur aller Marken",
      "Inspektion nach Herstellervorgaben",
      "TÜV-Vorbereitung",
      "Bremsenservice",
      "Reifenmontage",
      "Räderwechsel",
      "Klimaservice",
      "Batterieservice",
    ],
    icon: <WrenchIcon />,
  },
  {
    title: "Reparaturen",
    description:
      "Vom kleinen Defekt bis zur großen Instandsetzung - wir bringen Ihr Fahrzeug wieder in Form.",
    items: [
      "Motorinstandsetzung",
      "Getriebeinstandsetzung",
      "Reparaturen am Fahrwerk",
      "Reparaturen an elektrischen Bauteilen",
      "Reparatur von Abgasanlagen",
      "Windschutzscheiben-Service",
      "Unfallinstandsetzung",
    ],
    icon: <GearIcon />,
  },
  {
    title: "Diagnosearbeiten",
    description:
      "Moderne Diagnose für schnelle Fehlersuche bei Elektronik, Mechanik und Software.",
    items: [
      "Fehlerspeicher auslesen",
      "Elektrische Fehlersuche",
      "Druck- und Leckprüfungen",
      "Fahrzeugsoftware-Update",
    ],
    icon: <ScanIcon />,
  },
  {
    title: "Tuning & Fahrzeugoptimierung",
    description:
      "Individuelle Anpassung von Optik und Performance - für Ihr ganz persönliches Fahrzeug.",
    items: [
      "Tieferlegung",
      "Abgasanlage & Downpipe",
      "Felgen",
      "Motorumbauten",
      "Optische Änderungen",
      "Fahrzeugpflege & Aufbereitung",
    ],
    icon: <BoltIcon />,
  },
  {
    title: "Fahrzeughandel",
    description:
      "Neu- und Gebrauchtwagen, fairer An- und Verkauf direkt bei KFZ-Service Kaya.",
    items: ["Neu- und Gebrauchtwagen", "Fahrzeug-Ankauf", "Fahrzeug-Verkauf"],
    icon: <CarIcon />,
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-brand-black py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="accent-line" />
          <h2 className="section-heading mt-5">Unsere Leistungen</h2>
          <p className="mt-5 text-white/70 text-lg leading-relaxed">
            Unsere Leistungen decken viele Bereiche rund um Ihr Fahrzeug ab -
            von klassischen Wartungsarbeiten über Reparaturen bis hin zu
            Diagnose, Tuning und Fahrzeugpflege.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col rounded-2xl bg-brand-dark p-8 ring-1 ring-white/5 transition hover:ring-brand-green/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,182,39,0.5)]"
            >
              <span className="absolute left-0 top-8 bottom-8 w-1 rounded-r bg-brand-green opacity-80" />
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
                  {service.icon}
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-white/85"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 1 5.7 5.6l-.7.7a4 4 0 0 1-4.6.7l-7 7a2 2 0 1 1-2.8-2.8l7-7a4 4 0 0 1 .7-4.6l.7-.7a4 4 0 0 1 1-.7" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 12h10" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
