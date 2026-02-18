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
  /** Folder name under /images/projects/ containing screenshots */
  imageFolder?: string;
  /** Image filenames in that folder (first = cover) */
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "helix-platform",
    title: "Helix",
    subtitle: "Engineering Operations Platform",
    category: "Web Development",
    year: "2025",
    client: "Helix Technologies",
    imageFolder: "helix",
    images: ["inventory.png", "login.png", "vendor.png", "warehouse.png"],
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
    imageFolder: "nurture-pnw-staffing",
    images: ["home.png"],
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
  {
    slug: "exclusive-links",
    title: "Exclusive Links",
    subtitle: "Link Management Platform",
    category: "Web Development",
    year: "2025",
    client: "Exclusive Links",
    description:
      "A platform for creating and managing exclusive links with dashboard analytics, listing management, and detailed tracking.",
    challenge:
      "Users needed a centralized way to create exclusive links, track performance, and manage listings across multiple channels.",
    solution:
      "We built a full-stack platform with a dashboard for analytics, listing creation and management, detailed views for each link, and secure login flows.",
    outcome:
      "Streamlined link management. Real-time analytics. Improved conversion tracking.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    color: "#6366f1",
    gradient: "from-indigo-500/20 to-indigo-600/5",
    size: "medium",
    featured: false,
    imageFolder: "exclusive-links",
    images: [
      "dashboard.png",
      "details.png",
      "listing.png",
      "login.png",
      "create-listing.png",
    ],
  },
  {
    slug: "heroes",
    title: "Heroes",
    subtitle: "Membership & Community Platform",
    category: "Web Development",
    year: "2025",
    client: "Heroes",
    description:
      "A membership platform with signup flows and community features.",
    challenge:
      "Building an engaging membership experience with seamless onboarding.",
    solution:
      "We developed a modern platform with intuitive signup, membership management, and a welcoming home experience.",
    outcome: "Streamlined onboarding. Improved member engagement.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "#ef4444",
    gradient: "from-red-500/20 to-red-600/5",
    size: "medium",
    featured: false,
    imageFolder: "heroes",
    images: ["home.png", "membership.png", "signup.png"],
  },
  {
    slug: "print-sathi",
    title: "Print Sathi",
    subtitle: "Print Services Platform",
    category: "Web Development",
    year: "2025",
    client: "Print Sathi",
    description:
      "A platform for finding print services with location-based discovery.",
    challenge: "Connecting users with local print services efficiently.",
    solution:
      "We built a platform with location search, print service discovery, and an intuitive home experience.",
    outcome: "Easier discovery of print services. Location-based convenience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "#14b8a6",
    gradient: "from-teal-500/20 to-teal-600/5",
    size: "medium",
    featured: false,
    imageFolder: "print-sathi",
    images: ["home.png", "location.png", "print.png"],
  },
  {
    slug: "supernal-ai",
    title: "Supernal AI",
    subtitle: "Vendor Product Directory",
    category: "Custom Software",
    year: "2025",
    client: "Supernal AI",
    description: "An AI-powered vendor and product directory platform.",
    challenge: "Organizing vendor products and enabling efficient discovery.",
    solution:
      "We developed a vendor product directory with signup flows and comprehensive product listings.",
    outcome: "Streamlined vendor onboarding. Improved product discoverability.",
    tags: ["Next.js", "TypeScript", "AI", "Tailwind CSS"],
    color: "#a855f7",
    gradient: "from-purple-500/20 to-purple-600/5",
    size: "medium",
    featured: false,
    imageFolder: "supernal-ai",
    images: ["signin.png", "vendor-product-directory.png"],
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

/** Returns the full path for a project image (e.g. /images/projects/helix/inventory.png) */
export function getProjectImagePath(
  project: Project,
  imageName: string,
): string {
  if (!project.imageFolder) return "";
  return `/images/projects/${project.imageFolder}/${imageName}`;
}

/** Returns the cover image path (first image) or null */
export function getProjectCoverImage(project: Project): string | null {
  if (!project.imageFolder || !project.images?.length) return null;
  return getProjectImagePath(project, project.images[0]);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
