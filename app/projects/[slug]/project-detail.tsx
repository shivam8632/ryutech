"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/data/projects"

const ease = [0.21, 0.47, 0.32, 0.98] as const

export function ProjectDetail({
  project,
  nextProject,
}: {
  project: Project
  nextProject: Project
}) {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${project.gradient} to-transparent opacity-60`}
        />
        <div className="absolute inset-0 dot-grid" />

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white/60 transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left — title */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] text-white/30 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-white/20">
                    {project.year}
                  </span>
                </div>

                <div
                  className="w-12 h-1.5 rounded-full mb-8 opacity-60"
                  style={{ backgroundColor: project.color }}
                />

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-3">
                  {project.title}
                </h1>
                <p className="text-xl text-white/40 font-medium">
                  {project.subtitle}
                </p>
              </motion.div>
            </div>

            {/* Right — meta */}
            <div className="lg:col-span-5 lg:pt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease }}
                className="space-y-6"
              >
                <div>
                  <p className="text-[11px] text-white/25 uppercase tracking-widest mb-1">
                    Client
                  </p>
                  <p className="text-sm text-white/70">{project.client}</p>
                </div>
                <div>
                  <p className="text-[11px] text-white/25 uppercase tracking-widest mb-2">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-white/30 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project visual placeholder */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="relative rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.color}08, transparent 60%)`,
            }}
          >
            <div className="aspect-[16/7] flex items-center justify-center">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${project.color}15` }}
                >
                  <ExternalLink
                    className="w-6 h-6"
                    style={{ color: `${project.color}80` }}
                  />
                </div>
                <p className="text-sm text-white/20">
                  Project visual — {project.title}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="lg:col-span-7 space-y-12"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Overview
                </h2>
                <p className="text-white/30 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  The Challenge
                </h2>
                <p className="text-white/30 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Our Solution
                </h2>
                <p className="text-white/30 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </motion.div>

            {/* Outcome sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="lg:col-span-5"
            >
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8">
                  <p className="text-[11px] font-medium text-white/25 uppercase tracking-widest mb-4">
                    Outcome
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed font-medium">
                    {project.outcome}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-full px-7 py-3.5 transition-all duration-300 overflow-hidden w-full justify-center"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start a Similar Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block py-16 lg:py-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-[11px] text-white/20 uppercase tracking-widest mb-3">
                  Next Project
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-white/80 group-hover:text-white transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-sm text-white/30 mt-1">
                  {nextProject.subtitle}
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-white/60 group-hover:translate-x-2 transition-all duration-500" />
            </motion.div>
          </Link>
        </div>
      </section>
    </div>
  )
}
