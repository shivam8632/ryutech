import { ScrollReveal } from "@/components/scroll-reveal"

interface SectionDividerProps {
  variant?: "wave" | "gradient" | "dots"
}

export function SectionDivider({ variant = "gradient" }: SectionDividerProps) {
  if (variant === "wave") {
    return (
      <ScrollReveal animation="fade-in" className="py-4">
        <div className="max-w-7xl mx-auto px-4">
          <svg
            viewBox="0 0 1200 40"
            className="w-full h-8 text-navy-light"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M0 20 Q300 0 600 20 T1200 20 V40 H0 Z"
              className="opacity-30"
            />
            <path
              fill="currentColor"
              d="M0 24 Q300 44 600 24 T1200 24 V40 H0 Z"
              className="opacity-20"
            />
          </svg>
        </div>
      </ScrollReveal>
    )
  }

  if (variant === "dots") {
    return (
      <ScrollReveal animation="fade-in" className="py-6">
        <div className="flex justify-center gap-1.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[hsl(217,91%,60%)]/40"
            />
          ))}
        </div>
      </ScrollReveal>
    )
  }

  return (
    <ScrollReveal animation="fade-in" className="py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[hsl(217,91%,60%)]/40 to-transparent" />
      </div>
    </ScrollReveal>
  )
}
