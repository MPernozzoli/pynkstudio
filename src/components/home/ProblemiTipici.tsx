import { motion } from "framer-motion";
import { Mail, FileQuestion, Table2, RotateCcw, Brain, BarChart3 } from "lucide-react";

const problemi = [
  {
    icon: Mail,
    problema: "Richieste clienti sparse tra email e WhatsApp",
    soluzione: "Le centralizziamo in un unico posto. Nessuna richiesta dimenticata.",
  },
  {
    icon: FileQuestion,
    problema: "Preventivi e follow-up dimenticati",
    soluzione: "Automatizziamo promemoria e scadenze. I clienti non si perdono più.",
  },
  {
    icon: Table2,
    problema: "Dati in Excel non aggiornati o duplicati",
    soluzione: "Un sistema unico dove i dati si aggiornano da soli, senza copie.",
  },
  {
    icon: RotateCcw,
    problema: "Processi manuali ripetitivi",
    soluzione: "Li automatizziamo. Quello che fai in 2 ore, il sistema lo fa in 2 secondi.",
  },
  {
    icon: Brain,
    problema: "Team che lavora 'a memoria'",
    soluzione: "Procedure chiare e visibili. Tutti sanno cosa fare, anche i nuovi.",
  },
  {
    icon: BarChart3,
    problema: "Nessun cruscotto: non sai cosa sta succedendo",
    soluzione: "Dashboard semplici che mostrano numeri importanti a colpo d'occhio.",
  },
];

const ProblemiTipici = () => {
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
            Ti riconosci in qualcuno di questi <span className="text-primary">problemi?</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Sono i motivi per cui le aziende ci contattano ogni settimana.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {problemi.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-border/20 bg-card/10 backdrop-blur-sm p-6 space-y-4 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-foreground font-medium text-base leading-snug">
                {item.problema}
              </p>
              <p className="text-sm text-primary/90 font-light leading-relaxed">
                → {item.soluzione}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemiTipici;
