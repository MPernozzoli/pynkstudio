import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Solution from "@/components/Solution";
import HowWeWork from "@/components/HowWeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Brain, Cog, Map, Sparkles, PenTool } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software su misura",
    description: "App per gestire clienti, ordini, prenotazioni o qualsiasi processo interno. Funzionano su computer, tablet e telefono.",
    tech: ["Swift", "SwiftUI", "Node.js", "React"],
  },
  {
    icon: Brain,
    title: "Intelligenza artificiale applicata",
    description: "Addestriamo modelli di intelligenza artificiale per rispondere alle domande dei tuoi clienti, classificare documenti o estrarre dati da email e PDF.",
    tech: ["HuggingFace", "Fine-tuning", "RAG", "LLM Training"],
  },
  {
    icon: Cog,
    title: "Automazione dei processi",
    description: "Eliminiamo il lavoro manuale ripetitivo: smistamento email, compilazione documenti, invio notifiche, aggiornamento fogli di calcolo.",
    tech: ["Zapier", "Make", "Python", "Node.js"],
  },
  {
    icon: Map,
    title: "Mappe e dati geografici",
    description: "Sistemi di mappatura interattiva per visualizzare dati su territorio, percorsi, punti vendita o qualsiasi informazione legata a una posizione.",
    tech: ["QGIS", "ArcGIS", "Leaflet", "MapBox"],
  },
  {
    icon: Sparkles,
    title: "Identità visiva e materiali",
    description: "Logo, colori, biglietti da visita, brochure, gadget: tutto ciò che serve per presentarsi in modo professionale e riconoscibile.",
    tech: ["Adobe Suite", "Figma", "Blender", "Print Design"],
  },
  {
    icon: PenTool,
    title: "Testi e contenuti",
    description: "Scriviamo i testi per il tuo sito, le tue presentazioni e i tuoi materiali. Chiari, diretti e pensati per chi li legge.",
    tech: ["Content Strategy", "SEO", "Brand Voice", "Visual Identity"],
  },
];

const PerLeAziende = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

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

      <About />
      <Solution />

      {/* Servizi aziende */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-center text-foreground">
            I nostri strumenti per mettere ordine
          </h2>
          <p className="text-xl text-muted-foreground font-light text-center mb-16 max-w-2xl mx-auto">
            Ogni azienda è diversa. Ecco gli strumenti che usiamo per risolvere i problemi più comuni.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 space-y-6 hover-glow group border-primary/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-primary">{service.title}</h3>
                <p className="text-foreground/80 leading-relaxed font-light">{service.description}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {service.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground border border-border/30 hover:border-primary/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default PerLeAziende;
