"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Plus } from "lucide-react";

export const GridSystem = () => {
  const lineVariants: Variants = {
    hidden: { scaleX: 0, scaleY: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      scaleY: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "circOut" } 
    }
  };

  // NEW: Animazione costante per il plus
  const crossVariants: Variants = {
    pulsing: {
      opacity: [0.6, 0.3, 0.6],
      rotate: [0, 90], // Ruota di 90 gradi lentamente
      transition: { duration: 5, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        style={{ originX: 0 }}
        className="absolute left-0 top-[30%] h-px w-full bg-border/30"
      />
      
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        style={{ originY: 0 }}
        className="absolute left-[15%] top-0 h-full w-px bg-border/30 sm:left-[20%]"
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate="pulsing"
        variants={crossVariants}
        className="absolute left-[15%] top-[30%] -translate-x-1/2 -translate-y-1/2 text-primary/70 sm:left-[20%]"
      >
        <Plus className="h-4 w-4" strokeWidth={1} />
      </motion.div>
    </div>
  );
};