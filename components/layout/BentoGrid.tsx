// components/layout/BentoGrid.tsx
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion"; // Importiamo motion

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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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
 */
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick, // Nuova prop per l'interazione
  layoutId, // Nuova prop per l'animazione condivisa
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void; // Definiamo il tipo dell'event handler
  layoutId?: string;    // Definiamo il tipo per layoutId
}) => {
  return (
    // Sostituiamo <div> con <motion.div>
    <motion.div
      layoutId={layoutId} // Chiave per l'animazione condivisa
      onClick={onClick}   // Rendiamo il div cliccabile
      className={cn(
        "row-span-1 rounded-bento transition duration-200 shadow-none p-4 dark:border-white/20 border border-transparent flex flex-col justify-between space-y-4",
        // Tema Retro-Tech
        "bg-background border-border backdrop-blur-sm",
        // Interazione: cursore e hover
        "cursor-pointer hover:border-accent-olive/50 hover:shadow-2xl hover:shadow-accent-olive/10",
        // Gestione overflow per l'anteprima (nascondiamo lo scroll bar)
        "overflow-hidden no-scrollbar",
        className
      )}
      // Piccola animazione di hover nativa di Framer Motion
      whileHover={{ y: -4 }} 
      transition={{ duration: 0.2 }}
    >
      {/* Container per l'anteprima del contenuto */}
      <div className="relative flex-1 w-full h-full overflow-hidden">
        {header}
      </div>

      <div className="relative z-10 transition duration-200">
        {icon}
        <div className="font-mono font-bold text-primary mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-foreground/70 text-sm">
          {description}
        </div>
      </div>
    </motion.div>
  );
};