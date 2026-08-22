import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";
import { Shield, Mail, ShieldAlert, Scale, Users } from "lucide-react";

const Terms = () => {
  const navigate = useNavigate();

  const navigateToIndex = (sectionId: string) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-foreground">
      <Navbar 
        onOpenModal={() => navigateToIndex("waitlist")} 
        onOpenAbout={() => navigateToIndex("about")} 
      />
      
      <main className="container mx-auto px-4 py-28 md:py-36 max-w-3xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.035em] text-foreground mb-4">
            terms of service
          </h1>
          <p className="text-base sm:text-lg text-foreground/60 font-medium max-w-xl mx-auto leading-relaxed">
            by accessing or using Lettzo, you agree to these clear, straightforward terms.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] border border-[#EAEAEA] p-6 sm:p-10 md:p-12 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06)] space-y-10">
          
          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              1. Eligibility & Age Requirements
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              You must be at least 16 years of age to use Lettzo. By using the app, you confirm you are legally capable of entering this agreement and will comply with all local laws and regulations.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              2. User Accounts & Security
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              You agree to provide accurate information and maintain the security of your account credentials. You are solely responsible for any activity that occurs under your profile.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              3. User-Generated Content & Zero-Tolerance Policy
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              Lettzo is built for genuine real-world meetups and shared activities. We enforce a strict <strong>Zero-Tolerance Policy</strong> for objectionable or abusive content. Prohibited behaviors include:
            </p>
            <ul className="space-y-2 text-[15px] text-foreground/75 font-medium pt-1">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Harassment, hate speech, bullying, threats, or intimidation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Nudity, sexually explicit material, or commercial solicitation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Impersonation, scams, fraud, spam, or misleading information.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Violence, self-harm incitement, or posting unlawful media.</span>
              </li>
            </ul>

            <div className="mt-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-1.5">
              <h4 className="font-bold text-foreground text-sm">Moderation, Reporting & 24-Hour Action:</h4>
              <p className="text-[13px] text-foreground/70 leading-relaxed">
                Users can report objectionable content or block abusive users directly in-app. Our moderation team reviews reported violations and takes action within <strong>24 hours</strong>, including immediate content removal and permanent account bans.
              </p>
            </div>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              4. Safety & In-Person Meetups
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              Lettzo facilitates connections, but in-person meetups are organized independently by users. Always meet in well-lit public places, tell a trusted friend or family member, and prioritize your personal safety.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              5. Account Deletion Rights
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              You have the right to delete your account and all associated personal data at any time directly in the app via <strong>Settings ➔ Delete Account</strong>.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              6. Limitation of Liability
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              To the fullest extent permitted by law, Lettzo and its team are not liable for direct or indirect disputes, injuries, damages, or occurrences arising from user interactions or offline events.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          {/* Contact Section */}
          <section className="pt-2 text-center sm:text-left space-y-4">
            <div>
              <h3 className="font-fraunces text-xl font-bold text-foreground mb-1">
                legal questions or support?
              </h3>
              <p className="text-sm text-foreground/60 font-medium">
                reach out to our team directly
              </p>
            </div>
            <a
              href="mailto:asad@lettzo.com"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#FF002F] text-white text-sm font-bold shadow-[0_4px_16px_rgba(255,0,47,0.25)] hover:shadow-[0_8px_24px_rgba(255,0,47,0.35)] transition-transform duration-press ease-out-strong hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              contact asad@lettzo.com
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
