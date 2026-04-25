import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import lettzoLogo from "@/assets/lettzo-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Community", href: "#", external: true },
    { label: "Safety Guide", href: "#", external: false },
    { label: "Privacy Policy", href: "/privacy", external: false },
    { label: "Terms of Service", href: "/terms", external: false },
  ];

  return (
    <footer id="contact" className="relative pt-20 pb-10 overflow-hidden bg-[#FAFAFA] border-t border-[#EAEAEA]">
      {/* Background tint */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6 col-span-1 lg:col-span-1">
            <img
              src={lettzoLogo}
              alt="Lettzo"
              className="h-10 md:h-12 w-auto"
            />
            <p className="text-sm font-medium text-foreground/70 leading-relaxed max-w-xs">
              Stop scrolling. Start doing. The social meetup platform designed for real-world connections.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="p-2 rounded-xl bg-white border border-[#EAEAEA] hover:border-primary/20 hover:bg-[#FFF5F5] transition-all text-foreground/50 hover:text-primary shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-xl bg-white border border-[#EAEAEA] hover:border-primary/20 hover:bg-[#FFF5F5] transition-all text-foreground/50 hover:text-primary shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/asad-siddiqui-6559a72a1/" target="_blank" aria-label="LinkedIn" className="p-2 rounded-xl bg-white border border-[#EAEAEA] hover:border-primary/20 hover:bg-[#FFF5F5] transition-all text-foreground/50 hover:text-primary shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Block */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-center md:items-start">
            <h4 className="font-fraunces text-lg font-bold mb-6 text-foreground">Let's build the future together.</h4>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a
                href="mailto:asad@lettzo.com"
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#EAEAEA] transition-all hover:border-primary/25 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] group flex-1"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-black text-foreground/60">Email Us</span>
                  <span className="text-sm font-bold text-foreground/80">asad@lettzo.com</span>
                </div>
                <ArrowUpRight className="ml-auto w-4 h-4 text-foreground/20 group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/asad-siddiqui-6559a72a1/"
                target="_blank"
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#EAEAEA] transition-all hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] group flex-1"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-black text-foreground/60">Founder</span>
                  <span className="text-sm font-bold text-foreground/80">Asad Siddiqui</span>
                </div>
                <ArrowUpRight className="ml-auto w-4 h-4 text-foreground/20 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col md:items-end">
            <h4 className="font-fraunces text-lg font-bold mb-6 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-3 md:text-right">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 md:justify-end"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-50" />
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 md:justify-end"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#EAEAEA] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-foreground/60">
            © {currentYear} Lettzo. Built for the spontaneous.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-foreground/60">Not a dating app</span>
            <div className="h-3 w-px bg-[#EAEAEA]" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-foreground/60">Socially driven</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;