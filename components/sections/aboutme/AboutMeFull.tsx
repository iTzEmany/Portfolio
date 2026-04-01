import React from "react";
import { CharacterAvatar } from "./CharacterAvatar";
import { CharacterStats } from "./CharacterStats";
import { CharacterEquipment } from "./CharacterEquipment";
import { CharacterTimeline } from "./CharacterTimeline";
import { Download } from "lucide-react";

/**
 * AboutMeFull Component
 * React Server Component (RSC) per la vista "esplosa" nel dialog.
 * Orchestratore del Bento Layout in stile RPG Character Sheet Cyberpunk.
 */
export function AboutMeFull() {
  return (
    <article className="flex h-full w-full flex-col gap-4">
      {/* 
        Grid Layout Mobile-First: 
        Mobile: Stack verticale per tutti tramite flex-col base
        Desktop: Grid non simmetrica a 3 colonne
      */}
      <div className="flex flex-col gap-6 md:grid md:grid-cols-[1fr_1fr] md:gap-6 2xl:gap-8">
        
        {/* Area 1: Top Left - Avatar & Stats */}
        <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1 2xl:gap-8">
          <CharacterAvatar />
          
        </div>
        <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1 2xl:gap-8">
          <CharacterStats />
        </div>

        {/* Area 2: Top Right - Equipment */}
        <div className="flex flex-col gap-6 md:col-span-2 2xl:gap-8">
          <CharacterEquipment />
        </div>

        {/* 
          Area 3: Bottom - Timeline spanning fully 
        */}
        <div className="flex flex-col gap-6 md:col-span-2 2xl:gap-8">
          <CharacterTimeline />
        </div>
        
        {/* Call to Action: Download Resume */}
        <div className="flex w-full md:col-span-2 justify-center md:justify-end mt-4">
          <a
            href="/cv.pdf"
            download="Curriculum_Vitae.pdf"
            className="group flex w-fit items-center gap-3 rounded border border-primary bg-primary/10 px-6 py-3 font-mono text-[clamp(0.875rem,2.5vw,1rem)] whitespace-nowrap font-bold tracking-widest text-primary transition-all hover:bg-primary hover:text-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            [ DOWNLOAD RESUME ]
            <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
          </a>
        </div>
        
      </div>
    </article>
  );
}

export default AboutMeFull;
