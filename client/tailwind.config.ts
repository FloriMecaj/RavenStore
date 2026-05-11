import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        raven: {
          bg: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          red: "var(--accent-red)",
          crimson: "var(--accent-crimson)",
          gold: "var(--accent-gold)",
          text: "var(--text-primary)",
          muted: "var(--text-muted)"
        }
      },
      boxShadow: {
        glow: "0 0 30px var(--glow-red)",
        card: "0 12px 40px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        mist:
          "radial-gradient(circle at top, rgba(196,30,58,0.22), transparent 32%), radial-gradient(circle at 20% 20%, rgba(139,0,0,0.26), transparent 28%), linear-gradient(180deg, rgba(10,4,5,1) 0%, rgba(17,6,8,1) 100%)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 20s linear infinite",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
