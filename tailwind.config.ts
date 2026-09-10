import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAF9F6",
        surface: "#FFFFFF",
        ink: "#1C2B4A",
        muted: "#5A6472",
        hairline: "#E7E3DB",
        accent: {
          DEFAULT: "#4F7291",
          strong: "#3D5C77",
          wash: "#EDF1F4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "68rem",
        prose: "40rem",
      },
      fontSize: {
        "fluid-display": ["clamp(2.5rem, 1.6rem + 4.2vw, 4.75rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "fluid-h2": ["clamp(1.9rem, 1.4rem + 2.2vw, 2.9rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
        "fluid-h3": ["clamp(1.25rem, 1.05rem + 0.9vw, 1.6rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "fluid-lead": ["clamp(1.1rem, 1rem + 0.5vw, 1.35rem)", { lineHeight: "1.6" }],
      },
      spacing: {
        section: "clamp(5rem, 4rem + 8vh, 9rem)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
