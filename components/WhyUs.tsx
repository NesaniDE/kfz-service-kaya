const reasons = [
  {
    title: "Persönlicher Service",
    description:
      "Direkter Kontakt und persönliche Beratung statt anonymer Massenabfertigung.",
    icon: HandshakeIcon,
  },
  {
    title: "Breites Spektrum",
    description:
      "Von Wartung und Diagnose bis zu Reparatur, Tuning und Fahrzeugpflege.",
    icon: LayersIcon,
  },
  {
    title: "Lokale Werkstatt",
    description: "Direkt in Schwäbisch Gmünd erreichbar - schnell vor Ort.",
    icon: PinIcon,
  },
  {
    title: "Alle Fahrzeugmarken",
    description: "Reparatur und Service für Fahrzeuge aller Marken.",
    icon: CarIcon,
  },
  {
    title: "Schnelle Termine",
    description: "Terminvereinbarung einfach per Telefon oder E-Mail.",
    icon: PhoneIcon,
  },
  {
    title: "Transparente Beratung",
    description: "Klare Kommunikation - bei Diagnose, Aufwand und Kosten.",
    icon: ChatIcon,
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-brand-ink py-20 sm:py-28 overflow-hidden">
      {/* Diagonal stripe accents */}
      <div
        aria-hidden
        className="absolute top-0 left-0 h-32 w-32 sm:w-44 diag-stripes opacity-50 -rotate-12"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-32 w-32 sm:w-44 diag-stripes opacity-50 rotate-12"
      />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-brand-green/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            Warum wir
          </span>
          <h2 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Warum <span className="text-brand-green">KFZ-Service Kaya</span>?
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed">
            Werkstatt-Qualität, die sich anfühlt wie um die Ecke. Persönlich,
            ehrlich und mit Blick fürs Detail.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white/[0.04] backdrop-blur p-6 sm:p-7 ring-1 ring-white/10 transition hover:ring-brand-green/50 hover:bg-white/[0.06]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HandshakeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 17l2 2 4-4" />
      <path d="M3 11l4-4 5 5-4 4-5-5z" />
      <path d="M14 8l4-4 4 4-4 4" />
    </svg>
  );
}

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 17h14" />
      <path d="M5 17v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" />
      <path d="M15 17v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" />
      <path d="M3 13l2-6a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 7l2 6" />
      <circle cx="7.5" cy="14.5" r="1.5" />
      <circle cx="16.5" cy="14.5" r="1.5" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
