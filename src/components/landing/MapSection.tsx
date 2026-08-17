import { Coffee, Dumbbell, Film, Plane } from "lucide-react";
import { useRevealOnScroll, reveal } from "@/hooks/use-reveal";

const MapSection = () => {
  const sectionRef = useRevealOnScroll<HTMLDivElement>();

  /* Pins carry a label pill that extends to the RIGHT of its anchor point, so a
     pin placed by `left` near the right edge pushes its label out of the card
     and gets clipped on narrow screens. Right-side pins anchor by `right`
     instead, which makes them safe at any width. */
  const pins = [
    { icon: Coffee, label: "Coffee Chat", color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-100", ping: "bg-amber-400/20", pos: { top: "18%", left: "8%" }, delay: "0s" },
    { icon: Plane, label: "Road Trip", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100", ping: "bg-emerald-400/20", pos: { top: "30%", right: "7%" }, delay: "1.5s" },
    { icon: Dumbbell, label: "Gym Sesh", color: "text-cyan-500", bg: "bg-cyan-50", border: "border-cyan-100", ping: "bg-cyan-400/20", pos: { top: "67%", right: "12%" }, delay: "0.5s" },
    { icon: Film, label: "Movie Night", color: "text-violet-500", bg: "bg-violet-50", border: "border-violet-100", ping: "bg-violet-400/20", pos: { top: "71%", left: "9%" }, delay: "1s" },
  ] satisfies ReadonlyArray<{ pos: React.CSSProperties } & Record<string, unknown>>;

  const steps = [
    { n: "1", title: "post a plan", desc: "name it, choose a time, and publish it" },
    { n: "2", title: "find people", desc: "see who else is down, no endless texting needed" },
    { n: "3", title: "link up", desc: "you’re all here, go" },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden bg-[#FBFBFB]">

      {/* Background accents */}
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-cyan-400/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6">
        {/* Mobile reads heading → map → steps, so the visual arrives with context
            instead of before it. Desktop keeps copy left, map right via explicit
            row/column placement. */}
        <div className="grid lg:grid-cols-2 gap-y-10 sm:gap-y-12 lg:gap-x-20 items-center">

          {/* ── Heading ── */}
          <div className="order-1 lg:col-start-1 lg:row-start-1 lg:self-end">
            <div>
              <h2
                data-reveal
                style={reveal(0, "18px")}
                className="font-fraunces text-[2.5rem] sm:text-5xl md:text-6xl font-bold mb-4 leading-[1.06] tracking-[-0.035em] text-foreground text-balance"
              >
                see who's{" "}
                <span className="text-gradient">around you</span>
              </h2>
              <p
                data-reveal
                style={reveal(80, "14px")}
                className="text-lg text-foreground/70 leading-relaxed font-light text-balance"
              >
                open the map and discover what's happening in your neighborhood
              </p>
            </div>
          </div>

          {/* ── Map Mockup ── */}
          <div
            data-reveal
            style={reveal(120, "24px")}
            className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Soft shadow behind map */}
              <div className="absolute inset-4 bg-primary/[0.08] rounded-[2.5rem] blur-2xl pointer-events-none" />

              {/* Map card */}
              <div className="absolute inset-0 bg-white rounded-[2.5rem] overflow-hidden border border-[#EAEAEA] shadow-elev-3 group/map">

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
                    style={{ ...pin.pos, animationDelay: pin.delay }}
                  >
                    <div className="relative group cursor-pointer">
                      <div className={`absolute -inset-3 rounded-full ${pin.ping} animate-ping opacity-40`} />

                      <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EAEAEA] shadow-elev-2 transition-transform duration-hover ease-out-strong group-hover:scale-110 group-hover:-translate-y-1">
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
                  <span className="px-2 py-0.5 rounded-md bg-white/80 backdrop-blur-sm border border-[#EAEAEA] text-[10px] font-black text-primary uppercase tracking-widest shadow-elev-1">You</span>
                </div>

                {/* Live Indicator Overlay */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#EAEAEA] shadow-elev-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-foreground/80 uppercase tracking-tight">Live Updates</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Steps — a numbered sequence, so they cascade in order ── */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 lg:self-start space-y-3">
            {steps.map((step, i) => (
              <div
                key={step.n}
                data-reveal
                style={reveal(160 + i * 70, "16px")}
              >
                <div className="liquid-host group relative flex items-start gap-4 bg-white rounded-2xl p-4 sm:p-5 border border-[#EAEAEA] shadow-elev-1 hover:border-transparent hover:shadow-[0_18px_38px_-14px_rgba(255,0,47,0.35)] hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-hover ease-out-strong overflow-hidden">
                  {/* Liquid fill sweeping up from the number — origin-aware, so the
                      colour reads as spreading out of the step marker.
                      Pointer-gated in CSS to match the group-hover: text colours. */}
                  <div className="liquid-fill absolute inset-0 bg-[#FF002F] z-0" />

                  <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center transition-colors duration-hover ease-out-strong group-hover:bg-white/20 group-hover:border-white/30">
                    <span className="text-sm font-black text-primary transition-colors duration-hover group-hover:text-white">{step.n}</span>
                  </div>

                  <div className="relative z-10">
                    <h4 className="font-semibold text-[15px] text-foreground mb-0.5 transition-colors duration-hover group-hover:text-white">{step.title}</h4>
                    <p className="text-sm font-light text-foreground/70 leading-snug transition-colors duration-hover group-hover:text-white/90">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
