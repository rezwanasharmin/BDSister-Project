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
        // Color Hunt Palette #123524, #3E7B27, #85A947, #EFE3C2
        brand: {
          dark: "#123524",      // Color Hunt 1: Deep Forest Green
          primary: "#3E7B27",   // Color Hunt 2: Vibrant Evergreen
          accent: "#85A947",    // Color Hunt 3: Olive Moss Green
          sand: "#EFE3C2",      // Color Hunt 4: Warm Cream / Parchment
          sandLight: "#FAF7EF", // Tint: Ultra soft parchment background
          sandDark: "#DFCFA5",  // Border: Rich parchment border
          darkHover: "#1B4D35", // Slightly lighter dark green for hover
        },
        pine: {
          50: "#F4F7F4",
          100: "#E6EFE6",
          200: "#C9DFC9",
          300: "#A6CCA6",
          400: "#85A947", // Palette #3
          500: "#3E7B27", // Palette #2
          600: "#32631F",
          700: "#254B17",
          800: "#1B3B18",
          900: "#123524", // Palette #1
          950: "#0B2117",
        },
        sand: {
          50: "#FAF7EF",
          100: "#F5F0DF",
          200: "#EFE3C2", // Palette #4
          300: "#E3D3A6",
          400: "#D4BF85",
          500: "#C2A866",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 2px 12px -2px rgba(18, 53, 36, 0.08), 0 1px 4px -1px rgba(0, 0, 0, 0.04)",
        cardHover: "0 12px 28px -6px rgba(18, 53, 36, 0.14), 0 4px 8px -2px rgba(0, 0, 0, 0.06)",
        float: "0 20px 40px -12px rgba(62, 123, 39, 0.22)",
      },
    },
  },
  plugins: [],
};
export default config;
