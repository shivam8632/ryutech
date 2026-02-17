"use client"

import { useState, useRef, type MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects, categories } from "@/lib/data/projects"

const ease = [0.21, 0.47, 0.32, 0.98] as const

/* ── Masonry card with 3D tilt ── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) scale3d(1.01,1.01,1.01)`
  }

  function handleMouseLeave() {
    const el = cardRef.current
    if (!el) return
    el.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  }

  const heightClass =
    project.size === "large"
      ? "row-span-2 min-h-[420px] lg:min-h-[500px]"
      : project.size === "medium"
        ? "min-h-[320px] lg:min-h-[380px]"
        : "min-h-[280px] lg:min-h-[320px]"

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className={heightClass}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-[transform] duration-300 ease-out will-change-transform"
        >
          {/* Gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} to-transparent`}
          />

          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(500px circle at 50% 50%, ${project.color}12, transparent 60%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-10 flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-white/25 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-white/20">
                    {project.year}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-white/50 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>

              {/* Color accent bar */}
              <div
                className="w-10 h-1 rounded-full mb-6 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                style={{ backgroundColor: project.color }}
              />

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-white/40 font-medium mb-4">
                {project.subtitle}
              </p>

              {/* Description (only on large cards) */}
              {project.size === "large" && (
                <p className="text-sm text-white/20 leading-relaxed max-w-md">
                  {project.description}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-6">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-white/20 bg-white/[0.03] border border-white/[0.04] rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-[10px] text-white/15">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="pb-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12 lg:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium rounded-full px-4 py-2 border transition-all duration-300 ${activeCategory === cat
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "bg-white/[0.02] border-white/[0.06] text-white/35 hover:text-white/60 hover:border-white/[0.12]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
