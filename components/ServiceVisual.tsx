type ServiceId =
  | "wartung"
  | "reparaturen"
  | "diagnose"
  | "reifenservice"
  | "tuning"
  | "fahrzeughandel";

interface ServiceVisualProps {
  id: ServiceId;
  className?: string;
}

export default function ServiceVisual({ id, className = "" }: ServiceVisualProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {variants[id]()}
    </div>
  );
}

const variants: Record<ServiceId, () => JSX.Element> = {
  wartung: () => (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="w-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#f4f4f5" />
        </linearGradient>
        <radialGradient id="w-glow" cx="0.7" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="#00B627" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#00B627" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="w-lift" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1f1f1f" />
        </linearGradient>
      </defs>
      <rect width="600" height="480" fill="url(#w-bg)" />
      <rect width="600" height="480" fill="url(#w-glow)" />
      {/* Floor grid */}
      <g stroke="#cbcbd1" strokeWidth="1" opacity="0.5">
        <line x1="0" y1="340" x2="600" y2="340" />
        <line x1="0" y1="370" x2="600" y2="370" />
        <line x1="0" y1="400" x2="600" y2="400" />
        <line x1="0" y1="430" x2="600" y2="430" />
        <line x1="0" y1="460" x2="600" y2="460" />
      </g>
      {/* Lift posts */}
      <rect x="120" y="180" width="20" height="180" fill="url(#w-lift)" />
      <rect x="460" y="180" width="20" height="180" fill="url(#w-lift)" />
      <rect x="115" y="170" width="30" height="12" fill="#2a2a2a" />
      <rect x="455" y="170" width="30" height="12" fill="#2a2a2a" />
      {/* Lift platform */}
      <rect x="100" y="210" width="400" height="14" fill="#444" />
      <rect x="100" y="224" width="400" height="6" fill="#222" />
      {/* Car silhouette on lift */}
      <g transform="translate(140 130)">
        <path
          d="M 20 70 Q 35 30 75 25 L 240 25 Q 295 30 305 70 L 315 75 Q 325 78 325 90 L 325 105 L 5 105 L 5 90 Q 5 78 15 75 Z"
          fill="#111"
        />
        <path
          d="M 55 50 Q 75 35 95 33 L 175 33 Q 215 36 235 50 L 250 70 L 50 70 Z"
          fill="#3a8bbf"
          opacity="0.85"
        />
        <circle cx="70" cy="105" r="22" fill="#0a0a0a" />
        <circle cx="70" cy="105" r="12" fill="#444" />
        <circle cx="260" cy="105" r="22" fill="#0a0a0a" />
        <circle cx="260" cy="105" r="12" fill="#444" />
      </g>
      {/* Big wrench in foreground */}
      <g transform="translate(370 310) rotate(-25)" opacity="0.95">
        <path
          d="M 0 0 L 130 0 L 130 22 L 10 22 Q 0 22 0 11 Z"
          fill="#00B627"
        />
        <circle cx="135" cy="11" r="20" fill="#00B627" />
        <circle cx="135" cy="11" r="9" fill="#f4f4f5" />
      </g>
      {/* Diagonal stripe accent */}
      <g opacity="0.4" transform="translate(540 10)">
        <rect x="0" y="0" width="6" height="80" fill="#00B627" transform="rotate(20)" />
        <rect x="14" y="0" width="6" height="80" fill="#00B627" transform="rotate(20)" />
        <rect x="28" y="0" width="6" height="80" fill="#00B627" transform="rotate(20)" />
      </g>
    </svg>
  ),

  reparaturen: () => (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="r-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <radialGradient id="r-spark" cx="0.7" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffaa3c" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#ffaa3c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="480" fill="url(#r-bg)" />
      <rect width="600" height="480" fill="url(#r-spark)" />
      {/* Engine block silhouette */}
      <g transform="translate(120 130)">
        <rect x="0" y="40" width="360" height="200" rx="10" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="2" />
        {/* Cylinder heads */}
        <g fill="#1a1a1a" stroke="#444" strokeWidth="1.5">
          <rect x="30" y="10" width="60" height="40" rx="4" />
          <rect x="110" y="10" width="60" height="40" rx="4" />
          <rect x="190" y="10" width="60" height="40" rx="4" />
          <rect x="270" y="10" width="60" height="40" rx="4" />
        </g>
        {/* Detail lines */}
        <g stroke="#555" strokeWidth="1.5" opacity="0.6">
          <line x1="0" y1="100" x2="360" y2="100" />
          <line x1="0" y1="140" x2="360" y2="140" />
          <line x1="0" y1="180" x2="360" y2="180" />
        </g>
        {/* Bolts */}
        <g fill="#666">
          <circle cx="20" cy="65" r="4" />
          <circle cx="20" cy="215" r="4" />
          <circle cx="340" cy="65" r="4" />
          <circle cx="340" cy="215" r="4" />
        </g>
        {/* Logo plate */}
        <rect x="130" y="130" width="100" height="22" rx="3" fill="#0a0a0a" stroke="#00B627" strokeWidth="1" />
      </g>
      {/* Sparks */}
      <g fill="#ffaa3c">
        <circle cx="420" cy="180" r="2" />
        <circle cx="440" cy="200" r="1.5" />
        <circle cx="460" cy="170" r="2" />
        <circle cx="470" cy="220" r="1.5" />
        <circle cx="490" cy="190" r="2.5" />
        <circle cx="510" cy="215" r="1.5" />
        <circle cx="430" cy="160" r="1" />
        <circle cx="475" cy="155" r="1" />
        <circle cx="500" cy="240" r="1.5" />
      </g>
      {/* Wrench foreground */}
      <g transform="translate(400 290) rotate(35)">
        <path d="M 0 0 L 110 0 L 110 18 L 10 18 Q 0 18 0 9 Z" fill="#00B627" />
        <circle cx="115" cy="9" r="17" fill="#00B627" />
        <circle cx="115" cy="9" r="7" fill="#0a0a0a" />
      </g>
    </svg>
  ),

  diagnose: () => (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="d-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a0f1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <radialGradient id="d-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#00B627" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#00B627" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="480" fill="url(#d-bg)" />
      <rect width="600" height="480" fill="url(#d-glow)" />
      {/* Circuit grid background */}
      <g stroke="#00B627" strokeWidth="1" opacity="0.15">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="600" y2={i * 40} />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="480" />
        ))}
      </g>
      {/* OBD scanner / device */}
      <g transform="translate(160 110)">
        <rect x="0" y="0" width="280" height="200" rx="14" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="2" />
        <rect x="15" y="15" width="250" height="140" rx="6" fill="#0a0f0a" stroke="#00B627" strokeWidth="1" />
        {/* "Screen" content */}
        <g fill="#00B627" fontFamily="monospace">
          <rect x="25" y="28" width="80" height="3" />
          <rect x="25" y="40" width="120" height="3" opacity="0.7" />
          <rect x="25" y="52" width="60" height="3" opacity="0.5" />
          <rect x="25" y="65" width="100" height="3" opacity="0.8" />
          <rect x="25" y="78" width="140" height="3" opacity="0.6" />
        </g>
        {/* Pulse line */}
        <polyline
          points="25,120 50,120 60,100 70,135 80,90 95,120 130,120 145,105 160,120 240,120"
          fill="none"
          stroke="#00B627"
          strokeWidth="2"
        />
        {/* Buttons row */}
        <g fill="#2a2a2a">
          <circle cx="50" cy="180" r="10" />
          <circle cx="90" cy="180" r="10" />
          <circle cx="190" cy="180" r="10" />
          <circle cx="230" cy="180" r="10" />
        </g>
        <rect x="125" y="172" width="40" height="16" rx="4" fill="#00B627" />
      </g>
      {/* Connector cable */}
      <path
        d="M 440 210 Q 510 220 520 280 Q 525 340 480 360"
        fill="none"
        stroke="#444"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect x="470" y="350" width="30" height="24" rx="4" fill="#2a2a2a" stroke="#00B627" strokeWidth="1.5" />
    </svg>
  ),

  reifenservice: () => (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <radialGradient id="t-bg" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <radialGradient id="t-glow" cx="0.5" cy="0.5" r="0.4">
          <stop offset="0%" stopColor="#00B627" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00B627" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="480" fill="url(#t-bg)" />
      <rect width="600" height="480" fill="url(#t-glow)" />
      {/* Back tire (smaller, offset) */}
      <g transform="translate(420 200)">
        <circle r="90" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="2" />
        <circle r="70" fill="#1a1a1a" />
        <circle r="55" fill="#2a2a2a" />
        <circle r="20" fill="#1a1a1a" />
        {/* Spokes */}
        <g stroke="#444" strokeWidth="4" strokeLinecap="round">
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={Math.cos(angle) * 22}
                y1={Math.sin(angle) * 22}
                x2={Math.cos(angle) * 52}
                y2={Math.sin(angle) * 52}
              />
            );
          })}
        </g>
      </g>
      {/* Main tire */}
      <g transform="translate(220 240)">
        <circle r="155" fill="#080808" stroke="#1a1a1a" strokeWidth="3" />
        {/* Tread pattern */}
        <g stroke="#1a1a1a" strokeWidth="6">
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={Math.cos(angle) * 145}
                y1={Math.sin(angle) * 145}
                x2={Math.cos(angle) * 130}
                y2={Math.sin(angle) * 130}
              />
            );
          })}
        </g>
        <circle r="120" fill="#1a1a1a" />
        {/* Rim */}
        <circle r="95" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="2" />
        <circle r="80" fill="#1a1a1a" />
        <circle r="30" fill="#2a2a2a" stroke="#444" strokeWidth="2" />
        {/* Spokes */}
        <g stroke="#555" strokeWidth="7" strokeLinecap="round">
          {Array.from({ length: 5 }).map((_, i) => {
            const angle = (i * 72 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={Math.cos(angle) * 32}
                y1={Math.sin(angle) * 32}
                x2={Math.cos(angle) * 78}
                y2={Math.sin(angle) * 78}
              />
            );
          })}
        </g>
        {/* Center hub */}
        <circle r="12" fill="#0a0a0a" />
        <circle r="5" fill="#00B627" />
      </g>
      {/* Highlight */}
      <ellipse cx="160" cy="170" rx="40" ry="14" fill="#ffffff" opacity="0.06" />
    </svg>
  ),

  tuning: () => (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="tu-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a1a0a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <radialGradient id="tu-glow" cx="0.5" cy="0.65" r="0.5">
          <stop offset="0%" stopColor="#00B627" stopOpacity="0.35" />
          <stop offset="80%" stopColor="#00B627" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tu-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="tu-window" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a3a5a" />
          <stop offset="100%" stopColor="#0a1a2a" />
        </linearGradient>
      </defs>
      <rect width="600" height="480" fill="url(#tu-bg)" />
      <rect width="600" height="480" fill="url(#tu-glow)" />
      {/* Speed lines */}
      <g stroke="#00B627" strokeWidth="2" opacity="0.4" strokeLinecap="round">
        <line x1="20" y1="200" x2="120" y2="200" />
        <line x1="40" y1="230" x2="160" y2="230" />
        <line x1="10" y1="260" x2="90" y2="260" />
        <line x1="50" y1="290" x2="140" y2="290" />
      </g>
      {/* Low-rider car silhouette */}
      <g transform="translate(140 200)">
        {/* Body */}
        <path
          d="M 10 80 Q 20 30 70 22 L 110 18 Q 145 14 175 18 L 220 22 Q 260 28 285 38 L 310 50 Q 325 55 325 70 L 325 95 Q 325 110 310 110 L 15 110 Q 0 110 0 95 L 0 88 Q 0 80 10 80 Z"
          fill="url(#tu-body)"
          stroke="#222"
          strokeWidth="1.5"
        />
        {/* Windows */}
        <path
          d="M 50 75 Q 60 35 95 28 L 165 25 Q 210 28 240 38 L 270 60 L 270 75 Z"
          fill="url(#tu-window)"
        />
        {/* Window divider */}
        <line x1="155" y1="25" x2="155" y2="75" stroke="#000" strokeWidth="2" />
        {/* Green underglow */}
        <ellipse cx="160" cy="125" rx="160" ry="10" fill="#00B627" opacity="0.6" />
        {/* Wheels — bigger custom rims */}
        <g>
          <circle cx="65" cy="110" r="32" fill="#000" />
          <circle cx="65" cy="110" r="22" fill="#1a1a1a" stroke="#00B627" strokeWidth="1.5" />
          <circle cx="65" cy="110" r="6" fill="#00B627" />
          <g stroke="#888" strokeWidth="2.5" strokeLinecap="round">
            <line x1="65" y1="93" x2="65" y2="127" />
            <line x1="48" y1="110" x2="82" y2="110" />
            <line x1="53" y1="98" x2="77" y2="122" />
            <line x1="53" y1="122" x2="77" y2="98" />
          </g>
        </g>
        <g>
          <circle cx="265" cy="110" r="32" fill="#000" />
          <circle cx="265" cy="110" r="22" fill="#1a1a1a" stroke="#00B627" strokeWidth="1.5" />
          <circle cx="265" cy="110" r="6" fill="#00B627" />
          <g stroke="#888" strokeWidth="2.5" strokeLinecap="round">
            <line x1="265" y1="93" x2="265" y2="127" />
            <line x1="248" y1="110" x2="282" y2="110" />
            <line x1="253" y1="98" x2="277" y2="122" />
            <line x1="253" y1="122" x2="277" y2="98" />
          </g>
        </g>
        {/* Exhaust */}
        <rect x="-5" y="95" width="20" height="10" fill="#444" rx="2" />
      </g>
    </svg>
  ),

  fahrzeughandel: () => (
    <svg
      viewBox="0 0 600 480"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="f-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dedede" />
          <stop offset="55%" stopColor="#f4f4f5" />
          <stop offset="55%" stopColor="#c8c8cc" />
          <stop offset="100%" stopColor="#a8a8ac" />
        </linearGradient>
        <linearGradient id="f-car" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f1f1f" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      <rect width="600" height="480" fill="url(#f-bg)" />
      {/* Showroom backdrop lines */}
      <g stroke="#aaa" strokeWidth="1" opacity="0.5">
        <line x1="0" y1="265" x2="600" y2="265" />
      </g>
      {/* Floor reflection */}
      <ellipse cx="300" cy="345" rx="240" ry="14" fill="#000" opacity="0.18" />
      {/* Car */}
      <g transform="translate(110 195)">
        <path
          d="M 30 110 Q 35 65 75 50 L 110 38 Q 155 28 215 28 L 260 32 Q 305 38 335 50 L 370 70 Q 388 78 388 95 L 388 130 Q 388 145 372 145 L 18 145 Q 0 145 0 128 L 0 120 Q 0 112 12 110 Z"
          fill="url(#f-car)"
          stroke="#000"
          strokeWidth="1.5"
        />
        {/* Windows */}
        <path
          d="M 65 105 Q 75 55 110 45 L 165 40 L 200 40 Q 250 43 280 55 L 320 100 L 320 105 Z"
          fill="#7ecaf0"
          opacity="0.7"
        />
        <line x1="195" y1="40" x2="195" y2="105" stroke="#0a0a0a" strokeWidth="2" />
        {/* Door line */}
        <line x1="195" y1="105" x2="195" y2="140" stroke="#0a0a0a" strokeWidth="1" opacity="0.6" />
        {/* Headlights / taillight */}
        <ellipse cx="365" cy="100" rx="14" ry="6" fill="#fff8a8" opacity="0.9" />
        <ellipse cx="22" cy="100" rx="10" ry="5" fill="#c93030" opacity="0.85" />
        {/* Wheels */}
        <circle cx="80" cy="148" r="30" fill="#0a0a0a" />
        <circle cx="80" cy="148" r="18" fill="#2a2a2a" />
        <circle cx="80" cy="148" r="8" fill="#0a0a0a" />
        <circle cx="305" cy="148" r="30" fill="#0a0a0a" />
        <circle cx="305" cy="148" r="18" fill="#2a2a2a" />
        <circle cx="305" cy="148" r="8" fill="#0a0a0a" />
        {/* Brand badge */}
        <rect x="180" y="115" width="34" height="12" rx="2" fill="#00B627" />
      </g>
      {/* Price tag */}
      <g transform="translate(440 105)">
        <rect x="0" y="0" width="100" height="56" rx="8" fill="#00B627" />
        <path d="M 0 28 L -12 56 L 100 56 L 100 0 L 0 0 Z" fill="#00B627" />
        <text
          x="50"
          y="24"
          fontFamily="Montserrat, sans-serif"
          fontSize="11"
          fontWeight="700"
          fill="#fff"
          textAnchor="middle"
          opacity="0.85"
        >
          VERKAUF
        </text>
        <text
          x="50"
          y="44"
          fontFamily="Montserrat, sans-serif"
          fontSize="15"
          fontWeight="900"
          fill="#fff"
          textAnchor="middle"
        >
          & ANKAUF
        </text>
      </g>
    </svg>
  ),
};
