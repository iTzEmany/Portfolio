// app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClientLayout } from "@/components/layout/ClientLayout";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Emanuele Lionetti | Software Engineer",
    template: "%s | Emanuele Lionetti",
  },
  description: "Portfolio di un Full Stack Developer focalizzato su performance, architetture scalabili e design innovativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        {/* Deleghiamo la gestione dello stato interattivo a un Client Component figlio */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}