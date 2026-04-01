"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NoiseToggleProps {
  showNoise: boolean;
  onToggle: () => void;
}

export function NoiseToggle({ showNoise, onToggle }: NoiseToggleProps) {
  // Configurazione dei ritmi asincroni per simulare il caos/rumore
  const bars = [
    { activeDuration: 0.8, activeDelay: 0.0 },
    { activeDuration: 1.2, activeDelay: 0.2 },
    { activeDuration: 0.9, activeDelay: 0.4 },
    { activeDuration: 1.1, activeDelay: 0.1 },
    { activeDuration: 0.7, activeDelay: 0.3 },
  ];

  return (
    <button
      onClick={onToggle}
      aria-label={showNoise ? "Disattiva disturbo visivo" : "Attiva disturbo visivo"}
      title={showNoise ? "CRT Noise: ON" : "CRT Noise: OFF"}
      className={cn(
        "group relative flex h-9 items-center justify-center gap-[2px] rounded-md border px-3 py-2 transition-colors hover:border-primary border-primary/50 bg-primary/10",
      )}
    >
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className={cn(
            "w-[3px] rounded-full origin-bottom bg-primary/50", // origin-bottom fa crescere le barre dal basso verso l'alto
          )}
          // Animazione dichiarativa interpolata
          animate={{
            height: showNoise 
              ? ["20%", "100%", "40%", "90%", "30%", "100%"] // Pattern caotico (Rumore ON)
              : ["30%", "40%", "30%"] // Pattern di stand-by piatto/pulsante (Rumore OFF)
          }}
          transition={{
            duration: showNoise ? bar.activeDuration : 2,
            delay: showNoise ? bar.activeDelay : i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          // Fallback iniziale per evitare layout shift
          style={{ height: "30%" }} 
        />
      ))}
    </button>
  );
}