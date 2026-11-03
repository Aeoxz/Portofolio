"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { portfolioData } from "@/data/portfolio-data";
import { 
  Award, 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  X, 
  FileCheck, 
  ShieldCheck, 
  Sparkles,
  Maximize2
} from "lucide-react";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: "Language" | "Data Science" | "Networking & DB" | "Conference & Leadership";
  skills: string[];
  description: string;
  scoreOrDetail?: string;
  placeholderColor: string;
  image?: string;
}

const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "bnsp-data-scientist",
    title: "BNSP: Ilmuan Data (Data Scientist)",
    issuer: "Badan Nasional Sertifikasi Profesi & LSP UMB",
    date: "10 June 2026",
    credentialId: "BNSP-62015.2511.0000017.2026",
    category: "Data Science",
    scoreOrDetail: "Keahlian Bidang Artificial Intelligence: Sub-bidang Data Science",
    skills: ["Data Science", "Machine Learning", "Artificial Intelligence", "Statistical Analysis", "Model Validation"],
    description: "Official national certificate of competence certifying professional competency as a Data Scientist in Artificial Intelligence, awarded by BNSP and Lembaga Sertifikasi Profesi Universitas Mercu Buana.",
    placeholderColor: "from-red-950/40 via-neutral-900 to-neutral-950",
    image: "/Certificates/Data Scientist Certificate.jpg",
  },
  {
    id: "toefl-itp-610",
    title: "TOEFL ITP: Total Score 610 / 677",
    issuer: "Educational Testing Service (ETS)",
    date: "22 June 2024",
    credentialId: "ETS-ITP-2024-610",
    category: "Language",
    scoreOrDetail: "Section Scores: Listening 68 • Structure & Written Expression 57 • Reading 58",
    skills: ["CEFR C1 Level", "Academic English", "Technical Writing", "Oral & Written Fluency"],
    description: "Official institutional test score verifying advanced English proficiency, achieving CEFR C1 standard across academic listening, grammar structure, and technical reading comprehension.",
    placeholderColor: "from-amber-950/40 via-neutral-900 to-neutral-950",
    image: "/Certificates/Toefl iTP Certificate.jpg",
  },
  {
    id: "icicos-2026-ieee",
    title: "ICICoS 2026 Author & Presenter",
    issuer: "IEEE Indonesia Section & Universitas Diponegoro",
    date: "12–13 August 2026",
    credentialId: "IEEE-ICICOS-2026-PRESENTER",
    category: "Conference & Leadership",
    scoreOrDetail: "Peer-Reviewed Conference Paper Presenter",
    skills: ["PaddleOCR", "Computer Vision", "AI-Image Detection", "Reverse Image Search", "Research Presentation"],
    description: "Credited as co-author and oral presenter at the 9th International Conference on Informatics and Computational Sciences for research on automated profile validation modules.",
    placeholderColor: "from-blue-950/40 via-neutral-900 to-neutral-950",
    image: "/Certificates/ICICoS-2026-Certificate-1982c7aec08a_page-0001.jpg",
  },
  {
    id: "ibm-data-analytics",
    title: "Introduction to Data Analytics",
    issuer: "IBM (Coursera)",
    date: "7 June 2026",
    credentialId: "IBM-COURSERA-IDA-2026",
    category: "Data Science",
    scoreOrDetail: "Grade: Achieved 100% on Capstone",
    skills: ["Data Pipelines", "Exploratory Data Analysis", "SQL Querying", "Data Visualization", "Python"],
    description: "Comprehensive qualification covering modern data ecosystems, structured query methodology, data wrangling pipelines, and executive dashboards.",
    placeholderColor: "from-cyan-950/40 via-neutral-900 to-neutral-950",
    image: "/Certificates/7yMoZnf8sMZQtq4XXU3WU7a4uIPim9rKMskL43nm_page-0001.jpg",
  },
  {
    id: "ibm-what-is-data-science",
    title: "What is Data Science?",
    issuer: "IBM (Coursera)",
    date: "7 June 2026",
    credentialId: "IBM-COURSERA-WIDS-2026",
    category: "Data Science",
    scoreOrDetail: "Professional Specialization Foundation",
    skills: ["Machine Learning Basics", "Statistical Modeling", "Predictive Analytics", "Hypothesis Testing"],
    description: "Foundational training in data scientist workflows, business problem framing, statistical modeling architectures, and ethical machine learning execution.",
    placeholderColor: "from-indigo-950/40 via-neutral-900 to-neutral-950",
    image: "/Certificates/obZ01fjC7BSjSci7Yul5jEGPOZBE8LVfiORCzdOE_page-0001.jpg",
  },
  {
    id: "sertifikat-magang",
    title: "Field-Work Placement (PKL)",
    issuer: "PT Meissa Berkah Teknologi",
    date: "31 May 2025",
    credentialId: "001/MBT/V/2025",
    category: "Conference & Leadership",
    scoreOrDetail: "Mobile Feature Automation & Backend REST API",
    skills: ["Flutter", "REST API", "Database Optimization", "Agile Development", "System Testing"],
    description: "Three-month field-work placement completion certificate at PT Meissa Berkah Teknologi, building automation scripts and API pipeline features.",
    placeholderColor: "from-emerald-950/40 via-neutral-900 to-neutral-950",
    image: "/Certificates/Sertifikat Magang Azka_page-0001.jpg",
  },
  {
    id: "cisco-ccnav7",
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "10 July 2023",
    credentialId: "CISCO-CCNAV7-ITN-2023",
    category: "Networking & DB",
    scoreOrDetail: "Cisco Certified Course Completion",
    skills: ["IPv4 / IPv6 Addressing", "Ethernet Switching", "Router Configuration", "Network Security Protocols"],
    description: "Hands-on certification verifying competency in IP addressing architecture, subnetting, switch configuration, and packet-level network diagnostics.",
    placeholderColor: "from-emerald-950/40 via-neutral-900 to-neutral-950",
  },
  {
    id: "oracle-plsql",
    title: "PL/SQL Database Programming",
    issuer: "Oracle Academy",
    date: "Semester 2 (2023)",
    credentialId: "ORACLE-PLSQL-ACADEMY-2023",
    category: "Networking & DB",
    scoreOrDetail: "Relational Database Engineering",
    skills: ["PL/SQL", "Stored Procedures", "Triggers", "Database Optimization", "Relational Schemas"],
    description: "Professional database programming qualification covering schema creation, transactional control, advanced query optimization, and PL/SQL package development.",
    placeholderColor: "from-red-950/40 via-neutral-900 to-neutral-950",
  },
  {
    id: "himti-active-member",
    title: "Active Member Certificate 2024/2025",
    issuer: "HiMTI Universitas Mercu Buana",
    date: "Term 2024 / 2025",
    credentialId: "HIMTI-UMB-MEM-2024-25",
    category: "Conference & Leadership",
    scoreOrDetail: "Media Design Division Recognition",
    skills: ["Creative Direction", "Visual Communication", "Figma", "Digital Content Creation", "Team Leadership"],
    description: "Awarded in recognition of active contributions to the Media Design Division of Himpunan Mahasiswa Teknik Informatika, driving student engagement campaigns.",
    placeholderColor: "from-purple-950/40 via-neutral-900 to-neutral-950",
    image: "/Certificates/Sertif Himti Azka_page-0001.jpg",
  },
  {
    id: "jebsen-jessen-career",
    title: "Career Management Credential",
    issuer: "Jebsen & Jessen Group",
    date: "Professional Training",
    credentialId: "JJ-CAREER-MGMT-CERT",
    category: "Conference & Leadership",
    scoreOrDetail: "Professional Development Standard",
    skills: ["Strategic Prioritization", "Root Cause Analysis", "Continuous Improvement", "Workplace Execution"],
    description: "Certification covering corporate problem-solving frameworks, agile career progression, and structured decision-making in technical environments.",
    placeholderColor: "from-zinc-900 via-neutral-900 to-neutral-950",
  },
];

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Language", "Data Science", "Networking & DB", "Conference & Leadership"];

  const filteredCertificates = activeFilter === "All"
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter((cert) => cert.category === activeFilter);

  return (
    <main className="min-h-screen relative flex flex-col bg-[#09090b] text-neutral-100 selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Background WebGL Animation */}
      <AnimatedGradient
        variant="mist"
        speed={0.35}
        opacity={0.88}
        className="fixed inset-0 w-screen h-screen pointer-events-none z-0 bg-[#09090b]"
      />

      {/* Main Content Stack */}
      <div className="relative z-10 flex flex-col w-full min-h-screen justify-between">
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full flex-1">
          {/* Top Breadcrumb & Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 text-red-500 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio Overview</span>
            </Link>
          </div>

          {/* Section Header */}
          <div className="space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-[11px] font-mono uppercase tracking-widest text-red-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Qualifications</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading uppercase font-bold tracking-tight text-white leading-tight">
              CERTIFICATIONS &amp; CREDENTIALS
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-sans leading-relaxed">
              Official accreditations, standardized language test scores, vendor diplomas, and conference publication credentials earned by{" "}
              <span className="text-white font-medium">{portfolioData.personal.name}</span>.
            </p>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-900">
              <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-500 uppercase">English Proficiency</span>
                <p className="text-lg font-heading font-bold text-red-500 mt-0.5">TOEFL 610 (C1)</p>
              </div>
              <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-500 uppercase">IEEE Conference</span>
                <p className="text-lg font-heading font-bold text-white mt-0.5">ICICoS &apos;26 Author</p>
              </div>
              <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Data Science</span>
                <p className="text-lg font-heading font-bold text-white mt-0.5">IBM Certified</p>
              </div>
              <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Total Credentials</span>
                <p className="text-lg font-heading font-bold text-red-500 mt-0.5">8+ Documents</p>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === category
                      ? "bg-red-600 text-white font-semibold shadow-md shadow-red-600/30"
                      : "bg-neutral-950/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Certifications Grid with Image Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950/70 hover:border-red-600/60 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Certificate Image Placeholder / Preview Container */}
                <div className={`relative aspect-[16/10] w-full p-4 bg-gradient-to-br ${cert.placeholderColor} border-b border-neutral-900 flex flex-col justify-between overflow-hidden`}>
                  {cert.image ? (
                    <>
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover object-top filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent pointer-events-none" />
                    </>
                  ) : (
                    <>
                      {/* Watermark Pattern Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

                      {/* Middle Certificate Document Graphic Placeholder */}
                      <div className="relative z-10 my-auto py-3 text-center space-y-1">
                        <div className="w-10 h-10 mx-auto rounded-full bg-neutral-900/90 border border-red-500/40 flex items-center justify-center text-red-500 shadow-lg group-hover:scale-110 transition-transform">
                          <Award className="w-5 h-5" />
                        </div>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                          CERTIFICATE OF COMPLETION
                        </p>
                        <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wide truncate px-2">
                          {cert.title}
                        </h3>
                      </div>
                    </>
                  )}

                  {/* Top Bar of Certificate Document */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-widest text-neutral-300">
                      <FileCheck className="w-3 h-3 text-red-500" />
                      <span>{cert.issuer.split("(")[0].trim()}</span>
                    </div>

                    <span className="text-[9px] font-mono uppercase text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded flex items-center gap-1 backdrop-blur-sm">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      Verified
                    </span>
                  </div>

                  {/* Bottom Certificate Meta Bar */}
                  <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-300 border-t border-white/10 pt-2 bg-neutral-950/70 backdrop-blur-sm px-2 -mx-2 -mb-2 rounded">
                    <span>Issued: {cert.date}</span>
                    <span className="flex items-center gap-1 text-red-400 group-hover:text-red-300 font-semibold">
                      <Maximize2 className="w-3 h-3" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-red-500 font-bold">
                        {cert.issuer}
                      </span>
                    </div>

                    <h3 className="text-base font-heading font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {cert.scoreOrDetail && (
                      <p className="text-xs font-mono text-neutral-300 bg-neutral-900/60 border border-neutral-800/80 px-2.5 py-1.5 rounded-md">
                        {cert.scoreOrDetail}
                      </p>
                    )}

                    <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="pt-2 border-t border-neutral-900 space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-neutral-900 text-[10px] font-mono text-neutral-500">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>

      {/* Full Certificate Document Inspection Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                  {selectedCert.issuer}
                </span>
                <span className="text-neutral-600">&bull;</span>
                <span className="text-xs font-mono text-neutral-400">{selectedCert.date}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide">
                {selectedCert.title}
              </h3>
            </div>

            {/* Enlarged Certificate Document Preview */}
            <div className={`relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-inner`}>
              {selectedCert.image ? (
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain bg-black/85"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedCert.placeholderColor} p-6 flex flex-col justify-between`}>
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
                    <p className="text-xs font-mono text-red-400 uppercase tracking-wide">
                      has successfully completed and been awarded
                    </p>
                    <p className="text-base font-sans font-semibold text-neutral-200">
                      {selectedCert.title}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 border-t border-white/10 pt-3">
                    <span>Credential ID: {selectedCert.credentialId || "VERIFIED-2026"}</span>
                    <span>Issued by {selectedCert.issuer}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Description & Score Breakdown */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Credential Overview &amp; Evaluation:
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedCert.description}
              </p>
              {selectedCert.scoreOrDetail && (
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-red-400">
                  {selectedCert.scoreOrDetail}
                </div>
              )}
            </div>

            {/* Demonstrated Competencies */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Demonstrated Competencies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between border-t border-neutral-800">
              <span className="text-xs font-mono text-neutral-500">
                Azka Faiq Suharyanto Portfolio
              </span>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider transition-colors border border-neutral-800"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
