import React from "react";

/**
 * AboutMePreview
 * React Server Component (RSC) per la vista "compressa" della Bento Grid.
 * Reso puramente visuale come background grafico per la card Magic UI.
 */
export function AboutMePreview() {
  return (
    <article className="relative flex h-full w-full items-center justify-center p-2 xl:p-4 bg-transparent">
      {/* Placeholder Pixel Art ridimensionata come visual centrale */}
      <div className="flex aspect-square w-32 md:w-40 lg:w-48 xl:w-56 items-center justify-center rounded border-2 border-dashed border-primary/20 bg-primary/5 text-center font-mono text-[clamp(0.75rem,2vw,1rem)] whitespace-nowrap uppercase text-primary/30 transition-transform duration-500 ease-in-out group-hover:scale-[1.05]">
        [PIXEL ART]
      </div>

      {/* Badge decorativo - Assoluto rispetto alla Viewport della Card */}
      <div className="absolute top-4 right-4 z-10 whitespace-nowrap rounded font-mono text-[10px] md:text-xs uppercase tracking-wider text-accent-olive bg-accent-olive/10 border border-accent-olive/20 px-2 py-1 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity">
        Class: Frontend Dev
      </div>
    </article>
  );
}

export default AboutMePreview;
