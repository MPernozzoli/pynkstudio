import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageSEO from "@/components/PageSEO";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Mail, MessageSquare,
  FileSpreadsheet, RotateCcw, Brain, BarChart3, Cog, Code2,
  Sparkles, PenTool, Map, Phone, FileText, Eye
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const risultati = [
  "-30% tempo su attività ripetitive",
  "Zero richieste clienti perse",
  "Report chiari, sempre aggiornati",
];

const problemi = [
  {
    icon: Mail,
    problema: "Richieste clienti sparse tra email e WhatsApp",
    soluzione: "Un unico punto di raccolta, con priorità e assegnazioni automatiche.",
  },
  {
    icon: FileText,
    problema: "Preventivi e follow-up dimenticati",
    soluzione: "Promemoria automatici e storico completo di ogni trattativa.",
  },
  {
    icon: FileSpreadsheet,
    problema: "Dati in Excel non aggiornati o duplicati",
    soluzione: "Un sistema centralizzato che si aggiorna da solo.",
  },
  {
    icon: RotateCcw,
    problema: "Processi manuali ripetitivi",
    soluzione: "Automazioni che fanno il lavoro noioso al posto tuo.",
  },
  {
    icon: Brain,
    problema: "Team che lavora 'a memoria'",
    soluzione: "Procedure chiare e condivise, consultabili da tutti.",
  },
  {
    icon: BarChart3,
    problema: "Nessun cruscotto: non sai cosa sta succedendo",
    soluzione: "Dashboard semplice con i numeri che contano davvero.",
  },
];

const pacchetti = [
  {
    icon: Cog,
    titolo: "Ordine operativo",
    desc: "Automazioni, gestione email, documenti e integrazioni tra strumenti.",
    esempi: [
      "Smistamento automatico richieste clienti",
      "Notifiche e promemoria su scadenze",
      "Collegamento tra gestionale, email e calendario",
    ],
  },
  {
    icon: Code2,
    titolo: "Software su misura",
    desc: "Gestionali leggeri, portali clienti, dashboard e app interne.",
    esempi: [
      "Portale per i clienti con stato lavori",
      "Gestionale ordini con filtri e ricerca",
      "App interna per il team (anche da telefono)",
    ],
  },
  {
    icon: Sparkles,
    titolo: "AI utile",
    desc: "Intelligenza artificiale che classifica, risponde ed estrae dati.",
    esempi: [
      "Chatbot che risponde alle domande frequenti",
      "Classificazione automatica di documenti",
      "Estrazione dati da email e PDF",
    ],
  },
  {
    icon: PenTool,
    titolo: "Immagine e contenuti",
    desc: "Design, identità visiva, testi e materiali di comunicazione.",
    esempi: [
      "Logo e coordinato grafico professionale",
      "Testi per sito web e presentazioni",
      "Materiali stampa: biglietti, brochure, gadget",
    ],
  },
];

const caseStudies = [
  {
    settore: "Servizi",
    problema: "Richieste clienti perse tra email, telefonate e WhatsApp. Nessuno sapeva chi avesse risposto a cosa.",
    intervento: "Sistema centralizzato di raccolta richieste con smistamento automatico e notifiche al team.",
    risultato: "Risultato atteso: -40% tempo di risposta, zero richieste senza risposta.",
  },
  {
    settore: "Immobiliare",
    problema: "Preventivi fatti a mano su Word, follow-up dimenticati, nessun dato sulle trattative in corso.",
    intervento: "Gestionale leggero con generazione preventivi, storico cliente e promemoria automatici.",
    risultato: "Risultato atteso: +25% trattative portate a termine, 2 ore/settimana risparmiate.",
  },
  {
    settore: "Logistica",
    problema: "Dati su consegne sparsi in 4 fogli Excel diversi, aggiornati a mano, spesso sbagliati.",
    intervento: "Dashboard unica con dati in tempo reale, collegata ai sistemi esistenti.",
    risultato: "Risultato atteso: errori di inserimento ridotti del 70%, visibilità immediata sullo stato consegne.",
  },
  {
    settore: "Professionisti",
    problema: "Studio con 3 collaboratori: ognuno lavorava 'a modo suo', nessuna procedura condivisa.",
    intervento: "Procedure operative digitali + automazione delle attività ricorrenti (fatture, scadenze, archiviazione).",
    risultato: "Risultato atteso: 5 ore/settimana liberate, meno errori, onboarding nuovi collaboratori in metà tempo.",
  },
];

