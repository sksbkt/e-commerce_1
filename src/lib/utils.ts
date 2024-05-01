import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// * Dev: wait
export function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
