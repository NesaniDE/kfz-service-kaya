interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1360 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KFZ-Service Kaya"
      role="img"
    >
      <g>
        <path
          d="M40 60 C140 -10 320 -12 430 60 C500 65 560 88 600 122"
          fill="none"
          stroke="#00B627"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M75 60 C140 32 310 28 380 60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <line
          x1="0"
          y1="125"
          x2="640"
          y2="125"
          stroke="#00B627"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>
      <text
        x="0"
        y="190"
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="92"
        fontWeight="900"
        fontStyle="italic"
        fill="#ffffff"
      >
        KFZ-SERVICE
      </text>
      <text
        x="700"
        y="190"
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="86"
        fontWeight="500"
        letterSpacing="22"
        fill="#ffffff"
      >
        KAYA
      </text>
    </svg>
  );
}
