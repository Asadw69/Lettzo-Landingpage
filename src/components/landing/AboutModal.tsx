import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Mail, Linkedin, Globe, Sparkles } from "lucide-react";

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[calc(100%-2rem)] max-w-lg bg-white border border-[#EAEAEA] rounded-[2rem] p-0 overflow-hidden max-h-[90vh] flex flex-col shadow-[0_16px_60px_rgba(0,0,0,0.12)]">

                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 scrollbar-hide">
                    <DialogHeader className="text-center">
                        <DialogTitle className="font-fraunces text-3xl font-bold mb-4 text-foreground">
                            About <span className="text-gradient hover:italic transition-all px-2">Lettzo</span>
                        </DialogTitle>
                        <DialogDescription className="text-base font-medium text-foreground/50 leading-relaxed">
                            Lettzo helps people turn "maybe later" into real plans.
                            Meet people through shared moments, not endless chats.
                            No dating pressure—just real connections, made easy.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-5">
                        {/* Vision Card */}
                        <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#EAEAEA] relative group overflow-hidden hover:border-primary/20 transition-colors duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Sparkles className="w-12 h-12 text-primary" />
                            </div>
                            <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-foreground">
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
                            <h4 className="font-bold text-xs px-1 uppercase tracking-[0.2em] text-foreground/30">Connect with us</h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                                <a
                                    href="mailto:asad@lettzo.com"
                                    className="flex items-center gap-4 bg-[#FAFAFA] border border-[#EAEAEA] p-4 rounded-2xl hover:border-primary/30 hover:bg-[#FFF5F5] transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground/25">Email</span>
                                        <span className="font-bold text-sm text-foreground/70 group-hover:text-primary transition-colors">asad@lettzo.com</span>
                                    </div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/asad-siddiqui-6559a72a1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 bg-[#FAFAFA] border border-[#EAEAEA] p-4 rounded-2xl hover:border-blue-300 hover:bg-blue-50/50 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Linkedin className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground/25">Founder</span>
                                        <span className="font-bold text-sm text-foreground/70 group-hover:text-blue-500 transition-colors">Asad</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer text */}
                <div className="p-4 bg-[#FAFAFA] border-t border-[#EAEAEA] text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/25">Designed for 2026</p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AboutModal;
