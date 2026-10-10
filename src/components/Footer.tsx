"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-neutral-900 bg-neutral-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="text-neutral-300 font-bold">{personal.name}</span>
          <span>&bull;</span>
          <span>All rights reserved.</span>
        </div>

        {/* Center: Template note */}
        <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-neutral-500">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600" />
          <span>using Next.js & Tailwind CSS</span>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <div className="w-7 h-7 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-red-600 group-hover:text-red-500 group-hover:bg-red-950/30 transition-all">
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>

      </div>
    </footer>
  );
}
