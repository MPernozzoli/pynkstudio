import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Subtle animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-tight">
            Mettiamo ordine nel lavoro quotidiano della tua azienda.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Sistemiamo email, richieste clienti e processi interni così che nessuno perda più tempo o informazioni.
          </p>

          <div className="pt-6">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all hover:shadow-glow hover:scale-105"
            >
              Prenota una call di 15 minuti
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
