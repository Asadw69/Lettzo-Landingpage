import React from "react";
import ycLogo from "@/assets/y-combinator_thumb.png";
import spcLogo from "@/assets/SouthPark.png";
import hf0Logo from "@/assets/hf0.png";

const badges = [
  {
    logo: ycLogo,
    name: "Y Combinator",
    nameColor: "text-orange-500",
    logoBg: "bg-orange-50",
    logoBorder: "border-orange-100",
    alt: "YC",
    invert: false,
  },
  {
    logo: spcLogo,
    name: "South Park Commons",
    nameColor: "text-foreground/75",
    logoBg: "bg-gray-50",
    logoBorder: "border-gray-100",
    alt: "SPC",
    invert: false,
  },
  {
    logo: hf0Logo,
    name: "HF0",
    nameColor: "text-foreground/75",
    logoBg: "bg-gray-50",
    logoBorder: "border-gray-100",
    alt: "HF0",
    invert: false,
  },
];

export const RejectedBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {badges.map((b) => (
        <div
          key={b.name}
          className="group flex items-center justify-center h-10 gap-2.5 px-4 rounded-full border border-black/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:bg-white/60"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(12px) saturate(160%)",
            WebkitBackdropFilter: "blur(12px) saturate(160%)"
          }}
        >
          {/* "Rejected by" text — subtle and professional */}
          <span className="text-[11px] font-bold text-black/80 tracking-tight">
            Rejected by
          </span>

          {/* Logo — small and clean */}
          <div className="flex items-center justify-center w-5 h-5 rounded-md flex-shrink-0">
            <img
              src={b.logo}
              alt={b.alt}
              className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Name */}
          <span className={`text-[12px] font-bold ${b.nameColor} tracking-tight opacity-90 group-hover:opacity-100`}>
            {b.name === "South Park Commons" ? "SPC" : (b.name === "Y Combinator" ? "YC" : b.name)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RejectedBadges;
