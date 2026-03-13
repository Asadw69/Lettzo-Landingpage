import socialCoffee from "@/assets/social-coffee.jpg";
import socialWalking from "@/assets/social-walking.jpg";

const SocialSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Images Stack */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-4 md:space-y-8 pt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden glass-card border-none shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                  <img src={socialCoffee} alt="Friends having coffee" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
              <div className="space-y-4 md:space-y-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden glass-card border-none shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                  <img src={socialWalking} alt="Friends walking" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>

            {/* Overlapping small glass decoration */}
            <div className="absolute -bottom-6 right-12 glass p-4 rounded-2xl border border-white/10 animate-float shadow-2xl">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                ].map((url, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                    <img src={url} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-2">Connecting Now</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-8 order-1 lg:order-2">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                  Real Connections
                </span>
                <h2 className="font-satoshi text-4xl sm:text-5xl font-black mb-6 leading-tight">
                  Because Scrolling Alone <br />
                  <span className="text-gradient">Gets Old.</span>
                </h2>
                <div className="space-y-4 text-lg text-foreground/55 font-medium leading-relaxed">
                  <p>
                    We spend hours on our phones, but how often does that turn into real memories?
                    Lettzo bridges the gap between online and offline.
                  </p>
                  <p>
                    Whether it's a spontaneous coffee run, a gym buddy, or a weekend adventure —
                    life's better when you share it with others.
                  </p>
                </div>
              </div>

              {/* Founder/Testimonial Quote */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="relative p-8 glass-card rounded-[2.5rem] border border-white/8 group overflow-hidden">
                  {/* Subtle top light */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <blockquote className="relative text-foreground/80 italic text-lg mb-8 leading-relaxed">
                    "Many people want to do things but don't have the right people at the right time.
                    Lettzo helps people find others with shared interests, so good plans
                    actually happen."
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/40 to-lettzo-pink/40 border border-white/10 flex items-center justify-center font-black text-white group-hover:scale-110 transition-transform">
                      A
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Asad Siddiqui</p>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">Founder, 21 — Dehradun</p>
                    </div>
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

export default SocialSection;