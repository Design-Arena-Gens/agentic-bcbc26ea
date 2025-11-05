import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4F46E5",
          foreground: "#FFFFFF"
        },
        accent: {
          DEFAULT: "#10B981",
          foreground: "#0F172A"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        brand: "0 20px 45px -20px rgba(79, 70, 229, 0.35)"
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.45", transform: "scale(0.95)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" }
        }
      },
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
