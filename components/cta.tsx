"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Ready to build something great?
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tell us about your project. We’ll get back with a clear plan and next
          steps.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MagneticButton strength={0.35} radius={140}>
            <Button size="lg" asChild>
              <a href="mailto:hello@ryutech.com">hello@ryutech.com</a>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.3} radius={120}>
            <Button variant="outline" size="lg" asChild>
              <a href="#process">See our process</a>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
