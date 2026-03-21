"use client";
import React from "react";

/**
 * ActiveShell Component
 * Simulazione di una shell attiva con cursore lampeggiante integrata in una tab.
 */
export function ActiveShell() {
  return (
    <div className="flex h-full w-full flex-col p-6 font-mono text-sm md:text-base text-accent-olive/80 select-text">
      <div className="mb-4 space-y-1">
        <p className="text-primary font-bold">Welcome to Portfolio System Shell [v0.1]</p>
        <p>Digitare 'help' per simulazione comandi.</p>
        <p className="opacity-50">--------------------------------------------------</p>
      </div>
      <div className="flex items-center">
        <span className="mr-2 font-bold text-primary">itzemany@portfolio:~$</span>
        <span className="w-2 h-4 bg-primary animate-pulse inline-block" aria-hidden="true" />
      </div>
    </div>
  );
}

export default ActiveShell;
