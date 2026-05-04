export default function About() {
  return (
    <section id="ueber-uns" className="bg-white py-20 sm:py-28">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            Über uns
          </span>
          <h2 className="section-heading mt-5">
            Persönlich, ehrlich, <span className="text-brand-green">vor Ort</span>
          </h2>
          <p className="section-lead">
            KFZ-Service Kaya ist Ihre persönliche Kfz-Werkstatt in Schwäbisch
            Gmünd. Wir kümmern uns zuverlässig um Reparaturen,
            Wartungsarbeiten, Diagnose, Reifenservice und weitere Leistungen
            rund um Ihr Fahrzeug.
          </p>
          <p className="mt-5 text-brand-dark/75 leading-relaxed">
            Unser Anspruch ist es, Kunden ehrlich zu beraten, sauber zu
            arbeiten und für jedes Fahrzeug eine passende Lösung zu finden. Ob
            Inspektion, Fehlersuche, Bremsenservice, Klimaservice oder größere
            Reparatur - bei uns steht Ihr Fahrzeug im Mittelpunkt.
          </p>

          <div className="mt-8 rounded-2xl border-2 border-brand-green/20 bg-brand-greenLight/50 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white">
                <FlagIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-base font-bold text-brand-ink">
                  Neueröffnung April 2024
                </p>
                <p className="mt-1 text-sm text-brand-dark/80 leading-relaxed">
                  KFZ-Service Kaya ist in der Neppersbergstraße 10 in
                  Schwäbisch Gmünd für Sie vor Ort erreichbar.
                </p>
              </div>
            </div>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
            <div>
              <dt className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-green">
                Alle
              </dt>
              <dd className="mt-1 text-xs sm:text-sm text-brand-dark/70">
                Marken & Fahrzeuge
              </dd>
            </div>
            <div>
              <dt className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-green">
                100%
              </dt>
              <dd className="mt-1 text-xs sm:text-sm text-brand-dark/70">
                Persönliche Beratung
              </dd>
            </div>
            <div>
              <dt className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-green">
                7+
              </dt>
              <dd className="mt-1 text-xs sm:text-sm text-brand-dark/70">
                Leistungsbereiche
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="relative rounded-3xl bg-brand-ink p-8 sm:p-10 text-white overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-8 -right-8 h-48 w-32 diag-stripes opacity-60 rotate-12"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Inhaber
                </span>
                <h3 className="mt-5 font-heading text-2xl sm:text-3xl font-extrabold">
                  Mustafa Kaya
                </h3>
                <p className="mt-1 text-white/65">
                  Inhaber & Werkstatt-Meister
                </p>
                <p className="mt-6 text-white/80 leading-relaxed">
                  &bdquo;Mein Anspruch ist sauberes Arbeiten und ehrliche
                  Beratung. Jedes Fahrzeug bekommt bei uns die Aufmerksamkeit,
                  die es verdient.&ldquo;
                </p>

                <ul className="mt-7 space-y-3">
                  {[
                    "Direkter Kontakt - keine Massenabfertigung",
                    "Breites Leistungsspektrum unter einem Dach",
                    "Erfahrung in Reparatur, Diagnose und Tuning",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/85"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-brand-green/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FlagIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22V4a1 1 0 0 1 1-1h12l-2 4 2 4H5" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}
