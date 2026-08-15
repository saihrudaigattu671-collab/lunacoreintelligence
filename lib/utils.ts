import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines and cleans up CSS class names.
 * It prevents duplicate or conflicting styling rules from clashing.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
