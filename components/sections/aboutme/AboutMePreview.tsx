import { Maximize } from "lucide-react";
import React from "react";

// Funzione pura per il calcolo dell'età/livello dinamico
function calculateLevel(birthDateStr: string): number {
  const [day, month, year] = birthDateStr.split("/").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * AboutMePreview
 * React Server Component (RSC) per la vista "compressa" della Bento Grid.
 * Replica la grafica di CharacterAvatar scalata per la preview.
 */
export function AboutMePreview() {
  const currentLevel = calculateLevel("26/07/2003");

  return (
    <article className="relative flex h-full w-full flex-col gap-3 md:gap-4 items-center justify-center p-2">
      {/* Placeholder Pixel Art ridimensionata */}
      <div className="flex aspect-square w-24 md:w-32 lg:w-40 items-center justify-center rounded border-2 border-dashed border-primary/20 bg-primary/5 p-2 text-center font-mono text-[10px] md:text-xs uppercase text-primary/50">
        [PIXEL ART]
      </div>

      {/* Anagrafica Personaggio in formato compatto */}
      <header className="flex flex-col gap-1.5 md:gap-2 text-center text-foreground w-full">
        <h2 className="font-mono text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-widest text-primary">
          [ NOME_UTENTE ]
        </h2>
        
        <div className="flex flex-col">
          <div className="font-mono text-[11px] md:text-sm lg:text-base uppercase tracking-wider text-accent-olive">
            Classe: Frontend Developer
          </div>
          <div className="font-mono text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wider text-accent-rust">
            Sub-Classe: BSc ITPS @ UniBa
          </div>
        </div>
        
        <div className="mt-1 flex flex-col justify-center items-center border-t border-border/50 pt-2 font-mono text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wider text-foreground">
          <div className="flex items-center gap-1.5">
            <span className="text-foreground/60 hidden sm:inline-block">Livello:</span>
            <span className="text-foreground/60 sm:hidden">Lvl:</span>
            <span className="text-primary font-bold">{currentLevel}</span>
            <span className="text-foreground/40 px-1">|</span>
            <span className="text-foreground/60 hidden sm:inline-block">Allineamento:</span>
            <span className="text-foreground/60 sm:hidden">Allin:</span>
            <span className="text-foreground font-bold">Clean Code</span>
          </div>
        </div>
      </header>

      {/* Expand Hint */}
      <div className="absolute bottom-0 right-0 flex items-center gap-1 text-accent-olive transition-colors hover:text-primary">
        <span className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-wider">
          [EXPAND]
        </span>
        <Maximize className="h-3 w-3" aria-hidden="true" />
      </div>
    </article>
  );
}

export default AboutMePreview;
