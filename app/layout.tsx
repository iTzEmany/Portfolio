// app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"; // Assicurati di aver creato questo file come detto prima

// Configurazione Font Primario (Sans-serif)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Best practice per le performance
});

// Configurazione Font Secondario (Monospace/Tech)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// SEO Metadata Base (Enterprise Standard)
export const metadata: Metadata = {
  title: {
    default: "Il Tuo Nome | Software Engineer & AI Architect",
    template: "%s | Il Tuo Nome",
  },
  description: "Portfolio di un Full Stack Developer focalizzato su performance, architetture scalabili e design innovativo.",
  keywords: ["Software Engineer", "Frontend", "Next.js", "React", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        // Inietto le variabili CSS dei font e applico i colori di base e l'antialiasing
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        {/* Un contenitore principale per limitare la larghezza massima su schermi enormi */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {children}
        </main>
      </body>
    </html>
  );
}