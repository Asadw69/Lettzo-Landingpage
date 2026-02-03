import { Zap, Map, MessageCircle, Users, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Spontaneous Meetups",
    description: "Got an hour for coffee or a quick gym session ? Create a plan and find someone to join you instantly.",
  },
  {
    icon: Map,
    title: "Real-Time Discovery",
    description: "See what's happening in your neighborhood right now. From morning walks to evening drinks.",
  },
  {
    icon: MessageCircle,
    title: "Instant Coordination",
    description: "No more endless texting. Every plan has a dedicated chat to get the details sorted quickly.",
  },
  {
    icon: Users,
    title: "Strictly Social",
    description: "Designed for shared activities and real hobbies. We're here for connections, not dating.",
  },
  {
    icon: Tag,
    title: "Vibe Matching",
    description: "Find people who match your vibe.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-white relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,0,47,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold tracking-widest uppercase mb-6">
            Real People. Real Plans.
          </span>
          <h2 className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            Stop Scrolling. <span className="text-primary italic">Start Doing.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Lettzo is the bridge between your screen and the real world.
            Because things are just better when done together.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group border-0 shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 bg-secondary/20 p-2 rounded-[2rem]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 md:p-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-satoshi text-2xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
