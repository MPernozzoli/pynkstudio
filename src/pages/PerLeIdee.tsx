import { useRef } from "react";
import Navbar from "@/components/Navbar";
import PageSEO from "@/components/PageSEO";
import TestFlight from "@/components/TestFlight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Target, Layers,
  Rocket, TrendingUp, Code2, Gamepad2, Palette, PenTool, Eye
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const risultati = [
  "Dall'idea al prototipo in 4 settimane",
  "Budget chiaro prima di iniziare",
  "Supporto anche dopo il lancio",
];

const problemi = [
  {
    problema: "Hai un'idea ma non sai se funzionerà",
    soluzione: "Ti aiutiamo a validarla prima di spendere soldi.",
  },
  {
    problema: "Non sai quanto costa sviluppare il tuo progetto",
    soluzione: "Ti diamo un preventivo chiaro e realistico fin da subito.",
  },
  {
    problema: "Hai parlato con sviluppatori ma non ti capivano",
    soluzione: "Parliamo italiano, non 'tech'. Ci capiamo al volo.",
  },
  {
    problema: "Hai paura di investire troppo in qualcosa di sbagliato",
    soluzione: "Partiamo dal prototipo: investi poco, vedi subito se funziona.",
  },
  {
    problema: "Non sai da dove cominciare",
    soluzione: "Ti guidiamo passo passo: validazione, prototipo, lancio.",
  },
  {
    problema: "Vuoi un'app o un gioco ma non sai a chi affidarti",
    soluzione: "Facciamo tutto internamente: sviluppo, design, testi.",
  },
];

const percorso = [
  { numero: "1", titolo: "Call di 20 minuti", desc: "Ci racconti la tua idea. Ti diciamo subito se ha senso e come procedere." },
  { numero: "2", titolo: "Analisi e proposta", desc: "Studiamo il mercato, definiamo le funzionalità e ti mandiamo un preventivo chiaro." },
  { numero: "3", titolo: "Prototipo funzionante", desc: "Creiamo una versione base che puoi mostrare, testare e far provare a utenti reali." },
  { numero: "4", titolo: "Sviluppo e lancio", desc: "Costruiamo il prodotto completo e ti affianchiamo nelle prime settimane di vita." },
];

const servizi = [
  {
    icon: Code2,
    title: "Sviluppo software",
    description: "App mobile, web app, piattaforme. Dal prototipo al prodotto finito, con tecnologie moderne.",
  },
  {
    icon: Gamepad2,
    title: "Videogiochi",
    description: "Sviluppo di videogiochi e esperienze interattive. Dal concept alla pubblicazione su App Store.",
  },
  {
    icon: Palette,
    title: "Design e interfacce",
    description: "Schermate che le persone capiscono subito, senza bisogno di spiegazioni.",
  },
  {
    icon: PenTool,
    title: "Contenuti e comunicazione",
    description: "Testi, immagini e materiali per presentare il tuo progetto nel modo giusto.",
  },
];

const caseStudies = [
  {
    settore: "App mobile",
    problema: "Idea per un'app di prenotazioni per un settore di nicchia, nessuna competenza tecnica.",
    intervento: "Validazione dell'idea, prototipo in 3 settimane, test con 20 utenti reali, sviluppo completo.",
    risultato: "Risultato atteso: app pubblicata in 3 mesi, primi 100 utenti nel primo mese.",
  },
  {
    settore: "Videogioco",
    problema: "Game designer con un concept interessante ma nessun team di sviluppo.",
    intervento: "Sviluppo completo del gioco (Unreal Engine), design, testing e pubblicazione su App Store.",
    risultato: "Risultato atteso: gioco pubblicato, beta test con 50+ giocatori tramite TestFlight.",
  },
  {
    settore: "Piattaforma web",
    problema: "Startup early-stage con un'idea di marketplace, zero codice scritto.",
    intervento: "MVP in 6 settimane con funzionalità core: registrazione, ricerca, messaggistica.",
    risultato: "Risultato atteso: piattaforma live per validare il modello di business con utenti reali.",
  },
];

const PerLeIdee = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToExamples = () => document.getElementById("esempi-idee")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Trasforma la tua idea in un prodotto reale — PYNK STUDIO"
        description="Dalla validazione al lancio: sviluppo app, videogiochi e piattaforme. Prototipo in 4 settimane, budget chiaro, supporto completo."
        path="/per-le-idee"
      />
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: "hsl(var(--primary))", top: "10%", right: "20%" }} animate={{ x: [0, -30, 20, 0], y: [0, 25, -15, 0] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-light tracking-widest uppercase">Per le idee</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1]">
              Hai un'idea? Ti aiutiamo a farla <span className="text-primary">diventare reale.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              App, videogiochi, piattaforme web. Ti affianchiamo dalla validazione al lancio. Un passo alla volta, senza sprechi.
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
                Raccontaci la tua idea
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToExamples} className="text-lg px-10 py-7 rounded-full font-light tracking-wide border-border/50 hover:border-primary/50 transition-all duration-300">
                <Eye className="mr-2 w-5 h-5" />
                Guarda esempi
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

      {/* PERCORSO */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-light mb-16 text-center text-foreground">
            Il percorso dall'idea al <span className="text-primary">prodotto</span>
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {percorso.map((s, i) => (
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

      {/* CASE STUDIES */}
      <section id="esempi-idee" className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-light text-center text-foreground mb-16">
            Esempi di <span className="text-primary">progetti</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caseStudies.map((cs, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-light">{cs.settore}</span>
                <div className="space-y-3">
                  <div><span className="text-xs uppercase tracking-wider text-muted-foreground">Problema</span><p className="text-foreground font-light mt-1">{cs.problema}</p></div>
                  <div><span className="text-xs uppercase tracking-wider text-muted-foreground">Intervento</span><p className="text-foreground/80 font-light mt-1">{cs.intervento}</p></div>
                  <div className="pt-2 border-t border-border/20"><span className="text-xs uppercase tracking-wider text-primary">Risultato atteso</span><p className="text-foreground font-light mt-1">{cs.risultato}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">Cosa possiamo costruire <span className="text-primary">insieme</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {servizi.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -4 }} className="group rounded-2xl border border-border/20 bg-card/10 p-7 space-y-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-light text-foreground group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{s.description}</p>
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
