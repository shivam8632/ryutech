import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Sparkles, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="scale-in">
        <div className="relative bg-navy rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-60 h-60 bg-[hsl(217,91%,60%)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[hsl(262,83%,58%)]/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300 mb-6">
              <Sparkles className="w-3 h-3 text-[hsl(217,91%,60%)]" />
              {"LET'S BUILD SOMETHING EXTRAORDINARY"}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-4">
              Ready to{" "}
              <span className="italic text-[hsl(217,91%,60%)]">Transform</span>{" "}
              Your Business?
            </h2>

            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              From strategy to execution — we design, build, and scale innovative software solutions to help businesses thrive in the digital world.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-white rounded-full px-8 py-5 text-sm font-medium">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 hover:text-white rounded-full px-8 py-5 text-sm font-medium bg-transparent"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
