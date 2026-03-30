"use client";

import React, { useMemo, useState, useEffect } from 'react';

export interface NoiseProps {
  opacity?: number;
  baseFrequency?: number;
  numOctaves?: number;
  blendMode?: React.CSSProperties['mixBlendMode'];
}

const Noise: React.FC<NoiseProps> = ({
  opacity = 0.05,
  baseFrequency = 0.65,
  numOctaves = 3,
  blendMode = 'screen' // 'screen' o 'color-dodge' sono perfetti per i temi scuri
}) => {
  // 1. Risoluzione Hydration Mismatch: Renderizziamo solo sul Client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Generazione SVG Memoizzata
  const noiseDataUrl = useMemo(() => {
    // Abbiamo aggiunto <feColorMatrix> per desaturare il rumore (renderlo bianco e nero)
    const svgString = `<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='fractalNoise' 
          baseFrequency='${baseFrequency}' 
          numOctaves='${numOctaves}' 
          stitchTiles='stitch'
        />
        <feColorMatrix type='saturate' values='0' />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
    </svg>`;
    
    return `data:image/svg+xml,${encodeURIComponent(svgString)}`;
  }, [baseFrequency, numOctaves]);

  // Se siamo sul server (durante il pre-render), non restituiamo nulla
  if (!isMounted) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      style={{ 
        opacity, 
        mixBlendMode: blendMode 
      }}
      aria-hidden="true"
    >
      <div 
        className="absolute inset-[-200%] h-[400%] w-[400%] animate-noise"
        style={{ 
          backgroundImage: `url("${noiseDataUrl}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />
    </div>
  );
};

export default Noise;