// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Unisce le classi Tailwind in modo sicuro risolvendo i conflitti.
 * Essenziale per creare componenti UI riutilizzabili.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}