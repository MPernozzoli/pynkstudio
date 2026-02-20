import { motion } from "framer-motion";
import { Phone, FileSearch, Zap, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Call di 20 minuti",
    description: "Capiamo il problema e valutiamo insieme se ha senso lavorarci. Nessun impegno.",
  },
  {
    icon: FileSearch,
    number: "2",
    title: "Mini-analisi e proposta",
    description: "Ti mandiamo una proposta chiara: cosa facciamo, quanto costa, quanto tempo serve.",
  },
  {
    icon: Zap,
    number: "3",
    title: "Prototipo rapido",
    description: "Costruiamo una versione base. La vedi, la provi, ci dici cosa cambiare.",
  },
  {
    icon: Rocket,
    number: "4",
    title: "Produzione e supporto",
    description: "Mettiamo tutto in funzione e restiamo disponibili per aggiustamenti e supporto.",
  },
];

const ComeLavoriamoHome = () => {
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
            Come <span className="text-primary">lavoriamo</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Quattro passaggi. Niente sorprese.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-border/20 bg-card/10 backdrop-blur-sm p-7 flex items-start gap-5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20">
                <span className="text-lg font-light text-primary-foreground">{step.number}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComeLavoriamoHome;
