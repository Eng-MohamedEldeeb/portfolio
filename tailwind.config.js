/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        space: {
          950: "#020617",
          900: "#0a0f1e",
          800: "#0f172a",
        },
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "glow": "glowPulse 3s ease-in-out infinite",
      },
      backgroundImage: {
        "cosmic": "radial-gradient(ellipse at top, #0f172a 0%, #020617 70%)",
        "nebula": "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(59,130,246,0.4)",
        "glow-cyan": "0 0 30px rgba(6,182,212,0.4)",
      },
    },
  },
  plugins: [],
};
