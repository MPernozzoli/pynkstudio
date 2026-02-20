import { motion } from "framer-motion";
import { Building2, Home, Truck, Briefcase } from "lucide-react";

const cases = [
  {
    icon: Building2,
    settore: "Servizi",
    problema: "Le richieste dei clienti arrivavano via email, WhatsApp e telefono. Molte si perdevano.",
    intervento: "Portale unico per la ricezione richieste con smistamento automatico e notifiche al team.",
    risultato: "Risultato atteso: −40% tempo di risposta, zero richieste perse.",
  },
  {
    icon: Home,
    settore: "Immobiliare",
    problema: "Ogni agente gestiva i contatti in un proprio foglio Excel. Nessuna visibilità per la direzione.",
    intervento: "Gestionale leggero con schede contatto, storico interazioni e dashboard vendite.",
    risultato: "Risultato atteso: visibilità completa sulle trattative, +25% follow-up completati.",
  },
  {
    icon: Truck,
    settore: "Logistica",
    problema: "I documenti di trasporto venivano compilati a mano. Errori frequenti, tempi lunghi.",
    intervento: "Generazione automatica dei documenti da un modulo. Archivio digitale consultabile.",
    risultato: "Risultato atteso: −60% tempo di compilazione, errori quasi azzerati.",
  },
  {
    icon: Briefcase,
    settore: "Professionisti",
    problema: "Lo studio perdeva ore a rincorrere scadenze fiscali e a raccogliere documenti dai clienti.",
    intervento: "Sistema di promemoria automatici e portale clienti per l'upload dei documenti.",
    risultato: "Risultato atteso: −50% tempo amministrativo, clienti più autonomi.",
  },
];

const CaseStudies = () => {
  return (
    <section id="esempi" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Esempi di <span className="text-primary">interventi</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Situazioni reali, soluzioni concrete.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {cases.map((c, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 space-y-5 hover:border-primary/30 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-card/50 border border-border/30 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-light tracking-widest uppercase">
                    {c.settore}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground/60 font-light tracking-widest uppercase mb-1">Problema</p>
                    <p className="text-foreground/80 font-light text-sm leading-relaxed">{c.problema}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/60 font-light tracking-widest uppercase mb-1">Intervento</p>
                    <p className="text-foreground/80 font-light text-sm leading-relaxed">{c.intervento}</p>
                  </div>
                  <div className="pt-1">
                    <p className="text-sm text-primary font-light leading-relaxed">
                      📈 {c.risultato}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
