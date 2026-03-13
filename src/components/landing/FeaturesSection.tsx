import { Zap, Map, MessageCircle, Users, Tag, Sparkles, TrendingUp, ShieldCheck, Brain, Video, Calendar } from "lucide-react";

interface Feature {
  icon: any;
  title: string;
  description: string;
  className: string;
  iconBg: string;
  iconColor: string;
  glowColor: string;
  badge?: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Spontaneous Meetups",
    description: "Got an hour for coffee or a quick gym session? Create a plan and find someone to join you instantly. No more waiting for 'someday'.",
    className: "md:col-span-2 md:row-span-2",
    iconBg: "bg-amber-400/10",
    iconColor: "text-amber-400",
    glowColor: "rgba(251, 191, 36, 0.15)",
    badge: "Life-changing",
  },
  {
    icon: Map,
    title: "Live Discovery",
    description: "See what's happening around you in real-time.",
    className: "md:col-span-1",
    iconBg: "bg-cyan-400/10",
    iconColor: "text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.15)",
  },
  {
    icon: MessageCircle,
    title: "Plan Chats",
    description: "Dedicated spaces for every meetup.",
    className: "md:col-span-1",
    iconBg: "bg-violet-400/10",
    iconColor: "text-violet-400",
    glowColor: "rgba(167, 139, 250, 0.15)",
  },
  {
    icon: Brain,
    title: "AI Vibe Match",
    description: "Our intelligence understands your mood and interests to suggest the perfect meetup. It doesn't just match keywords; it matches human connection.",
    className: "md:col-span-1",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    glowColor: "rgba(239, 68, 68, 0.15)",
    badge: "Smart",
  },
  {
    icon: Video,
    title: "Virtual Hangouts",
    description: "Can't make it in person? Bridge the distance with high-fidelity social rooms.",
    className: "md:col-span-1",
    iconBg: "bg-blue-400/10",
    iconColor: "text-blue-400",
    glowColor: "rgba(96, 165, 250, 0.15)",
  },
  {
    icon: Tag,
    title: "Vibe Matching",
    description: "Find people on your precise wavelength.",
    className: "md:col-span-1",
    iconBg: "bg-pink-400/10",
    iconColor: "text-pink-400",
    glowColor: "rgba(244, 114, 182, 0.15)",
  },
  {
    icon: Calendar,
    title: "Seamless Hosting",
    description: "From 2-person coffee chats to 50-person hikes. Automated RSVP tracking, waitlists, and venue sorting make coordination effortless.",
    className: "md:col-span-2",
    iconBg: "bg-orange-400/10",
    iconColor: "text-orange-400",
    glowColor: "rgba(251, 146, 60, 0.15)",
    badge: "Pro Tools",
  },
  {
    icon: Users,
    title: "Strictly Social",
    description: "Designed for shared activities and real hobbies. We're here for connections, not dating.",
    className: "md:col-span-1",
    iconBg: "bg-emerald-400/10",
    iconColor: "text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.15)",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 md:mb-24 animate-fade-in group text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-6">
            <TrendingUp className="w-3 h-3" />
            Designed for connection
          </div>
          <h2 className="font-satoshi text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
            The platform that <br />
            <span className="text-gradient">actually works.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/50 font-medium max-w-2xl mx-auto">
            We've removed the noise of modern social media. 
            No algorithms, no infinite scrolling—just real people making real plans.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative glass-card rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden border border-white/5 transition-all duration-700 hover:scale-[1.01] hover:border-white/15 hover:shadow-[0_20px_80px_rgba(0,0,0,0.4)] ${feature.className}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Radial Hover Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ 
                  background: `radial-gradient(circle at 50% 50%, ${feature.glowColor} 0%, transparent 70%)` 
                }}
              />

              {/* Shine Effect */}
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-[1.5s] pointer-events-none" />

              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} border border-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  {feature.badge && (
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-foreground/40">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-satoshi text-2xl md:text-3xl font-black mb-4 tracking-tight group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className={`text-base font-medium leading-relaxed transition-colors duration-500 ${feature.className.includes('md:col-span-2') ? 'text-foreground/60 max-w-md group-hover:text-foreground/80' : 'text-foreground/45 group-hover:text-foreground/60 line-clamp-2 md:line-clamp-none'}`}>
                  {feature.description}
                </p>
              </div>

              {/* Decorative Arrow (Bottom Right) */}
              <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center">
                   <Zap className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          ))}

          {/* Special "Safety" Wide Card */}
          <div className="md:col-span-3 glass-card rounded-[2.5rem] p-8 md:px-12 md:py-10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-emerald-500/20 transition-all duration-500">
             <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center animate-pulse">
                   <ShieldCheck className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-satoshi text-xl md:text-2xl font-black text-white mb-2">Safe & Verified Community</h4>
                  <p className="text-foreground/50 font-medium max-w-xl">Every user on Lettzo is verified to ensure a respectful, hobby-first environment. We prioritize safety and real human connection above everything else.</p>
                </div>
             </div>
             <button className="px-6 py-3 rounded-2xl glass border border-white/10 text-sm font-bold hover:bg-white/5 transition-all text-foreground/80 whitespace-nowrap">
                Learn about Safety
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
