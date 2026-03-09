"use client";

import { motion } from "framer-motion";
import { DATA } from "../data";
import { Github, Linkedin, ArrowUpRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function BioCard({ className }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-neutral-900/50 border border-white/10 p-8 backdrop-blur-md transition-colors duration-500 hover:bg-neutral-900/80 hover:border-white/20",
        className
      )}
    >
      {/* Header: Avatar & Info */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/10 shadow-lg">
            <img
              src="https://placehold.co/200x200/1a1a1a/ffffff?text=AO"
              alt="Akashat Ojha"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
              Akashat Ojha
            </h3>
            <p className="text-sm font-medium text-neutral-400">
              Full Stack Developer
            </p>
            <div className="mt-1 flex items-center gap-2 text-xs text-neutral-500">
                <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    Open to work
                </span>
            </div>
          </div>
        </div>
        
        {/* Social Actions */}
        <div className="flex gap-2">
            <a 
                href={DATA.contact.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <Github size={18} />
            </a>
            <a 
                href={DATA.contact.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <Linkedin size={18} />
            </a>
        </div>
      </div>

      {/* Bio Text */}
      <div className="mb-6 relative z-10">
        <p className="text-base text-neutral-300 leading-relaxed">
          Results-oriented <span className="text-indigo-400 font-semibold">Electronics & Communication Engineering</span> undergraduate. 
          Expertise in architecting scalable web applications using the <span className="text-white font-medium">MERN stack</span>, <span className="text-white font-medium">Next.js</span>, and <span className="text-white font-medium">Python</span>. 
          Adept at leveraging <span className="text-indigo-400">cloud technologies</span> and <span className="text-indigo-400">AI integrations</span>.
        </p>
      </div>

      {/* Skills / Footer */}
      <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
         {["Next.js", "React", "TypeScript", "Python", "AWS"].map((skill) => (
             <span key={skill} className="px-3 py-1 text-xs font-medium text-neutral-400 bg-white/5 rounded-full border border-white/5 group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-colors">
                 {skill}
             </span>
         ))}
         <a 
            href={DATA.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-1 text-xs font-semibold text-neutral-400 hover:text-white transition-colors group/resume"
         >
            Download CV <Download size={14} className="group-hover/resume:translate-y-0.5 transition-transform" />
         </a>
         <a 
            href={`mailto:${DATA.contact.email}`}
            className="ml-auto flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
         >
            Contact Me <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
         </a>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 h-48 w-48 rounded-full bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
    </motion.div>
  );
}
