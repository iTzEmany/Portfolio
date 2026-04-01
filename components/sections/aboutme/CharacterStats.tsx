import React from "react";

const STATS_DATA = [
  { 
    id: "STR", 
    name: "Clean Code & Architettura", 
    desc: "Codice solido che non crolla",
    value: 75 
  },
  { 
    id: "INT", 
    name: "Problem Solving", 
    desc: "Risoluzione bug complessi",
    value: 80 
  },
  { 
    id: "DEX", 
    name: "Frontend Mastery & UI/UX", 
    desc: "Pixel-perfect e delivery",
    value: 85 
  },
  { 
    id: "VIT", 
    name: "Debugging & Testing", 
    desc: "Zero crash, system stability",
    value: 70 
  },
  { 
    id: "LUK", 
    name: "Stack Overflow", 
    desc: "Risposta giusta al primo colpo",
    value: 90 
  },
];

/**
 * CharacterStats Component
 * Estrema onestà intellettuale: Junior/Mid capace.
 */
export function CharacterStats() {
  return (
    <article className="flex h-full flex-col gap-4 md:gap-6 rounded-lg border border-border bg-background p-6 md:p-8">
      <header className="border-b border-border pb-2 md:pb-4">
        <h3 className="font-mono text-[clamp(0.875rem,2.5vw,1.25rem)] whitespace-nowrap font-bold uppercase tracking-widest text-primary">
          [ STATISTICS_CORE ]
        </h3>
      </header>

      <ul className="flex flex-col gap-5 md:gap-6 2xl:gap-8">
        {STATS_DATA.map((stat) => (
          <li key={stat.id} className="flex flex-col gap-2 md:gap-3 group">
            
            <div className="flex items-end justify-between font-mono text-sm md:text-base lg:text-lg 2xl:text-xl font-bold uppercase text-foreground">
              <span className="flex items-center gap-3">
                <span className="text-accent-olive w-10">{stat.id}</span>
                <span className="text-foreground truncate text-sm md:text-base lg:text-lg 2xl:text-lg">{stat.name}</span>
              </span>
              <span className="text-primary/90 group-hover:text-primary transition-colors">{stat.value}/100</span>
            </div>
            
            {/* Sottotitolo descrittivo minuscolo */}
            <p className="font-sans text-xs md:text-sm lg:text-base text-foreground/70 pl-14 italic">
              {stat.desc}
            </p>
            
            {/* Visual Progress Bar */}
            <div 
              className="h-2 w-full rounded-full bg-accent-olive/10 overflow-hidden mt-1"
              role="progressbar"
              aria-label={`Statistica ${stat.name}`}
              aria-valuenow={stat.value}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div 
                className="h-full bg-accent-olive group-hover:bg-accent-olive/80 transition-all duration-300" 
                style={{ width: `${stat.value}%` }} 
              />
            </div>
            
          </li>
        ))}
      </ul>
    </article>
  );
}

export default CharacterStats;
