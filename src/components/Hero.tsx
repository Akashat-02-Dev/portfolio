"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { DATA } from "../data";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -48]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div style={{ y: parallaxY }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
          >
            {DATA.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {DATA.hero.subHeadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {DATA.hero.cta.primary}
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors"
            >
              {DATA.hero.cta.secondary}
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
