import React from "react";
import { Compass, XCircle, Zap, Bell, type LucideIcon } from "lucide-react";
import { useRevealOnScroll, reveal } from "@/hooks/use-reveal";

interface StoryCard {
  title: string;
  icon: LucideIcon;
  description: string;
}

const cards: StoryCard[] = [
  {
    title: "the spark",
    icon: Compass,
    description: "You want to escape to the hills, so you text your friends with excitement",
  },
  {
    title: "the problem",
    icon: XCircle,
    description: "some are busy, some say “maybe” an hour later, the group chat falls completely quiet",
  },
  {
    title: "the solution",
    icon: Zap,
    description: "millions face this every day you just needed the right people, that's why we built Lettzo",
  },
];

/** Shared shell so the three story cards stay pixel-identical in shape and motion */
const StoryShell: React.FC<{ card: StoryCard; children: React.ReactNode }> = ({ card, children }) => {
  const Icon = card.icon;
  return (
    <div className="group h-full bg-[#F4F4F5] border-2 border-black/90 rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-elev-1 hover:shadow-[0_24px_48px_-16px_rgba(255,0,47,0.28)] hover:border-primary hover:-translate-y-2 transition-[transform,box-shadow,border-color] duration-hover ease-out-strong">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <h3 className="font-fraunces font-bold text-2xl sm:text-[1.75rem] text-black tracking-[-0.028em] leading-[1.1]">
            {card.title}
          </h3>
          <div className="w-10 h-10 flex-shrink-0 rounded-2xl border-2 border-black flex items-center justify-center bg-white group-hover:scale-110 group-hover:border-primary transition-[transform,border-color] duration-hover ease-out-strong">
            <Icon className="w-5 h-5 text-black group-hover:text-primary transition-colors duration-hover" />
          </div>
        </div>

        <p className="text-[15px] text-slate-600 font-light leading-[1.65] mb-8">
          {card.description}
        </p>
      </div>

      {children}
    </div>
  );
};

const Bubble: React.FC<{ side: "out" | "in"; children: React.ReactNode }> = ({ side, children }) => (
  <div className={`flex ${side === "out" ? "justify-end" : "justify-start"}`}>
    <div
      className={`text-xs sm:text-sm font-medium px-4 py-2.5 rounded-2xl max-w-[85%] ${
        side === "out"
          ? "bg-[#007AFF] text-white rounded-tr-[5px] shadow-elev-1"
          : "bg-[#E9E9EB] text-black rounded-tl-[5px]"
      }`}
    >
      {children}
    </div>
  </div>
);

const WhyLettzoSection: React.FC = () => {
  const sectionRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-[#FBFBFB]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <h2
            data-reveal
            style={reveal(0, "16px")}
            className="font-fraunces text-[2.5rem] sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.04] text-black mb-4 text-balance"
          >
            why <span className="text-primary">Lettzo?</span>
          </h2>

          <p
            data-reveal
            style={reveal(80, "14px")}
            className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-xl mx-auto text-balance"
          >
            from dead group chats to instant real-life plans
          </p>
        </div>

        {/* Three story cards — a left-to-right narrative, so they cascade in that order */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto select-none">

          {/* Card 1: the spark */}
          <div data-reveal style={reveal(0, "26px")}>
            <StoryShell card={cards[0]}>
              <div className="space-y-2 pt-4 border-t border-slate-200/80">
                <Bubble side="out">roadtrip to the hills this weekend? 🏔️🚗</Bubble>
                <Bubble side="out">is anyone coming?</Bubble>
              </div>
            </StoryShell>
          </div>

          {/* Card 2: the problem */}
          <div data-reveal style={reveal(90, "26px")}>
            <StoryShell card={cards[1]}>
              <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
                <Bubble side="out">is anyone coming?</Bubble>
                <Bubble side="in">working late. maybe next time! 😅</Bubble>
              </div>
            </StoryShell>
          </div>

          {/* Card 3: the solution */}
          <div data-reveal style={reveal(180, "26px")}>
            <StoryShell card={cards[2]}>
              <div className="pt-4 border-t border-slate-200/80">
                <div className="bg-white border-2 border-primary/30 text-black text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-elev-2 w-full justify-center flex items-center gap-2">
                  <Bell className="w-4 h-4 text-[#FF002F] flex-shrink-0" />
                  <span>Sam wants to join your roadtrip plan ✨</span>
                </div>
              </div>
            </StoryShell>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyLettzoSection;
