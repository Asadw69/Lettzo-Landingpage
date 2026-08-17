import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Mail } from "lucide-react";

const Safety = () => {
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
            community safety guide
          </h1>
          <p className="text-base sm:text-lg text-foreground/60 font-light max-w-xl mx-auto leading-relaxed">
            our top priority is keeping real-world meetups safe, respectful, and transparent.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] border border-[#EAEAEA] p-6 sm:p-10 md:p-12 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06)] space-y-10">
          
          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              1. Before You Meet Up
            </h2>
            <p className="text-[15px] text-foreground/75 font-light leading-relaxed">
              Real connections happen in the real world, but taking simple precautions ensures a positive experience for everyone:
            </p>
            <ul className="space-y-2 text-[15px] text-foreground/75 font-light pt-1">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="font-medium text-foreground">Always meet in public:</strong> Choose busy coffee shops, parks, cafes, sports clubs, or public venues for first-time meetups.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="font-medium text-foreground">Inform a friend:</strong> Let a friend or family member know where you are going and who you are meeting.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="font-medium text-foreground">Arrange your own transport:</strong> Arrive and leave using your own vehicle or public transit.</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              2. Strict Hobby-First Culture
            </h2>
            <p className="text-[15px] text-foreground/75 font-light leading-relaxed">
              Lettzo is strictly designed for shared activities, mutual interests, and genuine social connections. It is not a dating or hookup app.
            </p>
            <p className="text-[15px] text-foreground/75 font-light leading-relaxed">
              Any user engaging in harassment, unsolicited romantic pressure, inappropriate messaging, or disrespectful conduct will be permanently banned immediately.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              3. Reporting & Moderation
            </h2>
            <p className="text-[15px] text-foreground/75 font-light leading-relaxed">
              If someone makes you uncomfortable, violates our guidelines, or behaves suspiciously, you have the right to leave immediately and report them.
            </p>
            <ul className="space-y-2 text-[15px] text-foreground/75 font-light pt-1">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Reports are reviewed with urgent priority by our moderation team.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Users found violating community trust face instant permanent suspension.</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-slate-100" />

          <section className="space-y-3">
            <h2 className="font-fraunces text-2xl font-bold text-foreground tracking-tight">
              4. Trust Your Instincts
            </h2>
            <p className="text-[15px] text-foreground/75 font-light leading-relaxed">
              Your comfort and safety always come first. If a plan or person feels off at any point, never hesitate to cancel or leave. You do not owe anyone your time if you feel unsafe.
            </p>
          </section>

          <div className="h-px bg-slate-100" />

          {/* Contact Section */}
          <section className="pt-2 text-center sm:text-left space-y-4">
            <div>
              <h3 className="font-fraunces text-xl font-bold text-foreground mb-1">
                have a safety concern?
              </h3>
              <p className="text-sm text-foreground/60 font-light">
                contact our dedicated safety support directly
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

export default Safety;
