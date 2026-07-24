import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Next occurrence of a given hour, used by the live bar countdown. */
export function nextDailyAt(hour: number) {
  const now = new Date();
  const t = new Date(now);
  t.setHours(hour, 0, 0, 0);
  if (t <= now) t.setDate(t.getDate() + 1);
  return t;
}
