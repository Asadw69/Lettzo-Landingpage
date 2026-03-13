import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import MapSection from "@/components/landing/MapSection";
import SocialSection from "@/components/landing/SocialSection";
import WaitlistSection from "@/components/landing/WaitlistSection";
import Footer from "@/components/landing/Footer";
import AboutModal from "@/components/landing/AboutModal";

const Index = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Scroll to waitlist function
  const scrollToWaitlist = () => {
    const section = document.getElementById("waitlist");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openAbout = () => setIsAboutOpen(true);
  const closeAbout = () => setIsAboutOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Modern Fixed Navbar */}
      <Navbar onOpenModal={scrollToWaitlist} onOpenAbout={openAbout} />
      
      {/* Main Sections */}
      <main>
        <HeroSection onOpenModal={scrollToWaitlist} />
        
        <FeaturesSection />
        
        <MapSection />
        
        <SocialSection />
        
        <WaitlistSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AboutModal isOpen={isAboutOpen} onClose={closeAbout} />
    </div>
  );
};

export default Index;
