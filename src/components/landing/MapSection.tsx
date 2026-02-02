import { MapPin, Coffee, Dumbbell, Film, Plane } from "lucide-react";

const MapSection = () => {
  const pins = [
    { icon: Coffee, label: "Coffee Chat", top: "25%", left: "20%", delay: "0s" },
    { icon: Dumbbell, label: "Gym Sesh", top: "40%", left: "55%", delay: "0.1s" },
    { icon: Film, label: "Movie Night", top: "60%", left: "30%", delay: "0.2s" },
    { icon: Plane, label: "Road Trip", top: "35%", left: "75%", delay: "0.3s" },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold tracking-widest uppercase mb-6">
              Neighborhood Visual
            </span>
            <h2 className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              See Who's <br />
              <span className="text-primary italic">Around You.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
              Open the map and discover what's happening in your neighborhood.
              From morning runs to late-night coffee, find people who are
              actually down to do things in real life.
            </p>

            <div className="space-y-4">
              {[
                "Browse plans by activity type",
                "See who's joining in real-time",
                "Filter by distance and time",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Map Mockup */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Map background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary via-secondary/50 to-primary/5 border border-border shadow-card overflow-hidden">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute w-full h-px bg-foreground/20"
                      style={{ top: `${(i + 1) * 16.66}%` }}
                    />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute h-full w-px bg-foreground/20"
                      style={{ left: `${(i + 1) * 16.66}%` }}
                    />
                  ))}
                </div>

                {/* Map pins */}
                {pins.map((pin, index) => (
                  <div
                    key={index}
                    className="absolute animate-float"
                    style={{
                      top: pin.top,
                      left: pin.left,
                      animationDelay: pin.delay,
                    }}
                  >
                    <div className="relative group cursor-pointer">
                      <div className="absolute -inset-2 rounded-full bg-primary/20 animate-ping opacity-40" />
                      <div className="relative w-12 h-12 rounded-full bg-primary shadow-button flex items-center justify-center">
                        <pin.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute left-1/2 -translate-x-1/2 -top-10 bg-card rounded-lg px-3 py-1.5 shadow-card border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-sm font-medium">{pin.label}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Center location */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full border-2 border-primary/30 animate-pulse" />
                    <div className="absolute -inset-8 rounded-full border border-primary/20" />
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                  </div>
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
