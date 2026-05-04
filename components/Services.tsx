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
    icon: <GearsIcon />,
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
    icon: <WrenchScrewdriverIcon />,
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
    icon: <SearchIcon />,
  },
  {
    title: "Tuning & Optimierung",
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
    icon: <RimIcon />,
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
    <section id="leistungen" className="bg-brand-paper py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            Leistungen
          </span>
          <h2 className="section-heading mt-5">
            Unser komplettes <span className="text-brand-green">Leistungsspektrum</span>
          </h2>
          <p className="section-lead">
            Unsere Leistungen decken viele Bereiche rund um Ihr Fahrzeug ab -
            von klassischen Wartungsarbeiten über Reparaturen bis hin zu
            Diagnose, Tuning und Fahrzeugpflege.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col rounded-2xl bg-white p-7 shadow-card ring-1 ring-brand-line transition hover:-translate-y-1 hover:shadow-cardHover hover:ring-brand-green/40"
            >
              {/* Header row: hex icon + flyer banner title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <div className="hex">
                    <span className="text-brand-ink">{service.icon}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flyer-banner w-full">
                    <span className="truncate">{service.title}</span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm text-brand-dark/75 leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-brand-ink"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* CTA card filling the grid */}
          <article className="relative flex flex-col justify-between rounded-2xl bg-brand-ink p-7 text-white overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-6 -right-6 h-40 w-28 diag-stripes opacity-70 rotate-12"
            />
            <div className="relative">
              <h3 className="font-heading text-2xl font-extrabold">
                Ihr Fahrzeug braucht Service?
              </h3>
              <p className="mt-3 text-white/75 leading-relaxed">
                Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir
                vereinbaren gerne einen passenden Termin für Sie.
              </p>
            </div>
            <div className="relative mt-6 flex flex-col gap-3">
              <a href="tel:+491796641413" className="btn-primary w-full justify-center">
                Jetzt anrufen
              </a>
              <a
                href="mailto:kfz-service.kaya@web.de"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/20 bg-transparent px-6 py-3.5 font-semibold text-white transition hover:border-brand-green hover:text-brand-green"
              >
                E-Mail schreiben
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* === Icons (24px) === */
function GearsIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="2.5" />
      <circle cx="9" cy="9" r="5.5" strokeDasharray="1.6 1.6" />
      <circle cx="16" cy="16" r="2" />
    </svg>
  );
}

function WrenchScrewdriverIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 1 5.7 5.6l-.7.7a4 4 0 0 1-4.6.7l-7 7a2 2 0 1 1-2.8-2.8l7-7a4 4 0 0 1 .7-4.6l.7-.7a4 4 0 0 1 1-.7" />
      <path d="M3 21l4.5-4.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function RimIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
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
