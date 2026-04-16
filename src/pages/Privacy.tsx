import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  const navigateToIndex = (sectionId: string) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onOpenModal={() => navigateToIndex("waitlist")}
        onOpenAbout={() => navigateToIndex("about")}
      />
      <main className="container mx-auto px-4 py-24 md:py-36 max-w-4xl">
        <div className="mb-12 text-center md:text-left">
          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-foreground/50 font-semibold uppercase text-[10px] tracking-[0.2em]">Effective Date: April 17, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-12">
          <p className="text-xl text-foreground/70 leading-relaxed font-medium">
            Lettzo respects your privacy. This policy explains how we collect, use, and protect your data.
          </p>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-6 text-foreground pb-4 border-b border-slate-100">1. Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  Account Information
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-foreground/60">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number (if applicable)</li>
                  <li>Gender, date of birth</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  Usage & Data
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-foreground/60">
                  <li>App interactions</li>
                  <li>Device information</li>
                  <li>Log data</li>
                  <li>Location Data (Approximate or real-time)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-6 text-foreground">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-3 text-foreground/60">
              <li>Create and manage your account</li>
              <li>Connect you with nearby users and plans</li>
              <li>Improve app functionality</li>
              <li>Send notifications (OTP, activity updates, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-6 text-foreground">3. Data Sharing</h2>
            <p className="text-primary font-bold mb-4 uppercase text-[10px] tracking-widest">We do NOT sell your personal data.</p>
            <p className="text-foreground/60 mb-4">We may share data with:</p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/60">
              <li>Service providers (e.g., Supabase for backend services)</li>
              <li>Legal authorities (if required by law)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">4. Data Security</h2>
            <p className="text-foreground/60 leading-relaxed">
              We take reasonable measures to protect your data. However, remember that no system is 100% secure and there is always a risk of unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">5. User Control</h2>
            <p className="text-foreground/60 mb-4">You have full control over your data. You can:</p>
            <div className="flex flex-wrap gap-3">
              {['Update Profile', 'Request Deletion', 'Stop Service Anytime'].map(item => (
                <span key={item} className="px-4 py-2 bg-slate-100 text-foreground/70 text-sm font-bold rounded-xl border border-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">6. Children’s Privacy</h2>
              <p className="text-foreground/60">
                Lettzo is not intended for users under 18. We do not knowingly collect data from minors.
              </p>
            </section>
            <section>
              <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">7. Data Retention</h2>
              <p className="text-foreground/60">
                We retain your data as long as your account is active or as required by law.
              </p>
            </section>
          </div>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">8. Third-Party Services</h2>
            <p className="text-foreground/60">
              We may use third-party services (e.g., Supabase). Their privacy policies also apply.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">9. Changes to Policy</h2>
            <p className="text-foreground/60">
              We may update this policy. Continued use of the app means you accept the changes.
            </p>
          </section>

          <section className="pt-10 border-t border-slate-100 text-center md:text-left">
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">10. Contact</h2>
            <p className="text-foreground/60 mb-6 font-medium">
              For privacy-related concerns:
            </p>
            <a href="mailto:asad@lettzo.com" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.05] hover:shadow-xl active:scale-[0.98]">
              asad@lettzo.com
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
