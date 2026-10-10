import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SelectedProjects from "@/components/SelectedProjects";
import EducationAndSkills from "@/components/EducationAndSkills";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-[#09090b] text-neutral-100 selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Infinite Fixed Dynamic Red Wave Canvas Background */}
      <HeroWave className="fixed inset-0 w-screen h-screen pointer-events-none z-0" />

      {/* Foreground Content Stack */}
      <div className="relative z-10 flex flex-col w-full">
        {/* Top Navigation */}
        <Navbar />

        {/* Hero Section */}
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
