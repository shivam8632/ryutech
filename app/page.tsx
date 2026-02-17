import { HeroSection } from "@/components/hero-section"
import { Marquee } from "@/components/marquee"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Marquee />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <CTASection />
    </div>
  )
}
