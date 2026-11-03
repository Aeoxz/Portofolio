"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Mail, 
  Globe, 
  Phone, 
  MapPin, 
  Check, 
  Copy,
  Laptop
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function ContactSection() {
  const { contact } = portfolioData;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Sub-column: Headline, Subtext, and CTA Button */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Headline with Star Sparkle */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading uppercase font-bold text-white tracking-tight leading-[0.95]">
                LET&apos;S WORK <br />
                <span>TOGETHER</span>
              </h2>
              <div className="p-2 rounded-full bg-red-950/40 border border-red-800/40 text-red-500 self-start mt-2">
                <Sparkles className="w-5 h-5 text-red-500" />
              </div>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-sm text-neutral-400 font-sans leading-relaxed max-w-md">
            {contact.workTogetherDescription}
          </p>

          {/* Freelance CTA Pill Button */}
          <div className="pt-2">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-red-600/80 bg-red-950/20 hover:bg-red-600 text-red-400 hover:text-white transition-all duration-300 shadow-lg shadow-red-950/50 hover:shadow-red-600/30"
            >
              <div className="w-6 h-6 rounded-full bg-red-600 group-hover:bg-white text-white group-hover:text-red-600 flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest font-bold">
                {contact.freelanceButtonText}
              </span>
            </a>
          </div>
        </div>

        {/* Middle Sub-column: Contact Items List */}
        <div className="lg:col-span-4 space-y-5">
          {/* Email Item */}
          <div 
            onClick={() => copyToClipboard(contact.email, "email")}
            className="group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/40 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full border border-red-600/40 bg-neutral-950 flex items-center justify-center text-red-500 group-hover:border-red-600 group-hover:bg-red-950/30 transition-all shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">Email</p>
              <p className="text-xs sm:text-sm font-mono text-neutral-200 group-hover:text-white truncate">
                {contact.email}
              </p>
            </div>
            <button className="text-neutral-500 group-hover:text-red-400 p-1" title="Copy to clipboard">
              {copiedField === "email" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Website Item */}
          <a
            href={contact.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/40 transition-all"
          >
            <div className="w-10 h-10 rounded-full border border-red-600/40 bg-neutral-950 flex items-center justify-center text-red-500 group-hover:border-red-600 group-hover:bg-red-950/30 transition-all shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">Website</p>
              <p className="text-xs sm:text-sm font-mono text-neutral-200 group-hover:text-white truncate">
                {contact.website}
              </p>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* Phone Item */}
          <div 
            onClick={() => copyToClipboard(contact.phone, "phone")}
            className="group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/40 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full border border-red-600/40 bg-neutral-950 flex items-center justify-center text-red-500 group-hover:border-red-600 group-hover:bg-red-950/30 transition-all shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">Phone</p>
              <p className="text-xs sm:text-sm font-mono text-neutral-200 group-hover:text-white truncate">
                {contact.phone}
              </p>
            </div>
            <button className="text-neutral-500 group-hover:text-red-400 p-1" title="Copy phone">
              {copiedField === "phone" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Location Item */}
          <div className="group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/40 transition-all">
            <div className="w-10 h-10 rounded-full border border-red-600/40 bg-neutral-950 flex items-center justify-center text-red-500 group-hover:border-red-600 group-hover:bg-red-950/30 transition-all shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">Location</p>
              <p className="text-xs sm:text-sm font-mono text-neutral-200 group-hover:text-white truncate">
                {contact.location}
              </p>
            </div>
          </div>
        </div>

        {/* Right Sub-column: Realistic Sleek Laptop Workspace Mockup Graphic */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl bg-neutral-950 border border-neutral-800/80 p-4 shadow-2xl flex flex-col justify-between overflow-hidden group">
            {/* Ambient Red Glow in Mockup */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-2xl pointer-events-none" />

            {/* Laptop Screen Graphic Preview */}
            <div className="relative rounded-lg bg-neutral-900 border border-neutral-800 p-3 flex flex-col justify-between h-44 shadow-inner">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-neutral-700" />
                  <span className="w-2 h-2 rounded-full bg-neutral-700" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500">
                  github.com/Aeoxz
                </span>
              </div>

              {/* Mock Screen Content */}
              <div className="py-2 space-y-1">
                <p className="text-[10px] font-heading uppercase font-bold text-white tracking-wider leading-tight">
                  APPLIED ML &amp; <br />
                  <span className="text-red-500">DATA SCIENCE PIPELINES</span>
                </p>
                <div className="h-1 w-8 bg-red-600 rounded-full" />
              </div>

              {/* Laptop bottom bar */}
              <div className="flex items-center justify-between pt-2 border-t border-neutral-800 text-[8px] font-mono text-neutral-500">
                <span>INFORMATICS ENGINEERING</span>
                <span className="text-red-400">ACTIVE</span>
              </div>
            </div>

            {/* Laptop Base Stand Graphic & Coffee Mug Accent */}
            <div className="flex items-center justify-between pt-3 px-2">
              <div className="flex items-center gap-2">
                <Laptop className="w-4 h-4 text-neutral-500" />
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                  Workspace Setup
                </span>
              </div>
              
              {/* Coffee mug badge with 'A' logo */}
              <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center font-heading font-bold text-xs text-red-500 shadow-md" title="Azka Coffee Mug">
                A
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
