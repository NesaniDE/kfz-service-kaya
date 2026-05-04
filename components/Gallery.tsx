const tiles = [
  {
    title: "Außenansicht der Werkstatt",
    subtitle: "Standort Schwäbisch Gmünd",
    accent: "from-brand-green/30 via-brand-green/10",
  },
  {
    title: "Werkstatt-Einblick",
    subtitle: "Hebebühne & Arbeitsplätze",
    accent: "from-white/15 via-white/5",
  },
  {
    title: "Diagnosearbeiten",
    subtitle: "Fehlerspeicher & Software",
    accent: "from-brand-green/25 via-brand-green/5",
  },
  {
    title: "Reifenservice",
    subtitle: "Montage & Räderwechsel",
    accent: "from-white/10 via-transparent",
  },
  {
    title: "Fahrzeugpflege",
    subtitle: "Aufbereitung & Optik",
    accent: "from-brand-green/30 via-brand-green/5",
  },
  {
    title: "Eröffnungsbilder",
    subtitle: "Seit April 2024",
    accent: "from-white/15 via-white/5",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="bg-brand-dark py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="accent-line" />
            <h2 className="section-heading mt-5">Einblicke in unsere Werkstatt</h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              Werfen Sie einen Blick in unsere Werkstatt und erhalten Sie einen
              Eindruck von unserem Standort, unseren Arbeiten und unserem
              Service.
            </p>
          </div>
          <a
            href="https://www.instagram.com/kfzservice_kaya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-white"
          >
            Mehr auf Instagram ansehen
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tiles.map((tile, idx) => (
            <div
              key={tile.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                idx === 0 ? "lg:col-span-2 lg:row-span-2 aspect-[4/3]" : "aspect-square sm:aspect-[4/3]"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.accent} to-brand-black`} />
              <div
                className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative flex h-full flex-col justify-between p-6">
                <span className="inline-flex w-max items-center gap-2 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-xs font-medium text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  Bald Foto
                </span>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {tile.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{tile.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
