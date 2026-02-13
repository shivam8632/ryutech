import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { HeroParallaxGlows } from "@/components/parallax-bg"
import { Star, ArrowRight, Zap, Shield } from "lucide-react"

function MetricBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-400 w-40 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs text-white font-medium w-10 text-right">{value}%</span>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-navy pt-24 pb-16 overflow-hidden">
      <HeroParallaxGlows />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <ScrollReveal animation="fade-in-up">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300">
                  <Zap className="w-3 h-3 text-[hsl(217,91%,60%)]" />
                  Empowering Faster Ready Solutions
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-gray-400">
                  <Shield className="w-3 h-3" /> Verified
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Build Better{" "}
                <span className="font-serif italic text-[hsl(217,91%,60%)]">Operate Smarter</span>
                <br />
                Grow Faster
              </h1>

              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
                At Ryutech, we specialize in creating innovative software and high-performance websites that drive business transformation. Our solutions are designed to help your business scale, improve efficiency, and adapt to the digital age with ease.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Button className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-white rounded-full px-8 py-6 text-sm font-medium">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 hover:text-white rounded-full px-8 py-6 text-sm font-medium bg-transparent"
                >
                  Our Services
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white text-sm font-semibold">5,818</span>
                </div>
                <div className="h-4 w-px bg-white/20" />
                <span className="text-gray-400 text-sm">500+ Successful Projects</span>
                <div className="h-4 w-px bg-white/20" />
                <span className="text-gray-400 text-sm">Support 24/7</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Metrics Card */}
          <ScrollReveal animation="slide-in-right" delay={200}>
          <div className="relative">
            <div className="bg-navy-light/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-white font-semibold text-lg mb-6">Our Key Metrics</h3>
              <div className="flex flex-col gap-5">
                <MetricBar label="Client Satisfaction" value={95} color="hsl(217, 91%, 60%)" />
                <MetricBar label="Conversion Efficiency" value={67} color="hsl(262, 83%, 58%)" />
                <MetricBar label="Speed of Transformation" value={85} color="hsl(192, 91%, 55%)" />
                <MetricBar label="Code Quality Index" value={92} color="hsl(142, 71%, 45%)" />
                <MetricBar label="Weekly Uptime" value={99} color="hsl(217, 91%, 60%)" />
              </div>
              <p className="text-xs text-gray-500 mt-5">
                We build experiences worth billions in days, not months.
              </p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
