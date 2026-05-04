export default function Contact() {
  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=Neppersbergstra%C3%9Fe+10%2C+73525+Schw%C3%A4bisch+Gm%C3%BCnd";
  const directionsLink =
    "https://www.google.com/maps/dir/?api=1&destination=Neppersbergstra%C3%9Fe+10%2C+73525+Schw%C3%A4bisch+Gm%C3%BCnd";
  const mapsEmbed =
    "https://www.google.com/maps?q=Neppersbergstra%C3%9Fe+10%2C+73525+Schw%C3%A4bisch+Gm%C3%BCnd&output=embed";

  return (
    <section id="kontakt" className="bg-brand-paper py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            Kontakt
          </span>
          <h2 className="section-heading mt-5">
            Kontakt & <span className="text-brand-green">Terminvereinbarung</span>
          </h2>
          <p className="section-lead">
            Sie möchten einen Termin vereinbaren oder haben Fragen zu Ihrem
            Fahrzeug? Kontaktieren Sie uns telefonisch oder per E-Mail.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl bg-white p-7 sm:p-9 shadow-card ring-1 ring-brand-line">
            <h3 className="font-heading text-2xl font-extrabold text-brand-ink">
              KFZ-Service Kaya
            </h3>
            <p className="mt-1 text-sm text-brand-gray">
              Inhaber: Mustafa Kaya
            </p>

            <ul className="mt-7 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-greenDark">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-brand-gray font-semibold">
                    Adresse
                  </p>
                  <p className="mt-1 text-brand-ink font-medium">
                    Neppersbergstraße 10
                  </p>
                  <p className="text-brand-ink font-medium">
                    73525 Schwäbisch Gmünd
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-greenDark">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-brand-gray font-semibold">
                    Telefon
                  </p>
                  <a
                    href="tel:+491796641413"
                    className="mt-1 block text-brand-ink font-medium hover:text-brand-green"
                  >
                    0179 / 6641413
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-greenDark">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-brand-gray font-semibold">
                    E-Mail
                  </p>
                  <a
                    href="mailto:kfz-service.kaya@web.de"
                    className="mt-1 block text-brand-ink font-medium hover:text-brand-green break-all"
                  >
                    kfz-service.kaya@web.de
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-greenDark">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-brand-gray font-semibold">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/kfzservice_kaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-brand-ink font-medium hover:text-brand-green"
                  >
                    @kfzservice_kaya
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <a href="tel:+491796641413" className="btn-primary text-sm py-3 px-3">
                Anrufen
              </a>
              <a
                href="mailto:kfz-service.kaya@web.de"
                className="btn-secondary text-sm py-3 px-3"
              >
                E-Mail
              </a>
              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-3 px-3"
              >
                Route
              </a>
              <a
                href="https://www.instagram.com/kfzservice_kaya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-3 px-3"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-brand-line bg-white min-h-[420px]">
            <iframe
              title="Standort KFZ-Service Kaya auf Google Maps"
              src={mapsEmbed}
              className="h-full w-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom address strip — like the flyer's green banner */}
        <div className="mt-10 overflow-hidden rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="bg-brand-dark px-6 py-5 sm:py-7 flex items-center gap-3 text-white">
              <MailIcon className="h-5 w-5 text-brand-green shrink-0" />
              <a
                href="mailto:kfz-service.kaya@web.de"
                className="text-sm sm:text-base font-medium hover:text-brand-green break-all"
              >
                kfz-service.kaya@web.de
              </a>
            </div>
            <div className="bg-brand-ink px-6 py-5 sm:py-7 flex items-center gap-3 text-white">
              <PhoneIcon className="h-5 w-5 text-brand-green shrink-0" />
              <a
                href="tel:+491796641413"
                className="text-sm sm:text-base font-medium hover:text-brand-green"
              >
                0179 / 6641413
              </a>
            </div>
            <div className="bg-brand-green px-6 py-5 sm:py-7 flex items-center gap-3 text-white">
              <PinIcon className="h-5 w-5 shrink-0" />
              <div className="text-sm sm:text-base font-semibold leading-tight">
                Neppersbergstraße 10
                <br />
                73525 Schwäbisch Gmünd
              </div>
            </div>
          </div>
        </div>

        {/* Mailto link to confirm there is no mailto-clipping below the bar */}
        <p className="mt-6 text-xs text-brand-gray">
          Wir freuen uns auf Ihre Anfrage.
        </p>
      </div>
    </section>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
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
