import { useState } from "react";
import { Mail, User, MapPin, ArrowRight, Check, Loader2, AlertCircle, Sparkles, ChevronDown, Share2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
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
          setErrorMsg("This email is already on the waitlist! 🎉 You're all set.");
          toast.error("Already on the list!", { description: "You're already registered. We'll notify you at launch." });
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
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/4 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-pink-100/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          {/* Badge */}
          <div className="pill-badge text-primary border-primary/15 bg-primary/5 mx-auto w-fit mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Early Access
          </div>

          {/* Heading */}
          <h2
            className="font-fraunces text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight text-foreground animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            Be First to{" "}
            <span className="text-gradient hover:italic transition-all px-2">Experience</span>{" "}
            Lettzo.
          </h2>

          <p
            className="text-lg text-foreground/55 font-medium mb-12 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Join thousands of people who are ready to stop doing things alone.
            Get exclusive early access when we launch.
          </p>

          {/* Form Card */}
          {status !== "success" ? (
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              <div className="bg-white rounded-2xl border border-[#EAEAEA] shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-8 text-left">
                {/* Form header */}
                <div className="mb-6">
                  <h3 className="font-fraunces text-xl font-bold text-foreground mb-1">Join the waitlist</h3>
                  <p className="text-sm text-foreground/45 font-medium">We'll reach out the moment we launch in your city.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="waitlist-name" className="text-xs font-bold text-foreground/50 uppercase tracking-wider">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 pointer-events-none" />
                      <input
                        id="waitlist-name"
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setStatus("idle"); setErrorMsg(""); }}
                        placeholder="Arjun Sharma"
                        required
                        disabled={status === "loading"}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-foreground placeholder-foreground/30 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 transition-all duration-200 disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="waitlist-email" className="text-xs font-bold text-foreground/50 uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 pointer-events-none" />
                      <input
                        id="waitlist-email"
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setStatus("idle"); setErrorMsg(""); }}
                        placeholder="arjun@example.com"
                        required
                        disabled={status === "loading"}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-foreground placeholder-foreground/30 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 transition-all duration-200 disabled:opacity-60"
                        aria-describedby={errorMsg ? "waitlist-error" : undefined}
                      />
                    </div>
                  </div>

                  {/* State */}
                  <div className="space-y-1.5">
                    <label htmlFor="waitlist-state" className="text-xs font-bold text-foreground/50 uppercase tracking-wider">
                      Your State
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 pointer-events-none z-10" />
                      <Select 
                        value={state} 
                        onValueChange={(val) => { setState(val); setStatus("idle"); setErrorMsg(""); }}
                      >
                        <SelectTrigger 
                          className="w-full pl-11 pr-4 py-6.5 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-sm font-medium focus:ring-2 focus:ring-primary/25 focus:border-primary/40 transition-all duration-200 disabled:opacity-60 h-auto"
                        >
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-[#EAEAEA] shadow-xl max-h-[300px]">
                          {INDIAN_STATES.map((s) => (
                            <SelectItem key={s} value={s} className="text-sm font-medium focus:bg-primary focus:text-white rounded-lg cursor-pointer">
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
                      className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-100 text-sm font-medium animate-fade-in"
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
                    className="w-full group relative inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed shadow-button mt-2"
                  >
                    <span className="absolute inset-0 btn-shimmer" />
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

                  <p className="text-xs text-foreground/35 font-medium text-center pt-1">
                    No spam, ever. Unsubscribe anytime.
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
                <h3 className="font-fraunces text-3xl md:text-4xl font-bold text-foreground mb-3">
                  You're on the list! 🎉
                </h3>
                <p className="text-foreground/55 text-base md:text-lg font-medium max-w-sm mx-auto">
                  We'll notify you the moment Lettzo launches in your city.
                </p>
              </div>

              {/* Share Section */}
              <div className="w-full max-w-md bg-[#FAFAFA] border border-[#EAEAEA] rounded-[2rem] p-8 mt-4">
                <p className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-6 flex items-center justify-center gap-2">
                  <Share2 className="w-3 h-3" />
                  Bring your friends along
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/?text=Hey!%20Just%20joined%20the%20waitlist%20for%20Lettzo%E2%80%94it's%20a%20new%20app%20for%20making%20real-world%20plans.%20Check%20it%20out:%20https://lettzo.app"
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366] text-white text-sm font-bold transition-all hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-[#25D366]/20"
                  >
                    Share on WhatsApp
                  </a>
                  <a
                    href="https://twitter.com/intent/tweet?text=Just%20joined%20the%20waitlist%20for%20@LettzoApp%E2%80%94the%20social%20app%20for%20real-world%20plans.%20See%20you%20there!%20%F0%9F%9A%80%20https://lettzo.app"
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-black text-white text-sm font-bold transition-all hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-black/20"
                  >
                    Share on X
                  </a>
                </div>
              </div>

              <button
                onClick={() => setStatus("idle")}
                className="text-xs text-foreground/35 hover:text-foreground/60 transition-colors underline underline-offset-4 mt-2"
              >
                Submit another email
              </button>
            </div>
          )}
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mt-14 animate-fade-in"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          {[
            "🔒 Privacy first",
            "⚡ No spam, ever",
            "🚀 First access guaranteed",
          ].map((item) => (
            <span key={item} className="text-sm text-foreground/40 font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
