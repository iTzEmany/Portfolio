"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, LayoutGrid, Mail, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { NoiseToggle } from "@/components/ui/NoiseToggle";

const NAV_LINKS = [
  { label: "Hero", href: "#hero" },
  { label: "Works", href: "#bento-grid" },
  { label: "Contacts", href: "#contacts" },
];

export function Navbar({ showNoise, onToggleNoise }: { showNoise: boolean; onToggleNoise: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== HEADER (Desktop & Mobile) ===== */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          {/* LOGO — sinistra */}
          <div className="flex flex-1 items-center">
            <a
              href="#hero"
              className="font-mono text-[clamp(1rem,3vw,1.125rem)] whitespace-nowrap font-bold tracking-widest text-primary transition-opacity hover:opacity-80"
            >
              [ EMANUELE LIONETTI ]
            </a>
          </div>

          {/* NAVBAR — centro (solo desktop) */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative inline-block font-sans text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:w-full group-hover:h-0.5 group-hover:rounded-none group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA DESTRA — noise toggle sempre visibile + Download CV solo desktop */}
          <div className="flex flex-1 justify-end items-center gap-2">
            {/* Noise Toggle: visibile su mobile E desktop */}
            <NoiseToggle showNoise={showNoise} onToggle={onToggleNoise} />

            {/* Download CV: solo desktop */}
            <a
              href="/cv.pdf"
              download="Curriculum_Vitae.pdf"
              className="hidden md:inline-flex group items-center gap-2 rounded border border-primary bg-primary/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* ===== MOBILE BOTTOM NAVBAR ===== */}
      <nav
        className="fixed bottom-6 left-1/2 z-50 flex w-fit -translate-x-1/2 items-center justify-around gap-8 rounded-full border border-primary/20 bg-background/80 px-8 py-3 shadow-2xl backdrop-blur-xl md:hidden"
        aria-label="Navigazione mobile"
      >
        <a
          href="#hero"
          className="group flex flex-col items-center justify-center gap-1 px-3 py-2 text-foreground/60 transition-all duration-300 hover:text-primary active:scale-95"
          aria-label="Home"
        >
          <Home className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Home</span>
        </a>
        <a
          href="#bento-grid"
          className="group flex flex-col items-center justify-center gap-1 px-3 py-2 text-foreground/60 transition-all duration-300 hover:text-primary active:scale-95"
          aria-label="Works"
        >
          <LayoutGrid className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Works</span>
        </a>
        <a
          href="#contacts"
          className="group flex flex-col items-center justify-center gap-1 px-3 py-2 text-foreground/60 transition-all duration-300 hover:text-primary active:scale-95"
          aria-label="Contatti"
        >
          <Mail className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Contatti</span>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
