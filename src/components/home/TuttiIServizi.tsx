import { motion } from "framer-motion";
import { Code2, Brain, Cog, Gamepad2, Map, Palette, Sparkles, PenTool } from "lucide-react";

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

const TuttiIServizi = () => {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground font-light tracking-widest uppercase mb-4">
            Tutte le competenze
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">
            L'elenco completo di quello che <span className="text-primary">sappiamo fare</span>
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
            Competenze interne, nessun lavoro dato in outsourcing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-border/20 bg-card/10 backdrop-blur-sm p-6 space-y-4 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500">
                  <service.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-light text-foreground mt-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground/70 leading-relaxed font-light mt-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TuttiIServizi;