const steps = [
  { numero: "1", titolo: "Call di 20 minuti", desc: "Capiamo insieme se ha senso lavorare assieme. Gratis, senza impegno." },
  { numero: "2", titolo: "Mini-analisi", desc: "Analizziamo la situazione e ti mandiamo una proposta chiara con prezzo." },
  { numero: "3", titolo: "Prototipo rapido", desc: "Vedi subito se la soluzione funziona, prima di investire nel prodotto completo." },
  { numero: "4", titolo: "Produzione + supporto", desc: "Mettiamo tutto in funzione e restiamo disponibili per aggiustamenti." },
];

const servizi = [
  { icon: Code2, title: "Software su misura", description: "App per gestire clienti, ordini, prenotazioni o qualsiasi processo interno." },
  { icon: Brain, title: "Intelligenza artificiale", description: "Modelli AI per rispondere ai clienti, classificare documenti o estrarre dati." },
  { icon: Cog, title: "Automazione processi", description: "Eliminiamo il lavoro manuale: smistamento email, compilazione documenti, notifiche." },
  { icon: Map, title: "Mappe e dati geografici", description: "Mappatura interattiva per visualizzare dati su territorio, percorsi, punti vendita." },
  { icon: Sparkles, title: "Identità visiva", description: "Logo, colori, biglietti da visita, brochure: tutto per presentarsi in modo professionale." },
  { icon: PenTool, title: "Testi e contenuti", description: "Testi per sito, presentazioni e materiali. Chiari, diretti, pensati per chi li legge." },
];

const PerLeAziende = () => {
  const location = useLocation();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }, 100);
    }
  }, [location]);

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToExamples = () => document.getElementById("esempi")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Software e automazioni per PMI — PYNK STUDIO"
        description="Software su misura, automazioni e AI per imprenditori e PMI italiane. Meno caos, meno errori, più controllo sul lavoro quotidiano."
        path="/per-le-aziende"
      />
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: "hsl(var(--primary))", top: "15%", left: "25%" }} animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-light tracking-widest uppercase">Per le aziende</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1]">
              Software e automazioni che ti fanno risparmiare tempo <span className="text-primary">ogni settimana.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Sistemiamo processi, email e richieste clienti: meno caos, meno errori, più controllo.
            </motion.p>

            {/* Bullet risultati */}
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
                Scrivici (ti rispondiamo in giornata)
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToExamples} className="text-lg px-10 py-7 rounded-full font-light tracking-wide border-border/50 hover:border-primary/50 transition-all duration-300">
                <Eye className="mr-2 w-5 h-5" />
                Guarda esempi di lavori
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PROBLEMI TIPICI */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-4">Ti riconosci in qualcuno di <span className="text-primary">questi?</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {problemi.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-7 space-y-4 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground font-normal text-[15px] leading-snug">{p.problema}</p>
                </div>
                <div className="flex items-start gap-3 pl-[52px]">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{p.soluzione}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACCHETTI SERVIZI */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-4">Cosa facciamo, in <span className="text-primary">concreto</span></h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">Quattro aree di intervento. Per ogni azienda scegliamo il mix giusto.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {pacchetti.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4 }} className="group rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 space-y-5 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                      <p.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-300">{p.titolo}</h3>
                      <p className="text-sm text-muted-foreground font-light">{p.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {p.esempi.map((es, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-foreground/70 font-light">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{es}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="esempi" className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-4">Esempi di <span className="text-primary">intervento</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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

      {/* COME LAVORIAMO */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-light mb-16 text-center text-foreground">
            Come <span className="text-primary">lavoriamo</span>
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

      {/* TUTTI I SERVIZI */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">Tutti i nostri <span className="text-primary">servizi</span></h2>
            <p className="text-muted-foreground font-light">Per chi vuole sapere tutto nel dettaglio.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {servizi.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="rounded-2xl border border-border/20 bg-card/10 p-6 space-y-3">
                <s.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-light text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{s.description}</p>
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

export default PerLeAziende;
