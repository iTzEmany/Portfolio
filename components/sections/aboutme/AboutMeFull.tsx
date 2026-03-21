import { Cpu, Code, Download } from "lucide-react";

/**
 * AboutMeFull
 * React Server Component (RSC) per la vista "esplosa" nel dialog.
 */
export function AboutMeFull() {
  return (
    <article className="flex h-full w-full flex-col gap-8">
      
      <section className="space-y-8">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <li className="flex flex-col gap-2 rounded border border-border bg-background/50 p-4 shadow-sm transition-colors hover:border-primary/50">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/60">
              LVL
            </span>
            <span className="font-mono text-2xl font-bold text-primary">
              99
            </span>
          </li>
          
          <li className="flex flex-col gap-2 rounded border border-border bg-background/50 p-4 shadow-sm transition-colors hover:border-accent-olive/50">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/60">
              INT
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-base font-bold text-accent-olive">
              <Cpu className="h-5 w-5" aria-hidden="true" />
              <span className="truncate">Sys Design</span>
            </span>
          </li>
          
          <li className="col-span-2 flex flex-col gap-2 rounded border border-border bg-background/50 p-4 shadow-sm transition-colors hover:border-accent-rust/50 sm:col-span-1">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/60">
              AGI
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-base font-bold text-accent-rust">
              <Code className="h-5 w-5" aria-hidden="true" />
              <span className="truncate">Agile Dev</span>
            </span>
          </li>
        </ul>

        <div className="space-y-4 font-sans text-lg leading-relaxed text-foreground/90">
          <p>
            Architetto soluzioni digitali unendo estetica retro e ingegneria moderna. Sviluppo sistemi scalabili, interfacce utente immersive e codice altamente testato e resiliente.
          </p>
          <p>
            Con un focus sulla performance (Core Web Vitals) e sull'accessibilità (A11y), trasformo problematiche complesse di business in esperienze web fluide, sicure e manutenibili.
          </p>
        </div>
      </section>

      <footer className="mt-auto pt-4">
        <a 
          href="/cv.pdf" 
          download="Curriculum_Vitae.pdf"
          className="group inline-flex items-center gap-3 rounded border border-primary bg-primary/10 px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Scarica il mio Curriculum Vitae in formato PDF"
        >
          <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
          <span>[ Download_CV ]</span>
        </a>
      </footer>
      
    </article>
  );
}

export default AboutMeFull;
