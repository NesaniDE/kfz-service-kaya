import { ReactNode } from "react";

type Service = {
  title: string;
  icon: ReactNode;
  href: string;
  accent: string;
};

const services: Service[] = [
  {
    title: "Wartung",
    icon: <GearsIcon />,
    href: "/leistungen#wartung",
    accent: "from-zinc-200 to-zinc-100",
  },
  {
    title: "Reparaturen",
    icon: <WrenchScrewdriverIcon />,
    href: "/leistungen#reparaturen",
    accent: "from-zinc-300 to-zinc-100",
  },
  {
    title: "Diagnose",
    icon: <SearchIcon />,
    href: "/leistungen#diagnose",
    accent: "from-zinc-200 to-zinc-50",
  },
  {
    title: "Reifenservice",
    icon: <RimIcon />,
    href: "/leistungen#reifenservice",
    accent: "from-zinc-300 to-zinc-100",
  },
  {
    title: "Tuning",
    icon: <SparkIcon />,
    href: "/leistungen#tuning",
    accent: "from-zinc-200 to-zinc-100",
  },
  {
    title: "Fahrzeughandel",
    icon: <CarIcon />,
    href: "/leistungen#fahrzeughandel",
    accent: "from-zinc-300 to-zinc-50",
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
              key={service.title}
              href={service.href}
              className="group relative flex items-stretch overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-brand-line transition hover:-translate-y-1 hover:shadow-cardHover"
            >
              {/* Image-style icon panel */}
              <div
                className={`relative w-1/2 sm:w-2/5 bg-gradient-to-br ${service.accent} flex items-center justify-center p-6 overflow-hidden`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, rgba(17,17,17,0.18) 0%, transparent 60%), linear-gradient(135deg, rgba(17,17,17,0.06) 0%, transparent 50%)",
                  }}
                />
                <span className="relative text-brand-ink/85 scale-[2.2]">
                  {service.icon}
                </span>
              </div>

              {/* Title + view */}
              <div className="relative flex-1 p-6 sm:p-7 flex flex-col justify-center">
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-brand-ink">
                  {service.title}
                </h3>
                <span className="mt-2 inline-flex items-center text-sm text-brand-gray transition group-hover:text-brand-green">
                  Ansehen
                </span>
                {/* Green underline that grows on hover, mimicking the red Vastrum underline */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-6 right-6 h-[3px] bg-brand-green origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* === Icons === */
function GearsIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
}

function WrenchScrewdriverIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 1 5.7 5.6l-.7.7a4 4 0 0 1-4.6.7l-7 7a2 2 0 1 1-2.8-2.8l7-7a4 4 0 0 1 .7-4.6l.7-.7a4 4 0 0 1 1-.7" />
      <path d="M3 21l4.5-4.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v3l2 2" />
    </svg>
  );
}

function RimIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
