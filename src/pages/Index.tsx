import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import MapSection from "@/components/landing/MapSection";
import Footer from "@/components/landing/Footer";
import ComingSoonModal from "@/components/landing/ComingSoonModal";
import AboutModal from "@/components/landing/AboutModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAbout = () => setIsAboutOpen(true);
  const closeAbout = () => setIsAboutOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onOpenModal={openModal} onOpenAbout={openAbout} />
      <HeroSection onOpenModal={openModal} />
      <FeaturesSection />
      <MapSection />
      <Footer />
      <ComingSoonModal isOpen={isModalOpen} onClose={closeModal} />
      <AboutModal isOpen={isAboutOpen} onClose={closeAbout} />
    </div>
  );
};

export default Index;
