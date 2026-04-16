import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import lettzoLogo from "@/assets/lettzo-logo.png";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  onOpenModal: () => void;
  onOpenAbout: () => void;
}

const Navbar = ({ onOpenModal, onOpenAbout }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: isHomePage ? "#features" : "/#features" },
    { label: "How it Works", href: isHomePage ? "#how-it-works" : "/#how-it-works" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`mx-auto transition-all duration-400 ${
            scrolled || isMobileMenuOpen
              ? "max-w-4xl bg-white/10 backdrop-blur-md md:rounded-full rounded-[2rem] px-5 border border-white/20 shadow-sm"
              : "max-w-full px-0"
          }`}
        >
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group transition-all duration-300 flex-shrink-0">
              <img
                src={lettzoLogo}
                alt="Lettzo"
                className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 px-4 py-2 rounded-full hover:bg-white/40 group"
                >
                  {link.label}
                  <span className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
              <button
                onClick={onOpenAbout}
                className="relative text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 px-4 py-2 rounded-full hover:bg-white/40 group"
              >
                About
                <span className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenModal}
                className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden group transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-button"
              >
                <span className="absolute inset-0 btn-shimmer rounded-full" />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10" />
                <Zap className="relative w-4 h-4" />
                <span className="relative">Join Waitlist</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-white/40 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 py-6 px-2 flex flex-col gap-2 animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-3 px-4 rounded-2xl hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenAbout(); }}
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-3 px-4 rounded-2xl hover:bg-white/10 text-left"
              >
                About
              </button>
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }}
                className="relative mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-bold text-white overflow-hidden shadow-button"
              >
                <span className="absolute inset-0 btn-shimmer" />
                <Zap className="relative w-5 h-5" />
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
