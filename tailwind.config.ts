import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00B627",
          greenDark: "#007A1B",
          greenLight: "#E8F8EC",
          ink: "#111111",
          dark: "#2F2F2F",
          gray: "#777777",
          line: "#E5E5E5",
          paper: "#F4F4F4",
          paperAlt: "#FAFAFA",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(17,17,17,0.04), 0 8px 24px -12px rgba(17,17,17,0.12)",
        cardHover:
          "0 1px 2px rgba(17,17,17,0.04), 0 24px 48px -20px rgba(0,182,39,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
