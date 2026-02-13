import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export function StatsSection() {
  return (
    <section id="stats" className="py-20 bg-navy relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[hsl(217,91%,60%)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(262,83%,58%)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="slide-in-left">
            <div>
              <span className="inline-block text-xs text-[hsl(217,91%,60%)] font-medium uppercase tracking-wider mb-3">
                Our impact
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
                Empowering businesses with{" "}
                <span className="italic text-[hsl(217,91%,60%)]">smart technology</span> and{" "}
                <span className="italic">scalable solutions.</span>
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                At Ryutech, we deliver high-quality IT solutions that help businesses thrive. Whether it&apos;s building custom websites, automating workflows with our CRM, or improving productivity with our work hour monitor and automated dialers, we have the tools to drive your success.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <span className="text-sm text-gray-400">IT PROJECTS DONE</span>
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-sm text-gray-400">Business Consultations</span>
              </div>

              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-5 text-sm font-medium">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-in-right" delay={200}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-navy-light/80 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">150+</div>
                <p className="text-gray-400 text-sm">IT Solutions Deployed</p>
              </div>
              <div className="bg-navy-light/80 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100+</div>
                <p className="text-gray-400 text-sm">Happy Clients Worldwide</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
