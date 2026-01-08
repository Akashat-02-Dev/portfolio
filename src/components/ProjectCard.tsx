"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: readonly string[];
  link: string;
  videoUrl: string;
  thumbnail: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  link,
  videoUrl,
  thumbnail,
  className,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobileApp = title.includes("Chat Application");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          if (error.name !== "AbortError") {
            console.error("Video play failed:", error);
          }
        });
      }
    } else {
      video.pause();
    }
  }, [isHovered]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block h-full w-full overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Thumbnail Image */}
        <motion.img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Video Player */}
        <motion.div
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isMobileApp ? (
            // Mobile Frame Wrapper
            <div className="flex h-full w-full items-center justify-center bg-black/50 p-4">
              <div className="relative aspect-[9/19] h-[90%] overflow-hidden rounded-[2rem] border-4 border-neutral-800 bg-black shadow-xl ring-1 ring-white/10">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  poster={thumbnail}
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="h-full w-full object-cover"
                />
                {/* Notch */}
                <div className="absolute top-0 left-1/2 h-4 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-800" />
              </div>
            </div>
          ) : (
            // Standard Video
            <video
              ref={videoRef}
              src={videoUrl}
              poster={thumbnail}
              loop
              muted
              playsInline
              preload="none"
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-100 transition-opacity duration-300">
        {/* Top: Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bottom: Title & Description */}
        <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-black">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-2 text-sm text-neutral-300 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      
      {/* Mobile Play Hint (Visible only on touch devices if needed, but hover handles desktop) */}
      <div className="absolute inset-0 z-20 hidden items-center justify-center md:hidden group-active:flex pointer-events-none">
          <Play className="h-12 w-12 text-white/50" />
      </div>
    </a>
  );
}
