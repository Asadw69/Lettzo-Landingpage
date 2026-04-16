import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
interface CTASectionProps {
  onOpenModal: () => void;
}
const CTASection = ({
  onOpenModal
}: CTASectionProps) => {
  return <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-lettzo-red-light/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-lettzo-red-light/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-satoshi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
            Ready to Stop Doing{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-lettzo-red-light">
              Things Alone?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto px-4">
            Join thousands of people making real connections through shared 
            activities. Your next adventure is one tap away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
            <Button size="lg" onClick={onOpenModal} className="shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105 text-base px-8 py-7 rounded-2xl w-full sm:w-auto">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust badges */}
          
        </div>
      </div>
    </section>;
};
export default CTASection;