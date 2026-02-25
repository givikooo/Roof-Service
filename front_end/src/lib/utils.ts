import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Base path for public assets (images). Use so images work on custom domain (/) and github.io/Roof-Service/ */
export function getBaseUrl(): string {
  if (typeof window === 'undefined') return ''
  return window.location.pathname.startsWith('/Roof-Service') ? '/Roof-Service' : ''
} 