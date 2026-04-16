import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";

const Terms = () => {
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
          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-foreground/50 font-semibold uppercase text-[10px] tracking-[0.2em]">Effective Date: April 17, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10">
          <p className="text-lg text-foreground/70 leading-relaxed font-medium">
            Lettzo is a social platform that enables users to create and join real-life plans and activities. By accessing or using Lettzo, you agree to these Terms.
          </p>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">1. Eligibility</h2>
            <p className="text-foreground/60 leading-relaxed">
              You must be at least 16 years old to use Lettzo. By using the app, you confirm that:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-foreground/60">
              <li>You are legally capable of entering into a binding agreement</li>
              <li>You will comply with all applicable laws</li>
            </ul>
            <p className="mt-4 text-foreground/60 italic">
              We reserve the right to suspend or terminate accounts that violate these requirements.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">2. User Accounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/60">
              <li>You must provide accurate and up-to-date information</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You are responsible for all activity under your account</li>
            </ul>
            <p className="mt-4 text-foreground/60">
              We may suspend or terminate accounts for misuse, suspicious activity, or violations.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">3. User-Generated Content</h2>
            <p className="text-foreground/70 font-bold mb-4 uppercase text-[10px] tracking-widest opacity-40">(Apple Store Requirement)</p>
            <p className="text-foreground/60 leading-relaxed mb-4">
              Lettzo allows users to create content such as plans, chats, and profile information. By using Lettzo, you agree that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/60">
              <li>You are solely responsible for your content</li>
              <li>You will not post harmful, abusive, illegal, or misleading content</li>
              <li>You will not impersonate others</li>
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="font-bold text-foreground mb-4">Moderation & Reporting:</h3>
              <ul className="list-disc pl-5 space-y-2 text-foreground/60">
                <li>Users can report inappropriate content</li>
                <li>We reserve the right to remove content and suspend accounts</li>
                <li>We may review and take action on reported content within a reasonable timeframe</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">4. Safety & Real-World Interactions</h2>
            <p className="text-foreground/60 leading-relaxed mb-4">
              Lettzo facilitates real-world meetups.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/60 mb-4">
              <li>We do NOT conduct background checks</li>
              <li>We do NOT verify user identities fully</li>
              <li>We do NOT guarantee user behavior</li>
            </ul>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
              <p className="font-bold text-foreground mb-0">👉 You are solely responsible for your interactions and safety.</p>
              <p className="text-sm text-foreground/50 mt-1">Always exercise caution when meeting others.</p>
            </div>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">5. Beta & Service Disclaimer</h2>
            <p className="text-foreground/60 leading-relaxed mb-4">
              Lettzo is currently in an early-stage or beta phase.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/60">
              <li>Features may change or be discontinued</li>
              <li>The service may contain bugs or interruptions</li>
              <li>While we take reasonable measures to protect data, no system is completely secure</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">6. Prohibited Activities</h2>
            <p className="text-foreground/60 mb-2">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/60">
              <li>Harass, threaten, or abuse other users</li>
              <li>Share illegal, explicit, or harmful content</li>
              <li>Use the app for scams, spam, or commercial exploitation</li>
              <li>Attempt to hack, reverse engineer, or disrupt the service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">7. Termination</h2>
            <p className="text-foreground/60">
              We may suspend or terminate your account at any time if you violate these Terms, pose a risk to other users, or if required by law.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">8. Limitation of Liability</h2>
            <p className="text-foreground/60 font-bold mb-2">To the maximum extent permitted by law, Lettzo is not liable for:</p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/60">
              <li>User interactions (online or offline)</li>
              <li>Injuries, damages, or disputes</li>
              <li>Data loss or service interruptions</li>
            </ul>
            <p className="mt-4 text-foreground/60 font-medium">Use of the app is at your own risk.</p>
          </section>

          <section>
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">9. Governing Law</h2>
            <p className="text-foreground/60">
              These Terms are governed by the laws of India.
            </p>
          </section>

          <section className="pt-10 border-t border-slate-100">
            <h2 className="font-fraunces text-2xl font-bold mb-4 text-foreground">10. Contact</h2>
            <p className="text-foreground/60 mb-4">
              For support or legal inquiries:
            </p>
            <a href="mailto:asad@lettzo.com" className="px-6 py-3 bg-red-50 text-primary font-bold rounded-2xl border border-red-100 transition-all hover:bg-primary hover:text-white inline-block">
              asad@lettzo.com
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
