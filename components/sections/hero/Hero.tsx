"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { setPretextFocus } from "./PretextEngine";

import { HeroKanji } from "./HeroKanji";
import { PretextEngine } from "./PretextEngine"; 

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 100 } },
  };

  const technicalEasing = [0.22, 1, 0.36, 1] as const;

  const frontendMaskVariants: Variants = {
    hidden: { y: "-110%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 1.1, ease: technicalEasing } }
  };

  const developerMaskVariants: Variants = {
    hidden: { x: "-110%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 1.3, delay: 0.5, ease: technicalEasing } }
  };

  return (
    <section 
      id="hero" 
      aria-label="Introduzione Frontend Developer"
      // Niente più onPointerMove qui. Il codice è pulito e isolato.
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-background px-6 pt-40 pb-20 sm:px-12 md:px-24"
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
        }}
      >
        {/* Il motore non necessita più di props */}
        <PretextEngine />
        <HeroKanji />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mt-[5vh] flex max-w-4xl flex-col pointer-events-none" 
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 font-mono text-xs font-bold tracking-[0.2em] text-primary border border-primary/20 shadow-[0_0_10px_rgba(var(--primary),0.2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            SYSTEM_ONLINE
          </span>
        </motion.div>

        <motion.h1 
          aria-label="Frontend Developer"
          className="font-sans text-5xl font-black uppercase leading-[0.95] tracking-tighter text-foreground xs:text-6xl sm:text-7xl md:text-8xl lg:text-[8rem]"
        >
          <div className="relative inline-block overflow-hidden" aria-hidden="true">
            <motion.span variants={shouldReduceMotion ? itemVariants : frontendMaskVariants} className="inline-block">
              Frontend
            </motion.span>
          </div>
          <br />
          <div className="relative inline-block ml-[10%] overflow-hidden text-transparent bg-clip-text bg-linear-to-br from-primary via-primary/80 to-accent-foreground" aria-hidden="true">
            <motion.span variants={shouldReduceMotion ? itemVariants : developerMaskVariants} className="inline-block">
              Developer
            </motion.span>
          </div>
        </motion.h1>

        <motion.div variants={itemVariants} className="ml-[10%] mt-8 flex flex-col gap-6 border-l border-primary/30 pl-6 sm:ml-[20%]">
          <div className="pointer-events-auto"
            onPointerEnter={(e) => setPretextFocus(e.currentTarget)}
            onPointerLeave={() => setPretextFocus(null)}>
          <h2 className="font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            Architetture web ad alte prestazioni. <br className="hidden sm:block" />
            <span className="text-foreground">Design brutalista</span>. 
            <span className="text-foreground"> Codice Clean</span>.
            Specializzato in React, Next.js e interazioni complesse.
          </h2>

          <div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 m-3 pointer-events-auto w-full">
            <a
              href="#bento-grid"
              className="group flex w-fit items-center gap-3 font-mono text-[clamp(0.75rem,2vw,1rem)] whitespace-nowrap font-bold tracking-widest text-primary transition-all hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              [ INIZIALIZZA_PROGETTI ]
              <ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
            
            <a
              href="/cv.pdf"
              download="Curriculum_Vitae.pdf"
              className="group flex w-fit items-center gap-3 font-mono text-[clamp(0.75rem,2vw,1rem)] whitespace-nowrap font-bold tracking-widest text-primary transition-all hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              [ DOWNLOAD_RESUME ]
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            </a>
          </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};