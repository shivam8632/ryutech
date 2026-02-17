export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  color: string;
  gradient: string;
  size: "large" | "medium" | "small";
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "helix-platform",
    title: "Helix",
    subtitle: "Engineering Operations Platform",
    category: "Web Development",
    year: "2025",
    client: "Helix Technologies",
    description:
      "A unified platform for engineering teams to manage deployments, track incidents, and collaborate in real-time across distributed systems.",
    challenge:
      "Engineering teams were juggling five different tools for deployment tracking, incident management, and team communication. Context switching was killing productivity, and critical information was scattered across platforms.",
    solution:
      "We built a single-pane-of-glass platform that unifies deployment pipelines, incident workflows, and team collaboration. Real-time updates via WebSockets, role-based access control, and deep integrations with GitHub, Slack, and PagerDuty.",
    outcome:
      "3x improvement in deployment frequency. 40% reduction in incident response time. Team adopted it within 2 weeks.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSockets", "AWS"],
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-600/5",
    size: "large",
    featured: true,
  },
  {
    slug: "nurture-staffing",
    title: "Nurture PNW",
    subtitle: "Healthcare Staffing Platform",
    category: "Custom Software",
    year: "2024",
    client: "Nurture PNW Staffing",
    description:
      "An intelligent staffing platform connecting healthcare facilities with qualified professionals through AI-powered matching.",
    challenge:
      "Manual matching of healthcare professionals to facility needs was slow, error-prone, and couldn't scale. Placement coordinators spent 70% of their time on administrative tasks instead of relationship building.",
    solution:
      "We developed a matching algorithm that considers credentials, preferences, location, and historical performance. Automated compliance verification, real-time availability tracking, and a mobile app for professionals to manage their schedules.",
    outcome:
      "85% reduction in placement time. 40% increase in successful placements. Platform handles 500+ active professionals.",
    tags: ["React", "Node.js", "MongoDB", "Python", "AI/ML", "AWS"],
    color: "#10b981",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    size: "medium",
    featured: true,
  },
  {
    slug: "meridian-finance",
    title: "Meridian",
    subtitle: "Financial Analytics Dashboard",
    category: "UI/UX Design",
    year: "2025",
    client: "Meridian Capital",
    description:
      "A real-time financial analytics dashboard providing institutional-grade insights for portfolio managers and analysts.",
    challenge:
      "Portfolio managers were using spreadsheets and legacy tools to track positions across multiple asset classes. Data was delayed, visualizations were primitive, and decision-making suffered.",
    solution:
      "We designed and built a modern analytics dashboard with real-time data streaming, interactive charts, customizable views, and AI-powered anomaly detection. The interface was designed for high-information-density without cognitive overload.",
    outcome:
      "Decision-making speed improved by 60%. Eliminated 4 legacy tools. Adopted by 3 additional departments.",
    tags: ["React", "D3.js", "WebSockets", "Python", "Figma", "PostgreSQL"],
    color: "#8b5cf6",
    gradient: "from-violet-500/20 to-violet-600/5",
    size: "medium",
    featured: false,
  },
  {
    slug: "autoflow-crm",
    title: "AutoFlow",
    subtitle: "Sales Automation CRM",
    category: "Automation",
    year: "2024",
    client: "AutoFlow Inc.",
    description:
      "A CRM with built-in automation that eliminates manual data entry and automates follow-up sequences based on prospect behavior.",
    challenge:
      "Sales reps were spending 3+ hours daily on manual CRM updates, follow-up scheduling, and pipeline management. Leads were falling through the cracks, and forecasting was unreliable.",
    solution:
      "We built automation layers on top of a clean CRM foundation — automatic contact enrichment, behavior-triggered email sequences, smart task prioritization, and predictive lead scoring using machine learning.",
    outcome:
      "Sales reps recovered 15 hours/week. Lead conversion rate increased by 35%. Pipeline accuracy improved to 92%.",
    tags: ["Next.js", "Python", "PostgreSQL", "OpenAI", "Redis", "Stripe"],
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-amber-600/5",
    size: "large",
    featured: true,
  },
  {
    slug: "vaultkey-security",
    title: "VaultKey",
    subtitle: "Zero-Trust Access Platform",
    category: "Custom Software",
    year: "2025",
    client: "VaultKey Security",
    description:
      "A zero-trust identity and access management platform for enterprises with complex compliance requirements.",
    challenge:
      "The client's existing IAM solution couldn't handle multi-tenant access patterns, lacked audit trails for SOC 2 compliance, and had a clunky admin interface that frustrated IT teams.",
    solution:
      "We engineered a zero-trust platform with fine-grained RBAC, complete audit logging, SSO/SAML integration, and an admin dashboard that makes complex access policies manageable. Built for SOC 2, HIPAA, and GDPR compliance.",
    outcome:
      "SOC 2 certification achieved in 3 months. Admin task time reduced by 70%. Zero security incidents post-launch.",
    tags: ["Go", "React", "PostgreSQL", "OAuth 2.0", "Docker", "Terraform"],
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    size: "small",
    featured: false,
  },
  {
    slug: "bloom-ecommerce",
    title: "Bloom",
    subtitle: "D2C E-Commerce Experience",
    category: "Web Development",
    year: "2024",
    client: "Bloom Botanicals",
    description:
      "A premium e-commerce experience for a direct-to-consumer botanicals brand, with a focus on storytelling and conversion.",
    challenge:
      "The brand had beautiful products but their online presence didn't match. Conversion rates were below industry average, mobile experience was poor, and the checkout flow had a 78% abandonment rate.",
    solution:
      "We redesigned the entire shopping experience with immersive product storytelling, a streamlined 2-step checkout, persistent cart, and performance optimization that brought page loads under 1.5 seconds.",
    outcome:
      "Conversion rate increased by 180%. Mobile revenue grew by 220%. Checkout abandonment dropped to 31%.",
    tags: ["Next.js", "Shopify", "TypeScript", "Stripe", "Tailwind CSS"],
    color: "#ec4899",
    gradient: "from-pink-500/20 to-pink-600/5",
    size: "small",
    featured: false,
  },
];

export const categories = [
  "All",
  "Web Development",
  "Custom Software",
  "UI/UX Design",
  "Automation",
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
