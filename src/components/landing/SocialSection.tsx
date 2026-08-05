import socialCoffee from "@/assets/social-coffee.jpg";
import socialWalking from "@/assets/social-walking.jpg";
import asadImg from "@/assets/Asad.jpeg";

const SocialSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-[#FAFAFA]">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative bg */}
      <div className="absolute top-1/2 left-[5%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Images Stack */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6 pt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-[#EAEAEA] shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-transform hover:scale-[1.02] duration-400">
                  <img src={socialCoffee} alt="Friends having coffee" loading="lazy" decoding="async" className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-600" />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 animate-fade-in" style={{ animationDelay: "0.35s" }}>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-[#EAEAEA] shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-transform hover:scale-[1.02] duration-400">
                  <img src={socialWalking} alt="Friends walking" loading="lazy" decoding="async" className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-600" />
                </div>
              </div>
            </div>

            {/* Floating social bubble */}
            <div className="absolute -bottom-6 right-8 bg-white p-4 rounded-2xl border border-[#EAEAEA] animate-float shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
              <div className="flex -space-x-2">
                {[
                  asadImg,
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                ].map((url, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img src={url} alt={`User profile ${i + 1}`} loading="lazy" decoding="async" width="32" height="32" className="w-full h-full object-cover" />
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
                <h2 className="font-fraunces text-3xl sm:text-5xl font-bold mb-6 leading-tight text-foreground">
                  because scrolling alone{" "}
                  <span className="text-gradient hover:italic transition-all px-2">gets old</span>
                </h2>
                <div className="space-y-4 text-lg text-foreground/80 font-medium leading-relaxed">
                  <p>
                    we spend hours on our phones, but how often does that turn into real memories?
                    lettzo bridges the gap between online and offline
                  </p>
                </div>
              </div>

              {/* Founder/Testimonial Quote */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="relative p-8 bg-white rounded-[2rem] border border-[#EAEAEA] group overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] transition-all duration-300">
                  {/* Subtle top accent line */}
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-t-[2rem]" />

                  <blockquote className="relative text-foreground/90 italic text-lg mb-7 leading-relaxed">
                    "Many people want to do things but don't have the right people at the right time.
                    Lettzo helps people find others with shared interests, so good plans
                    actually happen."
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl border-2 border-primary/20 overflow-hidden shadow-md group-hover:scale-110 transition-transform">
                      <img
                        src={asadImg}
                        alt="Asad Siddiqui - Founder of Lettzo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Asad Siddiqui</p>
                      <p className="text-xs font-bold text-primary tracking-widest">Founder, 21 — Dehradun</p>
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