import { useRef } from "react";
import Navbar from "@/components/Navbar";
import PageSEO from "@/components/PageSEO";
import TestFlight from "@/components/TestFlight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Layers, Rocket, TrendingUp, Code2, Gamepad2, Palette, PenTool } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const percorso = [
  {
    icon: Target,
    number: "1",
    title: "Validazione dell'idea",
    description: "Analizziamo insieme se la tua idea ha mercato, come differenziarti e quali sono i rischi. Prima di scrivere una riga di codice.",
  },
  {
    icon: Layers,
    number: "2",
    title: "Prototipo funzionante",
    description: "Creiamo una versione base che puoi mostrare, testare e far provare a utenti reali. Veloce e con budget contenuto.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Sviluppo e lancio",
    description: "Costruiamo il prodotto completo, lo pubblichiamo e ti affianchiamo nelle prime settimane di vita.",
  },
  {
    icon: TrendingUp,
    number: "4",
    title: "Crescita e miglioramento",
    description: "Raccogliamo feedback, miglioriamo il prodotto e aggiungiamo funzionalità in base ai dati reali.",
  },
];

const services = [
  {
    icon: Code2,
    title: "Sviluppo software",
    description: "App mobile, web app, piattaforme. Dal prototipo al prodotto finito, con tecnologie moderne.",
    tech: ["React", "Swift", "Node.js", "SwiftUI"],
  },
  {
    icon: Gamepad2,
    title: "Videogiochi",
    description: "Sviluppo di videogiochi, esperienze interattive e contenuti multimediali. Dal concept alla pubblicazione.",
    tech: ["Unreal Engine", "Unity", "Blender"],
  },
  {
    icon: Palette,
    title: "Design e interfacce",
    description: "Progettiamo schermate che le persone capiscono subito, senza bisogno di spiegazioni.",
    tech: ["Figma", "Sketch", "SwiftUI", "UIKit"],
  },
  {
    icon: PenTool,
    title: "Contenuti e comunicazione",
    description: "Testi, immagini e materiali per presentare il tuo progetto nel modo giusto.",
    tech: ["Content Strategy", "Brand Voice", "Visual Identity"],
  },
];

const PerLeIdee = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Per le Idee — PYNK STUDIO"
        description="Hai un'idea? Ti aiutiamo a farla diventare reale. Dalla validazione al lancio, sviluppo software, videogiochi, design e comunicazione."
        path="/per-le-idee"
      />
      <Navbar />

      {/* Hero – cinematic */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{ background: "hsl(330 80% 60%)", top: "10%", right: "20%" }}
            animate={{ x: [0, -30, 20, 0], y: [0, 25, -15, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-15"
            style={{ background: "hsl(280 60% 50%)", bottom: "20%", left: "15%" }}
            animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

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
              <span className="text-sm text-muted-foreground font-light tracking-widest uppercase">Per le idee</span>
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
                {["Hai", "un'idea?"].map((word, i) => (
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
                {["Ti", "aiutiamo", "a", "farla"].map((word, i) => (
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
                {["diventare"].map((word, i) => (
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
                {["reale."].map((word, i) => (
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
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
            >
              Ti affianchiamo dalla validazione al lancio. Un passo alla volta, senza sprechi.
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
                Raccontaci la tua idea
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Percorso */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-20 text-center text-foreground"
          >
            Il percorso dall'idea al <span className="text-primary">prodotto</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {percorso.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 md:p-10 flex items-start gap-6 md:gap-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                  <span className="text-xl font-light text-primary-foreground">{step.number}</span>
                </div>
                <div className="relative space-y-3">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-foreground/60 leading-relaxed font-light text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi idee */}
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
              Cosa possiamo costruire <span className="text-primary">insieme</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
              Gli strumenti che usiamo per trasformare idee in prodotti.
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

      <TestFlight />
      <Contact />
      <Footer />
    </div>
  );
};

export default PerLeIdee;
