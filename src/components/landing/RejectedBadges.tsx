import React from "react";
import ycLogo from "@/assets/y-combinator_thumb.png";
import spcLogo from "@/assets/SouthPark.png";
import hf0Logo from "@/assets/hf0.png";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03] hover:brightness-110 cursor-default animate-fade-in group",
        "backdrop-blur-xl border shadow-lg",
        "bg-white/[0.08] border-white/15 dark:bg-white/[0.05] dark:border-white/10",
        "text-foreground/80 hover:text-foreground",
        className
      )}
      style={{
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {children}
    </div>
  );
};

export const RejectedBadges = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
      {/* YC Badge */}
      <Badge>
        <span className="opacity-80">Rejected by</span>
        <img src={ycLogo} alt="YC" className="w-5 h-5 object-contain" />
        <span className="font-semibold text-orange-500/90">Combinator</span>
      </Badge>

      {/* SPC Badge */}
      <Badge>
        <span className="opacity-80">Rejected by</span>
        <span className="font-semibold">South Park Commons</span>
        <img 
          src={spcLogo} 
          alt="SPC" 
          className="w-5 h-5 object-contain dark:invert" 
        />
      </Badge>

      {/* HF0 Badge */}
      <Badge>
        <span className="opacity-80">Rejected by</span>
        <img src={hf0Logo} alt="HF0" className="w-5 h-5 object-contain rounded-full" />
        <span className="font-semibold">HF0</span>
      </Badge>
    </div>
  );
};

export default RejectedBadges;
