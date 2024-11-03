/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Sevillana"],
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
        type: {
          from: { width: 0 },
          to: { width: "100%" },
        },
        porfile_animate: {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
        },
      },
      animation: {
        blink: "blink 1.2s linear infinite",
        type: "type 0.5s steps(30, end)",
        porfile_animate: "porfile_animate 5s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
};
