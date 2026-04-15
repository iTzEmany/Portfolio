"use client";

import React, { useEffect, useRef } from "react";

export const PretextEngine = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // La dimensione standard del "pixel" quando navighi nello sfondo vuoto
  const BASE_SIZE = 80;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); 
    if (!ctx) return;

    const globalMouse = { x: -1000, y: -1000 };
    const focusState = { active: false, x: 0, y: 0, w: BASE_SIZE, h: BASE_SIZE };

    let currentX = -1000;
    let currentY = -1000;
    let currentW = BASE_SIZE;
    let currentH = BASE_SIZE;
    
    const handleGlobalPointerMove = (e: PointerEvent) => {
      globalMouse.x = e.clientX;
      globalMouse.y = e.clientY;
    };

    const handlePretextFocus = (e: Event) => {
      const customEvent = e as CustomEvent<{ active: boolean; x?: number; y?: number; w?: number; h?: number }>;
      const detail = customEvent.detail;
      
      focusState.active = detail.active;
      if (detail.active && detail.x && detail.y && detail.w && detail.h) {
        focusState.x = detail.x;
        focusState.y = detail.y;
        focusState.w = detail.w;
        focusState.h = detail.h;
      } else {
        focusState.w = BASE_SIZE;
        focusState.h = BASE_SIZE;
      }
    };

    window.addEventListener("pointermove", handleGlobalPointerMove);
    window.addEventListener("pretext-focus", handlePretextFocus);

    const binaryTokens = Array.from({ length: 6000 }, () => (Math.random() > 0.5 ? "1" : "0"));
    
    let fontSize = 14;
    let fontFamily = '"Space Mono", monospace, sans-serif';
    let lineHeight = fontSize * 1.5;
    
    ctx.font = `${fontSize}px ${fontFamily}`;
    const charWidth = ctx.measureText("0").width; 
    const spaceWidth = ctx.measureText(" ").width;

    let rafId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      fontSize = window.innerWidth < 640 ? 11 : 14;
      lineHeight = fontSize * 1.5;
      ctx.font = `${fontSize}px ${fontFamily}`;
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const renderLoop = () => {
      const cw = canvas.width;
      const ch = canvas.height;

      const INTERTIA_FACTOR = 0.15; 
      
      let targetX = globalMouse.x;
      let targetY = globalMouse.y;

      if (focusState.active) {
        // [ FIX: ANCORAGGIO ASSOLUTO ]
        // Niente più attrazione magnetica dinamica. 
        // Il vuoto si congela ESATTAMENTE al centro del componente.
        targetX = focusState.x;
        targetY = focusState.y;
      }

      // Sincronizzazione con lo scroll
      let docTargetY = targetY;
      if (targetX !== -1000 && targetY !== -1000) {
        docTargetY = targetY + window.scrollY;
      }

      // Applicazione inerzia fisica (Lerp)
      if (targetX !== -1000) {
        if (currentX === -1000) { currentX = targetX; currentY = docTargetY; }
        currentX += (targetX - currentX) * INTERTIA_FACTOR;
        currentY += (docTargetY - currentY) * INTERTIA_FACTOR;
      }

      currentW += (focusState.w - currentW) * INTERTIA_FACTOR;
      currentH += (focusState.h - currentH) * INTERTIA_FACTOR;

      // Render Base
      ctx.fillStyle = "#09090b"; 
      ctx.fillRect(0, 0, cw, ch);
      
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)"; 
      ctx.textBaseline = "top";

      let cursorX = 0;
      let cursorY = 0;

      for (let i = 0; i < binaryTokens.length; i++) {
        const token = binaryTokens[i];
        
        let collisionSolved = false;
        let safetyBreak = 0;
        
        while (!collisionSolved && safetyBreak < 5) {
          safetyBreak++;
          
          const lineCenterY = cursorY + lineHeight / 2;
          
          // Collisione Box AABB
          const halfW = currentW / 2;
          const halfH = currentH / 2;
          
          const isInsideY = lineCenterY > currentY - halfH && lineCenterY < currentY + halfH;
          const isInsideX = (cursorX + charWidth) > currentX - halfW && cursorX < currentX + halfW;
          
          if (isInsideY && isInsideX) {
            cursorX = currentX + halfW;
          }

          if (cursorX + charWidth > cw) {
            cursorX = 0;
            cursorY += lineHeight;
          } else {
            collisionSolved = true;
          }
        }

        if (cursorY > ch) break;

        ctx.fillText(token, cursorX, cursorY);
        cursorX += charWidth + spaceWidth;
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("pointermove", handleGlobalPointerMove);
      window.removeEventListener("pretext-focus", handlePretextFocus);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-background">
      <canvas ref={canvasRef} aria-hidden="true" className="block w-full h-full" />
    </div>
  );
};

/**
 * UTILITY: setPretextFocus
 * @param element L'elemento HTML in hover (o null per sbloccare)
 * @param extraWidth Padding extra orizzontale per creare il "vuoto" (Default: 120px)
 * @param extraHeight Padding extra verticale per creare il "vuoto" (Default: 100px)
 */
export const setPretextFocus = (
  element: HTMLElement | null, 
  extraWidth: number = 120, 
  extraHeight: number = 100
) => {
  if (typeof window === 'undefined') return;
  if (!element) {
    window.dispatchEvent(new CustomEvent("pretext-focus", { detail: { active: false } }));
    return;
  }
  
  const rect = element.getBoundingClientRect();
  
  window.dispatchEvent(new CustomEvent("pretext-focus", { 
    detail: { 
      active: true,
      x: rect.left + rect.width / 2, 
      y: rect.top + rect.height / 2, 
      // [ FIX: CLEARANCE MAGGIORATA ]
      // Usiamo l'ingombro reale e ci sommiamo un vuoto massiccio per proteggere l'UI
      w: rect.width + extraWidth,            
      h: rect.height + extraHeight           
    } 
  }));
};