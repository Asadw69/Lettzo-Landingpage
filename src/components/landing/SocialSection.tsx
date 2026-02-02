import socialCoffee from "@/assets/social-coffee.jpg";
import socialWalking from "@/assets/social-walking.jpg";
const SocialSection = () => {
  return <section id="about" className="py-20 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6 pt-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                  <img src={socialCoffee} alt="Friends having coffee together" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                  <img src={socialWalking} alt="Friends walking together" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Stats card */}
            
          </div>

          {/* Right Content */}
          <div className="lg:pl-8">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Real Connections
            </span>
            <h2 className="font-satoshi text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Because Scrolling Alone{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-lettzo-red-light">
                Gets Old
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">We spend hours on our phones, but how often does that turn into real memories ? Lettzo bridges the gap between online and offline — helping you find people who actually want to do things, not just scroll past them.</p>
            <p className="text-lg text-muted-foreground leading-relaxed">Whether it's a spontaneous coffee run, a gym buddy, or a weekend adventure — life's better when you share it with others.</p>

            {/* Testimonial */}
            <div className="mt-10 p-6 bg-card rounded-2xl border border-border">
              <p className="text-foreground italic mb-4">"Many people want to do things but don’t have the right people at the right time. 
Plans get cancelled, opportunities are missed, and connections fade.
This app helps people find others with shared interests and availability,
so good plans actually happen."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/60 flex items-center justify-center text-sm font-medium">A</div>
                <div>
                  <p className="font-medium text-sm">Asad, 21</p>
                  <p className="text-xs text-muted-foreground">Dehradun, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SocialSection;