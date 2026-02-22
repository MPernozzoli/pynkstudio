import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, ListOrdered, LayoutGrid, Wrench, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const framework = [
  {
    icon: Search,
    number: "1",
    title: "Analisi",
    desc: "Osserviamo i flussi di lavoro reali. Chi fa cosa, come, con quali strumenti, dove si blocca. Non partiamo da ipotesi, partiamo dai fatti.",
  },
  {
    icon: ListOrdered,
    number: "2",
    title: "Priorità",
    desc: "Non tutto va risolto subito. Classifichiamo le criticità per impatto sul lavoro quotidiano e definiamo cosa affrontare prima.",
  },
  {
    icon: LayoutGrid,
    number: "3",
    title: "Strutturazione",
    desc: "Ridisegniamo i workflow critici. Attribuiamo responsabilità chiare, definiamo procedure esplicite, eliminiamo le ambiguità.",
  },
  {
    icon: Wrench,
    number: "4",
    title: "Implementazione",
    desc: "Applichiamo i cambiamenti in modo graduale. Se servono strumenti digitali, li scegliamo e li configuriamo noi. Solo quando è il momento giusto.",
  },
  {
    icon: BarChart3,
    number: "5",
    title: "Monitoraggio",
    desc: "Verifichiamo che i cambiamenti funzionino nel contesto reale. Correggiamo, aggiustiamo, consolidiamo.",
  },
];

const Metodo = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Metodo di lavoro — PYNK STUDIO"
        description="Il nostro framework: analisi, priorità, strutturazione, implementazione, monitoraggio. Prima il sistema, poi gli strumenti."
        path="/metodo"
      />
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-15" style={{ background: "hsl(var(--primary))", top: "15%", right: "20%" }} animate={{ x: [0, -30, 20, 0], y: [0, 25, -15, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-4xl md:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
              Il nostro <span className="text-primary">metodo</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Cinque fasi. Nessuna scorciatoia. Ogni fase ha un obiettivo chiaro e un risultato misurabile.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* FRAMEWORK */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {framework.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 flex items-start gap-6 hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-light text-primary-foreground">{step.number}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-foreground/70 font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETENZE TECNICHE */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              Competenze <span className="text-primary">tecniche</span>
            </h2>
            <p className="text-foreground/70 font-light text-lg leading-relaxed">
              Quando il check-up identifica la necessità di strumenti digitali, li progettiamo e li costruiamo internamente. Non deleghiamo, non facciamo outsourcing.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Le nostre competenze interne coprono sviluppo software, automazione, integrazione di sistemi e analisi dati. Le usiamo come supporto all'implementazione, non come servizio a sé stante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Volete capire come applicarlo al vostro <span className="text-primary">contesto?</span>
            </h2>
            <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] hover:scale-105">
              <Link to="/contattaci">
                Parliamone
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Metodo;
