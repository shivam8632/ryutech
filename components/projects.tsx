"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/tilt-card";

const PROJECTS = [
  {
    id: "exclusive-links",
    title: "Exclusive Links",
    category: "Web Application",
    description: "Listing platform with dashboard, create listing, and details views. Built for streamlined listing management and user workflows.",
    image: "/images/projects/exclusive-links/dashboard.png",
    featured: true,
  },
  {
    id: "helix",
    title: "Helix",
    category: "Inventory & Logistics",
    description: "Warehouse and inventory management with vendor portal, login, and warehouse views.",
    image: "/images/projects/helix/warehouse.png",
    featured: false,
  },
  {
    id: "nurture-pnw-staffing",
    title: "Nurture PNW Staffing",
    category: "Staffing",
    description: "Staffing and recruitment platform with a clean, focused home experience.",
    image: "/images/projects/nurture-pnw-staffing/home.png",
    featured: false,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 24 },
  },
};

function FeaturedCard({
  project,
  isVisible,
}: {
  project: (typeof PROJECTS)[0];
  isVisible: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      variants={item}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-foreground/10"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Image container – always visible so the card is never an empty grey box */}
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted/50 md:aspect-[3/1]">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: hover ? 1.12 : 1,
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent"
          initial={false}
          animate={{ opacity: hover ? 1 : 0.9 }}
          transition={{ duration: 0.3 }}
        />
        {/* Overlay content – staggered when section is in view */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
          <motion.span
            className="mb-2 inline-block w-fit rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground"
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.category}
          </motion.span>
          <motion.h3
            className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.description}
          </motion.p>
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.65 }}
          >
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href="#">
                View project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent"
          animate={{
            borderColor: hover ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0)",
            boxShadow: hover ? "inset 0 0 80px rgba(255,255,255,0.04)" : "none",
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      ref={ref}
      variants={item}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg transition-shadow duration-300 hover:border-border hover:shadow-xl hover:shadow-foreground/5"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{
        y: -8,
        transition: { type: "spring" as const, stiffness: 350, damping: 22 },
      }}
    >
      <TiltCard maxTilt={8} scale={1.02} className="h-full">
        <motion.a
          href="#"
          className="block h-full"
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 36, scale: 0.96 }
          }
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: hover ? 1.1 : 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"
              initial={false}
              animate={{ opacity: hover ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm"
              initial={false}
              animate={{ scale: hover ? 1.02 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {project.category}
            </motion.span>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground/90">
              {project.title}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
              {project.description}
            </p>
            <motion.span
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground/80"
              animate={{ x: hover ? 6 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              View project →
            </motion.span>
          </div>
        </motion.a>
      </TiltCard>
    </motion.article>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.15], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.12], [0.4, 1]);

  const featured = PROJECTS.find((p) => p.featured)!;
  const gridProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden pb-24 md:pb-32 bg-background"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/40 via-muted/10 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30 [color:var(--accent)]">
        <Image src="/vectors/circuit-lines.svg" alt="" width={400} height={300} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          ref={headingRef}
          className="mb-16 text-center md:mb-20"
          style={{ y, opacity }}
        >
          <motion.p
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Our work
          </motion.p>
          <motion.h2
            className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={
              headingInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 28, scale: 0.98 }
            }
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Projects we&apos;re proud of
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            From dashboards to e‑commerce and APIs — here’s a selection of what we’ve shipped.
          </motion.p>
        </motion.div>

        <motion.div
          ref={cardsRef}
          className="space-y-12 md:space-y-16"
          variants={container}
          initial="hidden"
          animate={cardsInView ? "show" : "hidden"}
        >
          <FeaturedCard project={featured} isVisible={cardsInView} />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">See all projects</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
