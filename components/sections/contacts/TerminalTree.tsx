import React from "react";

/**
 * TerminalTree Component
 * React Server Component che simula l'output di `tree -a /contacts/itzemany`.
 * Usa simboli testuali unicode e box-drawing puramente monocromatici a tema retro-tech.
 */
export function TerminalTree() {
  return (
    <article 
      className="flex h-full flex-col font-mono text-sm md:text-base text-accent-olive"
      aria-label="Contatti in formato tree"
    >
      <div className="mb-4">
        <span className="font-bold text-primary">itzemany@portfolio:~$</span>
        <span className="ml-2">tree -a /contacts/itzemany</span>
      </div>
      
      {/* Albero Base */}
      <div className="flex flex-col space-y-1.5 pl-2">
        <span className="font-bold">/contacts/itzemany</span>
        
        {/* Directory 1: /social */}
        <div>
          <div className="flex items-center">
            <span className="mr-2 opacity-70">├──</span>
            <span className="font-bold text-primary">□ social/</span>
          </div>
          
          <div className="flex flex-col border-l border-accent-olive/30 ml-[7px] pl-[17px] space-y-1.5 pt-1.5">
            <div className="flex items-center group">
              <span className="mr-2 opacity-70">├──</span>
              <a 
                href="#" 
                className="hover:text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:bg-accent-olive/10 rounded px-1 -ml-1 flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <span>≡ LinkedIn.lnk</span>
              </a>
            </div>
            
            <div className="flex items-center group">
              <span className="mr-2 opacity-70">├──</span>
              <a 
                href="#" 
                className="hover:text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:bg-accent-olive/10 rounded px-1 -ml-1 flex items-center gap-2"
                aria-label="GitHub"
              >
                <span>≡ GitHub.lnk</span>
              </a>
            </div>

            <div className="flex items-center group">
              <span className="mr-2 opacity-70">└──</span>
              <a 
                href="#" 
                className="hover:text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:bg-accent-olive/10 rounded px-1 -ml-1 flex items-center gap-2"
                aria-label="Indeed"
              >
                <span>≡ Indeed.lnk</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Directory 2: /personal_info */}
        <div className="pt-1.5">
          <div className="flex items-center">
            <span className="mr-2 opacity-70">└──</span>
            <span className="font-bold text-primary">□ personal_info/</span>
          </div>
          
          <div className="flex flex-col ml-[7px] pl-[17px] space-y-1.5 pt-1.5">
            <div className="flex items-center group">
              <span className="mr-2 opacity-70">├──</span>
              <a 
                href="mailto:placeholder@example.com" 
                className="hover:text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:bg-accent-olive/10 rounded px-1 -ml-1 flex items-center gap-2"
                aria-label="Mail"
              >
                <span>≡ Mail.cfg</span>
              </a>
            </div>
            
            <div className="flex items-center group">
              <span className="mr-2 opacity-70">├──</span>
              <span className="text-foreground/80 flex items-center gap-2">
                <span>≡ Telefono.txt (+39 123 456 7890)</span>
              </span>
            </div>
            
            <div className="flex items-center group">
              <span className="mr-2 opacity-70">└──</span>
              <span className="text-foreground/80 flex items-center gap-2">
                <span>≡ Residenza.txt (Italia)</span>
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </article>
  );
}

export default TerminalTree;
