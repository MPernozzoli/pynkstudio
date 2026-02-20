import { motion } from "framer-motion";
import { Cog, Code2, Brain, Palette } from "lucide-react";

const pacchetti = [
  {
    icon: Cog,
    label: "A",
    title: "Ordine operativo",
    subtitle: "Automazioni, email, documenti, integrazioni",
    esempi: [
      "Smistamento automatico delle email dei clienti per priorità",
      "Generazione preventivi da un modulo compilato in 30 secondi",
      "Notifiche automatiche quando una scadenza si avvicina",
    ],
  },
  {
    icon: Code2,
    label: "B",
    title: "Software su misura",
    subtitle: "Gestionali leggeri, portali, dashboard, app",
    esempi: [
      "Portale clienti dove vedono lo stato delle loro richieste",
      "Gestionale interno per tracciare ordini e consegne",
      "Dashboard con i numeri dell'azienda aggiornati in tempo reale",
    ],
  },
  {
    icon: Brain,
    label: "C",
    title: "AI utile",
    subtitle: "Classifica documenti, risponde ai clienti, estrae dati",
    esempi: [
      "Chatbot che risponde alle domande frequenti dei tuoi clienti",
      "Estrazione automatica dei dati da fatture e documenti PDF",
      "Classificazione intelligente delle email in entrata",
    ],
  },
  {
    icon: Palette,
    label: "D",
    title: "Immagine e contenuti",
    subtitle: "Interfacce, brand, testi, materiali",
    esempi: [
      "Sito web professionale che comunica subito cosa fai",
      "Logo e identità visiva coerente su tutti i materiali",
      "Testi chiari per presentazioni, brochure e sito",
    ],
  },
];

const PacchettiServizi = () => {
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Cosa <span className="text-primary">facciamo</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Quattro aree di intervento. Tutte gestite internamente, nessun outsourcing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {pacchetti.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 space-y-6 hover:border-primary/30 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                    <pkg.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground/50 font-light tracking-widest uppercase">
                      Pacchetto {pkg.label}
                    </span>
                    <h3 className="text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground font-light text-sm">
                  {pkg.subtitle}
                </p>

                <div className="space-y-3 pt-2">
                  <p className="text-xs text-muted-foreground/60 font-light tracking-widest uppercase">
                    Esempi concreti
                  </p>
                  {pkg.esempi.map((esempio, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-foreground/70 font-light leading-relaxed">
                        {esempio}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PacchettiServizi;
