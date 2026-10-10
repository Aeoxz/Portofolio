import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SelectedProjects from "@/components/SelectedProjects";
import EducationAndSkills from "@/components/EducationAndSkills";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#09090b] text-neutral-100 selection:bg-red-600 selection:text-white">
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
    </main>
  );
}
