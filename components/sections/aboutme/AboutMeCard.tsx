import { Terminal, Cpu, Code } from "lucide-react";

/**
 * AboutMeCard
 * Componente React Server Component (RSC) per la sezione "Character Card" del portfolio.
 * 
 * Rappresenta una scheda personaggio in stile Gdr/Mecha/Manga, 
 * utilizzando esclusivamente tipografia, flexbox/grid e colori del tema.
 * Progettato per essere renderizzato all'interno di un BentoGridItem (che gestisce padding e bordi esterni).
 */
export function AboutMeCard() {
  return (
    <article className="flex h-full w-full flex-col justify-between gap-6">
      
      {/* HEADER: Nome del "Personaggio" e il suo ruolo/classe */}
      <header className="space-y-3">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-primary lg:text-4xl">
          [Your Name]
        </h2>
        {/* Badge in stile tech per la "Classe" */}
        <div className="inline-flex items-center gap-2 rounded border border-accent-olive/30 bg-accent-olive/10 px-3 py-1 font-mono text-sm font-medium tracking-wide text-primary">
          <Terminal className="h-4 w-4 text-accent-olive" aria-hidden="true" />
          <span>Class: Full Stack Engineer</span>
        </div>
      </header>

      {/* STATS: Tabella attributi con layout a griglia */}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        
        {/* Stat: Level */}
        <li className="flex flex-col gap-1 rounded border border-border bg-background p-3 shadow-sm transition-colors hover:border-primary/50">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/60">
            LVL
          </span>
          <span className="font-mono text-lg font-bold text-primary">
            99
          </span>
        </li>
        
        {/* Stat: Intelligence (System Design) */}
        <li className="flex flex-col gap-1 rounded border border-border bg-background p-3 shadow-sm transition-colors hover:border-accent-olive/50">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/60">
            INT
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-accent-olive">
            <Cpu className="h-4 w-4" aria-hidden="true" />
            <span className="truncate">Sys Design</span>
          </span>
        </li>
        
        {/* Stat: Agility (Agile Dev) - Span 2 su mobile, 1 su tablet/desktop */}
        <li className="col-span-2 flex flex-col gap-1 rounded border border-border bg-background p-3 shadow-sm transition-colors hover:border-accent-rust/50 sm:col-span-1">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/60">
            AGI
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-accent-rust">
            <Code className="h-4 w-4" aria-hidden="true" />
            <span className="truncate">Agile Dev</span>
          </span>
        </li>
        
      </ul>

      {/* BIO: Descrizione concisa (massimo 2 righe tramite "line-clamp-2") */}
      <div className="font-sans text-base leading-relaxed text-foreground/90">
        <p className="line-clamp-2">
          Architetto soluzioni digitali unendo estetica retro e ingegneria moderna. Sviluppo sistemi scalabili, interfacce utente immersive e codice "battle-tested".
        </p>
      </div>
      
    </article>
  );
}

export default AboutMeCard;
