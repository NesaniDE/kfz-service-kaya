const tiles = [
  {
    title: "Außenansicht",
    subtitle: "Standort Schwäbisch Gmünd",
    accent: "from-brand-green/20 to-brand-paper",
  },
  {
    title: "Werkstatt-Einblick",
    subtitle: "Hebebühne & Arbeitsplätze",
    accent: "from-brand-paper to-white",
  },
  {
    title: "Diagnosearbeiten",
    subtitle: "Fehlerspeicher & Software",
    accent: "from-brand-green/15 to-brand-paper",
  },
  {
    title: "Reifenservice",
    subtitle: "Montage & Räderwechsel",
    accent: "from-brand-paper to-brand-paperAlt",
  },
  {
    title: "Fahrzeugpflege",
    subtitle: "Aufbereitung & Optik",
    accent: "from-brand-green/20 to-brand-paper",
  },
  {
    title: "Eröffnung",
    subtitle: "Seit April 2024",
    accent: "from-brand-paperAlt to-brand-paper",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              Galerie
            </span>
            <h2 className="section-heading mt-5">
              Einblicke in unsere <span className="text-brand-green">Werkstatt</span>
            </h2>
            <p className="section-lead">
              Werfen Sie einen Blick in unsere Werkstatt und erhalten Sie einen
              Eindruck von unserem Standort, unseren Arbeiten und unserem
              Service.
            </p>
          </div>
          <a
            href="https://www.instagram.com/kfzservice_kaya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start sm:self-end rounded-full border-2 border-brand-ink/10 bg-white px-5 py-2.5 text-sm font-semibold text-brand-ink transition hover:border-brand-green hover:text-brand-green"
          >
            <InstagramIcon className="h-4 w-4" />
            Mehr auf Instagram
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tiles.map((tile, idx) => (
            <div
              key={tile.title}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-brand-line ${
                idx === 0
                  ? "lg:col-span-2 lg:row-span-2 aspect-[4/3]"
                  : "aspect-square sm:aspect-[4/3]"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.accent}`} />
              <div
                className="absolute inset-0 opacity-30 mix-blend-multiply"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(17,17,17,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.06) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Diagonal stripe accent */}
              <div
                aria-hidden
                className={`absolute -top-4 -right-4 h-24 w-16 diag-stripes opacity-50 rotate-12 ${
                  idx === 0 ? "h-32 w-20" : ""
                }`}
              />
              <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                <span className="inline-flex w-max items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-ink shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  Bald Foto
                </span>
                <div>
                  <h3 className="font-heading text-base sm:text-xl font-extrabold text-brand-ink">
                    {tile.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-brand-dark/65">
                    {tile.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
