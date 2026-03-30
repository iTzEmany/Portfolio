// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg_to_xl': '1120px',
      },
      colors: {
        // Core (Sfondi e Testi)
        background: "#121212", // Antracite profondo (Migliore del nero puro per l'UX)
        foreground: "#E8E8E6", // Bianco sporco/Beige chiaro (Meno affaticamento visivo)
        
        // Palette Retro-Tech / Mecha (Dai tuoi riferimenti)
        primary: {
          DEFAULT: "#DCC9A9", // Sabbia/Beige (Per bottoni primari o testi in evidenza)
          foreground: "#121212",
        },
        accent: {
          rust: "#B83A2D",   // Rosso ruggine (Per errori, hover state aggressivi o dettagli "mecha")
          olive: "#4E6851",  // Verde oliva desaturato (Per badge tecnologici, success state)
        },
        // Bordi della Bento Box
        border: "rgba(220, 201, 169, 0.15)", // Bordo semi-trasparente basato sul colore primary
      },
      fontFamily: {
        // Fallback robusti. Nelle prossime fasi inietteremo i font di Google tramite next/font
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"], 
        mono: ["var(--font-jetbrains-mono)", "Fira Code", "monospace"],
      },
      borderRadius: {
        'bento': '1.5rem', // Arrotondamento standard per tutti i moduli della griglia
      },
      keyframes: {
        noise: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      animation: {
        // Animazione a scatti (steps) per simulare i frame senza transizioni fluide
        noise: 'noise 1s steps(2) infinite', 
      },
    },
  },
  plugins: [],
};

export default config;