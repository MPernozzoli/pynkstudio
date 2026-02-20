import { useRef } from "react";
import Navbar from "@/components/Navbar";
import PageSEO from "@/components/PageSEO";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Globe, MessageCircle,
  GraduationCap, Eye
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const risultati = [
  "Sito online in 2 settimane",
  "Consulenza senza impegno",
  "Formazione al tuo ritmo",
];

const problemi = [
  {
    problema: "Non hai un sito e non sai da dove partire",
    soluzione: "Ti guidiamo nella scelta e lo costruiamo noi per te.",
  },
  {
    problema: "Hai bisogno di una presenza online professionale",
    soluzione: "Portfolio, CV online o sito vetrina: ti rappresenta davvero.",
  },
  {
    problema: "Vuoi imparare ma i corsi online sono troppo generici",
    soluzione: "Formazione su misura, al tuo ritmo, sugli strumenti che ti servono.",
  },
  {
    problema: "Hai un problema tecnico e non sai a chi chiedere",
    soluzione: "Consulenza diretta: ti aiutiamo a capire cosa fare, senza impegno.",
  },
  {
    problema: "Paghi troppo per cose che potresti fare da solo",
    soluzione: "Ti insegniamo a gestire il tuo sito, i tuoi dati, i tuoi strumenti.",
  },
  {
    problema: "Non sai quali strumenti digitali usare per il tuo lavoro",
    soluzione: "Ti consigliamo gli strumenti giusti e ti aiutiamo a usarli.",
  },
];

const servizi = [
  {
    icon: Globe,
    title: "Siti web personali e portfolio",
    description: "Un sito che ti rappresenta davvero. Per mostrare il tuo lavoro, raccontare chi sei o avere una presenza online professionale.",
    esempi: ["Portfolio per creativi e freelancer", "Siti vetrina per professionisti", "Blog personali", "CV online interattivi"],
  },
  {
    icon: MessageCircle,
    title: "Consulenza individuale",
    description: "Hai un problema tecnico e non sai da dove partire? Ti aiutiamo a capire cosa ti serve, quali strumenti usare e come procedere.",
    esempi: ["Scelta degli strumenti giusti", "Valutazione fornitori e preventivi", "Strategia digitale personale", "Ottimizzazione del tuo workflow"],
  },
  {
    icon: GraduationCap,
    title: "Formazione e coaching",
    description: "Percorsi individuali o per piccoli gruppi su strumenti digitali, programmazione, design e gestione dei dati. Al tuo ritmo.",
    esempi: ["Strumenti di produttività (Notion, Google Workspace)", "Basi di programmazione", "Design per non designer", "Gestione dati e fogli di calcolo"],
  },
];

const steps = [
  { numero: "1", titolo: "Ci scrivi", desc: "Raccontaci di cosa hai bisogno. Ti rispondiamo in giornata." },
  { numero: "2", titolo: "Call gratuita", desc: "15 minuti per capire se possiamo aiutarti e come." },
  { numero: "3", titolo: "Proposta chiara", desc: "Ti mandiamo una proposta semplice con tempi e costi." },
  { numero: "4", titolo: "Si parte", desc: "Lavoriamo insieme e ti teniamo aggiornato passo passo." },
];

const PerLePersone = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () => document.getElementById("servizi-persone")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Siti web, consulenza e formazione per freelancer — PYNK STUDIO"
        description="Soluzioni digitali pensate per te. Siti web personali, consulenza individuale e formazione su misura per freelancer e professionisti."
        path="/per-le-persone"
      />
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute w-[450px] h-[450px] rounded-full blur-[120px] opacity-20" style={{ background: "hsl(var(--primary))", top: "20%", left: "30%" }} animate={{ x: [0, 35, -15, 0], y: [0, -20, 25, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-light tracking-widest uppercase">Per le persone</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1]">
              Soluzioni digitali pensate per <span className="text-primary">te.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Che tu sia un freelancer, un professionista o una persona con un progetto personale, possiamo aiutarti. Senza complicazioni.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-wrap justify-center gap-4">
              {risultati.map((r, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground font-light">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {r}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" onClick={scrollToContact} className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] hover:scale-105">
                Parliamone
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToServices} className="text-lg px-10 py-7 rounded-full font-light tracking-wide border-border/50 hover:border-primary/50 transition-all duration-300">
                <Eye className="mr-2 w-5 h-5" />
                Vedi i servizi
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PROBLEMI */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-light text-center text-foreground mb-16">
            Ti riconosci in qualcuno di <span className="text-primary">questi?</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {problemi.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-7 space-y-4 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-foreground font-normal text-[15px] leading-snug">{p.problema}</p>
                </div>
                <div className="flex items-start gap-3 pl-8">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{p.soluzione}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="servizi-persone" className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-light text-center text-foreground mb-16">
            Come possiamo <span className="text-primary">aiutarti</span>
          </motion.h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {servizi.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.15 }} whileHover={{ y: -4 }} className="group relative rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 md:gap-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="relative space-y-4 flex-1">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed font-light text-lg">{service.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.esempi.map((ex, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-muted/30 text-sm text-muted-foreground border border-border/30 group-hover:border-primary/30 transition-colors duration-300">{ex}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COME LAVORIAMO */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-light mb-16 text-center text-foreground">
            Come <span className="text-primary">funziona</span>
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-light text-primary-foreground">{s.numero}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-300">{s.titolo}</h3>
                  <p className="text-foreground/60 font-light mt-2">{s.desc}</p>
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
