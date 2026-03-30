"use client";

// components/layout/ClientLayout.tsx
import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import Noise from "@/components/ui/Noise";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  // Lo stato risiede qui (Lifting State Up)
  const [showNoise, setShowNoise] = useState(true);

  return (
    <>
      <Navbar showNoise={showNoise} onToggleNoise={() => setShowNoise(!showNoise)} />
        {showNoise && (
  <Noise 
    baseFrequency={0.8} 
    numOctaves={4} 
    opacity={0.15} /* Alzato al 15% per renderlo ben visibile */
    blendMode="screen" /* Ottimo se il tuo bg-background è scuro */
  />
)}
      <main>{children}</main>
    </>
  );
}