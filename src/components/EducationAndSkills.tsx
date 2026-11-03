"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Quote, 
  Plus,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Maximize2,
  X,
  Code2
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { TechIcon } from "@/components/ui/tech-icons";

const TECH_STACK_ITEMS = [
  { name: "Python", category: "Language" },
  { name: "PaddleOCR", category: "Vision & OCR" },
  { name: "Computer Vision", category: "AI & ML" },
  { name: "Data Analytics", category: "Data Science" },
  { name: "JavaScript", category: "Node.js" },
  { name: "C++", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "PHP", category: "Language" },
  { name: "MySQL", category: "Database" },
  { name: "SQLite", category: "Database" },
  { name: "Laravel", category: "Web Framework" },
  { name: "Cisco", category: "CCNAv7 / Net" },
  { name: "Figma", category: "UI/UX Design" },
  { name: "PyCharm", category: "Python IDE" },
  { name: "VS Code", category: "Code Editor" },
  { name: "Google Colab", category: "Cloud ML" },
  { name: "Android Studio", category: "Mobile Dev" },
  { name: "Canva", category: "Media Design" },
];

const EXPANDED_CERTS = [
  {
    id: "bnsp-data-scientist",
    title: "BNSP: Ilmuan Data (Data Scientist)",
    issuer: "Badan Nasional Sertifikasi Profesi & LSP UMB",
    date: "10 June 2026",
    credentialId: "BNSP-62015.2511.0000017.2026",
    detail: "Keahlian Artificial Intelligence: Data Scientist",
    tag: "National Certification",
    badgeColor: "text-red-400 bg-red-950/80 border-red-800/80",
    gradient: "from-red-950/50 via-neutral-900 to-neutral-950",
    image: "/Certificates/Data Scientist Certificate.jpg",
    description: "Official Indonesian national certification of competence in Artificial Intelligence - Data Scientist, certified by Badan Nasional Sertifikasi Profesi (BNSP) and Universitas Mercu Buana.",
  },
  {
    id: "toefl-itp-610",
    title: "TOEFL ITP: Score 610 / 677",
    issuer: "Educational Testing Service (ETS)",
    date: "22 June 2024",
    credentialId: "ETS-ITP-2024-610",
    detail: "Listening 68 • Structure 57 • Reading 58",
    tag: "CEFR C1 Standard",
    badgeColor: "text-amber-400 bg-amber-950/80 border-amber-800/80",
    gradient: "from-amber-950/50 via-neutral-900 to-neutral-950",
    image: "/Certificates/Toefl iTP Certificate.jpg",
    description: "Verified institutional test score demonstrating advanced proficiency across academic listening, structural grammar, and technical reading comprehension.",
  },
  {
    id: "icicos-2026-ieee",
    title: "IEEE ICICoS 2026 Author & Presenter",
    issuer: "IEEE Indonesia Section & Undip",
    date: "12–13 Aug 2026",
    credentialId: "IEEE-ICICOS-2026-PRESENTER",
    detail: "PaddleOCR & AI-Image Profile Validation",
    tag: "Conference Paper",
    badgeColor: "text-blue-400 bg-blue-950/80 border-blue-800/80",
    gradient: "from-blue-950/50 via-neutral-900 to-neutral-950",
    image: "/Certificates/ICICoS-2026-Certificate-1982c7aec08a_page-0001.jpg",
    description: "Credited author and presenter at the 9th International Conference on Informatics and Computational Sciences for automated profile validation research.",
  },
  {
    id: "ibm-data-analytics",
    title: "Introduction to Data Analytics",
    issuer: "IBM (Coursera)",
    date: "7 June 2026",
    credentialId: "IBM-COURSERA-IDA-2026",
    detail: "Data Pipelines, EDA, SQL & Visualization",
    tag: "Data Science",
    badgeColor: "text-cyan-400 bg-cyan-950/80 border-cyan-800/80",
    gradient: "from-cyan-950/50 via-neutral-900 to-neutral-950",
    image: "/Certificates/7yMoZnf8sMZQtq4XXU3WU7a4uIPim9rKMskL43nm_page-0001.jpg",
    description: "Certified qualification in modern data architecture, exploratory data analysis, data wrangling pipelines, and executive dashboard modeling.",
  },
  {
    id: "ibm-what-is-data-science",
    title: "What is Data Science?",
    issuer: "IBM (Coursera)",
    date: "7 June 2026",
    credentialId: "IBM-COURSERA-WIDS-2026",
    detail: "Machine Learning Fundamentals & Methodology",
    tag: "Data Science",
    badgeColor: "text-indigo-400 bg-indigo-950/80 border-indigo-800/80",
    gradient: "from-indigo-950/50 via-neutral-900 to-neutral-950",
    image: "/Certificates/obZ01fjC7BSjSci7Yul5jEGPOZBE8LVfiORCzdOE_page-0001.jpg",
    description: "Foundational training in data scientist workflows, predictive modeling architectures, and empirical machine learning problem formulation.",
  },
  {
    id: "sertifikat-magang",
    title: "Field-Work Placement (PKL)",
    issuer: "PT Meissa Berkah Teknologi",
    date: "31 May 2025",
    credentialId: "001/MBT/V/2025",
    detail: "Mobile Feature Automation & Backend REST API",
    tag: "Industry Placement",
    badgeColor: "text-emerald-400 bg-emerald-950/80 border-emerald-800/80",
    gradient: "from-emerald-950/50 via-neutral-900 to-neutral-950",
    image: "/Certificates/Sertifikat Magang Azka_page-0001.jpg",
    description: "Three-month field-work placement completion certificate at PT Meissa Berkah Teknologi, building automation scripts and API pipeline features.",
  },
  {
    id: "himti-active-member",
    title: "Active Member Certificate",
    issuer: "HiMTI Universitas Mercu Buana",
    date: "Term 2024 / 2025",
    credentialId: "HIMTI-UMB-MEM-2024-25",
    detail: "Media Design Division Creative Content",
    tag: "Leadership & Media",
    badgeColor: "text-purple-400 bg-purple-950/80 border-purple-800/80",
    gradient: "from-purple-950/50 via-neutral-900 to-neutral-950",
    image: "/Certificates/Sertif Himti Azka_page-0001.jpg",
    description: "Recognized contribution to the Media Design Division of Informatics Student Association, leading digital communication campaigns.",
  },
];

