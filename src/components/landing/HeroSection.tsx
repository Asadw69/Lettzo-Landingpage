import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-friends.jpg";
import lettzoLogo from "@/assets/lettzo-logo.png";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left">
            {/* Direct Logo Placement */}
            <div className="flex justify-center lg:justify-start mb-2 animate-fade-in">
              <img
                src={lettzoLogo}
                alt="Lettzo"
                className="h-16 md:h-24 w-auto object-contain"
              />
            </div>

            {/* Badge */}
            <div className="inline-flex justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                The Social Meetup App
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-satoshi text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground animate-fade-in leading-[1.1]"
              style={{ animationDelay: "0.2s" }}
            >
              Stop Doing{" "}
              <span className="text-primary italic">
                Things
              </span>{" "}
              Alone.
            </h1>

            {/* Subtext */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Whatever you’re in the mood for, find people ready to join.
                Coffee, gym, movies, travel, and more.
              </p>
              <p className="text-sm font-bold text-primary/60 uppercase tracking-widest bg-primary/5 w-fit px-3 py-1 rounded-md mx-auto lg:mx-0">
                Not a dating app. Just real plans.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in mt-2"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                onClick={onOpenModal}
                className="shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg font-bold px-10 py-7 rounded-full"
              >
                Start a Plan
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onOpenModal}
                className="transition-all duration-300 hover:bg-secondary text-lg font-bold px-10 py-7 rounded-full border-2"
              >
                <MapPin className="mr-2 h-6 w-6" />
                Explore Nearby
              </Button>
            </div>
          </div>

          {/* Right Content / Image integration */}
          <div
            className="relative animate-fade-in lg:animate-slide-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={heroImage}
                alt="Friends hanging out together"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle integrated Logo */}
              <div className="absolute top-8 right-8 mix-blend-overlay opacity-30 select-none pointer-events-none">
                <img src={lettzoLogo} alt="" className="w-32 h-auto" />
              </div>

              {/* Bottom linear gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Floating lifestyle label */}
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="text-white">
                  <p className="font-satoshi text-2xl font-bold">Real Connections</p>
                  <p className="text-sm opacity-80 font-medium">Spontaneous & Real-life plans</p>
                </div>
              </div>
            </div>

            {/* Decorative Floating Elements - simplified */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-foreground border border-primary/20 rounded-full flex items-center justify-center animate-float shadow-xl px-4 text-center">
              <span className="text-xs font-black text-primary uppercase">No more<br />swiping.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
