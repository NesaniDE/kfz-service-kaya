const items = [
  { title: "Reparatur aller Marken", icon: WrenchIcon },
  { title: "Persönlicher Service", icon: HandshakeIcon },
  { title: "Lokale Werkstatt", icon: PinIcon },
  { title: "Schnelle Terminvereinbarung", icon: ClockIcon },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-brand-dark/40">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
        {items.map(({ title, icon: Icon }) => (
          <div
            key={title}
            className="flex items-center gap-3 px-4 py-5 sm:py-7 first:pl-0 last:pr-0"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green">
              <Icon className="h-5 w-5" />
            </span>
            <span className="font-body text-sm sm:text-base font-medium text-white/85">
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function WrenchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.7 6.3a4 4 0 0 1 5.7 5.6l-.7.7a4 4 0 0 1-4.6.7l-7 7a2 2 0 0 1-2.8-2.8l7-7a4 4 0 0 1 .7-4.6l.7-.7a4 4 0 0 1 1-.7" />
    </svg>
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

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
