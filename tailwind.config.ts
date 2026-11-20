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
        // Client Palette: Paper Heart, Golden Hour, Bright Gold, Loch Blue
        brand: {
          dark: "#173330",        // Deep Loch Pine: Authoritative base text & dark surfaces
          primary: "#5B9891",     // Loch Blue: Calm, serene, modest Islamic teal signature
          gold: "#D98408",        // Bright Gold: High-impact halal commerce buttons & badges
          golden: "#F2B55D",      // Golden Hour: Warm review stars, glowing highlights
          paper: "#F7DFC7",       // Paper Heart: Artisanal parchment container & cards
          paperLight: "#FAF5EE",  // Paper Heart Light: Ultra-soft page canvas
          paperBorder: "#E8D0B8", // Paper Heart Border: Warm dividers and borders
          darkHover: "#224844",   // Deep Loch hover state
        },
        loch: {
          50: "#F2F8F7",
          100: "#E3F0EE",
          200: "#C7E1DE",
          300: "#A2CCC7",
          400: "#79B3AD",
          500: "#5B9891", // Client Loch Blue
          600: "#477B75",
          700: "#3A635F",
          800: "#2B4B48",
          900: "#173330", // Deep Loch Pine
          950: "#0D1E1C",
        },
        gold: {
          50: "#FDF8F0",
          100: "#FAEFDC",
          200: "#F5DCB5",
          300: "#F2B55D", // Client Golden Hour
          400: "#E59E28",
          500: "#D98408", // Client Bright Gold
          600: "#B86E04",
          700: "#925505",
          800: "#75430B",
          900: "#60370E",
        },
        paper: {
          50: "#FAF5EE",
          100: "#F7DFC7", // Client Paper Heart
          200: "#E8D0B8",
          300: "#D8BEA3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 2px 12px -2px rgba(23, 51, 48, 0.08), 0 1px 4px -1px rgba(0, 0, 0, 0.04)",
        cardHover: "0 12px 28px -6px rgba(23, 51, 48, 0.14), 0 4px 8px -2px rgba(0, 0, 0, 0.06)",
        float: "0 20px 40px -12px rgba(91, 152, 145, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
