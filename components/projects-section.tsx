"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

// Add your projects: each project has a folder under public/images/projects/{slug}/; image is the filename inside that folder
const PROJECTS = [
  {
    slug: "exclusive-links",
    title: "Exclusive Links",
    category: "Web Application",
    description: "Listing platform with dashboard and streamlined workflows.",
    image: "dashboard.png",
  },
  {
    slug: "helix",
    title: "Helix",
    category: "Inventory & Logistics",
    description: "Warehouse and inventory management with vendor portal.",
    image: "warehouse.png",
  },
  {
    slug: "nurture-pnw-staffing",
    title: "Nurture PNW Staffing",
    category: "Staffing",
    description: "Staffing and recruitment platform with a focused experience.",
    image: "home.png",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 bg-navy overflow-hidden scroll-mt-20">
      {/* Vector background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] opacity-20">
          <Image
            src="/vectors/blob-1.svg"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute -right-40 bottom-1/4 w-[400px] h-[400px] opacity-15">
          <Image
            src="/vectors/blob-2.svg"
            alt=""
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url(/vectors/dots-pattern.svg)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-12">
          <span className="inline-block text-xs text-[hsl(217,91%,60%)] font-medium uppercase tracking-wider">
            Our Work
          </span>
        </ScrollReveal>
        <ScrollReveal animation="fade-in-up" delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-serif text-white mb-4">
            Projects We&apos;re{" "}
            <span className="italic">Proud Of</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-in-up" delay={200}>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            From dashboards to web apps — here&apos;s a selection of what we&apos;ve shipped.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ScrollReveal
              key={project.slug}
              animation="fade-in-up"
              delay={(i % 3) * 100 as 0 | 100 | 200 | 300}
            >
              <a
                href="#"
                className="group block rounded-2xl overflow-hidden border border-white/10 bg-navy-light/40 hover:border-[hsl(217,91%,60%)]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(217,91%,60%)]/10"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/images/projects/${project.slug}/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  {/* Decorative vector accent */}
                  <div className="absolute top-3 right-3 opacity-60">
                    <Image
                      src="/vectors/circuit-lines.svg"
                      alt=""
                      width={48}
                      height={36}
                      className="h-8 w-10 object-contain invert opacity-60"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[hsl(217,91%,60%)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(217,91%,60%)] group-hover:gap-2 transition-all">
                    View project <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in-up" delay={300} className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-[hsl(217,91%,60%)]/50 transition-colors"
          >
            See all projects <ArrowRight className="w-4 h-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
