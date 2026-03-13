import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import lettzoLogo from "@/assets/lettzo-logo.png";

interface NavbarProps {
  onOpenModal: () => void;
  onOpenAbout: () => void;
}

const Navbar = ({ onOpenModal, onOpenAbout }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2"
          : "py-3"
      }`}
    >
      {/* Floating pill container */}
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? "max-w-4xl glass rounded-2xl px-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "max-w-full px-0"
          }`}
        >
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group transition-all duration-300 flex-shrink-0">
              <img
                src={lettzoLogo}
                alt="Lettzo"
                className="h-8 md:h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/5 group"
                >
                  {link.label}
                  <span className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
              <button
                onClick={onOpenAbout}
                className="relative text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-white/5 group"
              >
                About
                <span className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenModal}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden group transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                {/* Gradient background */}
                <span className="absolute inset-0 btn-shimmer rounded-xl" />
                {/* Glow */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-primary/40" />
                <Zap className="relative w-4 h-4" />
                <span className="relative">Join Waitlist</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-xl text-foreground/80 hover:text-foreground hover:bg-white/5 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-white/5 py-4 flex flex-col gap-1 animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors py-3 px-2 rounded-xl hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenAbout(); }}
                className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors py-3 px-2 rounded-xl hover:bg-white/5 text-left"
              >
                About
              </button>
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }}
                className="relative mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white overflow-hidden"
              >
                <span className="absolute inset-0 btn-shimmer rounded-xl" />
                <Zap className="relative w-4 h-4" />
                <span className="relative">Join Waitlist</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
