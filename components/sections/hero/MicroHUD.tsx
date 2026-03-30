"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export const MicroHUD = () => {
  const logMessages = [
    "01000101 01101101 ",
    "01100001 01101110 ",
    "01110101 01100101 ",
    "01101100 01100101 ",
    "00100000 01001100 ",
    "01001001 01101111 ",
    "01101110 01100101 ",
    "01110100 01110100 ",
    "01101001 00100000 ",
    "00001010 01000110 ",
    "01110010 01101111 ",
    "01101110 01110100 ",
    "01100101 01101110 ",
    "01100100 00100000 ",
    "01000100 01100101 ",
    "01110110 01100101 ",
    "01101100 01101111 ",
    "01110000 01100101 ",
    "01110010 00000000"
  ];

  // Ingegneria UI: Duplichiamo l'array per permettere un loop senza interruzioni visive
  const seamlessLog = [...logMessages, ...logMessages];
    
  const blinkingVariants: Variants = {
    blinking: {
      opacity: [0.4, 0.1, 0.4],
      transition: { duration: 1.5, repeat: Infinity, ease: "linear" },
    },
    scrollingLog: {
      // Trasla esattamente del 50% (la dimensione del primo blocco di messaggi)
      y: ["0%", "-50%"],
      transition: { duration: 25, repeat: Infinity, ease: "linear" }, // Flusso lento e continuo
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      aria-hidden="true" 
      className="pointer-events-none absolute inset-0 z-0 p-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/30 sm:p-8"
    >
      <div className="absolute left-4 top-[120px] sm:left-8 sm:top-[120px]">
        <p>SYS.INIT_ // SEQ.01</p>
        <motion.p variants={blinkingVariants} animate="blinking" className="mt-1 text-primary/60">
          {">"} OPT_ENABLED_A01
        </motion.p>
      </div>

      <div className="absolute right-4 top-[120px] text-right sm:right-8 sm:top-[120px]">
        <p>LAT: 41.1171° N</p>
        <p className="mt-1">LON: 16.8719° E</p>
      </div>

      {/* Il nostro container per l'easter egg binario */}
      <div className="absolute bottom-4 left-4 h-48 overflow-hidden sm:bottom-8 sm:left-8 text-primary/40">
        <motion.div variants={blinkingVariants} animate="scrollingLog" className="flex flex-col">
          {seamlessLog.map((msg, i) => (
            <p key={i} className="mb-1 leading-tight whitespace-nowrap">
              {msg}
            </p>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-4 right-4 text-right sm:bottom-8 sm:right-8">
        <p>V 2.0.26 // CORE_W_VITALS</p>
        <p className="mt-1 text-primary/60">SEC: 042 // [ STABLE ]</p>
      </div>
    </motion.div>
  );
};