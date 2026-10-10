"use client";

import React from "react";
import { 
  Search, 
  Lightbulb, 
  PenTool, 
  Code2, 
  Send, 
  Quote, 
  Plus 
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function EducationAndSkills() {
  const { education, skills, process, quote } = portfolioData;

  const renderProcessIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-3.5 h-3.5 text-red-500" />;
      case "Lightbulb":
        return <Lightbulb className="w-3.5 h-3.5 text-red-500" />;
      case "PenTool":
        return <PenTool className="w-3.5 h-3.5 text-red-500" />;
      case "Code2":
        return <Code2 className="w-3.5 h-3.5 text-red-500" />;
      case "Send":
        return <Send className="w-3.5 h-3.5 text-red-500" />;
      default:
        return <Search className="w-3.5 h-3.5 text-red-500" />;
    }
  };

  return (
    <section id="education-skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
        
        {/* ================= LEFT COLUMN: EDUCATION & SKILLS ================= */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading uppercase font-bold tracking-wider text-white">
              EDUCATION & SKILLS
            </h2>
          </div>

          {/* EDUCATION SECTION */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold">
              EDUCATION
            </h3>

            <div className="space-y-5">
              {education.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-800/60 last:border-0"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-sans font-semibold text-neutral-100">
                      {item.degree}
                    </h4>
                    <p className="text-xs font-mono text-neutral-400">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-medium text-red-500 whitespace-nowrap pt-0.5">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div className="space-y-6 pt-4 border-t border-neutral-800/80">
            <h3 className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold">
              SKILLS
            </h3>

            {/* Badges Tag Grid */}
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 rounded-lg bg-neutral-950/80 border border-neutral-800 text-[11px] font-mono tracking-wider uppercase text-neutral-300 hover:border-red-600/70 hover:text-white hover:bg-red-950/20 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: WORK PROCESS & QUOTE CARD ================= */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Work Process Timeline (Sub-column) */}
          <div className="md:col-span-7 space-y-6" id="process">
            <h3 className="text-xl font-heading uppercase font-bold tracking-wider text-white mb-6">
              WORK PROCESS
            </h3>

            <div className="relative space-y-7 before:absolute before:top-4 before:bottom-4 before:left-[17px] before:w-[1px] before:bg-neutral-800">
              {process.map((step) => (
                <div key={step.step} className="relative flex items-start gap-4 group">
                  {/* Step Icon Badge */}
                  <div className="relative z-10 w-9 h-9 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-red-600 group-hover:bg-red-950/20 transition-colors">
                    {renderProcessIcon(step.iconName)}
                  </div>

                  {/* Step Description */}
                  <div className="pt-0.5 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-red-600">
                        {step.step}
                      </span>
                      <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-white group-hover:text-red-500 transition-colors">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Callout Card (Sub-column) */}
          <div className="md:col-span-5 flex flex-col">
            <div className="quote-card-gradient rounded-2xl p-7 border border-red-900/60 flex flex-col justify-between h-full min-h-[380px] shadow-2xl relative">
              {/* Top Quote Mark Icon */}
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-red-500/80 rotate-180" />
                <p className="text-base sm:text-lg font-sans font-medium text-white leading-relaxed">
                  &ldquo;{quote.text}&rdquo;
                </p>
              </div>

              {/* Middle Signature */}
              <div className="my-6">
                <span className="font-script text-4xl text-neutral-100 block tracking-wider">
                  {quote.author}
                </span>
              </div>

              {/* Bottom Callout Subtext */}
              <div className="pt-4 border-t border-red-800/40 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-300">
                <span>{quote.subtext}</span>
                <Plus className="w-4 h-4 text-red-400" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
