import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Info, Mail, Linkedin, Globe } from "lucide-react";

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg rounded-[2.5rem] p-8">
                <DialogHeader className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-6">
                        <Info className="w-8 h-8 text-primary" />
                    </div>
                    <DialogTitle className="font-satoshi text-3xl font-black mb-4">
                        About Lettzo
                    </DialogTitle>
                    <DialogDescription className="text-lg font-medium text-muted-foreground leading-relaxed">
                        Lettzo is a social meetup platform built for spontaneous, real-life connections.
                        We're on a mission to bring people together for shared experiences—from
                        coffee catch-ups to gym sessions—without the pressure of dating apps.
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-8 space-y-6">
                    <div className="bg-secondary/30 p-6 rounded-3xl">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-primary" />
                            Our Vision
                        </h4>
                        <p className="text-muted-foreground">
                            We believe in a world where doing things together is the default.
                            Lettzo helps you find your tribe in the real world, right now.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg px-2">Contact for more info</h4>
                        <div className="grid gap-3">
                            <a
                                href="mailto:asad@lettzo.com"
                                className="flex items-center gap-4 bg-white border border-border p-4 rounded-2xl hover:border-primary transition-all group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                                </div>
                                <span className="font-bold">asad@lettzo.com</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/asad-siddiqui-6559a72a1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white border border-border p-4 rounded-2xl hover:border-primary transition-all group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                    <Linkedin className="w-5 h-5 text-blue-500 group-hover:text-white" />
                                </div>
                                <span className="font-bold">Asad Siddiqui</span>
                            </a>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AboutModal;
