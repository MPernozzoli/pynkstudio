import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pynkLogo from "@/assets/pynk-logo-transparent.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src={pynkLogo} 
              alt="PynkStudio Logo" 
              className="w-full max-w-2xl h-auto drop-shadow-2xl"
            />
          </div>

          <h2 className="text-5xl md:text-7xl font-light tracking-wider glow-text">
            Code. Create. Sync.
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Software house italiana specializzata nello sviluppo di applicazioni innovative per l'ecosistema Apple
          </p>

          <div className="pt-8">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full font-light tracking-wide transition-all hover:shadow-glow"
            >
              Scopri di più
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
