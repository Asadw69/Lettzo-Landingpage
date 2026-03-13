import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Info, Mail, Linkedin, Globe, Sparkles, ArrowUpRight } from "lucide-react";

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg glass-card border-white/10 rounded-[2.5rem] p-0 overflow-hidden">
                {/* Hero Gradient Header */}
                <div className="relative h-32 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
                    <div className="relative w-16 h-16 rounded-2xl glass border border-white/20 flex items-center justify-center animate-glow-pulse">
                        <Info className="w-8 h-8 text-primary shadow-glow" />
                    </div>
                </div>

                <div className="p-8 space-y-8">
                    <DialogHeader className="text-center">
                        <DialogTitle className="font-satoshi text-3xl font-black mb-4">
                            About <span className="text-gradient">Lettzo</span>
                        </DialogTitle>
                        <DialogDescription className="text-base font-medium text-foreground/50 leading-relaxed">
                            Lettzo helps people turn “maybe later” into real plans. 
                            Meet people through shared moments, not endless chats. 
                            No dating pressure—just real connections, made easy.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6">
                        {/* Vision Card */}
                        <div className="glass p-6 rounded-3xl border border-white/10 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Sparkles className="w-12 h-12 text-primary" />
                            </div>
                            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-primary" />
                                Our Vision
                            </h4>
                            <p className="text-sm text-foreground/60 leading-relaxed font-medium">
                                We believe in a world where doing things together is the default. 
                                Lettzo helps you find your tribe in the real world, right now.
                            </p>
                        </div>

                        {/* Contact section */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-sm px-2 uppercase tracking-[0.2em] text-foreground/30">Connect with us</h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                                <a
                                    href="mailto:asad@lettzo.com"
                                    className="flex items-center gap-4 glass-card border-white/5 p-4 rounded-2xl hover:border-primary/40 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20">Email</span>
                                        <span className="font-bold text-sm text-foreground/80 group-hover:text-primary transition-colors">asad@lettzo.com</span>
                                    </div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/asad-siddiqui-6559a72a1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 glass-card border-white/5 p-4 rounded-2xl hover:border-blue-500/40 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Linkedin className="w-5 h-5 text-blue-400" />
                                    </div>
                                     <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20">Founder</span>
                                        <span className="font-bold text-sm text-foreground/80 group-hover:text-blue-400 transition-colors">Asad</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer text */}
                <div className="p-4 bg-white/5 text-center">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Designed for 2026</p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AboutModal;
