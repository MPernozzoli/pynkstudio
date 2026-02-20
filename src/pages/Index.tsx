import { Link } from "react-router-dom";
import { Building2, Lightbulb, User, ArrowRight, Code2, Brain, Cog, Gamepad2, Map, Palette, Sparkles, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const areas = [
  {
    icon: Building2,
    title: "Per le aziende",
    description: "Mettiamo ordine nel lavoro quotidiano. Meno email perse, meno caos, più controllo.",
    to: "/per-le-aziende",
  },
  {
    icon: Lightbulb,
    title: "Per le idee",
    description: "Dall'idea al prodotto, passo dopo passo. Validazione, prototipo, sviluppo e lancio.",
    to: "/per-le-idee",
  },
  {
    icon: User,
    title: "Per le persone",
    description: "Soluzioni su misura per te. Siti personali, consulenza, formazione.",
    to: "/per-le-persone",
  },
];

const allServices = [
  { icon: Code2, title: "Software su misura", description: "App per gestire clienti, ordini, prenotazioni o qualsiasi processo interno." },
  { icon: Brain, title: "Intelligenza artificiale", description: "Modelli AI per rispondere ai clienti, classificare documenti, estrarre dati." },
  { icon: Cog, title: "Automazione processi", description: "Eliminiamo il lavoro manuale ripetitivo: email, notifiche, documenti." },
  { icon: Gamepad2, title: "Videogiochi e video", description: "Sviluppo di videogiochi, esperienze interattive e contenuti multimediali." },
  { icon: Map, title: "Mappe e dati geografici", description: "Sistemi di mappatura interattiva per visualizzare dati su territorio." },
  { icon: Palette, title: "Interfacce e design", description: "Schermate e interfacce che le persone capiscono subito." },
  { icon: Sparkles, title: "Identità visiva", description: "Logo, colori, biglietti da visita, brochure, gadget professionali." },
  { icon: PenTool, title: "Testi e contenuti", description: "Testi per siti, presentazioni e materiali. Chiari, diretti, efficaci." },
];

const Index = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-tight">
              Trasformiamo problemi in soluzioni. Per tutti.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Software, automazione e design per aziende, idee e persone. Senza gergo tecnico, con risultati concreti.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Card */}
      <section className="py-32 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {areas.map((area) => (
              <Link
                key={area.to}
                to={area.to}
                className="glass rounded-3xl p-10 space-y-6 hover-glow border-primary/10 group block"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                  <area.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-light text-primary">{area.title}</h3>
                <p className="text-foreground/80 leading-relaxed font-light">{area.description}</p>
                <span className="inline-flex items-center gap-2 text-sm text-primary font-light group-hover:gap-3 transition-all">
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tutti i servizi */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-center text-foreground">
            Cosa sappiamo fare
          </h2>
          <p className="text-xl text-muted-foreground font-light text-center mb-16 max-w-2xl mx-auto">
            Competenze interne, nessun lavoro dato in outsourcing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 space-y-4 hover-glow border-primary/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-light text-primary">{service.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
            Non sai da dove partire?
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-10 max-w-xl mx-auto">
            Parliamone 15 minuti. Ti diciamo se e come possiamo aiutarti.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all hover:shadow-glow hover:scale-105"
          >
            Contattaci
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
