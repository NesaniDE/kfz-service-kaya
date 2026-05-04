export default function Hero() {
  return (
    <section
      id="start"
      className="relative isolate overflow-hidden hero-grid hero-pattern pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-1.5 text-sm font-medium text-brand-green">
            <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
            Werkstatt in Schwäbisch Gmünd
          </div>

          <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            KFZ-Service Kaya
            <span className="block mt-3 text-white/85 font-medium text-2xl sm:text-3xl lg:text-4xl">
              Ihre Werkstatt in Schwäbisch Gmünd
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
            Ob Reparatur, Wartung, Diagnose oder Reifenservice: Wir kümmern uns
            zuverlässig um Ihr Fahrzeug und beraten Sie persönlich vor Ort.
            Reparatur, Wartung, Diagnose, Reifenservice und Fahrzeugservice für
            alle Marken.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="tel:+491796641413" className="btn-primary">
              <PhoneIcon className="h-5 w-5" />
              Jetzt anrufen
            </a>
            <a href="#leistungen" className="btn-secondary">
              Leistungen ansehen
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4">
            {[
              { label: "Alle Marken", desc: "Reparatur" },
              { label: "Persönlich", desc: "Direkter Service" },
              { label: "Lokal", desc: "Schwäbisch Gmünd" },
              { label: "Schnell", desc: "Termin per Telefon" },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-brand-green pl-4">
                <dt className="font-heading text-base font-bold text-white">
                  {item.label}
                </dt>
                <dd className="text-sm text-white/60">{item.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
