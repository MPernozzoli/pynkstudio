import { Code2, Gamepad2, Map, Palette, Brain, Cog, Sparkles, PenTool } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Sviluppo Software",
    description: "Applicativi desktop, web app, automazioni e tool integrati per l'ecosistema Apple. Da macOS a iOS, creiamo soluzioni native che sfruttano al massimo le potenzialità della piattaforma.",
    tech: ["Swift", "SwiftUI", "Node.js", "React"]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Fine tuning di modelli, deploying di intelligenze artificiali dedicate e integrazione di soluzioni AI su misura per il tuo business.",
    tech: ["HuggingFace", "Fine-tuning", "RAG", "LLM Training"]
  },
  {
    icon: Cog,
    title: "Automazioni & Processi",
    description: "Automazioni informatiche e ottimizzazione dei processi produttivi ed organizzativi in azienda. Riduci i tempi e aumenta l'efficienza.",
    tech: ["Zapier", "Make", "Python", "Node.js"]
  },
  {
    icon: Gamepad2,
    title: "Game & Video Production",
    description: "Sviluppo di videogiochi, esperienze immersive e contenuti multimediali con le tecnologie più avanzate. Dal concept alla pubblicazione.",
    tech: ["Unreal Engine", "Blender", "Unity"]
  },
  {
    icon: Map,
    title: "GIS & Data Design",
    description: "Progetti di mappatura interattiva e gestione di dati spaziali. Visualizzazioni complesse rese semplici e intuitive.",
    tech: ["QGIS", "ArcGIS", "Leaflet", "MapBox"]
  },
  {
    icon: Palette,
    title: "UX & Design Systems",
    description: "Creazione di interfacce intuitive e coerenti seguendo le Human Interface Guidelines di Apple. Design systems completi e scalabili.",
    tech: ["Figma", "Sketch", "SwiftUI", "UIKit"]
  },
  {
    icon: Sparkles,
    title: "Brand Identity & Merchandising",
    description: "Realizzazione di brand identity complete e materiale di merchandising che rappresenta al meglio la tua azienda.",
    tech: ["Adobe Suite", "Figma", "Blender", "Print Design"]
  },
  {
    icon: PenTool,
    title: "Copywriting & Content",
    description: "Creazione di loghi, copywriting professionale e contenuti che comunicano efficacemente il valore del tuo brand.",
    tech: ["Content Strategy", "SEO", "Brand Voice", "Visual Identity"]
  }
];

const Services = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center text-foreground">
          Cosa Facciamo
        </h2>

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
