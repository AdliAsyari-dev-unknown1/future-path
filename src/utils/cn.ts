/**
 * Utility for combining Tailwind CSS class names cleanly.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
