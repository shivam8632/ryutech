import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  BarChart3,
  Clock,
  Phone,
  ArrowRight,
  Brain,
  Workflow,
  FileText,
  Users,
  Timer,
  LineChart,
  UserCheck,
  Lightbulb,
  PhoneCall,
  PieChart,
  RefreshCcw,
  Mic,
} from "lucide-react"

interface ProductCardProps {
  badge: string
  title: string
  subtitle: string
  description: string
  features: { icon: React.ReactNode; label: string }[]
  ctaLabel: string
  ctaColor: string
  imageContent: React.ReactNode
  reverse?: boolean
}

function ProductCard({
  badge,
  title,
  subtitle,
  description,
  features,
  ctaLabel,
  ctaColor,
  imageContent,
  reverse = false,
}: ProductCardProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-8 items-center ${reverse ? "lg:direction-rtl" : ""}`}>
      <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy/60 to-navy-light/60 border border-white/5 p-4 shadow-xl">
          {imageContent}
        </div>
      </div>
      <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <span className="inline-block text-xs text-[hsl(217,91%,60%)] font-medium uppercase tracking-wider mb-2">
          {badge}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 font-serif">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-foreground">
              <span className="text-[hsl(217,91%,60%)]">{f.icon}</span>
              {f.label}
            </div>
          ))}
        </div>
        <Button
          className="rounded-full px-6 text-white"
          style={{ backgroundColor: ctaColor }}
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

function VisCRMImage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl p-6 min-h-[220px] flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-white/50 text-xs ml-2">VisCRM Dashboard</span>
      </div>
      <div className="flex gap-3 flex-1">
        <div className="flex-1 bg-white/5 rounded-lg p-3">
          <div className="h-2 w-16 bg-[hsl(217,91%,60%)]/40 rounded mb-2" />
          <div className="h-2 w-24 bg-white/10 rounded mb-4" />
          <div className="flex gap-1 items-end h-16">
            {[40, 65, 50, 80, 60, 75, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 6 ? "hsl(217,91%,60%)" : "hsl(217,91%,60%,0.3)",
                }}
              />
            ))}
          </div>
        </div>
        <div className="w-28 bg-white/5 rounded-lg p-3 flex flex-col gap-2">
          <div className="h-2 w-12 bg-green-400/40 rounded" />
          <div className="text-white text-lg font-bold">2,847</div>
          <div className="h-1.5 w-full bg-[hsl(217,91%,60%)]/30 rounded-full">
            <div className="h-full w-3/4 bg-[hsl(217,91%,60%)] rounded-full" />
          </div>
          <div className="h-2 w-16 bg-white/10 rounded mt-1" />
          <div className="text-emerald-400 text-xs">+12.5%</div>
        </div>
      </div>
    </div>
  )
}

function WorkHourImage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl p-6 min-h-[220px] flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-white/50 text-xs ml-2">Work Hour Monitor</span>
      </div>
      <div className="flex gap-3 flex-1">
        <div className="flex-1 bg-white/5 rounded-lg p-3 flex flex-col justify-between">
          <div>
            <div className="text-gray-400 text-xs mb-1">Total Hours</div>
            <div className="text-white text-2xl font-bold">08h 23m</div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="flex-1 bg-[hsl(217,91%,60%)]/20 rounded p-2 text-center">
              <div className="text-[hsl(217,91%,60%)] text-xs font-semibold">Active</div>
              <div className="text-white text-sm font-bold mt-1">6h 45m</div>
            </div>
            <div className="flex-1 bg-amber-500/20 rounded p-2 text-center">
              <div className="text-amber-400 text-xs font-semibold">Break</div>
              <div className="text-white text-sm font-bold mt-1">1h 38m</div>
            </div>
          </div>
        </div>
        <div className="w-24 bg-white/5 rounded-lg p-3 flex flex-col justify-center gap-1">
          <div className="text-gray-400 text-[10px]">500 Employees</div>
          <div className="text-white text-xs font-semibold">196 Online</div>
          <div className="w-full h-1.5 bg-white/10 rounded-full mt-1">
            <div className="w-2/5 h-full bg-green-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DialerImage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl p-6 min-h-[220px] flex flex-col items-center justify-center gap-4">
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[hsl(217,91%,60%)]/20 flex items-center justify-center">
            <Phone className="w-5 h-5 text-[hsl(217,91%,60%)]" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-green-400" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-amber-400" />
          </div>
        </div>
        <div className="text-center">
          <span className="text-white font-bold text-sm">DialerOnline</span>
        </div>
      </div>
    </div>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up" className="text-center mb-16">
          <span className="inline-block text-xs text-[hsl(217,91%,60%)] font-medium uppercase tracking-wider mb-3">
            What we build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground">
            Why Teams Choose{" "}
            <span className="text-[hsl(217,91%,60%)]">Our</span>{" "}
            <span className="italic">Products</span>
          </h2>
        </ScrollReveal>

        {/* Product 1 - VisCRM */}
        <ScrollReveal animation="fade-in-up" delay={100}>
        <div className="mb-20">
          <ProductCard
            badge="VisCRM"
            title="VisCRM"
            subtitle="AI-powered CRM to manage leads, automate workflows and unlock customer intelligence"
            description="A powerful CRM to manage leads, automate workflows and unlock customer intelligence."
            features={[
              { icon: <Brain className="w-4 h-4" />, label: "AI Analytics" },
              { icon: <Workflow className="w-4 h-4" />, label: "Workflow Automation" },
              { icon: <FileText className="w-4 h-4" />, label: "Smart Reports" },
              { icon: <Users className="w-4 h-4" />, label: "Customer Insights" },
            ]}
            ctaLabel="Explore VisCRM"
            ctaColor="hsl(217,91%,60%)"
            imageContent={<VisCRMImage />}
          />
        </div>
        </ScrollReveal>

        {/* Product 2 - Work Hour Monitor */}
        <ScrollReveal animation="fade-in-up" delay={100}>
        <div className="mb-20">
          <ProductCard
            badge="Work Hour Monitor"
            title="Work Hour Monitor"
            subtitle=""
            description="Accurate time tracking, productivity analytics and workforce visibility in one platform."
            features={[
              { icon: <Timer className="w-4 h-4" />, label: "Time Tracking" },
              { icon: <LineChart className="w-4 h-4" />, label: "Productivity Reports" },
              { icon: <UserCheck className="w-4 h-4" />, label: "Employee Monitoring" },
              { icon: <Lightbulb className="w-4 h-4" />, label: "Work Insights" },
            ]}
            ctaLabel="Explore Work Hour Monitor"
            ctaColor="hsl(262,83%,58%)"
            imageContent={<WorkHourImage />}
            reverse
          />
        </div>
        </ScrollReveal>

        {/* Product 3 - Dialer Online */}
        <ScrollReveal animation="fade-in-up" delay={100}>
        <div className="mb-12">
          <ProductCard
            badge="Dialer Online"
            title="Dialer Online"
            subtitle="Cloud calling & Communication"
            description="Enterprise-grade cloud dialer with automation, analytics and CRM integrations."
            features={[
              { icon: <PhoneCall className="w-4 h-4" />, label: "Auto Dialing" },
              { icon: <PieChart className="w-4 h-4" />, label: "Call Analytics" },
              { icon: <RefreshCcw className="w-4 h-4" />, label: "CRM Sync" },
              { icon: <Mic className="w-4 h-4" />, label: "Call Recording" },
            ]}
            ctaLabel="Explore Dialer Online"
            ctaColor="hsl(217,91%,60%)"
            imageContent={<DialerImage />}
          />
        </div>
        </ScrollReveal>

        {/* Explore All Button */}
        <ScrollReveal animation="fade-in">
        <div className="text-center">
          <Button variant="outline" className="rounded-full px-8 py-5 border-foreground/20 text-foreground hover:bg-foreground/5">
            Explore All Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
