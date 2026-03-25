import React from "react";

export function AboutMeSkeleton() {
  return (
    <article
      className="flex h-full w-full flex-col gap-4"
      aria-busy="true"
      aria-hidden="true"
    >
      <div className="flex flex-col gap-6 md:grid md:grid-cols-[1fr_1.2fr_1.5fr] md:gap-6 2xl:gap-8 w-full">
        {/* Area 1: Avatar & Stats (Sinistra) */}
        <div className="flex flex-col gap-6 md:col-span-1 2xl:gap-8">
          {/* Blocco Avatar (Quadrato) */}
          <div className="animate-pulse bg-white/5 border border-white/5 rounded-lg w-full aspect-square" />

          {/* Blocco Stats (5 righe sottili) */}
          <div className="flex flex-col gap-3 p-4 animate-pulse bg-white/5 border border-white/5 rounded-lg">
            <div className="h-3 w-full bg-white/10 rounded" />
            <div className="h-3 w-[90%] bg-white/10 rounded" />
            <div className="h-3 w-[85%] bg-white/10 rounded" />
            <div className="h-3 w-[95%] bg-white/10 rounded" />
            <div className="h-3 w-[80%] bg-white/10 rounded" />
          </div>
        </div>

        {/* Area 2: Equipment (Destra Top) */}
        <div className="flex flex-col md:col-span-2 animate-pulse bg-white/5 border border-white/5 rounded-lg p-6 min-h-[300px]">
          {/* Finte righe interne */}
          <div className="h-6 w-1/3 bg-white/10 rounded mb-6" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-16 w-full bg-white/10 rounded" />
            <div className="h-16 w-full bg-white/10 rounded" />
            <div className="h-16 w-full bg-white/10 rounded" />
            <div className="h-16 w-full bg-white/10 rounded" />
          </div>
        </div>

        {/* Area 3: Timeline (Destra Bottom/Full) */}
        <div className="flex flex-col md:col-span-3 animate-pulse bg-white/5 border border-white/5 rounded-lg p-6 min-h-[400px]">
          <div className="h-6 w-1/4 bg-white/10 rounded mb-6" />
          <div className="flex flex-col gap-4">
            <div className="h-24 w-full bg-white/10 rounded" />
            <div className="h-24 w-[95%] bg-white/10 rounded" />
            <div className="h-24 w-full bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default AboutMeSkeleton;
