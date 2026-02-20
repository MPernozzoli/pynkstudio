import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MessageCircle, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Siti web personali e portfolio",
    description: "Un sito che ti rappresenti davvero. Per mostrare il tuo lavoro, raccontare chi sei o semplicemente avere una presenza online professionale.",
    examples: ["Portfolio creativi", "Siti vetrina", "Blog personali", "CV online"],
  },
  {
    icon: MessageCircle,
    title: "Consulenza individuale",
    description: "Hai un problema tecnico e non sai da dove partire? Ti aiutiamo a capire cosa ti serve, quali strumenti usare e come procedere. Senza impegno.",
    examples: ["Scelta strumenti", "Valutazione fornitori", "Strategia digitale", "Ottimizzazione processi"],
  },
  {
    icon: GraduationCap,
    title: "Formazione e coaching",
    description: "Percorsi individuali o per piccoli gruppi su strumenti digitali, programmazione, design e gestione dei dati. Al tuo ritmo.",
    examples: ["Strumenti di produttività", "Basi di programmazione", "Design per non designer", "Gestione dati"],
  },
];

const PerLePersone = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-tight">
              Soluzioni pensate per te, non per un'azienda.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Che tu sia un freelancer, un professionista o semplicemente una persona con un progetto personale, possiamo aiutarti.
            </p>
            <div className="pt-6">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all hover:shadow-glow hover:scale-105"
              >
                Parliamone
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi persone */}
      <section className="py-32 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            {services.map((service, index) => (
              <div key={index} className="glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 md:gap-8 hover-glow border-primary/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl md:text-3xl font-light text-primary">{service.title}</h3>
                  <p className="text-foreground/80 leading-relaxed font-light text-lg">{service.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.examples.map((ex, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground border border-border/30">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default PerLePersone;
