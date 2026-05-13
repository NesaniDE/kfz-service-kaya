import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative isolate overflow-hidden bg-brand-ink text-white pt-28 sm:pt-36 pb-24 sm:pb-32"
    >
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-workshop.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 85% 30%, rgba(0,182,39,0.26) 0%, rgba(0,182,39,0) 55%),
            radial-gradient(ellipse 60% 70% at 80% 80%, rgba(255,140,0,0.16) 0%, rgba(255,140,0,0) 55%),
            linear-gradient(120deg, rgba(10,10,10,0.88) 0%, rgba(17,17,17,0.72) 45%, rgba(8,8,8,0.9) 100%)
          `,
        }}
      />

      {/* Spark-like dot pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,170,60,0.65) 1px, transparent 1.5px), radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1.5px)",
          backgroundSize: "120px 120px, 200px 200px",
          backgroundPosition: "60% 40%, 70% 60%",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 80% 50%, #000 0%, transparent 70%)",
        }}
      />

      {/* Diagonal green stripe accent */}
      <div
        aria-hidden
        className="absolute -top-10 right-0 h-56 w-40 sm:w-52 diag-stripes opacity-30 rotate-12"
      />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight uppercase">
            KFZ-Service Kaya —
            <span className="block mt-2 text-brand-green">
              Ihre Werkstatt in Schwäbisch Gmünd
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            Persönlich, zuverlässig und vor Ort: Reparatur, Wartung, Diagnose,
            Reifenservice und Fahrzeughandel — für alle Marken.
          </p>

          <div className="mt-9">
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-brand-greenDark hover:-translate-y-0.5"
            >
              Mehr erfahren
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
