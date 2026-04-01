"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";

import { MicroHUD } from "./MicroHUD";
import { GridSystem } from "./GridSystem";
import { HeroKanji } from "./HeroKanji";

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  // 1. Architettura dell'Animazione di Orchestrazione
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, // Stagger tra H1, H2, e CTA
        delayChildren: 0.2 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 100 } },
  };

  // 2. NEW: Ingegneria UI - Easing Técnico e Formale
  // Invece di spring physics, usiamo cubi-bezier precisi (easeOutQuint)
  // per una sensazione di controllo e decelerazione elegante, non elastica.
  const technicalEasing = [0.22, 1, 0.36, 1] as const;

  // 3. NEW: Animazioni di Masking (Clips via Container Overflow)
  
  // "Frontend": Effetto tendina (scende dall'alto)
  const frontendMaskVariants: Variants = {
    hidden: { y: "-110%", opacity: 0 }, // Parte sopra il container
    visible: {
      y: "0%", // Raggiunge la sua posizione naturale
      opacity: 1,
      transition: { 
        duration: 1.1, // Caricamento controllato
        ease: technicalEasing 
      }
    }
  };

  // "Developer": Slide da sinistra verso destra
  const developerMaskVariants: Variants = {
    hidden: { x: "-110%", opacity: 0 }, // Parte a sinistra del container
    visible: {
      x: "0%", // Raggiunge la sua posizione naturale
      opacity: 1,
      transition: { 
        duration: 1.3, // Leggermente più lento per asimmetria
        delay: 0.5, // Orchestrazione: parte mentre 'Frontend' finisce
        ease: technicalEasing 
      }
    }
  };

  return (
    <section 
      id="hero" 
      aria-label="Introduzione Frontend Developer"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-background px-6 pt-40 pb-20 sm:px-12 md:px-24"
    >

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mt-[5vh] flex max-w-4xl flex-col" 
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 font-mono text-xs font-bold tracking-[0.2em] text-primary border border-primary/20">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            SISTEMA ONLINE
          </span>
        </motion.div>

        {/* 4. SEO & A11y: L'H1 contiene l'aria-label completo per gli screen reader.
          Le maschere visive rompono l'albero semantico per gli screen reader, quindi aria-hidden è vitale sui container.
        */}
        <motion.h1 
          aria-label="Frontend Developer"
          className="font-sans text-5xl font-black uppercase leading-[0.95] tracking-tighter text-foreground xs:text-6xl sm:text-7xl md:text-8xl lg:text-[8rem]"
        >
          {/* 5. Ingegneria UI - Container Mask "Frontend"
            relative + overflow-hidden + inline-block crea la maschera
          */}
          <div className="relative inline-block overflow-hidden" aria-hidden="true">
            <motion.span 
              variants={shouldReduceMotion ? itemVariants : frontendMaskVariants} 
              className="inline-block"
            >
              Frontend
            </motion.span>
          </div>
          
          <br />
          
          {/* 6. Ingegneria UI - Container Mask "Developer"
            Gestiamo il gradiente e l'asimmetria (ml-[10%]) sul container
          */}
          <div className="relative inline-block ml-[10%] overflow-hidden text-transparent bg-clip-text bg-linear-to-br from-primary via-primary/80 to-accent-foreground" aria-hidden="true">
            <motion.span 
              variants={shouldReduceMotion ? itemVariants : developerMaskVariants} 
              className="inline-block"
            >
              Developer
            </motion.span>
          </div>
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="ml-[10%] mt-8 flex max-w-lg flex-col gap-6 border-l border-primary/30 pl-6 sm:ml-[20%]"
        >
          <h2 className="font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            Architetture web ad alte prestazioni. <br className="hidden sm:block" />
            <span className="text-foreground">Design brutalista</span>. 
            <span className="text-foreground"> Codice Clean</span>.
            Specializzato in React, Next.js e interazioni complesse.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
            <a
              href="#bento-grid"
              className="group flex w-fit items-center gap-3 font-mono text-[clamp(0.75rem,2vw,1rem)] whitespace-nowrap font-bold tracking-widest text-primary transition-all hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              [ INIZIALIZZA PROGETTI ]
              <ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
            
            <a
              href="/cv.pdf"
              download="Curriculum_Vitae.pdf"
              className="group flex w-fit items-center gap-3 font-mono text-[clamp(0.75rem,2vw,1rem)] whitespace-nowrap font-bold tracking-widest text-primary transition-all hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              [ DOWNLOAD RESUME ]
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};