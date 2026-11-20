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
        // Strict Client Palette: Paper Heart, Golden Hour, Bright Gold, Loch Blue
        brand: {
          dark: "#111E28",       // Deep Slate Charcoal (Zero green, high readability)
          primary: "#5B9891",    // Loch Blue (Client Choice)
          gold: "#D98408",       // Bright Gold (Client Choice)
          golden: "#F2B55D",     // Golden Hour (Client Choice)
          paper: "#F7DFC7",      // Paper Heart (Client Choice)
          paperLight: "#FAF8F5", // Clean Light Canvas
          blueHover: "#477C76",  // Loch Blue Hover
          goldHover: "#B86E04",  // Bright Gold Hover
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 2px 12px -2px rgba(17, 30, 40, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)",
        cardHover: "0 12px 28px -6px rgba(91, 152, 145, 0.18), 0 4px 8px -2px rgba(0, 0, 0, 0.04)",
        goldGlow: "0 4px 14px 0 rgba(217, 132, 8, 0.35)",
        blueGlow: "0 4px 14px 0 rgba(91, 152, 145, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
