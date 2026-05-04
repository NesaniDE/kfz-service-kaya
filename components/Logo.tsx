interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  // "dark" = dark text on light background (for white header / footer light)
  // "light" = white text on dark background
  const textColor = variant === "dark" ? "#111111" : "#ffffff";
  const tagColor = variant === "dark" ? "#007A1B" : "#00B627";

  return (
    <svg
      className={className}
      viewBox="0 0 1360 280"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KFZ-Service Kaya"
      role="img"
    >
      {/* Car silhouette */}
      <g>
        <path
          d="M40 70 C140 0 320 -2 430 70 C500 75 560 98 600 132"
          fill="none"
          stroke="#00B627"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M75 70 C140 42 310 38 380 70"
          fill="none"
          stroke={textColor}
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.85"
        />
        <line
          x1="0"
          y1="135"
          x2="640"
          y2="135"
          stroke="#00B627"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>
      {/* KFZ-SERVICE */}
      <text
        x="0"
        y="200"
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="92"
        fontWeight="900"
        fontStyle="italic"
        fill={textColor}
      >
        KFZ-SERVICE
      </text>
      {/* KAYA */}
      <text
        x="700"
        y="200"
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="86"
        fontWeight="500"
        letterSpacing="22"
        fill={textColor}
      >
        KAYA
      </text>
      {/* Tagline */}
      <text
        x="0"
        y="252"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill={tagColor}
      >
        KFZ-REPARATUR | NEU UND GEBRAUCHTWAGEN
      </text>
    </svg>
  );
}
