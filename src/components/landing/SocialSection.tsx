import socialCoffee from "@/assets/social-coffee.jpg";
import socialWalking from "@/assets/social-walking.jpg";
import asadImg from "@/assets/Asad.jpeg";
import { useRevealOnScroll, reveal } from "@/hooks/use-reveal";

const SocialSection = () => {
  const sectionRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-[#FAFAFA]">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative bg */}
      <div className="absolute top-1/2 left-[5%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Images Stack */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div data-reveal style={reveal(0, "26px")} className="pt-12">
                <div className="group aspect-[3/4] rounded-3xl overflow-hidden border border-[#EAEAEA] shadow-elev-2 hover:shadow-elev-3 hover:-translate-y-1 transition-[transform,box-shadow] duration-hover ease-out-strong">
                  <img
                    src={socialCoffee}
                    alt="Friends having coffee"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[0.12] group-hover:grayscale-0 group-hover:scale-[1.04] transition-[filter,transform] duration-500 ease-out-strong"
                  />
                </div>
              </div>
              <div data-reveal style={reveal(90, "26px")}>
                <div className="group aspect-[3/4] rounded-3xl overflow-hidden border border-[#EAEAEA] shadow-elev-2 hover:shadow-elev-3 hover:-translate-y-1 transition-[transform,box-shadow] duration-hover ease-out-strong">
                  <img
                    src={socialWalking}
                    alt="Friends walking"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[0.12] group-hover:grayscale-0 group-hover:scale-[1.04] transition-[filter,transform] duration-500 ease-out-strong"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-8 order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h2
                  data-reveal
                  style={reveal(0, "18px")}
                  className="font-fraunces text-[2rem] sm:text-5xl font-bold mb-5 leading-[1.08] tracking-[-0.035em] text-foreground text-balance"
                >
                  because scrolling alone{" "}
                  <span className="text-gradient">gets old</span>
                </h2>
                <p
                  data-reveal
                  style={reveal(80, "14px")}
                  className="text-lg text-foreground/75 font-light leading-[1.7] text-pretty"
                >
                  we spend hours on our phones, but how often does that turn into real memories?
                  lettzo bridges the gap between online and offline
                </p>
              </div>

              {/* Founder/Testimonial Quote */}
              <div data-reveal style={reveal(170, "22px")}>
                <div className="relative p-8 bg-white rounded-[2rem] border border-[#EAEAEA] group overflow-hidden shadow-elev-2 hover:shadow-elev-3 hover:-translate-y-1 transition-[transform,box-shadow] duration-hover ease-out-strong">
                  {/* Subtle top accent line */}
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-t-[2rem]" />

                  <blockquote className="relative text-foreground/90 italic text-[17px] leading-[1.7] mb-7 text-pretty">
                    "Many people want to do things but don't have the right people at the right time.
                    Lettzo helps people find others with shared interests, so good plans
                    actually happen."
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-2xl border-2 border-primary/20 overflow-hidden shadow-elev-1 group-hover:scale-105 transition-transform duration-hover ease-out-strong">
                      <img
                        src={asadImg}
                        alt="Asad Siddiqui - Founder of Lettzo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-foreground tracking-[-0.01em]">Asad Siddiqui</p>
                      <p className="text-xs font-bold text-primary tracking-[0.08em]">Founder, 21 — Dehradun</p>
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
