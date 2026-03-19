// components/layout/BentoGrid.tsx
import { cn } from "@/lib/utils";
import React from "react";

/**
 * Contenitore principale della Bento Grid.
 * Gestisce il layout responsivo: 1 colonna mobile, 3 colonne desktop.
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
 * Supporta custom span (es. occupare 2 colonne) tramite la prop className.
 */
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode; // Spazio per immagini, canvas 3D o pixel art
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-bento group/bento hover:shadow-xl transition duration-200 shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        // Qui applichiamo il nostro tema Retro-Tech
        "bg-background/50 border-border backdrop-blur-sm", 
        // Hover state con accento ruggine/oliva per il feeling tech
        "hover:border-accent-olive/50",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-mono font-bold text-primary mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-foreground/70 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};