import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ProjectGrid } from "./project-grid"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work from our portfolio — engineering solutions that move businesses forward.",
}

export default function ProjectsPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        eyebrow="Our Work"
        title="Selected"
        titleAccent="projects."
        description="A curated selection of projects that showcase our engineering depth, design sensibility, and commitment to measurable outcomes."
      />

      <ProjectGrid />

      <CTASection />
    </div>
  )
}
