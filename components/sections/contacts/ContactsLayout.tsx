"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TerminalTree from "./TerminalTree";
import EmailForm from "./EmailForm";
import ActiveShell from "./ActiveShell";

/**
 * ContactsLayout Component
 * Client Component container per il Viewport 3.
 * Implementa il sistema di Window Switching tramite schede.
 */
export function ContactsLayout() {
  const [activeTab, setActiveTab] = useState<"mail" | "shell">("mail");

  return (
    <section 
      id="contacts" 
      className="flex min-h-screen w-full flex-col items-center justify-center bg-[#0a0a0a] px-4 py-20"
      aria-label="Sezione Contatti"
    >
      {/* Contenitore Terminale OS-Style */}
      <div className="flex w-full md:w-[70vw] h-[80vh] max-w-6xl flex-col overflow-hidden rounded-lg border border-accent-olive/30 bg-black shadow-2xl">
        
        {/* Header Terminale OS-Style */}
        <header className="relative flex items-center justify-between border-b border-accent-olive/30 bg-[#1a1a1a] px-4 py-3">
          
          {/* Cerchietti Semaforo */}
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
          </div>
          
          {/* Path Centrale (nascosto su schermi molto piccoli) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs text-foreground/60 hidden sm:block">
            /system/shell/contacts
          </div>
          
          {/* Tab cliccabili */}
          <div className="flex gap-2 font-mono text-xs z-10">
            <button
              onClick={() => setActiveTab("mail")}
              className={`px-3 py-1.5 rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary ${
                activeTab === "mail" 
                  ? "bg-accent-olive text-black font-bold" 
                  : "text-accent-olive hover:bg-accent-olive/10"
              }`}
              aria-label="Scheda Contatti e Mail"
              aria-pressed={activeTab === "mail"}
            >
              [1] Contatti/Mail
            </button>
            <button
              onClick={() => setActiveTab("shell")}
              className={`px-3 py-1.5 rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary ${
                activeTab === "shell" 
                  ? "bg-accent-olive text-black font-bold" 
                  : "text-accent-olive hover:bg-accent-olive/10"
              }`}
              aria-label="Scheda Shell Attiva"
              aria-pressed={activeTab === "shell"}
            >
              [2] Shell Attiva
            </button>
          </div>
        </header>
        
        {/* Body Terminale con Switch Animato */}
        <div className="relative flex-1 overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            {activeTab === "mail" ? (
              <motion.div
                key="mail"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex flex-col md:flex-row h-full w-full"
              >
                {/* Orizzontale Split 40% (Tree) / 60% (Email) - Stacked su mobile */}
                <div className="w-full md:w-[40%] flex flex-col p-6 overflow-y-auto border-b md:border-b-0 md:border-r border-accent-olive/20">
                  <TerminalTree />
                </div>
                <div className="w-full md:w-[60%] flex flex-col p-6 overflow-y-auto">
                  <EmailForm />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="shell"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 h-full w-full"
              >
                <ActiveShell />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}

export default ContactsLayout;
