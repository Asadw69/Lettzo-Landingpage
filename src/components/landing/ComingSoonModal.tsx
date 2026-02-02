import { useState, useEffect } from "react";
import { X, Sparkles, Mail, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import lettzoLogo from "@/assets/lettzo-logo.png";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal = ({ isOpen, onClose }: ComingSoonModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: string }>>([]);

  useEffect(() => {
    if (isOpen) {
      // Generate confetti pieces
      const pieces = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 0.5}s`,
      }));
      setConfetti(pieces);
      setIsSubmitted(false);
      setEmail("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md overflow-hidden">
        {/* Confetti animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="absolute top-0 w-2 h-2 rounded-full"
              style={{
                left: piece.left,
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                animation: `fall 2s ease-in-out forwards`,
                animationDelay: piece.delay,
              }}
            />
          ))}
        </div>

        <DialogHeader className="text-center">
          <div className="mx-auto mb-4">
            <img src={lettzoLogo} alt="Lettzo" className="h-12 w-auto" />
          </div>
          <div className="flex justify-center mb-2">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <DialogTitle className="font-satoshi text-2xl sm:text-3xl font-bold">
            {isSubmitted ? "You're on the list!" : "Coming Soon!"}
          </DialogTitle>
          <DialogDescription className="text-base">
            {isSubmitted
              ? "We'll notify you as soon as Lettzo launches. Get ready to stop doing things alone!"
              : "Lettzo is launching soon. Be the first to know when we go live!"}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {isSubmitted ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Check your inbox for a confirmation email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              <Button type="submit" className="w-full shadow-button">
                Join the Waitlist
              </Button>
            </form>
          )}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          No spam, ever. We'll only notify you about the launch.
        </p>

        <style>{`
          @keyframes fall {
            0% {
              transform: translateY(-20px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(400px) rotate(720deg);
              opacity: 0;
            }
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonModal;
