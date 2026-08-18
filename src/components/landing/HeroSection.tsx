import { useEffect, useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { useRevealOnScroll, reveal } from "@/hooks/use-reveal";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const revealRef = useRevealOnScroll<HTMLDivElement>({ rootMargin: "0px" });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.setAttribute("playsinline", "true");
      videoRef.current.setAttribute("webkit-playsinline", "true");
      videoRef.current.play().catch(() => {
        // Autoplay may be handled by browser policy
      });
    }
  }, []);

  const scrollToPlans = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-[#79a6d0]">
      {/* Full motion video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          // @ts-ignore
          webkit-playsinline="true"
          preload="auto"
          className="w-full h-full object-cover object-[center_25%] md:object-[center_85%]"
        >
          <source
            src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/flowers_motion_r54og5.mp4"
            type="video/mp4"
          />
          <source
            src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/flowers_motion_r54og5.webm"
            type="video/webm"
          />
        </video>
        {/* Subtle Bloomora gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent pointer-events-none" />
      </div>

      <div
        ref={revealRef}
        className="container mx-auto px-4 sm:px-6 relative z-10 -mt-6 md:-mt-10"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Display type: tracking tightens as the size grows, leading stays tight */}
          <h1
            data-reveal
            style={reveal(60, "16px")}
            className="font-fraunces text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.045em] leading-[1.02] text-black mb-5 md:mb-6 text-balance w-full max-w-5xl md:whitespace-nowrap"
          >
            touch some{" "}
            <span className="text-primary italic font-serif relative inline-block">
              grass
            </span>
          </h1>

          {/* Subtext */}
          <p
            data-reveal
            style={reveal(150, "14px")}
            className="text-[17px] md:text-xl font-light text-white/90 max-w-xl leading-relaxed text-balance px-4 mb-9 md:mb-11"
          >
            whatever you're in the mood for find people ready to join
          </p>

          {/* CTA Buttons */}
          <div
            data-reveal
            style={reveal(240, "14px")}
            className="flex flex-col sm:flex-row gap-3.5 justify-center items-center w-full max-w-lg mx-auto"
          >
            <button
              id="hero-join-waitlist"
              aria-label="Join Waitlist"
              onClick={onOpenModal}
              className="group relative inline-flex items-center justify-center gap-2.5 h-14 w-full sm:w-1/2 rounded-2xl text-[15px] font-bold tracking-[-0.01em] text-white overflow-hidden shadow-elev-brand bg-[#FF002F] hover:bg-[#E6002A] transition-transform duration-press ease-out-strong hover:scale-[1.02] active:scale-[0.975]"
            >
              <span className="absolute inset-0 btn-shimmer" />
              <span className="absolute inset-x-0 top-0 h-px bg-white/45" />
              <span className="relative">Join Waitlist</span>
              <ArrowRight className="relative w-[18px] h-[18px] transition-transform duration-hover ease-out-strong group-hover:translate-x-1" />
            </button>

            <button
              id="hero-explore-plans"
              aria-label="Explore Plans"
              onClick={scrollToPlans}
              className="group inline-flex items-center justify-center gap-2.5 h-14 w-full sm:w-1/2 rounded-2xl text-[15px] font-bold tracking-[-0.01em] bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-white/90 text-foreground hover:text-foreground hover:bg-white hover:border-white shadow-elev-1 hover:shadow-elev-2 transition-[background-color,border-color,box-shadow,color,transform] duration-hover ease-out-strong hover:scale-[1.015] active:scale-[0.975]"
            >
              <MapPin className="w-[18px] h-[18px] text-primary transition-transform duration-hover ease-out-strong group-hover:-translate-y-0.5" />
              Explore Plans
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block h-14 sm:h-20 md:h-[100px]"
          style={{ marginBottom: "-1px" }}
          aria-hidden="true"
        >
          <path
            d="M0,40 C240,100 480,0 720,60 C960,120 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="#FF002F"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
