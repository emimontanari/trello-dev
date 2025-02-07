import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBIC_APP_URL} ${path}`
}