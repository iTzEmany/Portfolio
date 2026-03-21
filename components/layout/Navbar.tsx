"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Hero", href: "#hero" },
  { label: "Works", href: "#bento-grid" },
  { label: "Contacts", href: "#contacts" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gestione dinamica dello sfondo allo scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blocco scroll body quando il menu mobile è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <a 
          href="#hero" 
          className="font-mono text-lg font-bold tracking-widest text-primary transition-opacity hover:opacity-80"
          onClick={closeMenu}
        >
          [ YOUR_NAME ]
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
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

        {/* MOBILE MENU TOGGLE */}
        <button
          className="p-2 text-foreground transition-colors hover:text-primary focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] flex h-[calc(100vh-60px)] flex-col overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center pb-20">
              <ul className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-mono text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/cv.pdf"
                download="Curriculum_Vitae.pdf"
                className="group mt-12 inline-flex items-center gap-3 rounded border border-primary bg-primary/10 px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                onClick={closeMenu}
              >
                <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
