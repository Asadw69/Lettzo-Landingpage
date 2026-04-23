import { MapPin, Coffee, Dumbbell, Film, Plane } from "lucide-react";

const MapSection = () => {
  const pins = [
    { icon: Coffee, label: "Coffee Chat", color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-100", ping: "bg-amber-400/20", top: "22%", left: "18%", delay: "0s" },
    { icon: Dumbbell, label: "Gym Sesh", color: "text-cyan-500", bg: "bg-cyan-50", border: "border-cyan-100", ping: "bg-cyan-400/20", top: "42%", left: "58%", delay: "0.5s" },
    { icon: Film, label: "Movie Night", color: "text-violet-500", bg: "bg-violet-50", border: "border-violet-100", ping: "bg-violet-400/20", top: "65%", left: "28%", delay: "1s" },
    { icon: Plane, label: "Road Trip", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100", ping: "bg-emerald-400/20", top: "30%", left: "75%", delay: "1.5s" },
  ];

  const steps = [
    { n: "1", title: "Post a Plan", desc: "Name it, set a time, pick a vibe. Takes 30 seconds." },
    { n: "2", title: "Find People", desc: "See who else is down. No endless texting needed." },
    { n: "3", title: "Link Up", desc: "You’re all here. Go." },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden bg-white">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background accents */}
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-cyan-400/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[300px] h-[300px] bg-primary/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left Content ── */}
          <div className="order-2 lg:order-1 space-y-10">
            <div>
              <span className="pill-badge text-primary/80 border-primary/15 bg-primary/5 mb-6 inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Neighborhood Visual
              </span>
              <h2 className="font-fraunces text-4xl sm:text-5xl md:text-7xl font-bold mb-5 leading-tight text-foreground">
                See Who's{" "}
                <span className="text-gradient">Around You.</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/55 leading-relaxed font-medium">
                Open the map and discover what's happening in your neighborhood.
                From morning runs to late-night coffee — find people who are
                actually down to do things in real life.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="group relative flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#EAEAEA] transition-all duration-500 hover:border-transparent hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(255,0,47,0.15)] overflow-hidden cursor-pointer"
                >
                  {/* Liquid Fill Layer */}
                  <div className="absolute inset-0 bg-[#FF002F] z-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                    style={{ clipPath: 'circle(0% at 0% 100%)' }} />

                  {/* Inline CSS for the clip-path animation because Tailwind can't animate clip-path values easily */}
                  <style dangerouslySetInnerHTML={{
                    __html: `
                    .group:hover > div[style*="clip-path"] {
                      clip-path: circle(150% at 0% 100%) !important;
                      opacity: 1 !important;
                    }
                  `}} />

                  <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20 group-hover:border-white/30">
                    <span className="text-sm font-black text-primary transition-colors duration-300 group-hover:text-white">{step.n}</span>
                  </div>

                  <div className="relative z-10">
                    <h4 className="font-semibold text-foreground mb-0.5 transition-colors duration-300 group-hover:text-white">{step.title}</h4>
                    <p className="text-sm text-foreground/50 transition-colors duration-300 group-hover:text-white/80">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Map Mockup ── */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Soft shadow behind map */}
              <div className="absolute inset-4 bg-primary/8 rounded-[2.5rem] blur-2xl pointer-events-none" />

              {/* Map card */}
              <div className="absolute inset-0 bg-white rounded-[2.5rem] overflow-hidden border border-[#EAEAEA] shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.15)] group/map">

                {/* Real Map Background Image */}
                <img
                  src="/map"
                  alt="Live Map"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] opacity-80 transition-transform duration-[10s] ease-linear group-hover/map:scale-110"
                />

                {/* Subtle Scan Line Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,0,0,0.02)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none" />

                {/* Map pins */}
                {pins.map((pin, index) => (
                  <div
                    key={index}
                    className="absolute animate-float"
                    style={{ top: pin.top, left: pin.left, animationDelay: pin.delay }}
                  >
                    <div className="relative group cursor-pointer">
                      <div className={`absolute -inset-3 rounded-full ${pin.ping} animate-ping opacity-40`} />

                      <div className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EAEAEA] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1`}>
                        <div className={`w-6 h-6 rounded-full ${pin.bg} flex items-center justify-center`}>
                          <pin.icon className={`w-3.5 h-3.5 ${pin.color}`} />
                        </div>
                        <span className="text-[11px] font-bold text-foreground/80 pr-1">{pin.label}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Center "You are here" */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-12 rounded-full border border-primary/20 animate-ping-slow" />
                    <div className="absolute -inset-6 rounded-full bg-primary/5 border border-primary/10" />
                    <div className="w-5 h-5 rounded-full bg-primary border-[3px] border-white shadow-[0_0_20px_rgba(255,0,47,0.4)] relative z-10" />
                  </div>
                </div>

                {/* "You" label */}
                <div className="absolute top-[calc(50%+28px)] left-1/2 -translate-x-1/2">
                  <span className="px-2 py-0.5 rounded-md bg-white/80 backdrop-blur-sm border border-[#EAEAEA] text-[10px] font-black text-primary uppercase tracking-widest shadow-sm">You</span>
                </div>

                {/* Live Indicator Overlay */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#EAEAEA] shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-foreground/60 uppercase tracking-tighter">Live Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
