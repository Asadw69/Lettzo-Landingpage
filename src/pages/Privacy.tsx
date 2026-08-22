import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";
import { Shield, Mail, Lock, UserCheck, Eye, MapPin } from "lucide-react";

const Privacy = () => {
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
            privacy policy
          </h1>
          <p className="text-base sm:text-lg text-foreground/60 font-medium max-w-xl mx-auto leading-relaxed">
            we believe in total transparency. here is how we collect, use, and safeguard your data.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] border border-[#EAEAEA] p-6 sm:p-10 md:p-12 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06)] space-y-10">
          
          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              1. Information We Collect
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              We collect minimal information required to help you discover plans and meet real people:
            </p>
            <ul className="space-y-2 text-[15px] text-foreground/75 font-medium pt-1">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="font-semibold text-foreground">Account details:</strong> Name, username, email address, gender, date of birth (for age verification), and profile pictures/bio.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="font-semibold text-foreground">Location Data:</strong> Device GPS coordinates (collected with user consent while using the app to show nearby social plans, map exploration, and distance calculation). Location data is never sold or shared with third-party advertisers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="font-semibold text-foreground">Content & Communications:</strong> Social plans created or joined, messages sent, and 24-hour stories.</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              2. How We Use Your Data
            </h2>
            <ul className="space-y-2 text-[15px] text-foreground/75 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>To create, manage, and secure your Lettzo account.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>To connect you with relevant nearby plans and compatible people.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>To deliver chat messages, plan requests, and vital account notifications.</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              3. Data Sharing & Infrastructure
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              <strong>We NEVER sell, rent, or trade your personal data to advertisers.</strong>
            </p>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              Data is processed securely with trusted infrastructure partners (such as Supabase for database hosting and Firebase/Apple for push notifications) with strict access controls.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              4. Data Retention & Account Deletion
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              You maintain total control over your data. You can edit your profile at any time or permanently delete your account and all associated data via <strong>Settings ➔ Delete Account</strong> in the app.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              5. Children's Privacy
            </h2>
            <p className="text-[15px] text-foreground/75 font-medium leading-relaxed">
              Lettzo is strictly designed for individuals 16 years and older. We do not knowingly collect personal information from children under 16.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          {/* Contact Section */}
          <section className="pt-2 text-center sm:text-left space-y-4">
            <div>
              <h3 className="font-fraunces text-xl font-bold text-foreground mb-1">
                questions about privacy?
              </h3>
              <p className="text-sm text-foreground/60 font-medium">
                feel free to reach out to our team anytime
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

export default Privacy;
