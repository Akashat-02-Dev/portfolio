"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { DATA } from "../data";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {DATA.education.map((edu, index) => (
            <motion.div
              key={`${edu.level}-${edu.date}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute -left-[9px] top-0 bg-background border border-border p-1 rounded-full text-primary">
                <GraduationCap size={14} />
              </span>

              <div className="glass-card p-6 rounded-xl hover:bg-card/80 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg">{edu.level}</h3>
                  <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {edu.date}
                  </span>
                </div>

                <p className="text-primary font-medium">{edu.institution}</p>

                {edu.field ? (
                  <p className="text-muted-foreground text-sm mt-2">
                    {edu.field}
                  </p>
                ) : null}

                <p className="text-muted-foreground text-sm mt-1">
                  {edu.board}
                </p>

                <div className="mt-4 inline-flex items-center px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-semibold text-primary">
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

