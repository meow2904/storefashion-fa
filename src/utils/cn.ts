import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Hàm cn (className) giúp:
 * 1. Nối các class có điều kiện (clsx)
 * 2. Tự động ghi đè các class Tailwind bị xung đột (twMerge)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}