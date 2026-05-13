import { ReactNode } from "react";

const stats = [
  {
    title: "Erfahrung",
    description: "Seit 2024 in Schwäbisch Gmünd",
    icon: <BadgeIcon />,
  },
  {
    title: "Team",
    description: "Fachkräfte aus der Branche",
    icon: <TeamIcon />,
  },
  {
    title: "Ausstattung",
    description: "Moderne Werkstatt-Technik",
    icon: <ToolIcon />,
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-brand-paperAlt py-20 sm:py-28">
      <div className="container-x">
        {/* Split panel: green left + workshop visual right */}
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 items-stretch overflow-hidden rounded-2xl shadow-card">
          {/* Left — green panel with title + description */}
          <div className="relative bg-brand-green p-8 sm:p-12 lg:p-14 text-white overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute bottom-0 right-0 h-32 w-32 diag-stripes opacity-20"
            />
            <h2 className="relative font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight">
              KFZ-Service Kaya
            </h2>
            <p className="relative mt-6 text-white/90 leading-relaxed">
              Seit 2024 bieten wir unseren Kunden persönlichen Service rund ums
              Fahrzeug — von Wartung über Reparatur bis zu Diagnose, Tuning und
              Fahrzeughandel. Ehrliche Beratung, sauberes Arbeiten und Lösungen
              für alle Marken stehen bei uns im Mittelpunkt.
            </p>
            <p className="relative mt-4 text-white/80 leading-relaxed text-sm">
              Inhaber Mustafa Kaya und sein Team kümmern sich direkt vor Ort in
              der Neppersbergstraße 10 in Schwäbisch Gmünd um Ihr Fahrzeug.
            </p>
          </div>

          {/* Right — workshop visual (gradient placeholder mimicking a building photo) */}
          <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(180deg, #87ceeb 0%, #b8dff0 45%, #e5e5e5 45%, #c8c8c8 100%)
                `,
              }}
            />
            {/* Building silhouette */}
            <svg
              aria-hidden
              viewBox="0 0 400 280"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 h-full w-full"
            >
              {/* Sky gradient already on bg, now building */}
              <rect x="40" y="110" width="320" height="140" fill="#1e7fbf" />
              <rect x="40" y="105" width="320" height="10" fill="#155b8c" />
              {/* Roof line */}
              <rect x="40" y="105" width="320" height="3" fill="#0d3f63" />
              {/* Windows */}
              <g fill="#ffffff" opacity="0.85">
                <rect x="70" y="130" width="34" height="22" />
                <rect x="114" y="130" width="34" height="22" />
                <rect x="158" y="130" width="34" height="22" />
                <rect x="252" y="130" width="34" height="22" />
                <rect x="296" y="130" width="34" height="22" />
              </g>
              {/* Garage door */}
              <rect x="200" y="170" width="50" height="80" fill="#0f0f0f" />
              <g stroke="#333" strokeWidth="1.5">
                <line x1="200" y1="190" x2="250" y2="190" />
                <line x1="200" y1="210" x2="250" y2="210" />
                <line x1="200" y1="230" x2="250" y2="230" />
              </g>
              {/* Logo strip on building */}
              <rect x="155" y="118" width="100" height="14" fill="#ffffff" />
              <text
                x="205"
                y="129"
                fontFamily="Montserrat, sans-serif"
                fontSize="9"
                fontWeight="900"
                fill="#00B627"
                textAnchor="middle"
                letterSpacing="1"
              >
                KAYA
              </text>
              {/* Ground */}
              <rect x="0" y="245" width="400" height="35" fill="#a0a0a0" />
              {/* Clouds */}
              <g fill="#ffffff" opacity="0.75">
                <ellipse cx="70" cy="50" rx="28" ry="8" />
                <ellipse cx="320" cy="35" rx="34" ry="9" />
              </g>
            </svg>
          </div>
        </div>

        {/* 3 stat cards below */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex items-center gap-4 rounded-xl bg-white p-5 sm:p-6 shadow-card ring-1 ring-brand-line"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-greenDark">
                {stat.icon}
              </span>
              <div className="min-w-0">
                <p className="font-heading text-base font-extrabold text-brand-ink">
                  {stat.title}
                </p>
                <p className="text-sm text-brand-gray leading-tight">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BadgeIcon(): ReactNode {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 12 2 2 4-4" />
      <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
    </svg>
  );
}

function TeamIcon(): ReactNode {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ToolIcon(): ReactNode {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 1 5.7 5.6l-.7.7a4 4 0 0 1-4.6.7l-7 7a2 2 0 1 1-2.8-2.8l7-7a4 4 0 0 1 .7-4.6l.7-.7a4 4 0 0 1 1-.7" />
      <path d="M3 21l4.5-4.5" />
    </svg>
  );
}
