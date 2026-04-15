"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { setPretextFocus } from "./PretextEngine";

export const HeroKanji = () => {
  const pulseVariants: Variants = {
    pulsing: {
      opacity: [0.5, 0.8, 0.5],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      aria-hidden="true"
      className="absolute hidden select-none opacity-[0.03] mix-blend-overlay sm:block sm:right-[5%] sm:top-[15%] md:right-[8%]"
      style={{ writingMode: "vertical-rl" }}
    >
      <motion.span 
        variants={pulseVariants}
        animate="pulsing"
        onPointerEnter={(e) => setPretextFocus(e.currentTarget as HTMLElement)}
        onPointerLeave={() => setPretextFocus(null)}
        // pointer-events-auto permette al Kanji di innescare l'evento
        className="pointer-events-auto font-sans font-black tracking-widest text-7xl md:text-9xl lg:text-[11rem]"
      >
        開発者
      </motion.span>
    </motion.div>
  );
};