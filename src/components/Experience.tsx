"use client";
import { motion } from "framer-motion";
import { DATA } from "../data";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
        >
            Work Experience
        </motion.h2>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
            {DATA.experience.map((exp, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 md:pl-12"
                >
                    <span className="absolute -left-[9px] top-0 bg-background border border-border p-1 rounded-full text-primary">
                        <Briefcase size={14} />
                    </span>
                    
                    <div className="glass-card p-6 rounded-xl hover:bg-card/80 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                            <h3 className="font-bold text-lg">{exp.role}</h3>
                            <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                                {exp.date}
                            </span>
                        </div>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {exp.achievement}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
