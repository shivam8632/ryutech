"use client"

import { useRef, type MouseEvent } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Globe, Code2, Palette, Cpu } from "lucide-react"

const ease = [0.21, 0.47, 0.32, 0.98] as const

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance web apps built with modern frameworks. From sophisticated SaaS platforms to conversion-optimized landing pages.",
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    icon: Globe,
    gradient: "from-blue-500/[0.08] via-blue-400/[0.03]",
    glowColor: "rgba(59,130,246,0.08)",
    span: "lg:col-span-7 lg:row-span-2",
    featured: true,
  },
  {
    number: "02",
    title: "Custom Software",
    description:
      "Tailored solutions for your unique business challenges. Scalable, maintainable, future-proof.",
    tags: ["Python", "Go", "Cloud", "APIs"],
    icon: Code2,
    gradient: "from-violet-500/[0.08] via-violet-400/[0.03]",
    glowColor: "rgba(139,92,246,0.08)",
    span: "lg:col-span-5",
    featured: false,
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "User-centered design that converts. Beautiful interfaces backed by research and obsessive attention to detail.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    icon: Palette,
    gradient: "from-rose-500/[0.08] via-rose-400/[0.03]",
    glowColor: "rgba(244,63,94,0.06)",
    span: "lg:col-span-5",
    featured: false,
  },
  {
    number: "04",
    title: "Automation",
    description:
      "Eliminate repetitive work. Smart workflows, intelligent integrations, and AI-powered solutions that save hundreds of hours.",
    tags: ["CI/CD", "DevOps", "AI/ML", "Workflows"],
    icon: Cpu,
    gradient: "from-amber-500/[0.06] via-amber-400/[0.02]",
    glowColor: "rgba(245,158,11,0.06)",
    span: "lg:col-span-7",
    featured: false,
  },
]

/* ── 3D Tilt Card ── */
function BentoCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale3d(1.01,1.01,1.01)`
  }

  function handleMouseLeave() {
    const el = cardRef.current
    if (!el) return
    el.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  }

  return (
    <motion.div
      className={service.span}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-[transform] duration-300 ease-out will-change-transform"
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x,50%) var(--mouse-y,50%), ${service.glowColor}, transparent 60%)`,
          }}
        />

        {/* Gradient accent */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl ${service.gradient} to-transparent blur-2xl`}
        />

        {/* Content */}
        <div
          className={`relative z-10 p-8 lg:p-10 flex flex-col justify-between h-full ${
            service.featured ? "min-h-[360px]" : "min-h-[220px]"
          }`}
        >
          <div>
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-primary/40">
                  {service.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-primary/[0.08] group-hover:border-primary/20 transition-all duration-500">
                  <service.icon className="w-5 h-5 text-white/30 group-hover:text-primary/80 transition-colors duration-500" />
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-white/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>

            {/* Title */}
            <h3
              className={`font-semibold text-white/90 group-hover:text-white transition-colors mb-3 ${
                service.featured
                  ? "text-2xl lg:text-3xl"
                  : "text-xl lg:text-2xl"
              }`}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={`text-white/25 leading-relaxed group-hover:text-white/35 transition-colors ${
                service.featured ? "text-base max-w-md" : "text-sm max-w-sm"
              }`}
            >
              {service.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6 lg:mt-8">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-white/25 bg-white/[0.03] border border-white/[0.05] rounded-full px-3 py-1 group-hover:text-white/40 group-hover:border-white/[0.08] transition-colors duration-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="py-32 lg:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary/60" />
            <span className="text-[11px] font-medium text-white/30 tracking-[0.2em] uppercase">
              What We Do
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
        >
          Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="text-lg text-white/30 max-w-xl mb-14 lg:mb-16"
        >
          Four core capabilities, each refined through hundreds of projects.
        </motion.p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <BentoCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
