import React from "react";

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
 * RSC che narra la storia e il percorso formativo come un "Quest Log".
 */
export function CharacterTimeline() {
  return (
    <article className="flex h-full flex-col gap-6 md:gap-8 rounded-lg border border-border bg-background p-6 md:p-8">
      <header className="border-b border-border pb-2 md:pb-4">
        <h3 className="font-mono text-sm md:text-base lg:text-lg 2xl:text-xl font-bold uppercase tracking-widest text-primary">
          [ QUEST_LOG & LORE ]
        </h3>
      </header>

      {/* Timeline semantica */}
      <ol className="relative ml-2 mt-4 border-l border-border/60 border-dashed">
        {TIMELINE_DATA.map((step, index) => (
          <li key={index} className="mb-12 md:mb-16 ml-8 md:ml-10 last:mb-0">
            {/* Timeline dot */}
            <span className="absolute -left-[7px] flex h-3 w-3 items-center justify-center rounded-sm bg-accent-olive ring-4 ring-background" />
            
            <h4 className="mb-3 flex flex-col xl:flex-row xl:items-center gap-3 font-mono text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold uppercase tracking-wider text-primary">
              <span className="text-accent-olive bg-accent-olive/10 px-2 py-1 rounded-sm w-fit">[{step.year}]</span>
              <span>{step.title}</span>
            </h4>
            
            <p className="font-sans text-sm md:text-base lg:text-lg 2xl:text-xl text-foreground/90 mt-3 mb-4 leading-relaxed max-w-4xl">
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
    </article>
  );
}

export default CharacterTimeline;
