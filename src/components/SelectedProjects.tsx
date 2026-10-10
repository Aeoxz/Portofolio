"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, X, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { ProjectItem } from "@/types/portfolio";

export default function SelectedProjects() {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-xl sm:text-2xl font-heading uppercase font-bold tracking-wider text-white whitespace-nowrap">
            SELECTED PROJECTS
          </h2>
          <div className="h-[1px] bg-neutral-800 flex-1 hidden md:block" />
        </div>

        <a
          href="#projects"
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors shrink-0"
        >
          <span>VIEW ALL PROJECTS</span>
          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-red-500 group-hover:translate-x-1.5 transition-all duration-300" />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group cursor-pointer rounded-xl overflow-hidden border border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-700 hover:bg-neutral-900/30 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Card Thumbnail Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Category pill on image */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 text-[10px] font-mono tracking-wider uppercase text-neutral-300">
                Preview
              </div>
            </div>

            {/* Card Bottom Meta Bar */}
            <div className="p-5 flex items-center justify-between border-t border-neutral-800/80 bg-neutral-950/90">
              <div className="flex items-center gap-4">
                {/* Index Number */}
                <span className="font-heading font-bold text-2xl text-red-600 tracking-tight group-hover:scale-110 transition-transform">
                  {project.index}
                </span>

                {/* Project Title & Category */}
                <div>
                  <h3 className="text-sm font-heading font-bold tracking-wider text-white uppercase group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase mt-0.5">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Action Arrow */}
              <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:border-red-600/60 group-hover:text-red-500 group-hover:bg-red-950/30 transition-all duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-800/60 hover:bg-neutral-800 transition-colors"
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
              <h3 className="text-2xl sm:text-3xl font-heading font-bold uppercase text-white tracking-wide">
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
                      className="px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-mono uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
