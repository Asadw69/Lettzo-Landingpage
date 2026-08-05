import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

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

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 md:py-40 overflow-hidden bg-[#FF002F] text-white">
      {/* Top Wave SVG Shape */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-18 md:h-24 text-[#FAFAFA]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,55 C180,85 540,25 900,65 C1200,95 1380,35 1440,45 L1440,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 my-4 sm:my-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

          {/* Left Sticky Column */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-32">
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-white/80 lowercase block">
              common questions
            </span>

            <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text- tracking-tight lowercase">
              the things people ask before using Lettzo
            </h2>

            <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-md pt-2 lowercase">
              everything you need to know about lettzo, how plans work, privacy, and community safety.
            </p>
          </div>

          {/* Right Accordion Card Column */}
          <div className="lg:col-span-7 bg-white text-black rounded-[2.5rem] shadow-2xl p-6 sm:p-8 md:p-10 border-0">
            <div className="divide-y divide-slate-100">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="py-4.5 first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggleIndex(index)}
                      className="w-full flex items-center justify-between gap-4 text-left py-2 group cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-bold text-black tracking-tight lowercase group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-rose-50 transition-all flex-shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-black" />
                        ) : (
                          <Plus className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="pt-2 pb-3 pr-8 text-sm sm:text-base text-slate-600 font-medium leading-relaxed animate-fade-in lowercase">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave SVG Shape */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-18 md:h-24 text-[#FAFAFA]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
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
