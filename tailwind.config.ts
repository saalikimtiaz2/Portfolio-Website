import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      fira: ["Fira Code", "monospace"],
      dm: ["DM Serif Display", "serif"],
      jost: ["Jost", "sans-serif"],
    },
    screens: {
      xs: "0px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1336px",
    },
    container: {
      padding: {
        xs: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        primary: "#92D603",
        secondary: "#0572C4",
        accent: "#E5F0EA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
