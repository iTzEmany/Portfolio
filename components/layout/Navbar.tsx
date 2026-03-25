"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, LayoutGrid, Terminal, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Hero", href: "#hero" },
  { label: "Works", href: "#bento-grid" },
  { label: "Contacts", href: "#contacts" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestione dinamica dello sfondo allo scroll (solo Web Client)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER DESKTOP NAVBAR */}
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
          
          {/* LOGO */}
          <a 
            href="#hero" 
            className="font-mono text-lg font-bold tracking-widest text-primary transition-opacity hover:opacity-80"
          >
            [ EMANUELE LIONETTI ]
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
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

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <a
              href="/cv.pdf"
              download="Curriculum_Vitae.pdf"
              className="group inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* MOBILE BOTTOM NAVBAR (Floating Icons Glassmorphism) */}
      <nav className="fixed bottom-6 left-1/2 z-50 flex w-fit -translate-x-1/2 items-center justify-around gap-12 rounded-full border border-primary/20 bg-background/80 px-8 py-3 shadow-2xl backdrop-blur-xl md:hidden">
        <a 
          href="#hero" 
          className="group flex flex-col items-center justify-center p-2 text-foreground/60 transition-all duration-300 hover:text-primary active:scale-95" 
          aria-label="Hero"
        >
          <Home className="size-6 transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
        <a 
          href="#bento-grid" 
          className="group flex flex-col items-center justify-center p-2 text-foreground/60 transition-all duration-300 hover:text-primary active:scale-95" 
          aria-label="Works"
        >
          <LayoutGrid className="size-6 transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
        <a 
          href="#contacts" 
          className="group flex flex-col items-center justify-center p-2 text-foreground/60 transition-all duration-300 hover:text-primary active:scale-95" 
          aria-label="Contacts"
        >
          <Terminal className="size-6 transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </nav>
    </>
  );
}

export default Navbar;