export default function EducationAndSkills() {
  const { education, experience, publication, quote } = portfolioData;
  const [inspectCert, setInspectCert] = useState<(typeof EXPANDED_CERTS)[0] | null>(null);

  return (
    <section id="education-skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-neutral-900 space-y-16">
      
      {/* Top Split: Education & Experience (Left) vs Expanded Certifications & Credentials (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
        
        {/* ================= LEFT COLUMN: ACADEMIC & WORK BACKGROUND ================= */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading uppercase font-bold tracking-wider text-white">
              EDUCATION &amp; EXPERIENCE
            </h2>
          </div>

          {/* EDUCATION SECTION */}
          <div className="space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-red-500" />
              <span>EDUCATION</span>
            </h3>

            <div className="space-y-4">
              {education.map((item) => (
                <div 
                  key={item.id} 
                  className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-950/60 space-y-1.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-sm font-sans font-semibold text-neutral-100">
                      {item.degree}
                    </h4>
                    <span className="text-xs font-mono font-medium text-red-500 whitespace-nowrap pt-0.5">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-neutral-300">
                    {item.institution}
                  </p>
                  {item.details && (
                    <p className="text-xs font-mono text-neutral-400">
                      {item.details}
                    </p>
                  )}
                  {item.thesis && (
                    <p className="text-xs font-sans text-neutral-400 italic pt-1 border-t border-neutral-900 mt-2">
                      {item.thesis}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* WORK & INTERNSHIP SECTION */}
          <div className="space-y-5 pt-2 border-t border-neutral-800/80">
            <h3 className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-red-500" />
              <span>WORK &amp; FIELD EXPERIENCE</span>
            </h3>

            <div className="space-y-4">
              {experience.map((item) => (
                <div 
                  key={item.id} 
                  className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-950/60 space-y-1.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-sans font-semibold text-neutral-100">
                        {item.role}
                      </h4>
                      <p className="text-xs font-mono text-red-400">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-medium text-neutral-400 whitespace-nowrap pt-0.5">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CONFERENCE PUBLICATION */}
          {publication && (
            <div className="space-y-4 pt-2 border-t border-neutral-800/80">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-red-500" />
                <span>CONFERENCE PUBLICATION</span>
              </h3>

              <div className="p-4 rounded-xl border border-red-900/60 bg-red-950/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-red-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>{publication.conference}</span>
                </div>
                <h4 className="text-sm font-sans font-semibold text-white leading-snug">
                  {publication.title}
                </h4>
                <p className="text-xs font-mono text-neutral-400">
                  Authors: {publication.authors}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-mono text-neutral-400">
                  <span>{publication.location}</span>
                  <span>&bull;</span>
                  <span>{publication.date}</span>
                  <span>&bull;</span>
                  <span className="text-emerald-400">{publication.affiliation}</span>
                </div>
              </div>
            </div>
          )}

          {/* PHILOSOPHY CALLOUT CARD */}
          <div className="pt-2 border-t border-neutral-800/80">
            <div className="quote-card-gradient rounded-2xl p-7 border border-red-900/60 flex flex-col justify-between shadow-2xl relative">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-red-500/80 rotate-180" />
                <p className="text-base sm:text-lg font-sans font-medium text-white leading-relaxed">
                  &ldquo;{quote.text}&rdquo;
                </p>
              </div>

              <div className="my-6">
                <span className="font-script text-4xl text-neutral-100 block tracking-wider">
                  {quote.author}
                </span>
              </div>

              <div className="pt-4 border-t border-red-800/40 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-300">
                <span>{quote.subtext}</span>
                <Plus className="w-4 h-4 text-red-400" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: EXPANSION OF CERTIFICATIONS & CREDENTIALS ================= */}
        {/* Allocated all freed space from Engineering Process here */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Header of Expanded Certifications */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-red-500" />
                <h2 className="text-xl sm:text-2xl font-heading uppercase font-bold tracking-wider text-white">
                  CERTIFICATIONS &amp; CREDENTIALS
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
                Official accreditations, standardized test scores, and vendor certifications with document image placeholders.
              </p>
            </div>

            <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Authenticity</span>
            </span>
          </div>

          {/* Grid of Expanded Certificate Cards with Image Placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EXPANDED_CERTS.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setInspectCert(cert)}
                className="group cursor-pointer rounded-xl overflow-hidden border border-neutral-800/90 bg-neutral-950/80 hover:border-red-600/70 hover:shadow-[0_0_25px_rgba(220,38,38,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Certificate Document Image */}
                <div className="relative aspect-[16/10] w-full border-b border-neutral-900 overflow-hidden bg-neutral-950">
                  {cert.image ? (
                    <>
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 350px"
                        className="object-cover object-top brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                    </>
                  ) : (
                    <div className={`relative size-full p-3.5 bg-gradient-to-br ${cert.gradient}`}>
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />
                    </div>
                  )}

                  {/* Top Badges */}
                  <div className="absolute top-2.5 inset-x-2.5 z-10 flex items-center justify-between pointer-events-none">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-200 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 flex items-center gap-1 shadow-sm">
                      <FileCheck className="w-3 h-3 text-red-500" />
                      <span>{cert.issuer.split("(")[0].trim()}</span>
                    </span>

                    <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border backdrop-blur-md ${cert.badgeColor}`}>
                      {cert.tag}
                    </span>
                  </div>

                  {/* Bottom Footer Overlay */}
                  <div className="absolute bottom-2 inset-x-2.5 z-10 flex items-center justify-between text-[8px] font-mono text-neutral-300 pointer-events-none">
                    <span className="bg-black/65 px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/5">{cert.date}</span>
                    <span className="flex items-center gap-1 text-red-400 bg-black/75 px-2 py-0.5 rounded border border-red-500/30 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                      <Maximize2 className="w-2.5 h-2.5" />
                      <span>Inspect Photo</span>
                    </span>
                  </div>
                </div>

                {/* Information Card Body */}
                <div className="p-4 space-y-2.5">
                  <div className="space-y-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-red-500 font-bold truncate">
                      {cert.issuer}
                    </p>
                    <h4 className="text-sm font-heading font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                      {cert.title}
                    </h4>
                  </div>

                  {cert.detail && (
                    <p className="text-[11px] font-mono text-neutral-300 bg-neutral-900/70 border border-neutral-800/80 px-2.5 py-1 rounded">
                      {cert.detail}
                    </p>
                  )}

                  <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Button Linking to Dedicated Full Page */}
          <div className="p-5 rounded-xl border border-neutral-800/90 bg-neutral-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-heading uppercase font-bold text-white">
                LOOKING FOR COMPLETE VERIFICATION DETAILS?
              </h4>
              <p className="text-xs text-neutral-400 font-sans">
                Browse all 8+ official diplomas, verification IDs, and full-resolution certificate sheet placeholders.
              </p>
            </div>

            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md shadow-red-600/30 shrink-0 self-start sm:self-auto"
            >
              <span>Explore Certifications Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

      {/* ================= FULL-WIDTH TECHNICAL SKILLS & TOOLS (ICONIC DISPLAY) ================= */}
      {/* Replaced cluttered text tags with a clean, branded icon matrix */}
      <div className="pt-8 border-t border-neutral-900 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-red-500" />
              <h3 className="text-xl sm:text-2xl font-heading uppercase font-bold tracking-wider text-white">
                TECHNICAL SKILLS &amp; TOOLS
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-sans text-neutral-400">
              Core technologies, machine learning toolkits, database systems, and development software.
            </p>
          </div>

          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            {TECH_STACK_ITEMS.length} Technologies
          </span>
        </div>

        {/* Clean Iconic Grid (No text clutter, authentic branded tech icons) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {TECH_STACK_ITEMS.map((item) => (
            <div
              key={item.name}
              className="p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-950/70 hover:border-red-600/70 hover:bg-neutral-900/40 hover:shadow-[0_0_20px_rgba(220,38,38,0.18)] transition-all duration-300 flex items-center gap-3 group cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <TechIcon name={item.name} className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-sans font-semibold text-white group-hover:text-red-400 transition-colors truncate">
                  {item.name}
                </p>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block truncate">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inspect Certificate Modal */}
      {inspectCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setInspectCert(null)}
        >
          <div
            className="relative w-full max-w-xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setInspectCert(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                {inspectCert.issuer}
              </span>
              <h3 className="text-2xl font-heading font-bold text-white tracking-wide">
                {inspectCert.title}
              </h3>
            </div>

            {/* Enlarged Certificate Photo Display */}
            <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl">
              {inspectCert.image ? (
                <Image
                  src={inspectCert.image}
                  alt={inspectCert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                />
              ) : (
                <div className={`size-full p-6 flex flex-col justify-between bg-gradient-to-br ${inspectCert.gradient}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-6 h-6 text-red-500" />
                      <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                        Official Credential
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950/80 border border-emerald-800 text-xs font-mono text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Authenticity</span>
                    </div>
                  </div>
                  <div className="text-center space-y-2 py-4">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                      This document certifies that
                    </p>
                    <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">
                      {portfolioData.personal.name}
                    </h4>
                    <p className="text-base font-sans font-semibold text-neutral-200">
                      {inspectCert.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 border-t border-white/10 pt-3">
                    <span>Credential ID: {inspectCert.credentialId || "VERIFIED-2026"}</span>
                    <span>Issued by {inspectCert.issuer}</span>
                  </div>
                </div>
              )}
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {inspectCert.description}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
              <Link
                href="/certifications"
                className="text-xs font-mono text-red-400 hover:text-red-300 flex items-center gap-1"
              >
                <span>View on full certifications page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => setInspectCert(null)}
                className="px-4 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-white hover:bg-neutral-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
