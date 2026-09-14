import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0B0D0C",
        foreground: "#F2F3EE",
        charcoal: {
          950: "#0B0D0C",
          900: "#121513",
          850: "#181C19",
          800: "#222724",
          700: "#2F3632",
        },
        lime: {
          400: "#D4FF55",
          500: "#C8FF3D", // Signature Accent Color
          600: "#A8E020",
        },
        slate: {
          100: "#F2F3EE",
          300: "#C5CBC5",
          400: "#9DA39D",
          600: "#606660",
          700: "#3E433E",
          800: "#262A27",
          900: "#171A18",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-subtle": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
