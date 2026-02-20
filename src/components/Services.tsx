import { Code2, Gamepad2, Map, Palette, Brain, Cog, Sparkles, PenTool } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software su misura",
    description: "App per gestire clienti, ordini, prenotazioni o qualsiasi processo interno. Funzionano su computer, tablet e telefono.",
    tech: ["Swift", "SwiftUI", "Node.js", "React"]
  },
  {
    icon: Brain,
    title: "Intelligenza artificiale applicata",
    description: "Addestriamo modelli di intelligenza artificiale per rispondere alle domande dei tuoi clienti, classificare documenti o estrarre dati da email e PDF.",
    tech: ["HuggingFace", "Fine-tuning", "RAG", "LLM Training"]
  },
  {
    icon: Cog,
    title: "Automazione dei processi",
    description: "Eliminiamo il lavoro manuale ripetitivo: smistamento email, compilazione documenti, invio notifiche, aggiornamento fogli di calcolo.",
    tech: ["Zapier", "Make", "Python", "Node.js"]
  },
  {
    icon: Gamepad2,
    title: "Videogiochi e contenuti video",
    description: "Sviluppo di videogiochi, esperienze interattive e produzione di contenuti multimediali. Dal concept alla pubblicazione.",
    tech: ["Unreal Engine", "Blender", "Unity"]
  },
  {
    icon: Map,
    title: "Mappe e dati geografici",
    description: "Sistemi di mappatura interattiva per visualizzare dati su territorio, percorsi, punti vendita o qualsiasi informazione legata a una posizione.",
    tech: ["QGIS", "ArcGIS", "Leaflet", "MapBox"]
  },
  {
    icon: Palette,
    title: "Interfacce e design",
    description: "Progettiamo schermate e interfacce che le persone capiscono subito, senza bisogno di spiegazioni o manuali.",
    tech: ["Figma", "Sketch", "SwiftUI", "UIKit"]
  },
  {
    icon: Sparkles,
    title: "Identità visiva e materiali",
    description: "Logo, colori, biglietti da visita, brochure, gadget: tutto ciò che serve per presentarsi in modo professionale e riconoscibile.",
    tech: ["Adobe Suite", "Figma", "Blender", "Print Design"]
  },
  {
    icon: PenTool,
    title: "Testi e contenuti",
    description: "Scriviamo i testi per il tuo sito, le tue presentazioni e i tuoi materiali. Chiari, diretti e pensati per chi li legge.",
    tech: ["Content Strategy", "SEO", "Brand Voice", "Visual Identity"]
  }
];

const Services = () => {
  return (
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
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-2xl md:text-3xl font-light text-primary">
                {service.title}
              </h3>

              <p className="text-foreground/80 leading-relaxed font-light">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {service.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
