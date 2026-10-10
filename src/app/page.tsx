import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SelectedProjects from "@/components/SelectedProjects";
import EducationAndSkills from "@/components/EducationAndSkills";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-[#09090b] text-neutral-100 selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Infinite Fixed Background Wave While Scrolling */}
      <WavyBackground
        fixed
        colors={["#f97316", "#ea580c", "#fb923c", "#d97706", "#c2410c"]}
        waveOpacity={0.16}
        speed="fast"
        blur={14}
        backgroundFill="#09090b"
        waveY={0.52}
      />

      {/* Foreground Content Stack */}
      <div className="relative z-10 flex flex-col w-full">
        {/* Top Navigation */}
        <Navbar />

        {/* Hero Section with Big Typography */}
        <HeroSection />

        {/* Selected Projects Showcase */}
        <SelectedProjects />

        {/* Two-Column Education, Skills & Work Process Timeline */}
        <EducationAndSkills />

        {/* Call To Action & Contact Section */}
        <ContactSection />

        {/* Bottom Footer */}
        <Footer />
      </div>
    </main>
  );
}
