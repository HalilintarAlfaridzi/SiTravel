/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        navySoft: "#102A4C",
        gold: "#C9A227",
        goldSoft: "#E7C766",
        ivory: "#F8F5EF",
        charcoal: "#1F2937",
        muted: "#6B7280",
        graySoft: "#F3F4F6",
        borderSoft: "#E5E7EB",
        emeraldTrust: "#0F766E",
        skySoft: "#E0F2FE",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px rgba(11,31,58,0.12)",
      },
    },
  },
  plugins: [],
};
