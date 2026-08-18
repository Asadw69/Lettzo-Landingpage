import { useState } from "react";
import { Mail, User, MapPin, ArrowRight, Check, Loader2, AlertCircle, Share2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useRevealOnScroll, reveal } from "@/hooks/use-reveal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

const WaitlistSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const sectionRef = useRevealOnScroll<HTMLDivElement>();

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!state) {
      setErrorMsg("Please select your state.");
      return;
    }

    setStatus("loading");

    try {
      // Try with all fields; fall back to email-only if extra columns don't exist yet
      let { error } = await supabase.from("waitlist").insert({
        email: email.trim().toLowerCase(),
        name: name.trim(),
        state: state,
      });

      // If insert fails due to missing columns, retry with just email
      if (error && (error.message?.includes("column") || error.code === "42703")) {
        const fallback = await supabase.from("waitlist").insert({
          email: email.trim().toLowerCase(),
        });
        error = fallback.error;
      }

      if (error) {
        if (
          error.code === "23505" ||
          error.message?.toLowerCase().includes("duplicate") ||
          error.message?.toLowerCase().includes("unique")
        ) {
          setStatus("error");
          setErrorMsg("this email is already on the waitlist!");
          toast.error("already on the list!", { description: "you're already registered, we'll notify you at launch" });
        } else {
          throw error;
        }
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setState("");
      toast.success("You're on the list! 🎉", {
        description: "We'll notify you the moment Lettzo launches.",
      });
    } catch (err) {
      console.error("Waitlist error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      toast.error("Something went wrong", { description: "Please try again in a moment." });
    }
  };

  return (
    <section id="waitlist" className="py-24 md:py-36 relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/4 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-pink-100/60 rounded-full blur-[100px] pointer-events-none" />

      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          {/* Heading */}
          <h2
            data-reveal
            style={reveal(0, "18px")}
            className="font-fraunces text-[2.5rem] sm:text-5xl md:text-6xl font-bold mb-4 leading-[1.06] tracking-[-0.035em] text-foreground text-balance"
          >
            be first to{" "}
            <span className="text-gradient">experience</span>{" "}
            Lettzo
          </h2>

          <p
            data-reveal
            style={reveal(80, "14px")}
            className="text-lg text-foreground/75 font-light mb-11 leading-relaxed text-balance"
          >
            join thousands of people who are ready to stop doing things alone
          </p>

          {/* Form Card.
              The reveal target has to stay mounted across the form ⇄ success
              swap — the observer only scans on mount, so a target that appears
              later would never be revealed and the card would stay invisible. */}
          <div data-reveal style={reveal(160, "22px")}>
          {status !== "success" ? (
            <div>
              <div className="bg-white rounded-[1.75rem] border border-[#EAEAEA] shadow-elev-3 p-7 sm:p-8 text-left">
                {/* Form header */}
                <div className="mb-6">
                  <h3 className="font-fraunces text-xl font-bold text-foreground mb-1 tracking-[-0.02em]">join the waitlist</h3>
                  <p className="text-sm text-foreground/75 font-light">we'll reach out the moment we launch in your city</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="waitlist-name" className="text-xs font-semibold text-foreground/60 tracking-[0.01em]">
                      your name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 group-focus-within:text-primary transition-colors duration-hover pointer-events-none z-10" />
                      <input
                        id="waitlist-name"
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setStatus("idle"); setErrorMsg(""); }}
                        placeholder="Your name"
                        required
                        disabled={status === "loading"}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-foreground placeholder-foreground/30 text-[15px] font-medium hover:border-[#DCDCDC] focus:outline-none focus:bg-white focus:ring-[3px] focus:ring-primary/20 focus:border-primary/45 transition-[background-color,border-color,box-shadow] duration-hover ease-out-strong disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="waitlist-email" className="text-xs font-semibold text-foreground/60 tracking-[0.01em]">
                      your email
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 group-focus-within:text-primary transition-colors duration-hover pointer-events-none z-10" />
                      <input
                        id="waitlist-email"
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setStatus("idle"); setErrorMsg(""); }}
                        placeholder="Your email"
                        required
                        disabled={status === "loading"}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-foreground placeholder-foreground/30 text-[15px] font-medium hover:border-[#DCDCDC] focus:outline-none focus:bg-white focus:ring-[3px] focus:ring-primary/20 focus:border-primary/45 transition-[background-color,border-color,box-shadow] duration-hover ease-out-strong disabled:opacity-60"
                        aria-describedby={errorMsg ? "waitlist-error" : undefined}
                      />
                    </div>
                  </div>

                  {/* State */}
                  <div className="space-y-1.5">
                    <label htmlFor="waitlist-state" className="text-xs font-semibold text-foreground/60 tracking-[0.01em]">
                      your state
                    </label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 group-focus-within:text-primary transition-colors duration-hover pointer-events-none z-10" />
                      <Select
                        value={state}
                        onValueChange={(val) => { setState(val); setStatus("idle"); setErrorMsg(""); }}
                      >
                        <SelectTrigger
                          className="w-full pl-11 pr-4 h-[52px] rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-[15px] font-normal text-slate-800 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 disabled:opacity-60"
                        >
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent className="w-[var(--radix-select-trigger-width)] max-h-[260px] rounded-2xl border border-[#E5E5E7] bg-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] p-1.5 z-50 overflow-y-auto">
                          {INDIAN_STATES.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Error message */}
                  {errorMsg && (
                    <div
                      id="waitlist-error"
                      role="alert"
                      className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-100 text-sm font-medium animate-scale-in"
                    >
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-red-700">{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="waitlist-submit"
                    disabled={status === "loading" || !email || !name}
                    className="w-full group relative inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold tracking-[-0.01em] text-white overflow-hidden bg-[#FF002F] shadow-[0_4px_16px_rgba(255,0,47,0.25)] hover:shadow-[0_8px_24px_rgba(255,0,47,0.35)] transition-all duration-press ease-out-strong hover:scale-[1.015] active:scale-[0.975] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed mt-2"
                  >
                    <span className="absolute inset-0 btn-shimmer" />
                    <span className="absolute inset-x-0 top-0 h-px bg-white/30" />
                    {status === "loading" ? (
                      <>
                        <Loader2 className="relative w-5 h-5 animate-spin" />
                        <span className="relative">Joining...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative">Get Early Access</span>
                        <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-foreground/55 font-light text-center pt-1">
                    no spam ever
                  </p>
                </form>
              </div>
            </div>
          ) : (
            /* Success state */
            <div className="animate-bounce-in flex flex-col items-center gap-6">
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping-slow" />
                <div className="absolute inset-0 rounded-full bg-emerald-50" />
                <Check className="relative w-10 h-10 text-emerald-500" strokeWidth={3} />
              </div>

              <div className="text-center">
                <h3 className="font-fraunces text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-[-0.03em] leading-[1.1]">
                  you're on the list!
                </h3>
                <p className="text-foreground/75 text-base md:text-lg font-light max-w-sm mx-auto leading-relaxed text-balance">
                  we'll notify you the moment Lettzo launches in your city
                </p>
              </div>

              {/* Share Section */}
              <div className="w-full max-w-md bg-[#FAFAFA] border border-[#EAEAEA] rounded-[2rem] p-7 sm:p-8 mt-4">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-foreground/50 mb-6 flex items-center justify-center gap-2">
                  <Share2 className="w-3 h-3" />
                  bring your friends along
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/?text=Hey!%20Just%20joined%20the%20waitlist%20for%20Lettzo%E2%80%94it's%20a%20new%20app%20for%20making%20real-world%20plans.%20Check%20it%20out:%20https://www.lettzo.com"
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#25D366] text-white text-sm font-bold shadow-[0_8px_20px_-8px_rgba(37,211,102,0.65)] transition-transform duration-press ease-out-strong hover:scale-[1.025] active:scale-[0.975]"
                  >
                    share on whatsapp
                  </a>
                  <a
                    href="https://twitter.com/intent/tweet?text=Just%20joined%20the%20waitlist%20for%20@LettzoApp%E2%80%94the%20social%20app%20for%20real-world%20plans.%20See%20you%20there!%20%F0%9F%9A%80%20https://www.lettzo.com"
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-black text-white text-sm font-bold shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)] transition-transform duration-press ease-out-strong hover:scale-[1.025] active:scale-[0.975]"
                  >
                    share on x
                  </a>
                </div>
              </div>

              <button
                onClick={() => setStatus("idle")}
                className="text-xs text-foreground/55 hover:text-foreground/80 transition-colors duration-hover underline underline-offset-4 rounded mt-2"
              >
                submit another email
              </button>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
