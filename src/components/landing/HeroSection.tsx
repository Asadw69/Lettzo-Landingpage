import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import lettzoLogo from "@/assets/lettzo-logo.png";
import heroImage from "@/assets/hero-friends.jpg";
import { RejectedBadges } from "./RejectedBadges";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {


  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* ── Background layers ── */}
      {/* Deep ambient glow */}
      <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-600/6 blur-[100px] pointer-events-none" />
      <div className="absolute top-[30%] right-[25%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_30%,hsl(var(--background))_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left Content ── */}
          <div className="flex flex-col gap-7 text-center lg:text-left pt-4">
            
            {/* Social Proof / Rejected Badges */}
            <div className="flex justify-center lg:justify-start mb-2">
              <RejectedBadges />
            </div>

            {/* Logo */}
            <div className="flex justify-center lg:justify-start animate-fade-in">
              <img
                src={lettzoLogo}
                alt="Lettzo"
                className="h-14 md:h-18 w-auto object-contain brightness-[1.1]"
              />
            </div>

            {/* Pill badge */}
            <div
              className="inline-flex justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-semibold tracking-wide text-foreground/80 border border-white/10">

                <Sparkles className="w-3.5 h-3.5 text-primary" />
                The Social Meetup App — 2026
              </span>
            </div>

            {/* Headline */}
            <div
              className="space-y-2 animate-fade-in"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              <h1 className="font-satoshi text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05]">
                Stop Doing{" "}
                <span className="text-gradient">Things</span>{" "}
                <br className="hidden sm:block" />
                Alone.
              </h1>
            </div>

            {/* Subtext */}
            <div
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              <p className="text-lg md:text-xl font-medium text-foreground/60 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Whatever you're in the mood for — find people ready to join.
                Coffee, gym, movies, travel, and more.
              </p>
              <p className="text-xs font-bold text-primary/70 uppercase tracking-[0.2em] bg-primary/8 w-fit px-3 py-1.5 rounded-lg border border-primary/15 mx-auto lg:mx-0">
                Not a dating app. Just real plans.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              {/* Primary CTA */}
              <button
                onClick={onOpenModal}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="absolute inset-0 btn-shimmer" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/50" />
                <span className="relative">Join the Waitlist</span>
                <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold glass border border-white/10 text-foreground/80 hover:text-foreground transition-all duration-300 hover:bg-white/8 hover:border-white/20"
              >
                <MapPin className="w-5 h-5 text-primary" />
                Explore Nearby
              </button>
            </div>

          </div>


          {/* ── Right Content / Hero Image ── */}
          <div
            className="relative animate-fade-in lg:animate-slide-in-right"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            {/* Glow backdrop */}
            <div className="absolute inset-8 bg-primary/15 rounded-[2.5rem] blur-3xl pointer-events-none animate-glow-pulse" />

            {/* Card wrapper */}
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-card">
              <img
                src={heroImage}
                alt="Friends hanging out together"
                className="w-full h-full object-cover"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-satoshi text-white text-2xl font-bold mb-0.5">Real Connections</p>
                <p className="text-white/60 text-sm font-medium">Spontaneous & real-life plans</p>
              </div>

              {/* Glass tag top-right */}
              <div className="absolute top-5 right-5">
                <div className="glass px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white/80">Live now</span>
                </div>
              </div>
            </div>

            {/* Floating decorative card */}
            <div className="absolute -bottom-5 -left-5 glass-card rounded-2xl px-4 py-3 border border-white/8 animate-float shadow-card">
              <p className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-0.5">No more</p>
              <p className="text-sm font-black text-gradient">swiping.</p>
            </div>

            {/* Floating orb accent */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/20 blur-2xl animate-pulse pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
