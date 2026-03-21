import { Terminal, Maximize } from "lucide-react";

/**
 * AboutMePreview
 * React Server Component (RSC) per la vista "compressa" della Bento Grid.
 */
export function AboutMePreview() {
  return (
    <article className="flex h-full w-full flex-col justify-between p-2">
      <header className="space-y-3 pt-2">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-primary lg:text-4xl">
          [Your Name]
        </h2>
        <div className="inline-flex items-center gap-2 rounded border border-accent-olive/30 bg-accent-olive/10 px-3 py-1 font-mono text-sm font-medium tracking-wide text-primary">
          <Terminal className="h-4 w-4 text-accent-olive" aria-hidden="true" />
          <span>Class: Full Stack Engineer</span>
        </div>
        <p className="font-sans text-sm text-foreground/80 pt-1">
          System Architect & AI Innovator.
        </p>
      </header>

      <div className="mt-4 flex w-full justify-end">
        <div className="flex items-center gap-1.5 text-accent-olive transition-colors hover:text-primary">
          <span className="font-mono text-xs font-bold uppercase tracking-wider">
            [EXPAND]
          </span>
          <Maximize className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}

export default AboutMePreview;
