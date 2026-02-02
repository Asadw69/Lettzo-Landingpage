import { Mail, Linkedin } from "lucide-react";
import lettzoLogo from "@/assets/lettzo-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ffb7ff9279a904877a95359181d759227%2F85f624f36a4c4dc69073e5fead9c780a"
            alt="Lettzo"
            className="h-16 md:h-20 w-auto mb-12 opacity-100"
          />

          <h3 className="font-satoshi text-3xl md:text-4xl font-black mb-8 italic">
            Let's build the future of <br />social spontaneous meetups.
          </h3>

          <p className="text-xl text-background/60 font-medium mb-12 max-w-xl">
            Have questions or want to collaborate? <br />
            Reach out to us directly through the channels below.
          </p>

          {/* Contact Block */}
          <div className="flex flex-col sm:flex-row gap-6 mb-20 w-full justify-center">
            <a
              href="mailto:asad@lettzo.com"
              className="flex items-center justify-center gap-4 bg-background/10 hover:bg-background/20 py-8 px-10 rounded-[2.5rem] transition-all group min-w-[280px] border border-background/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <span className="font-bold text-xl tracking-tight">asad@lettzo.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/asad-siddiqui-6559a72a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-background/10 hover:bg-background/20 py-8 px-10 rounded-[2.5rem] transition-all group min-w-[280px] border border-background/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-500" />
              </div>
              <span className="font-bold text-xl tracking-tight">Asad Siddiqui</span>
            </a>
          </div>

          {/* Bottom */}
          <div className="w-full pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
            <p className="text-sm font-bold tracking-tight">
              © {new Date().getFullYear()} Lettzo. Built for the spontaneous.
            </p>
            <div className="flex gap-8 text-xs font-black tracking-[0.2em] uppercase">
              <span>Not a dating app.</span>
              <span>Socially driven.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;