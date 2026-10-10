import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#09090b",
          card: "#111114",
          "card-hover": "#17171c",
          border: "#1f1f24",
          "border-light": "#2a2a32",
          red: {
            DEFAULT: "#dc2626",
            light: "#ef4444",
            dark: "#b91c1c",
            glow: "rgba(220, 38, 38, 0.4)",
          },
          muted: "#9ca3af",
          subtle: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-bebas-neue)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
        heading: ["var(--font-oswald)", "sans-serif"],
        ios: ["var(--font-teko)", "var(--font-bebas-neue)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        mega: "0.25em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
