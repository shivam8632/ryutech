"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SERVICES = [
  {
    title: "Website development",
    description:
      "Custom sites from landing pages to content-heavy platforms. Responsive, accessible, and built for performance.",
    icon: "/vectors/icon-website.svg",
  },
  {
    title: "Web applications",
    description:
      "Full-stack apps, dashboards, and SaaS products. Scalable architecture and modern tooling.",
    icon: "/vectors/icon-webapp.svg",
  },
  {
    title: "Integration & APIs",
    description:
      "Connect your systems, third-party services, and data. Secure and maintainable integrations.",
    icon: "/vectors/icon-api.svg",
  },
];

function ServiceCard({
  title,
  description,
  icon,
  index,
}: (typeof SERVICES)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-colors hover:border-border hover:bg-card">
        <CardHeader>
          <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted/80 text-muted-foreground">
            <Image src={icon} alt="" width={32} height={32} className="opacity-90" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.2], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32 bg-muted/20"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 -top-20 w-[600px] h-[600px] opacity-50">
          <Image src="/vectors/blob-1.svg" alt="" width={600} height={600} className="h-full w-full object-contain [color:var(--accent)]" />
        </div>
        <div className="absolute right-0 top-1/4 w-[500px] h-[400px] opacity-40 -translate-y-1/2 hidden lg:block">
          <Image src="/vectors/blob-2.svg" alt="" width={500} height={400} className="h-full w-full object-contain [color:var(--accent)]" />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          style={{ y, opacity }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            What we do
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Services that scale with you
          </h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
