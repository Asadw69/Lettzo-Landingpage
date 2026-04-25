import React, { useState, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";

// Lazy load below-the-fold components to improve LCP and reduce render-blocking JS
const FeaturesSection = React.lazy(() => import("@/components/landing/FeaturesSection"));
const MapSection = React.lazy(() => import("@/components/landing/MapSection"));
const SocialSection = React.lazy(() => import("@/components/landing/SocialSection"));
const WaitlistSection = React.lazy(() => import("@/components/landing/WaitlistSection"));
const Footer = React.lazy(() => import("@/components/landing/Footer"));
const AboutModal = React.lazy(() => import("@/components/landing/AboutModal"));

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
        
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <FeaturesSection />
          <MapSection />
          <SocialSection />
          <WaitlistSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="min-h-[20vh]" />}>
        <Footer />
      </Suspense>

      {/* Modals */}
      <Suspense fallback={null}>
        <AboutModal isOpen={isAboutOpen} onClose={closeAbout} />
      </Suspense>
    </div>
  );
};

export default Index;
