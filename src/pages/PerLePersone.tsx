import { useRef } from "react";
import Navbar from "@/components/Navbar";
import PageSEO from "@/components/PageSEO";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MessageCircle, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Siti web personali e portfolio",
    description: "Un sito che ti rappresenti davvero. Per mostrare il tuo lavoro, raccontare chi sei o semplicemente avere una presenza online professionale.",
    examples: ["Portfolio creativi", "Siti vetrina", "Blog personali", "CV online"],
  },
  {
    icon: MessageCircle,
    title: "Consulenza individuale",
    description: "Hai un problema tecnico e non sai da dove partire? Ti aiutiamo a capire cosa ti serve, quali strumenti usare e come procedere. Senza impegno.",
    examples: ["Scelta strumenti", "Valutazione fornitori", "Strategia digitale", "Ottimizzazione processi"],
  },
  {
    icon: GraduationCap,
    title: "Formazione e coaching",
    description: "Percorsi individuali o per piccoli gruppi su strumenti digitali, programmazione, design e gestione dei dati. Al tuo ritmo.",
    examples: ["Strumenti di produttività", "Basi di programmazione", "Design per non designer", "Gestione dati"],
  },
];

const PerLePersone = () => {
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
        title="Per le Persone — PYNK STUDIO"
        description="Soluzioni digitali pensate per te. Siti web personali, consulenza individuale e formazione su misura per freelancer e professionisti."
        path="/per-le-persone"
      />
      <Navbar />

      {/* Hero – cinematic */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full blur-[120px] opacity-20"
            style={{ background: "hsl(330 80% 60%)", top: "20%", left: "30%" }}
            animate={{ x: [0, 35, -15, 0], y: [0, -20, 25, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
            style={{ background: "hsl(330 80% 80%)", bottom: "15%", right: "25%" }}
            animate={{ x: [0, -20, 30, 0], y: [0, 15, -20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
              <span className="text-sm text-muted-foreground font-light tracking-widest uppercase">Per le persone</span>
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
                {["Soluzioni", "pensate"].map((word, i) => (
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
                {["per"].map((word, i) => (
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
                {["te."].map((word, i) => (
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
              Che tu sia un freelancer, un professionista o semplicemente una persona con un progetto personale, possiamo aiutarti.
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
                Parliamone
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Servizi persone */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-center text-foreground mb-20"
          >
            Come possiamo <span className="text-primary">aiutarti</span>
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 md:gap-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="relative space-y-4 flex-1">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed font-light text-lg">{service.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.examples.map((ex, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-muted/30 text-sm text-muted-foreground border border-border/30 group-hover:border-primary/30 transition-colors duration-300">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default PerLePersone;
