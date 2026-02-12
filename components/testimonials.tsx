"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TESTIMONIALS = [
  {
    rating: 5,
    quote:
      "Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding, they've helped us create a cohesive and compelling brand identity.",
    name: "Mark Ramirez",
    role: "Owner of Luna's Inc",
    avatar: "MR",
    featured: true,
  },
  {
    rating: 4,
    quote:
      "As a fellow creative professional, I have high standards when it comes to design. They not only met but exceeded those standards, and also optimized it for a seamless user experience.",
    name: "Thomas Gala",
    role: "Founder Zentech Wellness",
    avatar: "TG",
    featured: false,
  },
  {
    rating: 5,
    quote:
      "Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding, they've helped us create a cohesive and compelling brand identity.",
    name: "Sarah Chen",
    role: "CEO at Growth Labs",
    avatar: "SC",
    featured: false,
    hideArrow: true,
  },
];

const MUTED_GREEN = "#5a7d5a";
const MUTED_GREEN_LIGHT = "#7a9d7a";

function StarRating({ rating, white }: { rating: number; white?: boolean }) {
  const className = `h-5 w-5 shrink-0 ${white ? "text-white" : "text-foreground"}`;
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= rating ? (
          <svg key={i} className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ) : (
          <svg key={i} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      )}
    </div>
  );
}

function TestimonialCard({
  rating,
  quote,
  name,
  role,
  avatar,
  featured,
  hideArrow,
  index,
}: (typeof TESTIMONIALS)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-6 shadow-lg ${
        featured ? "text-white" : "bg-card text-foreground border border-border/50"
      }`}
      style={featured ? { background: MUTED_GREEN } : undefined}
    >
      <StarRating rating={rating} white={featured} />
      <blockquote className="mt-4 text-[15px] leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-5 flex items-center gap-3">
        <div
          className="h-10 w-10 shrink-0 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold"
          aria-hidden
        >
          {avatar}
        </div>
        <div>
          <p className={`font-semibold ${featured ? "text-white" : "text-foreground"}`}>{name}</p>
          <p className={`text-sm ${featured ? "text-white/80" : "text-muted-foreground"}`}>{role}</p>
        </div>
      </div>
      {!hideArrow && (
        <button
          type="button"
          className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-xl transition hover:opacity-90"
          style={{
            background: featured ? "rgba(255,255,255,0.2)" : "var(--muted)",
            color: featured ? "white" : "var(--foreground)",
          }}
          aria-label="Next testimonial"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </motion.article>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="testimonials" className="relative bg-zinc-100/80 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1fr] lg:gap-16">
          {/* Left: Title + Image */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]">
              Hear From Our Satisfied Clients Have To Say ❤️
            </h2>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/section-bg.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden />
              <div
                className="absolute bottom-6 right-6 text-4xl font-bold text-white drop-shadow-lg sm:text-5xl"
                aria-hidden
              >
                10.9K+
              </div>
            </div>
          </motion.div>

          {/* Right: Testimonial cards */}
          <div className="flex flex-col justify-center gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl px-8 py-8 sm:flex-row sm:px-12"
          style={{ background: MUTED_GREEN }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-2xl font-bold text-white sm:text-3xl">Are u The Next One!</p>
          <a
            href="#contact"
            className="shrink-0 rounded-xl border-2 border-white/40 bg-white/20 px-8 py-3.5 font-semibold text-white transition hover:bg-white/30"
            style={{ borderColor: MUTED_GREEN_LIGHT }}
          >
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
