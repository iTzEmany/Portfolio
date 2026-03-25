"use client";

import React from "react";
import { motion } from "framer-motion";

export function RadarMatrix() {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-black/40 p-6 md:p-8 font-mono relative overflow-hidden items-center">
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-accent-olive/5 to-transparent pointer-events-none" />
      
      <header className="w-full border-b border-border/50 pb-4 mb-10 flex justify-between items-end relative z-10">
        <h3 className="text-accent-olive text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-widest leading-tight">
          [ SKILL MATRIX ]
        </h3>
      </header>

      <div className="absolute top-32 left-6 text-xs text-accent-olive font-bold z-10 flex flex-col gap-2">
        <span>DEX: 92</span>
        <span>INT: 88</span>
      </div>
      <div className="absolute bottom-6 right-6 text-xs text-primary font-bold z-10 flex flex-col gap-2 items-end">
        <span>SYS: NOMINAL</span>
        <span>SYNC: 100%</span>
      </div>

      <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center my-auto z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(78,104,81,0.6)] overflow-visible">
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="rgba(220, 201, 169, 0.15)" strokeWidth="0.5" />
          <polygon points="50,25 73,38 73,62 50,75 27,62 27,38" fill="none" stroke="rgba(220, 201, 169, 0.15)" strokeWidth="0.5" />
          <polygon points="50,40 59,46 59,54 50,60 41,54 41,46" fill="none" stroke="rgba(220, 201, 169, 0.15)" strokeWidth="0.5" />
          
          <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(220, 201, 169, 0.15)" strokeWidth="0.5" />
          <line x1="15" y1="30" x2="85" y2="70" stroke="rgba(220, 201, 169, 0.15)" strokeWidth="0.5" />
          <line x1="15" y1="70" x2="85" y2="30" stroke="rgba(220, 201, 169, 0.15)" strokeWidth="0.5" />
          
          <motion.polygon 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            style={{ transformOrigin: "50% 50%" }}
            points="50,15 82,32 75,66 50,85 22,64 25,35" 
            fill="rgba(78, 104, 81, 0.25)" 
            stroke="#4E6851" 
            strokeWidth="1.5" 
          />
          
          <circle cx="50" cy="15" r="2.5" fill="#DCC9A9" />
          <circle cx="82" cy="32" r="2.5" fill="#DCC9A9" />
          <circle cx="75" cy="66" r="2.5" fill="#DCC9A9" />
          <circle cx="50" cy="85" r="2.5" fill="#DCC9A9" />
          <circle cx="22" cy="64" r="2.5" fill="#DCC9A9" />
          <circle cx="25" cy="35" r="2.5" fill="#DCC9A9" />
        </svg>
        
        <div className="absolute top-[-8%] left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-foreground font-bold tracking-widest">FRONTEND</div>
        <div className="absolute top-[18%] right-[-15%] text-[10px] md:text-xs text-foreground font-bold tracking-widest">AGILE/SCRUM</div>
        <div className="absolute bottom-[18%] right-[-10%] text-[10px] md:text-xs text-foreground font-bold tracking-widest">QUALITÀ ISO</div>
        <div className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-foreground font-bold tracking-widest whitespace-nowrap">AI & ROBOTICS</div>
        <div className="absolute bottom-[18%] left-[-10%] text-[10px] md:text-xs text-foreground font-bold tracking-widest">UX/A11Y</div>
        <div className="absolute top-[18%] left-[-15%] text-[10px] md:text-xs text-foreground font-bold tracking-widest">BACKEND & DATA</div>
      </div>
    </article>
  );
}
