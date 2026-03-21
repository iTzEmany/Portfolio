"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/layout/BentoGrid";
import { AboutMePreview } from "@/components/sections/aboutme/AboutMePreview";
import { ContactsLayout } from "@/components/sections/contacts/ContactsLayout";
import { X, ChevronDown, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutMeFull = dynamic(() => import("@/components/sections/aboutme/AboutMeFull"), {
  loading: () => <p className="animate-pulse font-mono text-primary p-8">Caricamento modulo...</p>,
});

// Mock Data Placeholder
const mockCardsData = [
  {
    id: "about-me",
    title: "ABOUT_ME",
    className: "md:col-span-1 md:row-span-2",
    theme: "sand",
    preview: <AboutMePreview />,
    fullContent: <AboutMeFull />,
  },
  {
    id: "projects",
    title: "PROJECTS_REGISTRY",
    className: "md:col-span-1 md:row-span-1",
    theme: "rust",
    preview: (
      <div className="flex h-full w-full items-center justify-center rounded border-2 border-dashed border-accent-rust/20 bg-accent-rust/5 p-4 text-accent-rust">
        [PREVIEW: Projects Brief]
      </div>
    ),
    fullContent: (
      <div className="flex h-full w-full items-center justify-center rounded border-2 border-dashed border-accent-rust/20 bg-accent-rust/5 p-8 text-accent-rust">
        [FULL_CONTENT: Interactive Projects Showcase]
      </div>
    ),
  },
  {
    id: "skills",
    title: "SKILLS_MATRIX",
    className: "md:col-span-1 md:row-span-1",
    theme: "default",
    preview: (
      <div className="flex h-full w-full items-center justify-center rounded border-2 border-dashed border-foreground/20 bg-foreground/5 p-4 text-foreground/80">
        [PREVIEW: Skills Radar]
      </div>
    ),
    fullContent: (
      <div className="flex h-full w-full items-center justify-center rounded border-2 border-dashed border-foreground/20 bg-foreground/5 p-8 text-foreground/80">
        [FULL_CONTENT: Detailed Skills Mastery Breakdown]
      </div>
    ),
  },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCard = mockCardsData.find((card) => card.id === selectedId);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    if (selectedId) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedId]);

  return (
    <main className="relative w-full">
      {/* 1. Viewport: Hero Section */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background px-4">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="font-mono text-5xl font-bold tracking-tight text-primary md:text-7xl lg:text-8xl">
            SYSTEM_INIT...
          </h1>
          <p className="max-w-xl font-sans text-lg text-foreground/70 md:text-xl">
            Initializing digital protocols.
            <br />
            Stand by for cognitive interface deployment.
          </p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-primary/50"
        >
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* 2. Viewport: Bento Grid Section */}
      <section className="flex min-h-screen w-full items-center justify-center bg-background py-20 px-4">
        <div className="w-full max-w-7xl">
          <BentoGrid className={cn(selectedId ? "pointer-events-none opacity-20" : "", "transition-opacity duration-300")}>
            {mockCardsData.map((card) => (
              <BentoGridItem
                key={card.id}
                layoutId={card.id}
                onClick={() => setSelectedId(card.id)}
                title={card.title}
                description={""}
                header={card.preview}
                className={card.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ================================== */}
      {/* 3. Viewport: Contacts             */}
      {/* ================================== */}
      <ContactsLayout />

      {/* 4. Modale FLIP */}
      <AnimatePresence>
        {selectedId && selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 md:p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selectedId}
              className="relative flex h-full w-full md:h-[95vh] md:w-[95%] lg:w-[90%] 2xl:w-[80%] flex-col overflow-hidden md:rounded-bento md:border md:border-border bg-background shadow-2xl shadow-primary/10"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
            >
              <div className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/80 p-4 backdrop-blur-md">
                <h2 className="font-mono text-2xl font-bold tracking-tighter text-primary">
                  {selectedCard.title}
                </h2>
                <button
                  onClick={() => setSelectedId(null)}
                  className="group rounded-full border border-border p-2 transition-colors hover:border-accent-rust hover:bg-accent-rust/10"
                  aria-label="Chiudi"
                >
                  <X className="size-6 text-foreground group-hover:text-accent-rust" />
                </button>
              </div>

              <div className="no-scrollbar flex-1 overflow-y-auto p-8 scroll-smooth">
                {selectedCard.fullContent}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}