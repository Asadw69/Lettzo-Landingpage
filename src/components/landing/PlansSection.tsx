import React, { useState } from "react";
import lettzoLogo from "@/assets/lettzo-logo.png";
import {
  Coffee,
  Plane,
  Utensils,
  PartyPopper,
  Film,
  Dumbbell,
  Trophy,
  Compass,
  Gamepad2,
  BookOpen,
  Music,
  Palette,
  Bike,
  Sun,
  ShoppingBag,
  LucideIcon,
} from "lucide-react";
import { useRevealOnScroll, reveal } from "@/hooks/use-reveal";

interface PlanItem {
  icon: LucideIcon;
  label: string;
  ring: number; // 1, 2, or 3
  color: string;
  bg: string;
  border: string;
}

const plans: PlanItem[] = [
  // Ring 1 (Inner - 4 items)
  { icon: Coffee, label: "Coffee", ring: 1, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
  { icon: Utensils, label: "Food", ring: 1, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-200" },
  { icon: Film, label: "Movie", ring: 1, color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200" },
  { icon: Trophy, label: "Football", ring: 1, color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200" },

  // Ring 2 (Middle - 5 items)
  { icon: Plane, label: "Travel", ring: 2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  { icon: PartyPopper, label: "Party", ring: 2, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
  { icon: Dumbbell, label: "Gym", ring: 2, color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-200" },
  { icon: Compass, label: "Hiking", ring: 2, color: "text-green-600", bg: "bg-green-50", border: "border-green-200" },
  { icon: Gamepad2, label: "Gaming", ring: 2, color: "text-fuchsia-600", bg: "bg-fuchsia-50", border: "border-fuchsia-200" },

  // Ring 3 (Outer - 6 items)
  { icon: BookOpen, label: "Study", ring: 3, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
  { icon: Music, label: "Concert", ring: 3, color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-200" },
  { icon: Palette, label: "Art", ring: 3, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
  { icon: Bike, label: "Cycling", ring: 3, color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200" },
  { icon: Sun, label: "Sunrise", ring: 3, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200" },
  { icon: ShoppingBag, label: "Shopping", ring: 3, color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-200" },
];

const PlansSection: React.FC = () => {
  const [activePlan, setActivePlan] = useState<string | null>(null);
  const sectionRef = useRevealOnScroll<HTMLDivElement>();

  // Group by rings
  const ring1 = plans.filter((p) => p.ring === 1);
  const ring2 = plans.filter((p) => p.ring === 2);
  const ring3 = plans.filter((p) => p.ring === 3);

  return (
    <section className="relative pb-28 pt-16 sm:pb-36 sm:pt-28 md:py-40 overflow-hidden bg-[#FF002F] text-white">
      {/* Top Wave SVG Shape - Classic Natural Wave Curve */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-18 md:h-24 text-[#FBFBFB]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 L0,55 C180,85 540,25 900,65 C1200,95 1380,35 1440,45 L1440,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 md:left-3/4 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-white/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-black/10 rounded-full blur-[90px] md:blur-[120px] pointer-events-none" />

      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 relative z-10 my-4 sm:my-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column White Container Card */}
          <div
            data-reveal
            style={reveal(0, "22px")}
            className="lg:col-span-5 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-9 shadow-elev-3 space-y-4 text-center lg:text-left text-black z-30"
          >
            <h2 className="font-fraunces text-[1.75rem] sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-0.032em] text-black text-balance pb-0.5">
              every kind of plan{" "}
              <span className="text-primary block md:inline lg:block">all in one place</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-[1.7] font-light text-pretty">
              whether you're looking for coffee, football, hiking, road trips, movies, study sessions, or spontaneous adventures, Lettzo helps you discover people and plans that match your vibe
            </p>
          </div>

          {/* Right Column - Dynamic Orbital Visual */}
          <div
            data-reveal
            style={reveal(120, "22px")}
            className="lg:col-span-7 flex justify-center items-center relative min-h-[320px] min-[380px]:min-h-[360px] sm:min-h-[560px] md:min-h-[620px] select-none overflow-hidden mt-10 sm:mt-10 lg:mt-0 mb-10 sm:mb-0 z-10"
          >

            {/* Scaled Orbital Wrapper.
                `scale` is a transform: it shrinks what you see but NOT the space
                the element reserves, so the column's min-height has to be sized
                against the OUTER ring (the widest thing here), not this wrapper.
                Outer ring is 420px on mobile / 540px from sm up:
                  <380px  420 x 0.70 = 294  -> 320 reserved
                  380px+  420 x 0.78 = 328  -> 360 reserved
                  sm+     540 x 1.00 = 540  -> 560 reserved
                Under-reserving is what let the rings bleed into the card above. */}
            <div className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[560px] md:h-[560px] flex items-center justify-center scale-[0.70] min-[380px]:scale-[0.78] sm:scale-100 transition-transform duration-ui ease-out-strong">

              {/* Center Logo Node */}
              <div className="relative z-20 flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white border-4 border-white shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-transform duration-ui ease-out-strong">
                <img
                  src={lettzoLogo}
                  alt="Lettzo"
                  className="w-12 sm:w-16 md:w-20 h-auto object-contain mix-blend-multiply"
                />
              </div>

              {/* Orbital Rings Container */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                {/* Ring 1 (Inner) */}
                <div className="orbit-ring absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border-2 border-white/30 animate-[spin_26s_linear_infinite] hover:[animation-play-state:paused] pointer-events-auto">
                  {ring1.map((item, idx) => {
                    const angle = (360 / ring1.length) * idx;
                    return (
                      <OrbitNode
                        key={item.label}
                        item={item}
                        angle={angle}
                        duration="26s"
                        isActive={activePlan === item.label}
                        onHover={() => setActivePlan(item.label)}
                        onLeave={() => setActivePlan(null)}
                      />
                    );
                  })}
                </div>

                {/* Ring 2 (Middle) */}
                <div className="orbit-ring absolute w-[310px] h-[310px] sm:w-[400px] sm:h-[400px] rounded-full border-2 border-white/30 border-dashed animate-[spin_32s_linear_infinite_reverse] hover:[animation-play-state:paused] pointer-events-auto">
                  {ring2.map((item, idx) => {
                    const angle = (360 / ring2.length) * idx;
                    return (
                      <OrbitNode
                        key={item.label}
                        item={item}
                        angle={angle}
                        duration="32s"
                        reverse
                        isActive={activePlan === item.label}
                        onHover={() => setActivePlan(item.label)}
                        onLeave={() => setActivePlan(null)}
                      />
                    );
                  })}
                </div>

                {/* Ring 3 (Outer) */}
                <div className="orbit-ring absolute w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] rounded-full border-2 border-white/20 animate-[spin_38s_linear_infinite] hover:[animation-play-state:paused] pointer-events-auto">
                  {ring3.map((item, idx) => {
                    const angle = (360 / ring3.length) * idx;
                    return (
                      <OrbitNode
                        key={item.label}
                        item={item}
                        angle={angle}
                        duration="38s"
                        isActive={activePlan === item.label}
                        onHover={() => setActivePlan(item.label)}
                        onLeave={() => setActivePlan(null)}
                      />
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave SVG Shape - Classic Natural Wave Curve */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-18 md:h-24 text-[#FBFBFB]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

interface OrbitNodeProps {
  item: PlanItem;
  angle: number;
  duration: string;
  reverse?: boolean;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const OrbitNode: React.FC<OrbitNodeProps> = ({
  item,
  angle,
  duration,
  reverse = false,
  isActive,
  onHover,
  onLeave,
}) => {
  const IconComponent = item.icon;

  // Calculate percentage placement so center of node sits 100% on the orbit line
  const rad = (angle * Math.PI) / 180;
  const xPct = Math.cos(rad) * 50;
  const yPct = Math.sin(rad) * 50;

  const counterAnimation = reverse
    ? `spin ${duration} linear infinite`
    : `spin ${duration} linear infinite reverse`;

  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${xPct}%)`,
        top: `calc(50% + ${yPct}%)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Counter-rotation keeps each icon upright while its ring turns */}
      <div
        style={{ animation: counterAnimation }}
        className="orbit-node relative group cursor-pointer pointer-events-auto"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onHover}
      >
        {/* Node circle styled matching Map pins */}
        <div
          className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${item.bg} border ${item.border} shadow-elev-1 flex items-center justify-center transition-[transform,box-shadow,border-color,background-color] duration-ui ease-out-strong ${isActive
            ? "scale-125 border-primary ring-4 ring-primary/20 shadow-elev-2 bg-white z-30"
            : "group-hover:scale-110 group-hover:shadow-elev-2"
            }`}
        >
          <IconComponent className={`w-4 h-4 sm:w-6 sm:h-6 ${item.color}`} />
        </div>

        {/* Hover/Tap Label Pill */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full mt-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-900 text-white text-[10px] sm:text-[11px] font-bold whitespace-nowrap shadow-elev-2 transition-[opacity,transform] duration-hover ease-out-strong pointer-events-none z-40 ${isActive
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 -translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
            }`}
        >
          {item.label}
        </div>
      </div>
    </div>
  );
};

export default PlansSection;
