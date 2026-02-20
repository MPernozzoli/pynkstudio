import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageSEO from "@/components/PageSEO";
import About from "@/components/About";
import Solution from "@/components/Solution";
import HowWeWork from "@/components/HowWeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Brain, Cog, Map, Sparkles, PenTool } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Software su misura",
    description: "App per gestire clienti, ordini, prenotazioni o qualsiasi processo interno. Funzionano su computer, tablet e telefono.",
    tech: ["Swift", "SwiftUI", "Node.js", "React"],
  },
  {
    icon: Brain,
    title: "Intelligenza artificiale applicata",
    description: "Addestriamo modelli di intelligenza artificiale per rispondere alle domande dei tuoi clienti, classificare documenti o estrarre dati da email e PDF.",
    tech: ["HuggingFace", "Fine-tuning", "RAG", "LLM Training"],
  },
  {
    icon: Cog,
    title: "Automazione dei processi",
    description: "Eliminiamo il lavoro manuale ripetitivo: smistamento email, compilazione documenti, invio notifiche, aggiornamento fogli di calcolo.",
    tech: ["Zapier", "Make", "Python", "Node.js"],
  },
  {
    icon: Map,
    title: "Mappe e dati geografici",
    description: "Sistemi di mappatura interattiva per visualizzare dati su territorio, percorsi, punti vendita o qualsiasi informazione legata a una posizione.",
    tech: ["QGIS", "ArcGIS", "Leaflet", "MapBox"],
  },
  {
    icon: Sparkles,
    title: "Identità visiva e materiali",
    description: "Logo, colori, biglietti da visita, brochure, gadget: tutto ciò che serve per presentarsi in modo professionale e riconoscibile.",
    tech: ["Adobe Suite", "Figma", "Blender", "Print Design"],
  },
  {
    icon: PenTool,
    title: "Testi e contenuti",
    description: "Scriviamo i testi per il tuo sito, le tue presentazioni e i tuoi materiali. Chiari, diretti e pensati per chi li legge.",
    tech: ["Content Strategy", "SEO", "Brand Voice", "Visual Identity"],
  },
];

const PerLeAziende = () => {
  const location = useLocation();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Per le Aziende — PYNK STUDIO"
        description="Mettiamo ordine nel lavoro quotidiano della tua azienda. Software su misura, automazione, AI e design per eliminare il caos e aumentare il controllo."
        path="/per-le-aziende"
      />
      <Navbar />

      {/* Hero – cinematic */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{ background: "hsl(330 80% 60%)", top: "15%", left: "25%" }}
            animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
            style={{ background: "hsl(330 80% 80%)", bottom: "15%", right: "20%" }}
            animate={{ x: [0, -25, 15, 0], y: [0, 20, -10, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(hsl(330 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(330 80% 60%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-light tracking-widest uppercase">Per le aziende</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.05]"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {["Mettiamo", "ordine", "nel"].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em]"
                    variants={{
                      hidden: { y: 80, opacity: 0, rotateX: 40 },
                      visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                {["lavoro", "quotidiano"].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em] text-primary"
                    variants={{
                      hidden: { y: 80, opacity: 0, rotateX: 40 },
                      visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                {["della", "tua", "azienda."].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em]"
                    variants={{
                      hidden: { y: 80, opacity: 0, rotateX: 40 },
                      visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
            >
              Sistemiamo email, richieste clienti e processi interni così che nessuno perda più tempo o informazioni.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-4"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(330_80%_60%/0.4)] hover:scale-105"
              >
                Prenota una call di 15 minuti
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <About />
      <Solution />

      {/* Servizi aziende */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6">
              I nostri strumenti per mettere <span className="text-primary">ordine</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Ogni azienda è diversa. Ecco gli strumenti che usiamo per risolvere i problemi più comuni.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 space-y-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed font-light">{service.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-muted/30 text-sm text-muted-foreground border border-border/30 group-hover:border-primary/30 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default PerLeAziende;
