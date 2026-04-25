import { Zap, Map, MessageCircle, Users, Tag, Sparkles, TrendingUp, ShieldCheck, Brain, Video, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";

interface Feature {
  icon: any;
  title: string;
  description: string;
  className: string;
  iconBg: string;
  iconColor: string;
  accentColor: string;
  badge?: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Spontaneous Meetups",
    description: "Got an hour for coffee or a quick gym session? Create a plan and find someone to join you instantly. No more waiting for 'someday'.",
    className: "md:col-span-2",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    accentColor: "hover:border-amber-200",
    badge: "Life-changing",
  },
  {
    icon: Map,
    title: "Live Discovery",
    description: "See what's happening around you in real-time.",
    className: "md:col-span-1",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-500",
    accentColor: "hover:border-cyan-200",
  },
  {
    icon: MessageCircle,
    title: "Plan Chats",
    description: "Dedicated spaces for every meetup.",
    className: "md:col-span-1",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    accentColor: "hover:border-violet-200",
  },
  {
    icon: Brain,
    title: "AI Vibe Match",
    description: "Our intelligence understands your mood and interests to suggest the perfect meetup. It doesn't just match keywords; it matches human connection.",
    className: "md:col-span-1",
    iconBg: "bg-rose-50",
    iconColor: "text-primary",
    accentColor: "hover:border-rose-200",
    badge: "Smart",
  },
  {
    icon: Video,
    title: "Virtual Hangouts",
    description: "Can't make it in person? Bridge the distance with high-fidelity social rooms.",
    className: "md:col-span-1",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    accentColor: "hover:border-blue-200",
  },
  {
    icon: Calendar,
    title: "Seamless Hosting",
    description: "From 2-person coffee chats to 50-person hikes. Automated RSVP tracking, waitlists, and venue sorting make coordination effortless.",
    className: "md:col-span-2",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    accentColor: "hover:border-orange-200",
    badge: "Pro Tools",
  },
  {
    icon: Tag,
    title: "Vibe Matching",
    description: "Find people on your precise wavelength.",
    className: "md:col-span-1",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    accentColor: "hover:border-pink-200",
  },
  {
    icon: Users,
    title: "Strictly Social",
    description: "Designed for shared activities and real hobbies. We're here for connections, not dating.",
    className: "md:col-span-3",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    accentColor: "hover:border-emerald-200",
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal-item");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 md:py-40 relative overflow-hidden bg-[#FF002F]">


      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header Section */}
        <div className="reveal-item max-w-4xl mb-16 md:mb-24 text-center mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out [&.in-view]:opacity-100 [&.in-view]:translate-y-0">
          <div className="pill-badge text-white border-white/20 bg-white/10 mx-auto w-fit mb-6">
            <TrendingUp className="w-3 h-3 text-white" />
            Designed for connection
          </div>
          <h2 className="font-fraunces text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
            The platform that <br />
            <span className="text-white/90 hover:italic transition-all px-2">actually works.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto">
            We've removed the noise of modern social media.
            <br />
            No algorithms, no infinite scrolling just real people making real plans.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`reveal-item group relative bg-white rounded-[1.75rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden border border-[#EAEAEA] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] opacity-0 translate-y-10 [&.in-view]:opacity-100 [&.in-view]:translate-y-0 ${feature.className} ${feature.accentColor}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Top shine on hover */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-start justify-between mb-7">
                  <div className={`w-13 h-13 w-12 h-12 rounded-2xl ${feature.iconBg} flex items-center justify-center transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  {feature.badge && (
                    <span className="px-3 py-1 rounded-full bg-[#F5F5F5] border border-[#EAEAEA] text-[10px] font-black uppercase tracking-widest text-foreground/45">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-fraunces text-xl md:text-2xl font-bold mb-3 tracking-tight text-foreground group-hover:text-foreground transition-colors">
                  {feature.title}
                </h3>
                <p className={`text-sm md:text-base font-medium leading-relaxed text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300 ${feature.className.includes('md:col-span-2') ? 'max-w-md' : 'line-clamp-3 md:line-clamp-none'}`}>
                  {feature.description}
                </p>
              </div>

              {/* Decorative Arrow (Bottom Right) */}
              <div className="mt-7 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="w-9 h-9 rounded-full bg-[#F5F5F5] border border-[#EAEAEA] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          ))}

          {/* Safety Wide Card */}
          <div className="reveal-item md:col-span-3 bg-white rounded-[1.75rem] p-8 md:px-12 md:py-10 border border-[#EAEAEA] flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-emerald-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 opacity-0 translate-y-10 [&.in-view]:opacity-100 [&.in-view]:translate-y-0"
            style={{ transitionDelay: "0.5s" }}>
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-fraunces text-xl md:text-2xl font-bold text-foreground mb-2">Safe & Verified Community</h3>
                <p className="text-foreground/70 font-medium max-w-xl text-sm md:text-base">Every user on Lettzo is verified to ensure a respectful, hobby-first environment. We prioritize safety and real human connection above everything else.</p>
              </div>
            </div>
            <button aria-label="Learn about Safety" className="px-6 py-3 rounded-2xl bg-[#F5F5F5] border border-[#EAEAEA] text-sm font-bold hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all text-foreground/70 whitespace-nowrap">
              Learn about Safety
            </button>
          </div>
        </div>
      </div>

      {/* Wave transition out of the red section into the next white section */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "80px", marginBottom: "-2px" }}
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>
    </section>
  );
};

export default FeaturesSection;
