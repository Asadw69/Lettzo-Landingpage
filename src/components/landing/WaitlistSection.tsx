import { useState } from "react";
import { Mail, ArrowRight, Check, Loader2, AlertCircle, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const { error } = await supabase.from("waitlist").insert({ email: email.trim().toLowerCase() });

      if (error) {
        if (error.code === "23505" || error.message?.toLowerCase().includes("duplicate") || error.message?.toLowerCase().includes("unique")) {
          setStatus("error");
          setErrorMsg("This email is already on the waitlist! 🎉 You're all set.");
          toast.error("Already on the list!", { description: "You're already registered. We'll notify you at launch." });
        } else {
          throw error;
        }
        return;
      }

      setStatus("success");
      setEmail("");
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
    <section id="waitlist" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            Early Access
          </div>

          {/* Heading */}
          <h2
            className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            Be First to{" "}
            <span className="text-gradient">Experience</span>{" "}
            Lettzo.
          </h2>

          <p
            className="text-lg text-foreground/55 font-medium mb-12 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Join thousands of people who are ready to stop doing things alone.
            Get exclusive early access when we launch.
          </p>

          {/* Form */}
          {status !== "success" ? (
            <form
              onSubmit={handleSubmit}
              className="animate-fade-in"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              <div className="relative flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                {/* Email input */}
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/35 pointer-events-none" />
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setStatus("idle"); setErrorMsg(""); }}
                    placeholder="Enter your email address"
                    required
                    disabled={status === "loading"}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl glass-card border border-white/8 text-foreground placeholder-foreground/35 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300 disabled:opacity-60 bg-transparent"
                    aria-label="Email address for waitlist"
                    aria-describedby={errorMsg ? "waitlist-error" : undefined}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-sm font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed min-w-[160px]"
                >
                  <span className="absolute inset-0 btn-shimmer" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/40" />
                  {status === "loading" ? (
                    <>
                      <Loader2 className="relative w-4 h-4 animate-spin" />
                      <span className="relative">Joining...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative">Join Waitlist</span>
                      <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              {/* Error message */}
              {errorMsg && (
                <div
                  id="waitlist-error"
                  role="alert"
                  className="flex items-center justify-center gap-2 mt-4 text-sm font-medium animate-fade-in"
                >
                  <AlertCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground/70">{errorMsg}</span>
                </div>
              )}

              <p className="text-xs text-foreground/35 font-medium mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            /* Success state */
            <div className="animate-bounce-in flex flex-col items-center gap-5">
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping-slow" />
                <div className="absolute inset-0 rounded-full bg-emerald-400/10" />
                <Check className="relative w-9 h-9 text-emerald-400" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-satoshi text-2xl font-black text-foreground mb-2">
                  You're on the list! 🎉
                </h3>
                <p className="text-foreground/55 text-sm font-medium">
                  We'll notify you the moment Lettzo launches. Get ready!
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="text-xs text-foreground/35 hover:text-foreground/60 transition-colors underline underline-offset-4"
              >
                Submit another email
              </button>
            </div>
          )}
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mt-16 animate-fade-in"
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
