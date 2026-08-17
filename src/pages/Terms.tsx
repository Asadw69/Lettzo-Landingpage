import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";
import { FileText, ShieldAlert, Users, Scale, Mail } from "lucide-react";

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
              2. User Accounts & Integrity
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              You agree to provide accurate information and maintain the security of your account. You are solely responsible for any activity that occurs under your profile.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              3. Community Standards & Conduct
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              Lettzo is built for genuine real-world meetups and shared hobbies. We maintain a zero-tolerance policy towards:
            </p>
            <ul className="space-y-2 text-[15px] text-foreground/75 font-medium pt-1">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Harassment, hate speech, threats, or abusive behavior.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Impersonation, scams, spam, or unsolicited promotions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Posting unlawful, explicit, or harmful media.</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              4. Safety & In-Person Meetups
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              Lettzo facilitates connections, but in-person meetups are organized independently by users. Always meet in well-lit public places and prioritize your personal safety and comfort.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              5. Limitation of Liability
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              To the fullest extent permitted by law, Lettzo and its team are not liable for direct or indirect disputes, injuries, damages, or occurrences arising from interactions with other users.
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
                reach out to our founder directly
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
