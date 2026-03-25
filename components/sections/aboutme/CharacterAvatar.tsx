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
 * CharacterAvatar Component
 * RSC per visualizzare ritratto e anagrafica RPG del personaggio onestamente.
 */
export function CharacterAvatar() {
  const currentLevel = calculateLevel("26/07/2003");

  return (
    <article className="flex h-full flex-col gap-4 md:gap-6 rounded-lg border border-border bg-background p-6 md:p-8 items-center justify-center">
      {/* Placeholder Pixel Art */}
      <div className="flex aspect-square w-full max-w-100 items-center justify-center rounded border-2 border-dashed border-primary/20 bg-primary/5 p-4 text-center font-mono text-sm md:text-base lg:text-lg uppercase text-primary/50">
        [PIXEL ART AVATAR]
      </div>

      {/* Anagrafica Personaggio */}
      <header className="flex flex-col gap-3 text-center md:text-left text-foreground">
        <h2 className="font-mono text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold uppercase tracking-widest text-primary">
          [ EMANUELE LIONETTI ]
        </h2>
        
        <div className="flex flex-col gap-1.5 mt-2">
          <div className="font-mono text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl uppercase tracking-wider text-accent-olive">
            Classe: Frontend Developer
          </div>
          <div className="font-mono text-xs md:text-sm lg:text-base 2xl:text-lg uppercase tracking-wider text-accent-rust">
            Sub-Classe: BSc Student ITPS @ UniBa | AI-Assisted Workflow
          </div>
        </div>
        
        <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4 font-mono text-sm md:text-base lg:text-lg uppercase tracking-wider text-foreground">
          <div>
            <span className="text-foreground/60 inline-block">Livello:</span> 
            <span className="ml-2 text-primary font-bold">{currentLevel}</span>
          </div>
          <div>
            <span className="text-foreground/60 inline-block">Allineamento:</span> 
            <span className="ml-2 text-foreground font-bold">Clean Code & UX First</span>
          </div>
        </div>
      </header>
    </article>
  );
}

export default CharacterAvatar;
