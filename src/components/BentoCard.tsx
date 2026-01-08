"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  tech: readonly string[];
  className?: string;
  href?: string;
}

export function BentoCard({ title, description, tech, className, href = "#" }: BentoCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block h-full w-full",
        className
      )}
    >
      <motion.div
        whileHover="hover"
        initial="rest"
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 p-6 transition-all duration-500 h-full"
      >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      {/* Tech Stack Pills - Top */}
      <div className="flex flex-wrap gap-2 z-10">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-xs font-medium text-neutral-300 bg-white/5 rounded-full backdrop-blur-sm border border-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Content - Bottom */}
      <div className="relative z-10 mt-auto pt-10">
        {/* Title & Arrow Row */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <motion.div
            variants={{
              rest: { opacity: 0, x: -10, y: 10 },
              hover: { opacity: 1, x: 0, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ArrowUpRight className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Description with Gradient Fade */}
        <div className="mt-2">
          <p className="text-sm text-neutral-400 line-clamp-2">{description}</p>
        </div>
      </div>

      {/* Subtle Scale on Hover */}
      <motion.div
        className="absolute inset-0 bg-neutral-900 -z-10"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.4 }}
      />
      </motion.div>
    </a>
  );
}
