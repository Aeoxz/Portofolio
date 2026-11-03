"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, X, CheckCircle2, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { ProjectItem } from "@/types/portfolio";
import { WorksWheel, WorksWheelItem } from "@/components/ui/works-wheel";

export default function SelectedProjects() {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Map portfolio project items to WorksWheel items
  const wheelItems: WorksWheelItem[] = projects.map((project) => ({
    id: project.id,
    title: project.title,
    image: project.image,
    category: project.category,
    index: project.index,
    description: project.description,
    tags: project.tags,
    href: project.link,
  }));

  const handleWheelItemClick = (item: WorksWheelItem) => {
    const matched = projects.find((p) => p.title === item.title || p.id === item.id);
    if (matched) {
      setActiveProject(matched);
    }
  };

  return (
    <section id="projects" className="relative w-full py-6 md:py-12 overflow-hidden bg-transparent">
      {/* 3D Drum Perspective Carousel Showcase */}
      <WorksWheel
        items={wheelItems}
        onItemClick={handleWheelItemClick}
      />

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-red-500 font-heading font-bold text-xl">
                  {activeProject.index}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  {activeProject.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide">
                {activeProject.title}
              </h3>
            </div>

            {/* Project Image Preview */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-neutral-800">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Description */}
            <p className="text-sm text-neutral-300 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Tech Tags */}
            {activeProject.tags && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between border-t border-neutral-800">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Production Ready</span>
              </div>

              <a
                href={activeProject.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-mono uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Project Repo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
