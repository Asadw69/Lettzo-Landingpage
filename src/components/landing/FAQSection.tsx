import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useRevealOnScroll, reveal } from "@/hooks/use-reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "is lettzo free?",
    answer: "Yes. The core experience is free for everyone. Premium unlocks additional features and benefits for power users.",
  },
  {
    question: "who can see my plans?",
    answer: "You choose. Every plan can be shared publicly or with friends only.",
  },
  {
    question: "can i control who discovers me?",
    answer: "Yes. You can choose whether your profile appears to nearby users or hide your location visibility anytime from Settings.",
  },
  {
    question: "can i filter people by age?",
    answer: "Yes. You can set an age range to help discover people you're comfortable connecting with.",
  },
  {
    question: "can i choose who joins my plan?",
    answer: "Yes. You decide who can join your plans, giving you more control over your experience.",
  },
  {
    question: "is identity verification required?",
    answer: "No. Verification is optional, but verified profiles help build trust within the community.",
  },
  {
    question: "can i create any type of plan?",
    answer: "Absolutely. Coffee, sports, movies, hiking, road trips, study sessions, gaming, food, and much more.",
  },
  {
    question: "how do you keep the community safe?",
    answer: "We use profile verification, reporting tools, moderation, and community guidelines to help maintain a safer and more respectful community.",
  },
  {
    question: "can i cancel or leave a plan?",
    answer: "Yes. You can leave a plan anytime, and organizers can manage participants whenever needed.",
  },
  {
    question: "can i switch plans?",
    answer: "Yes. You can upgrade, downgrade, or cancel your subscription anytime from your account settings.",
  },
  {
    question: "do you offer refunds?",
    answer: "We do not guarantee refunds for charges that have already been processed. You can cancel your subscription anytime from Settings, and you won't be charged again after your current billing period.",
  },
  {
    question: "when will lettzo launch?",
    answer: "Join the waitlist to be among the first to get access when Lettzo becomes available.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRevealOnScroll<HTMLDivElement>();

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 md:py-40 overflow-hidden bg-[#FF002F] text-white">
      {/* Top Wave SVG Shape */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-18 md:h-24 text-[#FAFAFA] scale-y-[1.02] origin-top"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ marginTop: "-2px" }}
          aria-hidden="true"
        >
          <path
            d="M0,0 L0,55 C180,85 540,25 900,65 C1200,95 1380,35 1440,45 L1440,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />

      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 relative z-10 my-4 sm:my-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

          {/* Left Sticky Column */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <span
              data-reveal
              style={reveal(0, "12px")}
              className="text-xs sm:text-sm font-semibold tracking-[0.02em] text-white/75 lowercase block"
            >
              common questions
            </span>

            <h2
              data-reveal
              style={reveal(70, "18px")}
              className="font-fraunces text-[2.25rem] sm:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-[-0.035em] lowercase text-balance"
            >
              the things people ask before using Lettzo
            </h2>

            <p
              data-reveal
              style={reveal(140, "14px")}
              className="text-sm sm:text-base text-white/90 font-light leading-[1.7] max-w-md pt-2 lowercase text-pretty"
            >
              everything you need to know about lettzo, how plans work, privacy, and community safety.
            </p>
          </div>

          {/* Right Accordion Card Column */}
          <div
            data-reveal
            style={reveal(120, "22px")}
            className="lg:col-span-7 bg-white text-black rounded-[2.5rem] shadow-elev-3 p-6 sm:p-8 md:p-10 border-0"
          >
            <div className="divide-y divide-slate-100">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-trigger-${index}`;

                return (
                  <div key={index} className="py-2 first:pt-0 last:pb-0">
                    <button
                      id={buttonId}
                      onClick={() => toggleIndex(index)}
                      className="w-full flex items-center justify-between gap-4 text-left py-3.5 group cursor-pointer rounded-xl"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="text-[15px] sm:text-[17px] font-bold text-black tracking-[-0.015em] leading-snug lowercase group-hover:text-primary transition-colors duration-hover">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-[color,background-color] duration-hover ease-out-strong ${isOpen ? "text-primary bg-rose-50" : "text-slate-400 group-hover:text-primary group-hover:bg-rose-50"}`}>
                        {/* One icon that rotates into a close mark — no icon pop on toggle */}
                        <Plus
                          className={`w-4 h-4 transition-transform duration-ui ease-out-strong ${isOpen ? "rotate-45" : "rotate-0"}`}
                        />
                      </div>
                    </button>

                    {/* Height animation is the one case with no transform equivalent:
                        0fr→1fr grows to the content's natural height without a
                        hardcoded max-height guess. Panel stays mounted so
                        toggling twice quickly retargets instead of restarting. */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      aria-hidden={!isOpen}
                      data-open={isOpen}
                      className="accordion-panel"
                    >
                      <div>
                        <div className="pb-4 pr-8 text-sm sm:text-[15px] text-slate-600 font-light leading-[1.7] lowercase text-pretty">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave SVG Shape */}
      <div className="absolute -bottom-px left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-18 md:h-24 text-white scale-y-[1.02] origin-bottom"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ marginBottom: "-2px" }}
          aria-hidden="true"
        >
          <path
            d="M0,55 C180,15 540,75 900,35 C1200,5 1380,65 1440,55 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default FAQSection;
