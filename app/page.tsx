import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ScrollPinSection } from "@/components/scroll-pin-section";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { InteractiveTechStrip } from "@/components/interactive-tech-strip";
import { Technologies } from "@/components/technologies";
import { Process } from "@/components/process";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollPinSection />
        <div className="bg-background min-h-screen">
          <Services />
          <Projects />
          <InteractiveTechStrip />
          <Technologies />
          <Process />
          <Stats />
          <Testimonials />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
