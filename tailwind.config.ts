import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      heading: ["var(--font-archivo)", "Archivo", "sans-serif"],
      body: ["var(--font-grotesk)", "Space Grotesk", "sans-serif"],
      mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      // legacy aliases (kept so any unmigrated component still renders)
      fira: ["var(--font-mono)", "monospace"],
      dm: ["var(--font-archivo)", "serif"],
      jost: ["var(--font-grotesk)", "sans-serif"],
    },
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        // Design system: Monochrome + blue accent
        ink: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
          950: "#09090B",
        },
        accent: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          soft: "#DBEAFE",
        },
        // Backwards-compat tokens (unmigrated files)
        primary: "#18181B",
        secondary: "#3F3F46",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-light":
          "linear-gradient(to right, rgba(9,9,11,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(9,9,11,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(9,9,11,0.05)",
        card: "0 4px 20px -8px rgba(9,9,11,0.12)",
        lift: "0 24px 48px -16px rgba(9,9,11,0.18)",
        ring: "0 0 0 4px rgba(37,99,235,0.18)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      animation: {
        meteor: "meteor 5s linear infinite",
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee 28s linear infinite reverse",
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
        blob: "blob 12s ease-in-out infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
export default config;
