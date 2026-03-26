/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Brand accent
        blue: { DEFAULT: "#003be0", hover: "#002BB3", deep: "#002299", light: "#1a52f0", subtle: "#e6ecfd", glow: "rgba(0, 59, 224, 0.15)" },
        // Backgrounds (Depth Scale)
        base: "#0B0F19",
        surface: "#111827",
        // Surfaces (Elevation Scale)
        card: "#1E293B",
        "card-border": "#334155",
        // Typography
        heading: "#F8FAFC",
        body: "#94A3B8",
        // Legacy aliases
        navy: "#001233",
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
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.5)",
        "btn-glow": "0 0 15px rgba(0, 59, 224, 0.4)",
        "btn-glow-hover": "0 0 25px rgba(0, 59, 224, 0.6)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        blob: "blob 10s infinite alternate",
        "blob-delayed": "blob 12s infinite alternate-reverse",
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeInUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)", opacity: "0.15" },
          "100%": { transform: "translate(30px, -50px) scale(1.1)", opacity: "0.25" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
