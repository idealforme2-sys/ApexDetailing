const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg-rgb) / <alpha-value>)",
        foreground: "rgb(var(--text-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-strong": "rgb(var(--accent-strong-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(54, 132, 255, 0.18), 0 28px 90px -40px rgba(31, 114, 255, 0.48)",
        soft: "0 24px 80px -36px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top right, rgba(54, 132, 255, 0.22), transparent 32%), radial-gradient(circle at top left, rgba(255, 255, 255, 0.06), transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent 42%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "image-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.15)" },
        },
      },
      animation: {
        "image-zoom": "image-zoom 35s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
