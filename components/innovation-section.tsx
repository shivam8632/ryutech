import { ScrollReveal } from "@/components/scroll-reveal"
import { Monitor, PhoneCall, BarChart3, ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  iconBg: string
  title: string
  description: string
  links: string[]
}

function FeatureCard({ icon, iconBg, title, description, links }: FeatureCardProps) {
  return (
    <div className="bg-navy-light/80 border border-white/10 rounded-2xl p-6 hover:border-[hsl(217,91%,60%)]/30 transition-colors group">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <h4 className="text-white font-semibold text-lg mb-3">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {links.map((link, i) => (
          <span
            key={i}
            className="inline-block text-xs bg-white/5 border border-white/10 text-gray-300 rounded-full px-3 py-1"
          >
            {link}
          </span>
        ))}
      </div>
      <a
        href="#"
        className="inline-flex items-center text-sm text-[hsl(217,91%,60%)] hover:text-[hsl(217,91%,70%)] transition-colors group-hover:gap-2"
      >
        Learn More <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  )
}

export function InnovationSection() {
  return (
    <section id="services" className="py-20 bg-navy relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(217,91%,60%)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal animation="fade-in-up" className="text-center mb-4">
          <span className="inline-block text-xs text-[hsl(217,91%,60%)] font-medium uppercase tracking-wider">
            Advanced Tools
          </span>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-serif text-white mb-4">
            Drive Innovation and Growth{" "}
            <span className="italic">with Our</span>
            <br />
            <span className="italic">Advanced Tools</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={200}>
          <p className="text-center text-gray-400 text-sm max-w-2xl mx-auto mb-14 leading-relaxed">
            Empowering businesses to stay ahead of the curve with cutting-edge technology, data-driven
            insights, and scalable solutions that fuel growth and innovation for a dynamic future.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal animation="scale-in" delay={0}>
          <FeatureCard
            icon={<Monitor className="w-6 h-6 text-[hsl(217,91%,60%)]" />}
            iconBg="hsl(217,91%,60%,0.15)"
            title="Custom Web Solutions"
            description="Enterprise-ready web applications with digital transformation, focusing innovative tech with the latest technologies that secure and optimize performance."
            links={["React", "Next.js", "Node.js"]}
          />
          </ScrollReveal>
          <ScrollReveal animation="scale-in" delay={100}>
          <FeatureCard
            icon={<PhoneCall className="w-6 h-6 text-[hsl(262,83%,58%)]" />}
            iconBg="hsl(262,83%,58%,0.15)"
            title="Automated Dialer Systems"
            description="Transform your customer outreach with our automated dialer solutions that improve call success rates, boost agent productivity, and include automated reporting."
            links={["VoIP", "CRM Integration"]}
          />
          </ScrollReveal>
          <ScrollReveal animation="scale-in" delay={200}>
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6 text-[hsl(192,91%,55%)]" />}
            iconBg="hsl(192,91%,55%,0.15)"
            title="Data Analytics & Insights"
            description="Access real-time business intelligence, custom reports, data storage capabilities to make smarter decisions based on insights."
            links={["Speed of transformation"]}
          />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
