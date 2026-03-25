import React from 'react';
import { Terminal } from 'lucide-react';

export function SkillsPreview() {
  return (
    <div className="flex h-full w-full flex-col p-4 md:p-6 font-mono bg-black/20">
      <header className="flex items-center gap-2 mb-4 border-b border-border/50 pb-2">
        <Terminal className="size-4 text-primary" />
        <span className="font-bold uppercase tracking-widest text-primary text-xs md:text-sm">
          [ SYSTEM_CAPABILITIES ]
        </span>
      </header>
      
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {["TypeScript", "Next.js", "React", "TailwindCSS"].map((skill) => (
            <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded-sm text-xs border border-primary/20">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["ROS2", "Python", "SQL", "Node.js"].map((skill) => (
            <span key={skill} className="bg-foreground/10 text-foreground/80 px-2 py-1 rounded-sm text-xs border border-foreground/10">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["Agile/SCRUM", "UX/A11y"].map((skill) => (
            <span key={skill} className="bg-accent-olive/10 text-accent-olive px-2 py-1 rounded-sm text-xs border border-accent-olive/30">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-auto pt-6 text-xs text-foreground/40 hidden md:flex items-center gap-2">
        <span className="animate-pulse">_</span> <span>SCANNING MODULES...</span>
      </div>
    </div>
  );
}
