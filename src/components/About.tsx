"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Code2, Cpu, Globe } from "lucide-react";
import { DATA } from "../data";
import { cn } from "@/lib/utils";

// Reusable Bento Card Wrapper
const BentoItem = ({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.02 }}
    className={cn(
      "relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-md p-6 flex flex-col justify-between",
      className
    )}
  >
    {children}
  </motion.div>
);

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10" />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A glimpse into my world—where engineering meets creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* 1. Bio Card - Large (Span 2x2) */}
          <BentoItem className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40" delay={0.1}>
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">The Builder&apos;s Mindset</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Results-oriented <span className="text-foreground font-medium">Electronics & Communication Engineering</span> undergraduate with strong proficiency in <span className="text-foreground font-medium">Full Stack Development</span>. 
                Expertise in architecting scalable web applications using the <span className="text-foreground font-medium">MERN stack</span>, <span className="text-foreground font-medium">Next.js</span>, and <span className="text-foreground font-medium">Python</span>. 
                Adept at leveraging cloud technologies and AI integrations to solve complex problems.
              </p>
            </div>
            {/* Decor */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </BentoItem>

          {/* 2. Profile / Avatar Card (Span 1x2) */}
          <BentoItem className="md:col-span-1 md:row-span-2 relative group p-0 h-full" delay={0.2}>
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-black z-0" />
             {/* Abstract Avatar Placeholder since no real image */}
            <div className="absolute inset-0 bg-neutral-900 z-10 overflow-hidden">
              <div className="absolute inset-0 bg-black animate-pulse z-0" />
              <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px] z-0" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 z-0" />

              <span className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-white/10 select-none z-10">
                AO
              </span>

              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl bg-black/35 backdrop-blur-sm border border-white/10 px-4 py-3">
                <h3 className="text-white font-bold text-xl leading-tight">Akashat Ojha</h3>
                <p className="text-white/70 text-sm leading-tight mt-1">Engineer & Developer</p>
              </div>
            </div>
          </BentoItem>

          {/* 3. Location Card (Span 1x1) */}
          <BentoItem className="md:col-span-1 md:row-span-1 bg-neutral-900/80" delay={0.3}>
             <div className="flex flex-col h-full justify-between">
               <div className="flex items-center justify-between">
                 <MapPin className="text-blue-400 w-6 h-6" />
                 <div className="flex items-center gap-2">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                   </span>
                   <span className="text-xs text-green-500 font-medium">Based in</span>
                 </div>
               </div>
               <div>
                 <h4 className="text-xl font-semibold text-white">Kolkata</h4>
                 <p className="text-sm text-neutral-400">India</p>
               </div>
               {/* Map Pattern Overlay */}
               <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
             </div>
          </BentoItem>

          {/* 4. Experience Stat (Span 1x1) */}
          <BentoItem className="md:col-span-1 md:row-span-1 bg-neutral-900/80" delay={0.4}>
             <div className="flex flex-col h-full justify-between">
               <Briefcase className="text-orange-400 w-6 h-6" />
               <div>
                 <div className="text-3xl font-bold text-white mb-1">Key Internship</div>
                 <p className="text-sm text-neutral-400">Code Clause</p>
                 <p className="text-xs text-neutral-500 mt-1">Web Development Intern</p>
               </div>
             </div>
          </BentoItem>

          {/* 5. Tech Stack Marquee (Span 2x1) */}
          <BentoItem className="md:col-span-2 md:row-span-1 p-0 overflow-hidden flex flex-col justify-center bg-neutral-900/30" delay={0.5}>
             <div className="px-6 pt-4 pb-2">
               <div className="flex items-center gap-2 mb-2">
                 <Code2 className="w-4 h-4 text-purple-400" />
                 <span className="text-sm font-medium text-neutral-400">Tech Stack</span>
               </div>
             </div>
             
             {/* Infinite Marquee */}
             <div className="relative flex overflow-hidden py-4 group">
               <div className="flex gap-8 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                  {[...DATA.skills.languages, ...DATA.skills.frameworks, ...DATA.skills.cloudTools].map((tech, i) => (
                    <span key={i} className="text-lg font-medium text-neutral-300/80 hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                  {/* Duplicate for smooth loop */}
                  {[...DATA.skills.languages, ...DATA.skills.frameworks, ...DATA.skills.cloudTools].map((tech, i) => (
                    <span key={`dup-${i}`} className="text-lg font-medium text-neutral-300/80 hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
               </div>
               
               {/* Fade Edges */}
               <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-neutral-900/90 to-transparent z-10" />
               <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-900/90 to-transparent z-10" />
             </div>
          </BentoItem>

          {/* 6. Education Card (Span 1x1) */}
          <BentoItem className="md:col-span-1 md:row-span-1" delay={0.6}>
             <div className="flex flex-col h-full justify-between">
               <GraduationCap className="text-yellow-500 w-6 h-6" />
               <div>
                 <h4 className="text-sm font-medium text-foreground whitespace-normal break-words leading-snug">
                   {DATA.about.education.institution}
                 </h4>
                 <p className="text-xs text-muted-foreground mt-1 whitespace-normal break-words leading-snug">
                   {DATA.about.education.degree}
                 </p>
                 <div className="mt-3 inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                   <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">CGPA: {DATA.about.education.cgpa}</span>
                 </div>
               </div>
             </div>
          </BentoItem>

          {/* 7. Connect / Social (Span 1x1) */}
          <BentoItem className="md:col-span-1 md:row-span-1 bg-neutral-900/80 group cursor-pointer" delay={0.7}>
             <a href="#contact" className="flex flex-col h-full justify-between">
               <Globe className="text-cyan-400 w-6 h-6 group-hover:rotate-12 transition-transform" />
               <div>
                 <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">Let&apos;s Connect</h4>
                 <p className="text-sm text-neutral-400 mt-1">Open for opportunities</p>
               </div>
             </a>
          </BentoItem>

        </div>
      </div>
    </section>
  );
};
