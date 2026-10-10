"use client";

import React, { useState } from "react";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Education & Skills", href: "#education-skills" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090b]/85 backdrop-blur-md border-b border-neutral-900/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Sub-brand / Role */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-semibold text-neutral-300 font-mono">
            {personal.role}{" "}
            <span className="text-red-500 font-bold mx-1">/</span>{" "}
            {personal.subRole}
          </span>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-mono text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Status Badge */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/70 hover:border-red-600/70 hover:bg-red-950/20 transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:bg-red-400 animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 group-hover:text-white">
              {personal.availability.notice}
            </span>
            <Sparkles className="w-3 h-3 text-red-500 ml-0.5 group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-900 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-red-500 py-1 transition-colors flex items-center justify-between"
              >
                {link.label}
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-900">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-red-600/10 border border-red-600/40 text-red-400 text-xs font-mono tracking-widest uppercase hover:bg-red-600 hover:text-white transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              {personal.availability.notice}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
