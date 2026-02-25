/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        surface: "#111118",
        border: "#1e1e2e",
        accent: "#00d4ff",
        "accent-dim": "#00d4ff22",
        muted: "#6b7280",
        subtle: "#9ca3af",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        logo: ["Sevillana"],
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px #00d4ff33" },
          "50%": { boxShadow: "0 0 40px #00d4ff66" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        porfile_animate: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
        },
      },
      animation: {
        blink: "blink 1.2s linear infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        porfile_animate: "porfile_animate 5s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
};
