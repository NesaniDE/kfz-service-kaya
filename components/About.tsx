export default function About() {
  return (
    <section id="ueber-uns" className="bg-brand-dark py-20 sm:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="accent-line" />
          <h2 className="section-heading mt-5">Über uns</h2>
          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            KFZ-Service Kaya ist Ihre persönliche Kfz-Werkstatt in Schwäbisch
            Gmünd. Wir kümmern uns zuverlässig um Reparaturen, Wartungsarbeiten,
            Diagnose, Reifenservice und weitere Leistungen rund um Ihr Fahrzeug.
          </p>
          <p className="mt-5 text-white/70 leading-relaxed">
            Unser Anspruch ist es, Kunden ehrlich zu beraten, sauber zu arbeiten
            und für jedes Fahrzeug eine passende Lösung zu finden. Ob
            Inspektion, Fehlersuche, Bremsenservice, Klimaservice oder größere
            Reparatur - bei uns steht Ihr Fahrzeug im Mittelpunkt.
          </p>

          <div className="mt-8 rounded-xl border border-brand-green/30 bg-brand-green/5 p-5">
            <p className="text-sm sm:text-base text-white/85">
              <strong className="text-brand-green">Neueröffnung April 2024.</strong>{" "}
              KFZ-Service Kaya ist in der Neppersbergstraße 10 in Schwäbisch
              Gmünd für Sie vor Ort erreichbar.
            </p>
          </div>

          <dl className="mt-9 grid grid-cols-2 gap-6">
            <div>
              <dt className="font-heading text-3xl font-extrabold text-brand-green">
                Alle
              </dt>
              <dd className="mt-1 text-sm text-white/65">
                Marken und Fahrzeuge
              </dd>
            </div>
            <div>
              <dt className="font-heading text-3xl font-extrabold text-brand-green">
                100%
              </dt>
              <dd className="mt-1 text-sm text-white/65">
                Persönliche Beratung
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl border border-white/10 bg-brand-black p-8 sm:p-10">
            <div className="absolute -top-4 left-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Inhaber
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">
              Mustafa Kaya
            </h3>
            <p className="mt-2 text-white/65">Inhaber & Werkstatt-Meister</p>
            <p className="mt-6 text-white/75 leading-relaxed">
              &bdquo;Mein Anspruch ist sauberes Arbeiten und ehrliche Beratung.
              Jedes Fahrzeug bekommt bei uns die Aufmerksamkeit, die es
              verdient.&ldquo;
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Direkter Kontakt - keine anonyme Massenabfertigung",
                "Breites Leistungsspektrum unter einem Dach",
                "Erfahrung in Reparatur, Diagnose und Tuning",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/85"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand-green/15 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
