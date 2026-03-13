import { MapPin, Coffee, Dumbbell, Film, Plane } from "lucide-react";

const MapSection = () => {
  const pins = [
    { icon: Coffee, label: "Coffee Chat", color: "text-amber-400", bg: "bg-amber-400/15", top: "22%", left: "18%", delay: "0s" },
    { icon: Dumbbell, label: "Gym Sesh", color: "text-cyan-400", bg: "bg-cyan-400/15", top: "42%", left: "58%", delay: "0.5s" },
    { icon: Film, label: "Movie Night", color: "text-violet-400", bg: "bg-violet-400/15", top: "65%", left: "28%", delay: "1s" },
    { icon: Plane, label: "Road Trip", color: "text-emerald-400", bg: "bg-emerald-400/15", top: "30%", left: "75%", delay: "1.5s" },
  ];

  const steps = [
    { n: "1", title: "Post a Plan", desc: "Name it, set a time, pick a vibe. Takes 30 seconds." },
    { n: "2", title: "Find Your Crew", desc: "See who else is down. No endless texting needed." },
    { n: "3", title: "Go Live", desc: "Connect in the dedicated plan chat and make it happen." },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-cyan-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left Content ── */}
          <div className="order-2 lg:order-1 space-y-10">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                <MapPin className="w-3.5 h-3.5" />
                Neighborhood Visual
              </span>
              <h2 className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight">
                See Who's{" "}
                <span className="text-gradient">Around You.</span>
              </h2>
              <p className="text-lg text-foreground/55 leading-relaxed font-medium">
                Open the map and discover what's happening in your neighborhood.
                From morning runs to late-night coffee — find people who are
                actually down to do things in real life.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="group flex items-start gap-4 glass-card rounded-2xl p-5 border border-white/6 transition-all duration-300 hover:border-primary/20 hover:-translate-y-0.5"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-sm font-black text-primary">{step.n}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-0.5">{step.title}</h4>
                    <p className="text-sm text-foreground/50">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Map Mockup ── */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer glow */}
              <div className="absolute inset-4 bg-primary/10 rounded-[2.5rem] blur-3xl pointer-events-none" />

              {/* Map card */}
              <div className="absolute inset-0 glass-card rounded-[2.5rem] overflow-hidden">

                {/* Map grid */}
                <div className="absolute inset-0 opacity-[0.07]">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute w-full h-px bg-foreground"
                      style={{ top: `${(i + 1) * 12.5}%` }}
                    />
                  ))}
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute h-full w-px bg-foreground"
                      style={{ left: `${(i + 1) * 12.5}%` }}
                    />
                  ))}
                </div>

                {/* Subtle road lines */}
                <div className="absolute inset-0 opacity-[0.04]">
                  <div className="absolute top-[38%] left-0 right-0 h-4 bg-foreground/40 rounded" />
                  <div className="absolute left-[42%] top-0 bottom-0 w-4 bg-foreground/40 rounded" />
                </div>

                {/* Map pins */}
                {pins.map((pin, index) => (
                  <div
                    key={index}
                    className="absolute animate-float"
                    style={{ top: pin.top, left: pin.left, animationDelay: pin.delay }}
                  >
                    <div className="relative group cursor-pointer">
                      <div className={`absolute -inset-2 rounded-full ${pin.bg} animate-ping opacity-50`} />
                      <div className={`relative w-11 h-11 rounded-2xl glass-card border border-white/10 flex items-center justify-center shadow-card`}>
                        <pin.icon className={`w-5 h-5 ${pin.color}`} />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute left-1/2 -translate-x-1/2 -top-10 glass rounded-xl px-3 py-1.5 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
                        <span className="text-xs font-semibold text-foreground/90">{pin.label}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Center "You are here" */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-full border border-primary/20 animate-ping-slow" />
                    <div className="absolute -inset-3 rounded-full border border-primary/30" />
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_hsl(349_100%_55%/0.6)]" />
                  </div>
                </div>

                {/* "You" label */}
                <div className="absolute top-[calc(50%+20px)] left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest">You</span>
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
