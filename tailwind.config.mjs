/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: "#003be0", deep: "#002299", light: "#1a52f0", subtle: "#e6ecfd" },
        navy: "#001233",
        black: "#0a0a0f",
        charcoal: "#111827",
        mid: "#374151",
        muted: "#6b7280",
        silver: "#b8c5d6",
        offwhite: "#f8f9fc",
        champagne: { DEFAULT: "#c9aa71", light: "#f5ecd8" },
      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "blob": "blob 10s infinite alternate",
        "blob-delayed": "blob 12s infinite alternate-reverse",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeInUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)", opacity: "0.15" },
          "100%": { transform: "translate(30px, -50px) scale(1.1)", opacity: "0.25" },
        },
      },
    },
  },
  plugins: [],
};
