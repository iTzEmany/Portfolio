// app/page.tsx
import { BentoGrid, BentoGridItem } from "@/components/layout/BentoGrid";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-mono font-bold text-primary mb-12 text-center">
        SYSTEM_INIT...
      </h1>
      
      <BentoGrid>
        <BentoGridItem 
          title="Hero Section" 
          description="Qui metteremo la presentazione dritta al punto." 
          className="md:col-span-2" // Occupa 2 colonne
        />
        <BentoGridItem 
          title="Pixel Art/Manga" 
          description="Spazio per l'avatar o easter egg." 
        />
        <BentoGridItem 
          title="RoboLab Case Study" 
          description="Focus totale sul progetto principale." 
          className="md:col-span-3" // Occupa tutta la riga inferiore
        />
      </BentoGrid>
    </section>
  );
}