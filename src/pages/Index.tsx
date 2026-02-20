import { Link } from "react-router-dom";
import { Building2, Lightbulb, User, ArrowRight, Code2, Brain, Cog, Gamepad2, Map, Palette, Sparkles, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const areas = [
  {
    icon: Building2,
    title: "Per le aziende",
    description: "Mettiamo ordine nel lavoro quotidiano. Meno email perse, meno caos, più controllo.",
    to: "/per-le-aziende",
    label: "01",
  },
  {
    icon: Lightbulb,
    title: "Per le idee",
    description: "Dall'idea al prodotto, passo dopo passo. Validazione, prototipo, sviluppo e lancio.",
    to: "/per-le-idee",
    label: "02",
  },
  {
    icon: User,
    title: "Per le persone",
    description: "Soluzioni su misura per te. Siti personali, consulenza, formazione.",
    to: "/per-le-persone",
    label: "03",
  },
];

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

const Index = () => {
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
      <Navbar />

      {/* Hero – cinematic */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
            style={{ background: "hsl(330 80% 60%)", top: "10%", left: "20%" }}
            animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
            style={{ background: "hsl(330 80% 80%)", bottom: "10%", right: "15%" }}
            animate={{ x: [0, -30, 20, 0], y: [0, 25, -15, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-10"
            style={{ background: "hsl(280 60% 50%)", top: "50%", left: "60%" }}
            animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid pattern overlay */}
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
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-light tracking-widest uppercase">Code · Create · Sync</span>
            </motion.div>

            {/* Main heading – word-by-word reveal */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-[1.05]"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {["Trasformiamo", "problemi", "in"].map((word, i) => (
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
                {["soluzioni."].map((word, i) => (
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
                {["Per", "tutti."].map((word, i) => (
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
              Software, automazione e design per aziende, idee e persone.
              <br className="hidden md:block" />
              Senza gergo tecnico, con risultati concreti.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="pt-12"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex items-start justify-center p-1.5"
              >
                <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3 Area Cards – editorial layout */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground font-light tracking-widest uppercase text-center mb-16"
          >
            Cosa facciamo
          </motion.p>

          <div className="max-w-6xl mx-auto space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={area.to}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={area.to}
                  className="group relative block rounded-3xl overflow-hidden border border-border/30 bg-card/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-10 md:p-8 lg:p-10 space-y-6">
                    {/* Number label */}
                    <span className="text-xs text-muted-foreground/40 font-light tracking-widest">{area.label}</span>

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                      <area.icon className="w-7 h-7 text-primary-foreground" />
                    </div>

                    <h3 className="text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed font-light text-sm">
                      {area.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-primary font-light pt-2">
                      <span className="group-hover:tracking-wider transition-all duration-300">Scopri di più</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="overflow-hidden py-8 border-y border-border/20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-12 items-center">
              {["Swift", "React", "Node.js", "Unreal Engine", "Blender", "QGIS", "TypeScript", "Supabase", "Figma", "PostgreSQL", "SwiftUI", "Python"].map((tech) => (
                <span key={`${setIdx}-${tech}`} className="text-2xl md:text-3xl font-extralight text-muted-foreground/20 tracking-wide">
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* All services – staggered grid */}
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
              Cosa sappiamo <span className="text-primary">fare</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
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
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-border/20 bg-card/10 backdrop-blur-sm p-6 space-y-4 cursor-default overflow-hidden"
              >
                {/* Glow on hover */}
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

      {/* CTA finale – dramatic */}
      <section className="py-32 relative overflow-hidden">
        {/* Big gradient circle behind */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6">
            Non sai da dove <span className="text-primary">partire?</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-12 max-w-xl mx-auto">
            Parliamone 15 minuti. Ti diciamo se e come possiamo aiutarti.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(330_80%_60%/0.4)] hover:scale-105"
          >
            Contattaci
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
