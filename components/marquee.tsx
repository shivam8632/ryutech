"use client"

const items = [
  "Web Development",
  "Custom Software",
  "UI/UX Design",
  "Automation",
  "Digital Strategy",
  "Technical Consulting",
  "Cloud Architecture",
  "API Design",
]

export function Marquee() {
  const strip = [...items, ...items, ...items, ...items]

  return (
    <div className="border-y border-white/[0.04] overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap py-5">
        {strip.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 mx-4 text-[13px] font-medium text-white/[0.08] uppercase tracking-[0.25em]"
          >
            <span>{item}</span>
            <span className="w-1 h-1 rounded-full bg-primary/20" />
          </span>
        ))}
      </div>
    </div>
  )
}
