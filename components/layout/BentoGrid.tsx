import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Contenitore principale della Bento Grid.
 * Gestisce il layout responsivo. Rimane invariato.
 */
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[14rem] sm:auto-rows-[16rem] md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Singolo modulo della Bento Grid.
 * Trasformato in motion.div e reso interattivo (cliccabile).
 * Stile ispirato dalla BentoCard di MagicUI (Group hover, reveal CTA).
 */
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick,
  layoutId,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  layoutId?: string;
}) => {
  return (
    <motion.div
      layoutId={layoutId} // Chiave per l'animazione condivisa
      onClick={onClick}
      onTap={onClick} // Framer Motion gesture, garantisce lo scatto sui dispositivi touch
      role="button"
      tabIndex={0}
      className={cn(
        "touch-manipulation group relative flex flex-col justify-between overflow-hidden rounded-bento p-4",
        // Tema Retro-Tech
        "bg-background border border-border backdrop-blur-sm shadow-none",
        // Interazione: cursore, background pointer e hover shadow
        "cursor-pointer hover:border-accent-olive/50 hover:shadow-2xl hover:shadow-accent-olive/10",
        className
      )}
      // Animazione hover nativa per y translation, layout spring fluido (nessun conflitto)
      whileHover={{ y: -4 }} 
      transition={{ layout: { type: "spring", stiffness: 300, damping: 30 }, hover: { duration: 0.2 } } as any}
    >
      {/* Background / Header (preview visiva in background) */}
      <div className="pointer-events-none absolute inset-0 z-0 w-full h-full overflow-hidden">
        {header}
      </div>

      {/* Spacer superiore per far abbassare i contenuti */}
      <div className="relative z-10 flex-1" />

      {/* Contenuto principale: Icona, Titolo, Descrizione */}
      <div className="relative z-20 flex flex-col transition-all duration-300 transform-gpu lg:group-hover:-translate-y-8">
        <div className="origin-left transform-gpu transition-all duration-300 ease-in-out lg:group-hover:scale-75 mb-2 mt-2">
          {icon}
        </div>
        
        <div className="font-mono font-bold text-primary mb-1 flex justify-end">
          {title}
        </div>
        <div className="font-sans font-normal text-foreground/70 text-sm">
          {description}
        </div>
      </div>

      {/* Call To Action: visibile su mobile, animata (reveal) su desktop */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center transition-all duration-300 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-10 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
        <span className="font-mono text-sm font-bold text-accent-olive flex items-center gap-2">
          <span>Scopri di più</span>
          <ArrowRight className="size-4" />
        </span>
      </div>
    </motion.div>
  );
};