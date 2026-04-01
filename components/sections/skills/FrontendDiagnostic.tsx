"use client";

import React from "react";
import { motion } from "framer-motion";

export function FrontendDiagnostic() {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-black/40 p-6 md:p-8 font-mono">
      <header className="border-b border-border/50 pb-4 mb-6 flex justify-between items-end">
        <h3 className="text-accent-olive text-[clamp(0.875rem,2.5vw,1.25rem)] whitespace-nowrap font-bold uppercase tracking-widest leading-tight">
          [ SYSTEM_CORE: DIAGNOSTIC ]
        </h3>
        <span className="text-accent-olive text-[clamp(0.75rem,2vw,0.875rem)] whitespace-nowrap hidden sm:block">[ ONLINE ]</span>
      </header>

      <div className="flex flex-col gap-8">
        {/* Spec 1 */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <span className="text-primary font-bold tracking-wider">[TYPE_SAFETY_ENGINE: TS]</span>
            <span className="text-accent-olive font-bold">[READY]</span>
          </div>
          
          <div className="w-full flex gap-1 h-1.5 relative">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex-1 bg-accent-olive" />
          </div>
          <p className="text-foreground text-xs md:text-sm leading-relaxed mt-1 font-semibold">
            Integrazione profonda di type checking statico. Prevenzione errori runtime e stabilità dell'architettura.
          </p>
        </div>

        {/* Spec 2 */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <span className="text-primary font-bold tracking-wider">[UI_FRAMEWORK: NEXT_REACT]</span>
            <span className="text-accent-olive font-bold">[OPTIMIZING]</span>
          </div>
          <div className="w-full flex gap-1 h-1.5 relative">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex-1 bg-accent-olive" />
          </div>
          <p className="text-foreground text-xs md:text-sm leading-relaxed mt-1 font-semibold">
            Ecosistema di componenti isolati. Server-Side Rendering & App Router instradamento per performance di punta.
          </p>
        </div>

        {/* Spec 3 */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <span className="text-primary font-bold tracking-wider">[STYLING_ENGINE: TAILWIND]</span>
            <span className="text-accent-olive font-bold">[DEPLOYED]</span>
          </div>
          <div className="w-full flex gap-1 h-1.5 relative">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex-1 bg-accent-olive" />
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex-1 bg-accent-olive" />
          </div>
          <p className="text-foreground text-xs md:text-sm leading-relaxed mt-1 font-semibold">
            Design system coerente. Utility-first CSS per styling atomico, reattivo e ultra-leggero.
          </p>
        </div>

      </div>

      <div className="mt-auto pt-8 border-t border-border/50 grid grid-cols-2 gap-6 text-xs md:text-sm">
         <div className="flex flex-col gap-1">
           <span className="text-foreground font-bold tracking-widest">WCAG_COMPLIANCE</span>
           <span className="text-accent-olive font-bold">PASS (AA)</span>
         </div>
         <div className="flex flex-col gap-1">
           <span className="text-foreground font-bold tracking-widest">CLEAN_ARCH</span>
           <span className="text-accent-olive font-bold">VALIDATED</span>
         </div>
      </div>
    </article>
  );
}
