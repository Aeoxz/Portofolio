"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Globe2, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden pt-6 pb-16 lg:py-12 border-b border-neutral-900/80">
      {/* Background Giant Display Typography: "PORTFOLIO" (Version 1 Scale) */}
      <div 
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-4 sm:top-2 md:top-0 left-0 right-0 flex justify-center items-center z-0 overflow-hidden"
      >
        <span 
          className="font-display uppercase text-[21vw] font-black leading-none tracking-normal text-red-600/90 sm:text-red-600/[0.88] drop-shadow-[0_10px_25px_rgba(220,38,38,0.25)] select-none opacity-90 transition-all duration-700"
          style={{ letterSpacing: "0.02em" }}
        >
          PORTFOLIO
        </span>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end min-h-[580px] lg:min-h-[660px]">
          
          {/* Left Column: Greeting, Name, Title, Bio & Availability */}
          <div className="lg:col-span-4 z-20 space-y-5 lg:pb-8 flex flex-col justify-end order-2 lg:order-1">
            {/* Script Greeting */}
            <div className="relative inline-block">
              <span className="font-script text-3xl sm:text-4xl text-neutral-200 tracking-wide">
                {personal.greeting}
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="font-heading uppercase text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[0.92]">
              {personal.name.split(" ")[0]} <br />
              <span className="text-white">{personal.name.split(" ").slice(1).join(" ")}</span>
            </h1>

            {/* Professional Sub-heading */}
            <div className="pt-1">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-red-600 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full inline-block animate-ping" />
                {personal.role} & {personal.subRole}
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-sm drop-shadow-sm">
              {personal.bio}
            </p>

            {/* Worldwide Availability Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] font-mono tracking-wider text-neutral-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <Globe2 className="w-3.5 h-3.5 text-red-500" />
                <span>{personal.availability.locationStatus}</span>
              </div>
            </div>
          </div>

          {/* Center Column: Portrait Image Area */}
          <div className="lg:col-span-5 relative flex justify-center items-end order-1 lg:order-2 h-[420px] sm:h-[520px] lg:h-[640px]">
            {/* Subtle backlight red glow behind portrait */}
            <div className="absolute bottom-12 w-64 h-64 bg-red-600/20 blur-3xl rounded-full pointer-events-none" />

            {/* Portrait Image with dark gradient blend */}
            <div className="relative w-full h-full max-w-md mx-auto flex items-end justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={personal.portraitImage.src}
                  alt={personal.portraitImage.alt}
                  fill
                  priority
                  className="object-cover object-top brightness-95 contrast-110 filter saturate-[0.85] rounded-b-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                />

                {/* Bottom gradient fade into dark page */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none" />
                
                {/* Side subtle vignette gradient for seamless blending */}
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#09090b]/50 to-transparent pointer-events-none hidden lg:block" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#09090b]/50 to-transparent pointer-events-none hidden lg:block" />
              </div>
            </div>
          </div>

          {/* Right Column: Tagline & Stats Counter Blocks */}
          <div className="lg:col-span-3 z-20 space-y-8 lg:pb-8 flex flex-col justify-end order-3">
            {/* Micro Tagline with Star/Sparkle Accent */}
            <div className="flex items-start gap-3 bg-neutral-950/70 p-4 rounded-xl border border-neutral-900/90 backdrop-blur-md max-w-xs shadow-lg">
              <div className="p-1.5 rounded-lg bg-red-950/40 border border-red-800/40 text-red-500 shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-red-500" />
              </div>
              <p className="text-xs text-neutral-300 font-sans leading-snug">
                {personal.tagline}
              </p>
            </div>

            {/* Side Stats Counters (Version 1 Scale) */}
            <div className="space-y-6 pt-2">
              {/* Stat 1 */}
              <div className="flex items-center gap-4 group">
                <div className="font-heading font-bold text-4xl sm:text-5xl text-red-600 tracking-tight transition-transform duration-300 group-hover:scale-105">
                  {personal.stats.yearsExperience}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold leading-tight border-l border-neutral-800 pl-3">
                  Years <br />
                  <span className="text-neutral-500">Experience</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4 group">
                <div className="font-heading font-bold text-4xl sm:text-5xl text-red-600 tracking-tight transition-transform duration-300 group-hover:scale-105">
                  {personal.stats.projectsCompleted}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold leading-tight border-l border-neutral-800 pl-3">
                  Projects <br />
                  <span className="text-neutral-500">Completed</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-4 group">
                <div className="font-heading font-bold text-4xl sm:text-5xl text-red-600 tracking-tight transition-transform duration-300 group-hover:scale-105">
                  {personal.stats.happyClients}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold leading-tight border-l border-neutral-800 pl-3">
                  Happy <br />
                  <span className="text-neutral-500">Clients</span>
                </div>
              </div>
            </div>

            {/* Quick action link */}
            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors group"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
