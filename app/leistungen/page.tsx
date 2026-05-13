import type { Metadata } from "next";
import Contact from "@/components/Contact";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceVisual from "@/components/ServiceVisual";

type ServiceId =
  | "wartung"
  | "reparaturen"
  | "diagnose"
  | "reifenservice"
  | "tuning"
  | "fahrzeughandel";

const SITE_URL = "https://kfz-service-kaya.vercel.app";

export const metadata: Metadata = {
  title: "Leistungen | KFZ-Service Kaya in Schwäbisch Gmünd",
  description:
    "Unsere Leistungen im Überblick: Wartung, Reparaturen, Diagnose, Reifenservice, Tuning und Fahrzeughandel. Persönlich und zuverlässig in Schwäbisch Gmünd.",
  alternates: { canonical: `${SITE_URL}/leistungen` },
};

type Service = {
  id: ServiceId;
  title: string;
  lead: string;
  description: string;
  items: string[];
};

const services: Service[] = [
  {
    id: "wartung",
    title: "Wartung",
    lead: "Regelmäßige Pflege für volle Zuverlässigkeit.",
    description:
      "Regelmäßige Wartung ist die Grundlage für ein zuverlässiges und langlebiges Fahrzeug. Wir führen alle Wartungsarbeiten nach Herstellervorgaben durch — für Pkw aller Marken.",
    items: [
      "Inspektion nach Herstellervorgaben",
      "TÜV- und HU-Vorbereitung",
      "Bremsenservice",
      "Klimaservice",
      "Batterieservice",
      "Räderwechsel & Reifenmontage",
      "Ölwechsel & Filterwechsel",
      "Beleuchtungscheck",
    ],
  },
  {
    id: "reparaturen",
    title: "Reparaturen",
    lead: "Vom kleinen Defekt bis zur großen Instandsetzung.",
    description:
      "Wir bringen Ihr Fahrzeug zuverlässig wieder in Form — egal ob mechanischer Defekt, elektrische Störung oder Unfallschaden. Saubere Arbeit, ehrliche Beratung.",
    items: [
      "Motorinstandsetzung",
      "Getriebeinstandsetzung",
      "Reparaturen am Fahrwerk",
      "Reparaturen an elektrischen Bauteilen",
      "Reparatur von Abgasanlagen",
      "Windschutzscheiben-Service",
      "Unfallinstandsetzung",
    ],
  },
  {
    id: "diagnose",
    title: "Diagnose",
    lead: "Moderne Fehlersuche für Elektronik, Mechanik und Software.",
    description:
      "Mit moderner Diagnose-Technik finden wir Fehler schnell und gezielt — ob im Steuergerät, in der Elektrik oder in der Mechanik. So sparen Sie Zeit und Kosten.",
    items: [
      "Fehlerspeicher auslesen & löschen",
      "Elektrische Fehlersuche",
      "Druck- und Leckprüfungen",
      "Fahrzeugsoftware-Update",
      "Steuergeräte-Diagnose",
    ],
  },
  {
    id: "reifenservice",
    title: "Reifenservice",
    lead: "Reifen, Räder, Wuchten und Einlagerung — alles aus einer Hand.",
    description:
      "Vom saisonalen Räderwechsel bis zur neuen Bereifung: Wir kümmern uns um Ihre Reifen und Felgen. Auf Wunsch lagern wir Ihre Räder fachgerecht ein.",
    items: [
      "Reifenmontage",
      "Saisonaler Räderwechsel",
      "Auswuchten & Achsvermessung",
      "Reifeneinlagerung",
      "RDKS-Service (Reifendruck-Kontrollsystem)",
    ],
  },
  {
    id: "tuning",
    title: "Tuning & Optimierung",
    lead: "Individuelle Anpassung von Optik und Performance.",
    description:
      "Wir veredeln Ihr Fahrzeug nach Ihren Wünschen — von optischen Anpassungen über Performance-Upgrades bis hin zu professioneller Aufbereitung.",
    items: [
      "Tieferlegung",
      "Abgasanlage & Downpipe",
      "Felgen & Bereifung",
      "Motorumbauten",
      "Optische Änderungen",
      "Fahrzeugpflege & Aufbereitung",
    ],
  },
  {
    id: "fahrzeughandel",
    title: "Fahrzeughandel",
    lead: "Neu- und Gebrauchtwagen, fairer An- und Verkauf.",
    description:
      "Sie möchten Ihr Fahrzeug verkaufen oder suchen ein neues? Wir bieten Ihnen ein faires Angebot und beraten Sie persönlich rund um den Fahrzeughandel.",
    items: [
      "Neu- und Gebrauchtwagen",
      "Fahrzeug-Ankauf",
      "Fahrzeug-Verkauf",
      "Persönliche Beratung",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <main className="pb-24 lg:pb-0">
        {/* Page hero */}
        <section className="relative isolate overflow-hidden bg-brand-ink text-white pt-28 sm:pt-36 pb-20 sm:pb-24">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background: `
                radial-gradient(ellipse 70% 60% at 85% 30%, rgba(0,182,39,0.30) 0%, rgba(0,182,39,0) 55%),
                radial-gradient(ellipse 60% 70% at 80% 80%, rgba(255,140,0,0.14) 0%, rgba(255,140,0,0) 55%),
                linear-gradient(120deg, #0a0a0a 0%, #1a1a1a 45%, #0f0f0f 100%)
              `,
            }}
          />
          <div
            aria-hidden
            className="absolute -top-10 right-0 h-56 w-40 sm:w-52 diag-stripes opacity-25 rotate-12"
          />
          <div className="container-x relative">
            <nav className="text-sm text-white/55 mb-6">
              <a href="/" className="hover:text-white">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-white">Leistungen</span>
            </nav>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05] tracking-tight">
              Unsere{" "}
              <span className="text-brand-green">Leistungen</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
              Von Wartung über Reparatur bis zu Diagnose, Tuning und
              Fahrzeughandel — bei KFZ-Service Kaya bekommen Sie alles aus
              einer Hand. Persönlich, ehrlich und zuverlässig vor Ort in
              Schwäbisch Gmünd.
            </p>
          </div>
        </section>

        {/* Anchor nav strip */}
        <section className="border-b border-brand-line bg-white sticky top-20 z-30">
          <div className="container-x overflow-x-auto">
            <ul className="flex items-center gap-1 sm:gap-2 py-3 whitespace-nowrap">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex items-center rounded-full border border-brand-line px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-ink transition hover:border-brand-green hover:text-brand-green"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Service detail sections */}
        {services.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-32 py-16 sm:py-24 ${
              idx % 2 === 0 ? "bg-white" : "bg-brand-paperAlt"
            }`}
          >
            <div className="container-x">
              <div
                className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visual */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-2xl ring-1 ring-brand-line shadow-card">
                    <ServiceVisual id={service.id} className="absolute inset-0" />
                    {/* Service number badge */}
                    <div className="absolute top-5 left-5 inline-flex items-center justify-center h-12 w-12 rounded-full bg-brand-green text-white font-heading font-extrabold text-lg shadow-md">
                      0{idx + 1}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-greenLight px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-greenDark">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                    Leistung {idx + 1} / {services.length}
                  </span>
                  <h2 className="mt-5 font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-brand-ink">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-lg text-brand-dark/85 font-medium">
                    {service.lead}
                  </p>
                  <p className="mt-5 text-brand-dark/75 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-brand-ink"
                      >
                        <CheckIcon className="h-5 w-5 shrink-0 text-brand-green mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-col sm:flex-row gap-3">
                    <a href="tel:+491796641413" className="btn-primary">
                      <PhoneIcon className="h-5 w-5" />
                      Termin anfragen
                    </a>
                    <a href="/#kontakt" className="btn-secondary">
                      Kontakt & Anfahrt
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
