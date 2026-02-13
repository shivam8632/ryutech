import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { InnovationSection } from "@/components/innovation-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"
import { SectionDivider } from "@/components/section-divider"

export default function Page() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <SectionDivider variant="gradient" />
      <ProductsSection />
      <SectionDivider variant="dots" />
      <InnovationSection />
      <SectionDivider variant="gradient" />
      <StatsSection />
      <SectionDivider variant="wave" />
      <CTASection />
      <Footer />
      <BackToTop />
    </main>
  )
}
