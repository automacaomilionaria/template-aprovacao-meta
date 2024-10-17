import { cn } from "@/lib/utils";

/** Logo genérico do template. Substitua por <img src="/sua-logo.svg" /> quando houver identidade visual. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn("h-8 w-8", className)}>
      <path d="M16 2 28.1 9v14L16 30 3.9 23V9L16 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="4.5" fill="currentColor" />
    </svg>
  );
}
