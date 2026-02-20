import Navbar from "@/components/Navbar";
import TestFlight from "@/components/TestFlight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Layers, Rocket, TrendingUp, Code2, Gamepad2, Palette, PenTool } from "lucide-react";

const percorso = [
  {
    icon: Target,
    number: "1",
    title: "Validazione dell'idea",
    description: "Analizziamo insieme se la tua idea ha mercato, come differenziarti e quali sono i rischi. Prima di scrivere una riga di codice.",
  },
  {
    icon: Layers,
    number: "2",
    title: "Prototipo funzionante",
    description: "Creiamo una versione base che puoi mostrare, testare e far provare a utenti reali. Veloce e con budget contenuto.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Sviluppo e lancio",
    description: "Costruiamo il prodotto completo, lo pubblichiamo e ti affianchiamo nelle prime settimane di vita.",
  },
  {
    icon: TrendingUp,
    number: "4",
    title: "Crescita e miglioramento",
    description: "Raccogliamo feedback, miglioriamo il prodotto e aggiungiamo funzionalità in base ai dati reali.",
  },
];

const services = [
  {
    icon: Code2,
    title: "Sviluppo software",
    description: "App mobile, web app, piattaforme. Dal prototipo al prodotto finito, con tecnologie moderne.",
    tech: ["React", "Swift", "Node.js", "SwiftUI"],
  },
  {
    icon: Gamepad2,
    title: "Videogiochi",
    description: "Sviluppo di videogiochi, esperienze interattive e contenuti multimediali. Dal concept alla pubblicazione.",
    tech: ["Unreal Engine", "Unity", "Blender"],
  },
  {
    icon: Palette,
    title: "Design e interfacce",
    description: "Progettiamo schermate che le persone capiscono subito, senza bisogno di spiegazioni.",
    tech: ["Figma", "Sketch", "SwiftUI", "UIKit"],
  },
  {
    icon: PenTool,
    title: "Contenuti e comunicazione",
    description: "Testi, immagini e materiali per presentare il tuo progetto nel modo giusto.",
    tech: ["Content Strategy", "Brand Voice", "Visual Identity"],
  },
];

const PerLeIdee = () => {
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
              Hai un'idea? Ti aiutiamo a farla diventare reale.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Ti affianchiamo dalla validazione al lancio. Un passo alla volta, senza sprechi.
            </p>
            <div className="pt-6">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all hover:shadow-glow hover:scale-105"
              >
                Raccontaci la tua idea
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Percorso */}
      <section className="py-32 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-light mb-16 text-center text-foreground">
            Il percorso dall'idea al prodotto
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {percorso.map((step, index) => (
              <div key={index} className="glass rounded-3xl p-8 md:p-10 flex items-start gap-6 md:gap-8 hover-glow border-primary/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                  <span className="text-xl font-light text-primary-foreground">{step.number}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-light text-primary">{step.title}</h3>
                  <p className="text-foreground/80 leading-relaxed font-light text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi idee */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-center text-foreground">
            Cosa possiamo costruire insieme
          </h2>
          <p className="text-xl text-muted-foreground font-light text-center mb-16 max-w-2xl mx-auto">
            Gli strumenti che usiamo per trasformare idee in prodotti.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="glass rounded-3xl p-8 space-y-6 hover-glow group border-primary/10">
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

      <TestFlight />
      <Contact />
      <Footer />
    </div>
  );
};

export default PerLeIdee;
