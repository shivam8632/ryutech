export type ServiceIconKey = "globe" | "code" | "palette" | "cpu"

export interface Service {
  slug: string
  number: string
  title: string
  tagline: string
  description: string
  longDescription: string
  iconKey: ServiceIconKey
  gradient: string
  glowColor: string
  benefits: string[]
  tags: string[]
  process: { title: string; description: string }[]
}

export const services: Service[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Web Development",
    tagline: "High-performance web experiences that convert",
    description:
      "From sophisticated SaaS platforms to conversion-optimized marketing sites — engineered for speed, accessibility, and growth.",
    longDescription:
      "We build web applications that are fast, accessible, and designed to grow with your business. Our approach combines modern frameworks with battle-tested architecture patterns, ensuring your product can handle scale from day one. Every project is built with performance budgets, accessibility standards, and SEO best practices baked in — not bolted on.",
    iconKey: "globe",
    gradient: "from-blue-500/[0.08] via-blue-400/[0.03]",
    glowColor: "rgba(59,130,246,0.08)",
    benefits: [
      "Sub-second load times with modern rendering strategies",
      "Fully responsive across all devices and screen sizes",
      "SEO-optimized architecture for organic growth",
      "Accessibility-first development (WCAG 2.1 AA)",
      "Scalable codebase with clean, maintainable code",
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Vercel", "Tailwind CSS"],
    process: [
      { title: "Architecture", description: "We design the technical foundation — choosing frameworks, APIs, and infrastructure that fit your scale." },
      { title: "Development", description: "Iterative sprints with weekly demos. You see progress every week, not just at the end." },
      { title: "Optimization", description: "Performance audits, load testing, and refinement until every metric is green." },
      { title: "Launch & Support", description: "Zero-downtime deployment with monitoring, analytics, and ongoing maintenance." },
    ],
  },
  {
    slug: "custom-software",
    number: "02",
    title: "Custom Software",
    tagline: "Tailored solutions for complex business challenges",
    description:
      "Bespoke software built for your unique workflows. Scalable, maintainable, and designed to give you a competitive edge.",
    longDescription:
      "Off-the-shelf software forces you to adapt your business to its limitations. We build the opposite — software that adapts to your business. From internal tools to customer-facing platforms, we engineer solutions that solve your specific challenges with precision. Our code is clean, tested, and documented, so your team can maintain and extend it for years to come.",
    iconKey: "code",
    gradient: "from-violet-500/[0.08] via-violet-400/[0.03]",
    glowColor: "rgba(139,92,246,0.08)",
    benefits: [
      "Built around your unique business processes",
      "Enterprise-grade security and compliance",
      "API-first architecture for seamless integrations",
      "Comprehensive documentation and knowledge transfer",
      "Long-term maintainability with clean code practices",
    ],
    tags: ["Python", "Go", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    process: [
      { title: "Discovery", description: "Deep stakeholder interviews, workflow mapping, and requirements engineering." },
      { title: "System Design", description: "Architecture decisions, data modeling, and integration planning." },
      { title: "Build & Test", description: "Test-driven development with automated CI/CD pipelines." },
      { title: "Deploy & Scale", description: "Cloud-native deployment with auto-scaling and monitoring." },
    ],
  },
  {
    slug: "ui-ux-design",
    number: "03",
    title: "UI/UX Design",
    tagline: "Design that converts visitors into customers",
    description:
      "User-centered design backed by research, testing, and an obsessive attention to every interaction.",
    longDescription:
      "Great design isn't about making things pretty — it's about making them work. We start with research to understand your users, then architect experiences that guide them toward their goals (and yours). Every pixel has a purpose. Every interaction is intentional. The result is interfaces that feel intuitive, look stunning, and drive measurable business outcomes.",
    iconKey: "palette",
    gradient: "from-rose-500/[0.08] via-rose-400/[0.03]",
    glowColor: "rgba(244,63,94,0.06)",
    benefits: [
      "Research-backed design decisions, not guesswork",
      "Conversion-optimized user flows and interfaces",
      "Design systems for brand consistency at scale",
      "Interactive prototypes for stakeholder alignment",
      "Usability testing to validate before building",
    ],
    tags: ["Figma", "Prototyping", "User Research", "Design Systems", "Motion Design"],
    process: [
      { title: "Research", description: "User interviews, competitive analysis, and heuristic evaluation." },
      { title: "Wireframing", description: "Low-fidelity layouts to define structure and user flows." },
      { title: "Visual Design", description: "High-fidelity mockups with brand-aligned aesthetics." },
      { title: "Validation", description: "Usability testing and iterative refinement based on real feedback." },
    ],
  },
  {
    slug: "automation",
    number: "04",
    title: "Automation",
    tagline: "Eliminate repetitive work, amplify your team",
    description:
      "Smart workflows, intelligent integrations, and AI-powered solutions that save hundreds of hours every month.",
    longDescription:
      "Your team's time is too valuable for repetitive tasks. We identify bottlenecks in your operations and build automated solutions that handle them — from data processing pipelines to AI-powered decision support. The result is a leaner, faster organization where humans focus on creative and strategic work while machines handle the rest.",
    iconKey: "cpu",
    gradient: "from-amber-500/[0.06] via-amber-400/[0.02]",
    glowColor: "rgba(245,158,11,0.06)",
    benefits: [
      "Reduce manual work by up to 80%",
      "Real-time data processing and reporting",
      "Intelligent workflows that adapt to your needs",
      "Seamless integration with existing tools and APIs",
      "AI/ML capabilities for predictive insights",
    ],
    tags: ["API Integration", "CI/CD", "DevOps", "AI/ML", "Workflow Automation", "Python"],
    process: [
      { title: "Audit", description: "Map your current workflows and identify automation opportunities." },
      { title: "Design", description: "Architect the automation pipeline with reliability and monitoring." },
      { title: "Build", description: "Develop integrations, scripts, and AI models." },
      { title: "Monitor", description: "Deploy with dashboards and alerts to ensure everything runs smoothly." },
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
