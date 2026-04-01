"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/layout/BentoGrid";
import { AboutMePreview } from "@/components/sections/aboutme/AboutMePreview";
import { ContactsLayout } from "@/components/sections/contacts/ContactsLayout";
import { X } from "lucide-react";
import { Hero } from "@/components/sections/hero/Hero";
import { cn } from "@/lib/utils";

import { AboutMeSkeleton } from "@/components/sections/aboutme/AboutMeSkeleton";
import { SkillsPreview } from "@/components/sections/skills/SkillsPreview";

const AboutMeFull = dynamic(() => import("@/components/sections/aboutme/AboutMeFull"), {
  loading: () => <AboutMeSkeleton />,
});

const SkillsFull = dynamic(() => import("@/components/sections/skills/SkillsFull"), {
  loading: () => (
    <div className="flex h-full w-full flex-col lg:grid lg:grid-cols-3 gap-6">
      <div className="h-64 rounded-lg bg-white/5 animate-pulse" />
      <div className="h-64 rounded-lg bg-white/5 animate-pulse" />
      <div className="h-64 rounded-lg bg-white/5 animate-pulse" />
    </div>
  ),
});

// Mock Data Placeholder
const mockCardsData = [
  {
    id: "about-me",
    title: "Profilo Personale",
    className: "md:col-span-1 md:row-span-2",
    theme: "sand",
    preview: <AboutMePreview />,
    fullContent: <AboutMeFull />,
  },
  {
    id: "projects",
    title: "Progetti",
    className: "md:col-span-2 md:row-span-1",
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
    title: "Scheda Tecnica",
    className: "md:col-span-2 md:row-span-1",
    theme: "default",
    preview: <SkillsPreview />,
    fullContent: <SkillsFull />,
  },
];

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read the modal state from the URL (?view=about-me)
  const selectedId = searchParams.get("view");
  const selectedCard = mockCardsData.find((card) => card.id === selectedId);

  // Open: push new URL entry so the back button can close the modal
  const handleOpen = (id: string) => {
    router.push(`/?view=${id}`, { scroll: false });
  };

  // Close: navigate back to the base URL
  const handleClose = () => {
    router.push("/", { scroll: false });
  };

  // Escape key + body scroll lock
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    if (selectedId) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
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
      <section id="hero" className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background px-4">
        <Hero />
      </section>

      {/* 2. Viewport: Bento Grid Section */}
      <section id="bento-grid" className="flex min-h-screen w-full items-center justify-center bg-background py-20 px-4">
        <div className="w-full max-w-7xl">
          <BentoGrid className={cn(selectedId ? "pointer-events-none opacity-20" : "", "transition-opacity duration-300")}>
            {mockCardsData.map((card) => (
              <BentoGridItem
                key={card.id}
                layoutId={card.id}
                onClick={() => handleOpen(card.id)}
                title={card.title}
                description={""}
                header={card.preview}
                className={card.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* 3. Viewport: Contacts */}
      <ContactsLayout />

      {/* 4. Modale FLIP */}
      <AnimatePresence>
        {selectedId && selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center md:p-4"
          >
            {/* Sfondo Animato CRT */}
            <motion.div
              className="absolute inset-0 bg-black/95"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 1] }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                  backgroundImage: "repeating-linear-gradient(transparent, transparent 2px, #000 2px, #000 4px)"
                }}
              />
            </motion.div>

            {/* Contenitore FLIP Separato Visivamente */}
            <motion.div
              layoutId={selectedId}
              transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
              className="relative z-10 flex w-full h-dvh md:h-[95vh] md:w-[95%] lg:w-[90%] 2xl:w-[80%] flex-col overflow-hidden md:rounded-bento md:border md:border-border bg-background shadow-2xl shadow-primary/10"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
            >
              <div className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background p-4">
                <h2 className="font-mono text-2xl font-bold tracking-tighter text-primary">
                  {selectedCard.title}
                </h2>
                <button
                  onClick={handleClose}
                  className="group rounded-full border border-border p-2 transition-colors hover:border-accent-rust hover:bg-accent-rust/10"
                  aria-label="Chiudi"
                >
                  <X className="size-6 text-foreground group-hover:text-accent-rust" />
                </button>
              </div>

              <div className="relative no-scrollbar flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}>
                  {selectedCard.fullContent}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}