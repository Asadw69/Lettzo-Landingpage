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

  const chromeVisible = scrolled || isMobileMenuOpen;

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-panel ease-out-strong ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Translucent floating chrome: content scrolls underneath the material
            rather than the bar consuming a fixed opaque strip. */}
        <div
          className={`mx-auto transition-[max-width,background-color,backdrop-filter,box-shadow,border-color,border-radius,padding] duration-panel ease-out-strong ${
            chromeVisible
              ? "max-w-4xl nav-glass md:rounded-full rounded-[2rem] px-4 sm:px-5"
              : "max-w-full bg-transparent border-transparent shadow-none md:rounded-none rounded-none px-0"
          }`}
        >
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link
              to="/"
              aria-label="Lettzo home"
              className="press group flex items-center gap-2 flex-shrink-0 rounded-xl"
            >
              <img
                src={lettzoLogo}
                alt="Lettzo"
                className="h-9 md:h-11 w-auto object-contain drop-shadow-sm transition-transform duration-hover ease-out-strong group-hover:scale-[1.04]"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="press relative text-[13.5px] font-medium tracking-[-0.005em] text-foreground/65 hover:text-foreground px-4 py-2 rounded-full hover:bg-foreground/[0.05]"
                >
                  {link.label}
                </a>
              ))}
              <button
                aria-label="About"
                onClick={onOpenAbout}
                className="press relative text-[13.5px] font-medium tracking-[-0.005em] text-foreground/65 hover:text-foreground px-4 py-2 rounded-full hover:bg-foreground/[0.05]"
              >
                About
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                aria-label="Join Waitlist"
                onClick={onOpenModal}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold tracking-[-0.005em] text-white overflow-hidden shadow-elev-brand transition-transform duration-press ease-out-strong hover:scale-[1.025] active:scale-[0.97]"
              >
                <span className="absolute inset-0 btn-shimmer rounded-full" />
                {/* Bright top edge — light catching the surface */}
                <span className="absolute inset-x-0 top-0 h-px bg-white/45 rounded-full" />
                <Zap className="relative w-4 h-4 transition-transform duration-hover ease-out-strong group-hover:scale-110" />
                <span className="relative">Join Waitlist</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="press md:hidden p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/[0.06]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div
              id="mobile-nav"
              className="md:hidden border-t border-black/[0.06] py-5 px-1 flex flex-col gap-1"
            >
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ animationDelay: `${40 + i * 45}ms` }}
                  className="press animate-fade-in opacity-0 text-[15px] font-medium text-foreground/80 hover:text-foreground py-3 px-4 rounded-2xl hover:bg-foreground/[0.05]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                aria-label="About"
                onClick={() => { setIsMobileMenuOpen(false); onOpenAbout(); }}
                style={{ animationDelay: `${40 + navLinks.length * 45}ms` }}
                className="press animate-fade-in opacity-0 text-[15px] font-medium text-foreground/80 hover:text-foreground py-3 px-4 rounded-2xl hover:bg-foreground/[0.05] text-left"
              >
                About
              </button>
              <button
                aria-label="Join Waitlist"
                onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }}
                style={{ animationDelay: `${40 + (navLinks.length + 1) * 45}ms` }}
                className="animate-fade-in opacity-0 relative mt-3 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-bold text-white overflow-hidden shadow-elev-brand transition-transform duration-press ease-out-strong active:scale-[0.98]"
              >
                <span className="absolute inset-0 btn-shimmer" />
                <span className="absolute inset-x-0 top-0 h-px bg-white/45" />
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
