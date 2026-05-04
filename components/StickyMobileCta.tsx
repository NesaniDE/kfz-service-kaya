export default function StickyMobileCta() {
  const mapsLink =
    "https://www.google.com/maps/dir/?api=1&destination=Neppersbergstra%C3%9Fe+10%2C+73525+Schw%C3%A4bisch+Gm%C3%BCnd";
  return (
    <div className="lg:hidden fixed bottom-3 inset-x-3 z-40">
      <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-brand-black/95 backdrop-blur p-2 shadow-2xl">
        <a
          href="tel:+491796641413"
          className="flex flex-col items-center justify-center gap-1 rounded-lg bg-brand-green py-2.5 text-xs font-semibold text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          Anrufen
        </a>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-lg border border-white/15 py-2.5 text-xs font-semibold text-white"
        >
          <PinIcon className="h-4 w-4" />
          Route
        </a>
        <a
          href="mailto:kfz-service.kaya@web.de"
          className="flex flex-col items-center justify-center gap-1 rounded-lg border border-white/15 py-2.5 text-xs font-semibold text-white"
        >
          <MailIcon className="h-4 w-4" />
          E-Mail
        </a>
      </div>
    </div>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
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

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
