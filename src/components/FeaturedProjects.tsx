"use client";

import { DATA } from "../data";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="container px-4 md:px-6 mx-auto">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Featured Work
            </h2>
            <p className="text-neutral-400 max-w-[600px] text-lg">
              A curated selection of projects that showcase my passion for building scalable and user-centric applications.
            </p>
          </div>
        </FadeIn>

        <FadeIn stagger={0.1}>
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {DATA.projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.detail}
                tech={project.tech}
                link={project.link}
                videoUrl={project.videoUrl}
                thumbnail={project.thumbnail}
                className={cn(
                  "col-span-1",
                  index === 0 && "md:col-span-2",
                  index === 2 && "md:col-span-1 lg:col-span-2"
                )}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
