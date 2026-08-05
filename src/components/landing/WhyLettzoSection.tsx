import React, { useEffect, useRef } from "react";
import { Sparkles, Compass, XCircle, Zap, Bell } from "lucide-react";

const WhyLettzoSection: React.FC = () => {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll(".story-card-reveal");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-[#FBFBFB]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/3 rounded-full blur-[160px] pointer-events-none" />

      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="story-card-reveal opacity-0 translate-y-6 transition-all duration-700 ease-out [&.in-view]:opacity-100 [&.in-view]:translate-y-0 text-center max-w-3xl mx-auto mb-14 md:mb-20 space-y-4">

          <h2 className="font-fraunces text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black">
            why <span className="text-primary">Lettzo?</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
            from dead group chats to instant real-life plans
          </p>
        </div>

        {/* 3 Uniform Bento Cards with Apple iMessage Chat Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto select-none">

          {/* Card 1: the spark */}
          <div className="story-card-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out [&.in-view]:opacity-100 [&.in-view]:translate-y-0 bg-[#F4F4F5] border-2 border-black/90 rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_25px_50px_rgba(255,0,47,0.14)] hover:border-primary hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
            <div>
              {/* Card Top Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-2xl sm:text-3xl text-black tracking-tight">
                  the spark
                </h3>
                <div className="w-10 h-10 rounded-2xl border-2 border-black flex items-center justify-center bg-white shadow-xs group-hover:scale-110 group-hover:border-primary transition-all">
                  <Compass className="w-5 h-5 text-black group-hover:text-primary transition-colors" />
                </div>
              </div>

              {/* Card Description */}
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-8">
                You want to escape to the hills, so you text your friends with excitement
              </p>
            </div>

            {/* Apple iMessage Chat Mockup */}
            <div className="space-y-2 pt-4 border-t border-slate-200/80">
              <div className="flex justify-end">
                <div className="bg-[#007AFF] text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-2xl rounded-tr-xs shadow-xs max-w-[85%]">
                  roadtrip to the hills this weekend? 🏔️🚗
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#007AFF] text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-2xl rounded-tr-xs shadow-xs max-w-[85%]">
                  is anyone coming?
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: the problem */}
          <div className="story-card-reveal opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out [&.in-view]:opacity-100 [&.in-view]:translate-y-0 bg-[#F4F4F5] border-2 border-black/90 rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_25px_50px_rgba(255,0,47,0.14)] hover:border-primary hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
            <div>
              {/* Card Top Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-2xl sm:text-3xl text-black tracking-tight">
                  the problem
                </h3>
                <div className="w-10 h-10 rounded-2xl border-2 border-black flex items-center justify-center bg-white shadow-xs group-hover:scale-110 group-hover:border-primary transition-all">
                  <XCircle className="w-5 h-5 text-black group-hover:text-primary transition-colors" />
                </div>
              </div>

              {/* Card Description */}
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-8">
                some are busy, some say "maybe" an hour later, the group chat falls completely quiet
              </p>
            </div>

            {/* Apple iMessage Chat Mockup */}
            <div className="space-y-2.5 pt-4 border-t border-slate-200/80">
              <div className="flex justify-end">
                <div className="bg-[#007AFF] text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-2xl rounded-tr-xs shadow-xs max-w-[85%]">
                  is anyone coming?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-[#E9E9EB] text-black text-xs sm:text-sm font-medium px-4 py-2.5 rounded-2xl rounded-tl-xs max-w-[85%]">
                  working late. maybe next time! 😅
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: the solution */}
          <div className="story-card-reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out [&.in-view]:opacity-100 [&.in-view]:translate-y-0 bg-[#F4F4F5] border-2 border-black/90 rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_25px_50px_rgba(255,0,47,0.14)] hover:border-primary hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
            <div>
              {/* Card Top Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-2xl sm:text-3xl text-black tracking-tight">
                  the solution
                </h3>
                <div className="w-10 h-10 rounded-2xl border-2 border-black flex items-center justify-center bg-white shadow-xs group-hover:scale-110 group-hover:border-primary transition-all">
                  <Zap className="w-5 h-5 text-black group-hover:text-primary transition-colors" />
                </div>
              </div>

              {/* Card Description */}
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-8">
                millions face this every day you just needed the right people, that's why we built Lettzo
              </p>
            </div>

            {/* Lettzo Notification Mockup */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="flex justify-center">
                <div className="bg-white border-2 border-primary/30 text-black text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-md w-full justify-center flex items-center gap-2">
                  <Bell className="w-4 h-4 text-[#FF002F] flex-shrink-0" />
                  <span>Sam wants to join your roadtrip plan ✨</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyLettzoSection;
