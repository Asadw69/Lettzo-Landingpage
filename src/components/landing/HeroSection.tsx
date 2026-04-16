import { ArrowRight, MapPin } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const scrollToPlans = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* High-quality background image container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bliss.jpg"
          alt="Background"
          className="w-full h-full object-cover object-bottom scale-105"
        />
        {/* Soft light overlay to ensure text readability without blurring the image */}
        <div className="absolute inset-0 bg-white/20 pointer-events-none" />
      </div>

      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-white/40 blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Subtle cloud-like overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, white 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Pill badge */}


          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black mb-6 leading-[1.1] md:leading-[1.05] drop-shadow-sm font-fraunces text-center w-full max-w-5xl md:whitespace-nowrap animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards", opacity: 0 }}
          >
            Touch some <span className="text-primary italic font-serif relative inline-block">
              grass
            </span>
          </h1>

          {/* Subtext - Centered */}
          <div
            className="mb-12 animate-fade-in flex flex-col items-center gap-4"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <p className="text-lg md:text-xl font-bold text-slate-800 max-w-2xl text-center leading-relaxed drop-shadow-sm px-4">
              Whatever you're in the mood for — find people ready to join.{" "}
              <br className="hidden md:block" />
              Coffee, gym, movies, travel, and more.
            </p>
            <div className="inline-flex items-center justify-center bg-white/60 backdrop-blur-md px-4 h-9 rounded-full border border-black/10 shadow-sm">
              <p className="text-xs font-bold text-black uppercase tracking-[0.15em]">
                Stop Doing Things Alone
              </p>
            </div>
          </div>

          {/* CTA Buttons - Centered Row */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto animate-fade-in"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <button
              id="hero-join-waitlist"
              onClick={onOpenModal}
              className="group relative inline-flex items-center justify-center gap-2.5 h-14 w-full sm:w-1/2 rounded-2xl text-[15px] font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-button"
            >
              <span className="absolute inset-0 btn-shimmer" />
              <span className="relative">Join Waitlist</span>
              <ArrowRight className="relative w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-explore-plans"
              onClick={scrollToPlans}
              className="group inline-flex items-center justify-center gap-2.5 h-14 w-full sm:w-1/2 rounded-2xl text-[15px] font-bold bg-white/80 backdrop-blur-md border border-white/80 text-foreground/80 hover:text-foreground hover:border-primary/20 hover:bg-white transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <MapPin className="w-[18px] h-[18px] text-primary" />
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
          className="w-full block"
          style={{ height: "100px", marginBottom: "-1px" }}
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
