"use client";

import { motion } from "framer-motion";
import { DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Languages",
    skills: DATA.skills.languages,
  },
  {
    title: "Frameworks",
    skills: DATA.skills.frameworks,
  },
  {
    title: "Tools & Cloud",
    skills: DATA.skills.cloudTools,
  },
];

export function TechSkills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Technical Arsenal
            </h2>
            <p className="text-neutral-400 max-w-[600px]">
              A constellation of technologies I use to craft digital experiences.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <FadeIn key={category.title} stagger={0.1} className="h-full">
              <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors duration-500">
                <h3 className="text-xl font-semibold mb-6 text-white/90">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-full cursor-default transition-all duration-300",
                        "bg-white/5 text-neutral-300 border border-white/5",
                        "hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      )}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
