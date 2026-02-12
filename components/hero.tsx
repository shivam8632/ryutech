"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--hero-bg)] px-6 pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-[1px]" aria-hidden />
      </div>

      {/* Vector illustration */}
      <motion.div
        className="absolute right-[5%] top-1/2 z-0 hidden w-[280px] -translate-y-1/2 text-muted-foreground/40 lg:block xl:w-[360px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Image
          src="/vectors/hero-dev.svg"
          alt=""
          width={360}
          height={270}
          className="h-auto w-full"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          IT Services · Web Development
        </motion.p>
        <motion.h1
          className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Your vision,
          <br />
          <span className="text-foreground/75">built for the web.</span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          We build websites and web applications that are fast, scalable, and
          focused on your goals.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <MagneticButton strength={0.35} radius={140}>
            <Button size="lg" asChild>
              <a href="#contact">Start a project</a>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.3} radius={120}>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">View services</a>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="block h-10 w-6 rounded-full border-2 border-muted-foreground/50"
        />
      </motion.div>
    </section>
  );
}
