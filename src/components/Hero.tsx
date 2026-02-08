import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pynkLogo from "@/assets/pynk-logo-transparent.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible bg-background">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Subtle animated orbs con Pynk Flamingo */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Fenicottero fluttuante nell'angolo superiore sinistro */}
      <div className="absolute top-0 left-0 z-20 pointer-events-none">
        <img 
          src={pynkLogo} 
          alt="PynkStudio Logo" 
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl animate-float -translate-x-1/4 -translate-y-1/4"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in pt-32 md:pt-40">
          {/* Logo text */}
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                PYNK
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-widest uppercase">
              STUDIO
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-light tracking-wider text-foreground/90">
            Code. Create. Sync.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Studio creativo e tecnologico che unisce progettazione, design e sviluppo di prodotti digitali
          </p>

          <div className="pt-8">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all hover:shadow-glow hover:scale-105"
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
