"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TIMELINE_DATA = [
  { 
    year: "Lvl 1", 
    title: "Nascita", 
    desc: "Quest Start: Generato nel server globale.",
    badges: ["Respawn", "Tutorial"],
    hasScreenshot: false
  },
  { 
    year: "Lvl 6", 
    title: "Elementari", 
    desc: "Initial Training: Acquisizione abilità base di lettura e scrittura I/O.",
    badges: ["I/O", "Alpha"],
    hasScreenshot: false
  },
  { 
    year: "Lvl 11", 
    title: "Medie", 
    desc: "Developing Logics: Primi rudimenti di matematica avanzata e ragionamento logico strutturato.",
    badges: ["Logic", "Beta"],
    hasScreenshot: false
  },
  { 
    year: "Lvl 14", 
    title: "Superiori", 
    desc: "First Compilers: Approccio diretto con i linguaggi di programmazione, reti di computer e sistemi informatici.",
    badges: ["C++", "Networking", "SysAdmin"],
    hasScreenshot: false
  },
  { 
    year: "Lvl 19", 
    title: "Diploma e Università", 
    desc: "BSc ITPS @ UniBa START: Iscrizione in Informatica e Tecnologie per la Produzione del Software. Approfondimento algoritmi, strutture dati e Ingegneria del Software.",
    badges: ["ITPS", "UniBa", "Soft. Eng."],
    hasScreenshot: false
  },
  { 
    year: "Lvl 20", 
    title: "Riconoscimento migliore progetto", 
    desc: "Achievement Unlocked: Sviluppo di un progetto accademico o side project distintosi per architettura e problem solving.",
    badges: ["Achievement", "Architecture"],
    hasScreenshot: true
  },
  { 
    year: "Lvl 21", 
    title: "Sito del RoboLab", 
    desc: "Web Deployment: Costruzione e rilascio di una piattaforma reale web-based per il laboratorio di robotica universitaria.",
    badges: ["React", "Fullstack", "Deployment"],
    hasScreenshot: true
  },
  { 
    year: "Lvl 22", 
    title: "Portfolio e Laurea", 
    desc: "Final Boss & Quest Clear: Preparazione del portfolio (Questo!) e completamento degli step finali verso il conseguimento della laurea triennale.",
    badges: ["Next.js", "AI-Tools", "Graduation"],
    hasScreenshot: true
  },
];

/**
 * CharacterTimeline Component
 * Client Component interattivo (Aceternity UI Timeline) che narra
 * la storia formativa come un Quest Log, monitorandone lo scroll.
 */
export function CharacterTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
    layoutEffect: false,
  } as any);

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <article 
      ref={containerRef}
      className="flex w-full flex-col gap-6 md:gap-8 rounded-lg border border-border bg-background p-6 md:p-8 relative"
    >
      <header className="border-b border-border pb-2 md:pb-4 relative z-10">
        <h3 className="font-mono text-sm md:text-base lg:text-lg 2xl:text-xl font-bold uppercase tracking-widest text-primary">
          [ QUEST_LOG & LORE ]
        </h3>
      </header>

      {/* Timeline semantica con logica Aceternity */}
      <div className="relative mt-4 ml-4 pb-12" ref={ref}>
        {/* Tracciatore visivo puro di Aceternity */}
        <div 
          style={{ height: height + "px" }}
          className="absolute left-0 top-0 overflow-hidden w-[2px] bg-linear-to-b from-transparent via-neutral-500/30 to-transparent mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]" 
        >
          <motion.div 
            style={{ 
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-linear-to-t from-accent-olive via-primary to-transparent from-0% via-10% rounded-full z-10" 
          />
        </div>

        <ol className="flex flex-col gap-14 md:gap-20">
          {TIMELINE_DATA.map((step, index) => (
            <li key={index} className="relative pl-8 md:pl-12">
              {/* Timeline dot con target autonomo all'avanzamento sulla viewport nativa */}
              <motion.div 
                initial={{ scale: 1, backgroundColor: "#121212" }}
                whileInView={{ scale: [1, 1.3, 1.15], backgroundColor: "#4E6851" }}
                viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full border-2 border-[#4E6851] ring-4 ring-background z-20" 
              />
              
              <h4 className="mb-3 flex flex-col xl:flex-row xl:items-center gap-3 font-mono text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold uppercase tracking-wider text-primary">
                <span className="text-accent-olive bg-accent-olive/10 px-2 py-1 rounded-sm w-fit">[{step.year}]</span>
                <span>{step.title}</span>
              </h4>
              
              <p className="font-sans text-sm md:text-base lg:text-lg 2xl:text-xl text-foreground/90 mt-3 mb-4 leading-relaxed max-w-4xl tracking-wide">
                {step.desc}
              </p>

              {/* Badges / Tags */}
              {step.badges && step.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-5">
                  {step.badges.map((badge, idx) => (
                    <span 
                      key={idx} 
                      className="font-mono text-xs md:text-sm lg:text-base uppercase text-accent-rust border border-accent-rust/30 bg-accent-rust/10 py-1.5 px-2.5 rounded-sm"
                    >
                      #{badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Placeholder Screenshot/Gallery */}
              {step.hasScreenshot && (
                <div className="mt-5 flex aspect-video w-full max-w-xl flex-col items-center justify-center rounded-lg border border-border/50 bg-black/40 overflow-hidden group hover:border-accent-olive/50 transition-colors">
                  <span className="font-mono text-xs md:text-sm text-foreground/50 uppercase tracking-widest group-hover:text-accent-olive/80 transition-colors">
                    [PLACEHOLDER SNEAK PEEK]
                  </span>
                  <span className="font-sans text-xs md:text-sm text-foreground/30 group-hover:text-accent-olive/60 transition-colors mt-2">
                    Future implementation...
                  </span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

export default CharacterTimeline;
