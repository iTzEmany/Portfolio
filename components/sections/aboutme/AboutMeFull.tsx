import React from "react";
import { CharacterAvatar } from "./CharacterAvatar";
import { CharacterStats } from "./CharacterStats";
import { CharacterEquipment } from "./CharacterEquipment";
import { CharacterTimeline } from "./CharacterTimeline";

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
        
      </div>
    </article>
  );
}

export default AboutMeFull;
