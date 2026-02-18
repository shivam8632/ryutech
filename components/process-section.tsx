"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Search, PenTool, Code, Rocket } from "lucide-react"

const ease = [0.21, 0.47, 0.32, 0.98] as const

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep-dive into your goals, users, and market to define the strategy that matters.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Strategic UX architecture and visual design aligned with your brand identity.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Agile sprints with full transparency. Clean code, continuous integration, weekly demos.",
    icon: Code,
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Seamless launch with monitoring, security hardening, and ongoing support.",
    icon: Rocket,
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  /* Scroll-driven progress line */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.6"],
  })
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="process" className="pb-32 lg:pb-40 relative" ref={sectionRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/[0.02] rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-primary/60" />
          <span className="text-[11px] font-medium text-white/30 tracking-[0.2em] uppercase">
            How We Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
        >
          Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="text-lg text-white/30 max-w-xl mb-16 lg:mb-20"
        >
          A proven four-phase methodology that transforms ideas into
          production-ready products.
        </motion.p>

        {/* Progress line */}
        <div className="hidden lg:block mb-16">
          <div className="relative h-px bg-white/[0.04] rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/60 to-accent/40 rounded-full"
              style={{ width: lineWidth }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.12, ease }}
              className="group relative"
            >
              <div className="relative bg-white/[0.015] border border-white/[0.05] rounded-2xl p-8 h-full hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500">
                {/* Number + icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-bold text-white/[0.05] font-mono group-hover:text-white/[0.08] transition-colors duration-500">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-primary/[0.08] group-hover:border-primary/20 transition-all duration-500">
                    <step.icon className="w-4.5 h-4.5 text-white/25 group-hover:text-primary/80 transition-colors duration-500" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white/90 mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-white/25 leading-relaxed group-hover:text-white/35 transition-colors duration-500">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
