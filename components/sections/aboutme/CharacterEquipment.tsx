import React from "react";

const EQUIPMENT_DATA = [
  { slot: "R-HAND", type: "Weapon",           item: "VSCode",           icon: "≡" },
  { slot: "L-HAND", type: "Shield/Catalyst",  item: "Claude Code",      icon: "◊" },
  { slot: "HEAD",   type: "Processor",        item: "Stack Overflow",   icon: "∆" },
  { slot: "BODY",   type: "Armor Unit",       item: "TypeScript",       icon: "⎔" },
  { slot: "CORE",   type: "Power Source",     item: "Next.js & React",  icon: "◉" },
  { slot: "LEGS",   type: "Propulsion System",item: "Tailwind CSS",     icon: "≈" },
  { slot: "OS",     type: "Operating System", item: "SQL",              icon: "©" },
];

const TRINKETS_DATA = [
  { slot: "ACC 1",  type: "Stamina Booster",  item: "Caffè & Sigarette",            icon: "" },
  { slot: "ACC 2",  type: "Creativity Matrix",item: "Chitarra & Musica",icon: "♪" },
  { slot: "LORE",   type: "Passive Traits",   item: "Manga, Anime, VideoGames", icon: "✧" },
];

/**
 * CharacterEquipment Component
 * RSC per l'equipaggiamento in stile Mecha/Cyberpunk (Stack Tecnologico e Accessori).
 */
export function CharacterEquipment() {
  return (
    <article className="flex h-full flex-col lg_to_xl:grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-10 rounded-lg border border-border bg-background p-6 md:p-8">
      
      {/* SEZIONE: Core Equipment */}
      <section className="lg_to_xl:col-span-1">
        <header className="border-b border-border pb-2 md:pb-4 mb-5 md:mb-6">
          <h3 className="font-mono text-sm md:text-base lg:text-lg 2xl:text-xl font-bold uppercase tracking-widest text-primary">
            [ EQUIPPED_GEAR ]
          </h3>
        </header>

        <ul className="flex flex-col gap-3 md:gap-4">
          {EQUIPMENT_DATA.map((equip) => (
            <li 
              key={equip.slot} 
              className="flex items-center gap-4 rounded border border-border/30 bg-white/5 p-3 md:p-4 transition-colors hover:border-accent-olive/40 hover:bg-white/10"
            >
              {/* Slot Indicator */}
              <div className="flex w-16 md:w-20 shrink-0 flex-col items-center justify-center rounded border border-accent-olive/20 bg-accent-olive/5 py-1.5 px-2">
                <span className="font-mono text-[10px] md:text-xs lg:text-sm uppercase font-bold text-accent-olive">
                  {equip.slot}
                </span>
              </div>

              {/* Item Info */}
              <div className="flex flex-1 flex-col overflow-hidden">
                <span className="font-mono text-[10px] md:text-xs text-foreground/60 uppercase tracking-wider truncate mb-0.5">
                  {equip.type}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base md:text-lg lg:text-xl text-primary/80" aria-hidden="true">
                    {equip.icon}
                  </span>
                  <span className="truncate font-mono text-sm md:text-base lg:text-lg 2xl:text-xl font-bold text-foreground">
                    {equip.item}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SEZIONE: Trinkets & Accessories */}
      <section className="lg:col-span-1">
        <header className="border-b border-border pb-2 md:pb-4 mb-5 md:mb-6">
          <h3 className="font-mono text-sm md:text-base lg:text-lg 2xl:text-xl font-bold uppercase tracking-widest text-accent-rust/90">
            [ TRINKETS_&_LORE ]
          </h3>
        </header>
        
        <ul className="flex flex-col gap-3 md:gap-4">
          {TRINKETS_DATA.map((trinket) => (
            <li 
              key={trinket.slot} 
              className="flex items-center gap-4 rounded border border-border/30 bg-white/5 p-3 md:p-4 transition-colors hover:border-accent-rust/40 hover:bg-white/10"
            >
              <div className="flex w-16 md:w-20 shrink-0 flex-col items-center justify-center rounded border border-accent-rust/20 bg-accent-rust/5 py-1.5 px-2">
                <span className="font-mono text-[10px] md:text-xs lg:text-sm uppercase font-bold text-accent-rust">
                  {trinket.slot}
                </span>
              </div>

              <div className="flex flex-1 flex-col overflow-hidden">
                <span className="font-mono text-[10px] md:text-xs text-foreground/60 uppercase tracking-wider truncate mb-0.5">
                  {trinket.type}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-base md:text-lg lg:text-xl" aria-hidden="true">
                    {trinket.icon}
                  </span>
                  <span className="truncate font-mono text-sm md:text-base lg:text-lg 2xl:text-xl font-bold text-foreground">
                    {trinket.item}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

    </article>
  );
}

export default CharacterEquipment;
