import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ServiceDeepDive } from "./service-deep-dive"
import { CTASection } from "@/components/cta-section"
import { services } from "@/lib/data/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, custom software, UI/UX design, and automation solutions — each refined through hundreds of projects.",
}

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        eyebrow="What We Do"
        title="Solutions engineered"
        titleAccent="for growth."
        description="We don't just write code — we solve business problems. Four core capabilities, each refined through years of deliberate practice and hundreds of successful projects."
      />

      {/* Service deep dives */}
      {services.map((service, i) => (
        <ServiceDeepDive key={service.slug} service={service} index={i} />
      ))}

      <CTASection />
    </div>
  )
}
