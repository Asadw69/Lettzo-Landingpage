import { Link } from "react-router-dom";
import { Zap, Map, MessageCircle, Users, Tag, TrendingUp, ShieldCheck, Brain, Video, Calendar, ArrowRight } from "lucide-react";
import { useRevealOnScroll, reveal } from "@/hooks/use-reveal";

interface Feature {
  icon: any;
  title: string;
  description: string;
  className: string;
  iconBg: string;
  iconColor: string;
  accentColor: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "spontaneous meetups",
    description: "got an hour for coffee or a quick gym session? create a plan and find someone to join you instantly.",
    className: "md:col-span-2",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    accentColor: "hover:border-amber-200",
  },
  {
    icon: Map,
    title: "live discovery",
    description: "see what's happening around you in real-time.",
    className: "md:col-span-1",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-500",
    accentColor: "hover:border-cyan-200",
  },
  {
    icon: MessageCircle,
    title: "plan chats",
    description: "dedicated spaces for every meetup.",
    className: "md:col-span-1",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    accentColor: "hover:border-violet-200",
  },
  {
    icon: Brain,
    title: "ai vibe match",
    description: "our intelligence understands your mood and interests to suggest the perfect meetup. it doesn't just match keywords; it matches human connection.",
    className: "md:col-span-1",
    iconBg: "bg-rose-50",
    iconColor: "text-primary",
    accentColor: "hover:border-rose-200",
  },
  {
    icon: Video,
    title: "virtual hangouts",
    description: "can't make it in person? bridge the distance with high-fidelity social rooms.",
    className: "md:col-span-1",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    accentColor: "hover:border-blue-200",
  },
  {
    icon: Calendar,
    title: "seamless hosting",
    description: "from 2-person coffee chats to 50-person hikes.",
    className: "md:col-span-2",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    accentColor: "hover:border-orange-200",
  },
  {
    icon: Tag,
    title: "vibe matching",
    description: "find people on your precise wavelength.",
    className: "md:col-span-1",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    accentColor: "hover:border-pink-200",
  },
  {
    icon: Users,
    title: "strictly social",
    description: "designed for shared activities and real hobbies. we're here for connections, not dating.",
    className: "md:col-span-3",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    accentColor: "hover:border-emerald-200",
  },
];

const FeaturesSection = () => {
  const sectionRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="features" className="py-24 md:py-40 relative overflow-hidden bg-[#FF002F]">
      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header Section */}
        <div className="max-w-4xl mb-16 md:mb-24 text-center mx-auto">
          <div data-reveal style={reveal(0, "12px")} className="pill-badge text-slate-800 border-white/30 bg-white mx-auto w-fit mb-7 shadow-elev-1">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            Designed for connection
          </div>

          <h2
            data-reveal
            style={reveal(80, "16px")}
            className="font-fraunces text-[2.5rem] sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.05] tracking-[-0.035em] text-white text-balance"
          >
            the platform that <br />
            <span className="inline-block text-white/90 hover:italic hover:translate-x-1.5 hover:text-white transition-all duration-300 cursor-pointer">
              actually works
            </span>
          </h2>

          <p
            data-reveal
            style={reveal(150, "14px")}
            className="text-base md:text-xl text-white/95 font-light leading-relaxed max-w-2xl mx-auto text-balance"
          >
            we've removed the noise of modern social media
            <br />
            no endless scrolling, just real people making real plans
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            /* Reveal lives on the wrapper so the card's own hover transform is
               never fighting the entrance transform for the same property */
            <div
              key={feature.title}
              data-reveal
              style={reveal(index * 60, "24px")}
              className={feature.className}
            >
              <div
                className={`group relative h-full bg-white rounded-[1.75rem] p-8 md:p-9 flex flex-col justify-between overflow-hidden border border-[#EAEAEA] shadow-elev-1 hover:shadow-elev-3 hover:-translate-y-1.5 transition-[transform,box-shadow,border-color] duration-hover ease-out-strong ${feature.accentColor}`}
              >
                {/* Top shine on hover */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-hover ease-out-strong" />

                <div>
                  <div className="flex items-start justify-between mb-7">
                    <div className={`w-12 h-12 rounded-2xl ${feature.iconBg} flex items-center justify-center transition-transform duration-hover ease-out-strong group-hover:scale-110 group-hover:-rotate-3`}>
                      <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="font-fraunces text-xl md:text-[1.4rem] font-bold mb-2.5 tracking-[-0.02em] leading-[1.2] text-foreground">
                    {feature.title}
                  </h3>
                  <p className={`text-[15px] font-light leading-[1.65] text-foreground/75 group-hover:text-foreground/90 transition-colors duration-hover ${feature.className.includes('md:col-span-2') ? 'max-w-md' : 'line-clamp-3 md:line-clamp-none'}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Arrow (Bottom Right) */}
                <div className="mt-7 flex justify-end opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,transform] duration-hover ease-out-strong">
                  <div className="w-9 h-9 rounded-full bg-[#F5F5F5] border border-[#EAEAEA] flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Safety Wide Card */}
          <div
            data-reveal
            style={reveal(features.length * 60, "24px")}
            className="md:col-span-3"
          >
            <div className="h-full bg-white rounded-[1.75rem] p-8 md:px-12 md:py-10 border border-[#EAEAEA] shadow-elev-1 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-emerald-300 hover:shadow-elev-2 hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-hover ease-out-strong">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center transition-transform duration-hover ease-out-strong group-hover:scale-105">
                  <ShieldCheck className="w-7 h-7 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-fraunces text-xl md:text-2xl font-bold text-foreground mb-2 tracking-[-0.02em]">safe &amp; verified community</h3>
                  <p className="text-foreground/75 font-light max-w-xl text-[15px] leading-[1.65]">every user on Lettzo is verified to ensure a respectful, hobby-first environment. we prioritize safety and real human connection above everything else.</p>
                </div>
              </div>
              <Link
                to="/safety"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-[#EAEAEA] text-sm font-bold text-foreground/80 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/50 shadow-elev-1 hover:shadow-elev-2 transition-[transform,box-shadow,border-color,background-color,color] duration-press ease-out-strong active:scale-[0.98] whitespace-nowrap"
              >
                <span>learn about safety</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
          aria-hidden="true"
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
