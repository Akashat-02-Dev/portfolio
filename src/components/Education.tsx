"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { DATA } from "../data";
import { cn } from "@/lib/utils";

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-neutral-950/50">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My academic journey and qualifications that have shaped my technical foundation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DATA.education.map((edu, index) => (
            <motion.div
              key={`${edu.level}-${edu.date}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col justify-between h-full p-8 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-md hover:bg-neutral-900/80 hover:border-primary/20 hover:shadow-2xl transition-all duration-300"
            >
              {/* Floating Icon Background */}
              <div className="absolute -right-6 -top-6 text-neutral-800/50 group-hover:text-primary/5 transition-colors duration-500">
                <GraduationCap size={120} strokeWidth={0.5} />
              </div>

              <div>
                {/* Header: Date & Score */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-400 group-hover:text-white transition-colors">
                    <Calendar size={12} />
                    {edu.date}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary shadow-[0_0_10px_-3px_rgba(var(--primary),0.3)]">
                    <Award size={12} />
                    {edu.score}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary/90 transition-colors">
                    {edu.level}
                  </h3>
                  
                  <div className="space-y-1 mb-4">
                    <p className="text-neutral-300 font-medium text-sm md:text-base">
                      {edu.institution}
                    </p>
                    <p className="text-neutral-500 text-xs md:text-sm">
                      {edu.board}
                    </p>
                  </div>

                  {edu.field && (
                    <div className="inline-block px-3 py-1.5 rounded-lg bg-secondary/30 text-secondary-foreground text-sm font-medium border border-white/5">
                      {edu.field}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Decoration Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
