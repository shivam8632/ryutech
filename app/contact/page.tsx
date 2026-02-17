import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about your next project. We respond within 24 hours with a tailored plan.",
}

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's build something"
        titleAccent="great."
        description="Tell us about your project. We'll respond within 24 hours with a tailored plan and honest assessment."
      />

      <ContactForm />
    </div>
  )
}
