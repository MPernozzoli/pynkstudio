import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle, Phone, ClipboardList, Users, Search, FileText, HeadphonesIcon, Settings, Wrench } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const target = [
  "Annaspano nel carico quotidiano senza riuscire a fermarsi per capire cosa non funziona.",
  "Gestiscono molte comunicazioni, pratiche e scadenze con strumenti non adatti o usati male.",
  "Hanno responsabilità non chiaramente distribuite: tutti fanno tutto, nessuno chiude niente.",
];

const steps = [
  { icon: Phone, number: "1", title: "Call preliminare", subtitle: "20 minuti", desc: "Capiamo il contesto e valutiamo se il check-up è lo strumento giusto per voi." },
  { icon: ClipboardList, number: "2", title: "Raccolta informazioni", subtitle: "", desc: "Vi chiediamo documenti, procedure e descrizioni dei flussi di lavoro attuali." },
  { icon: Users, number: "3", title: "Sessione operativa", subtitle: "", desc: "Osserviamo e analizziamo il lavoro quotidiano con chi lo svolge davvero." },
  { icon: Search, number: "4", title: "Analisi", subtitle: "", desc: "Identifichiamo criticità, colli di bottiglia e sovrapposizioni di responsabilità." },
  { icon: FileText, number: "5", title: "Restituzione", subtitle: "", desc: "Vi consegniamo il report con criticità prioritarie e piano 30/60/90 giorni." },
];

const deliverables = [
  "3–5 criticità prioritarie, ordinate per impatto.",
  "Stima dell'impatto di ciascuna criticità sul lavoro quotidiano.",
  "Piano operativo a 30, 60 e 90 giorni.",
  "Indicazioni sugli strumenti, solo se necessari.",
];

const nonE = [
  "Non è consulenza legale.",
  "Non è HR disciplinare.",
  "Non è coaching motivazionale.",
  "Non è una lista di software da comprare.",
];

const CheckupOperativo = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Check-up Operativo in 7 giorni — PYNK STUDIO"
        description="Diagnosi strutturata dei workflow operativi per PMI di servizi. Identifichiamo le criticità prioritarie e vi consegniamo un piano d'azione concreto."
        path="/checkup-operativo"
      />
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-15" style={{ background: "hsl(var(--primary))", top: "15%", left: "25%" }} animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-light">Prezzo fisso · 7 giorni</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1]">
              Check-up Operativo in <span className="text-primary">7 giorni</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Diagnosi strutturata dei workflow operativi per PMI di servizi.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
              <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] hover:scale-105">
                <Link to="/contattaci">
                  Richiedi la call preliminare
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* A CHI È RIVOLTO */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
              A chi è <span className="text-primary">rivolto</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-8">
              PMI di servizi che:
            </p>
            <div className="space-y-4">
              {target.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-4 p-4 rounded-2xl border border-border/20 bg-card/10">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80 font-light">{t}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-light text-foreground mb-16 text-center">
            Come <span className="text-primary">funziona</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group rounded-2xl border border-border/20 bg-card/10 backdrop-blur-sm p-6 flex items-start gap-5 hover:border-primary/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-light text-primary-foreground">{s.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {s.title}
                    {s.subtitle && <span className="text-muted-foreground font-light ml-2">({s.subtitle})</span>}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light mt-1">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COSA RICEVI */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Cosa <span className="text-primary">ricevi</span>
              </h2>
              <div className="space-y-4">
                {deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80 font-light">{d}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Cosa <span className="text-muted-foreground">non è</span>
              </h2>
              <div className="space-y-4">
                {nonE.map((n, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground font-light">{n}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IL CHECK-UP È COMPLETO */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Un prodotto <span className="text-primary">completo.</span>
            </h2>
            <div className="space-y-6 text-foreground/80 font-light text-lg leading-relaxed">
              <p>
                Il check-up non è un'esca commerciale. È un servizio fatto e finito: alla fine avrete un quadro chiaro di cosa non funziona, perché, e come intervenire.
              </p>
              <p>
                Il piano a 30/60/90 giorni è pensato per essere applicato dal vostro team, con le vostre risorse. Non vi serve altro per iniziare a migliorare.
              </p>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-foreground font-light text-lg">
                <strong className="font-medium">Il check-up è già un ottimo investimento da solo.</strong> Nessun obbligo di acquistare altro.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIZI AGGIUNTIVI - ACCORDION */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Se vi serve una <span className="text-primary">mano.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Servizi separati dal check-up, acquistabili a parte. Per chi vuole un affiancamento nell'attuazione o ha criticità particolarmente ostiche.
            </p>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="workflow" className="rounded-2xl border border-border/20 bg-card/10 px-6 data-[state=open]:border-primary/30 transition-colors duration-300">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                      <Settings className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-light text-foreground">Ridisegno e Standardizzazione Workflow</h3>
                      <p className="text-sm text-muted-foreground font-light">Architettura operativa</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="space-y-5 pl-14">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Cosa facciamo</h4>
                      <ul className="space-y-1.5">
                        {["Mappatura dettagliata dei flussi critici", "Definizione responsabilità: chi fa cosa, quando", "Creazione procedure operative (SOP)", "Eliminazione passaggi inutili o duplicati", "Definizione punti di controllo"].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-light">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Quando serve</h4>
                      <p className="text-sm text-muted-foreground font-light">Quando il problema è strutturale e non basta qualche aggiustamento.</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Cosa non è</h4>
                      <p className="text-sm text-muted-foreground font-light">Non è formazione HR. Non è coaching. Non è controllo del personale.</p>
                    </div>
                    <p className="text-sm text-primary font-light italic">È architettura operativa.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="supporto" className="rounded-2xl border border-border/20 bg-card/10 px-6 data-[state=open]:border-primary/30 transition-colors duration-300">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                      <HeadphonesIcon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-light text-foreground">Implementazione Operativa e Supporto</h3>
                      <p className="text-sm text-muted-foreground font-light">30–60 giorni di affiancamento</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="space-y-5 pl-14">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Cosa facciamo</h4>
                      <ul className="space-y-1.5">
                        {["Supporto nell'introduzione delle nuove procedure", "Allineamento team sui nuovi flussi", "Setup strumenti esistenti (task manager, email rules, ecc.)", "Monitoraggio prime settimane", "Correzione criticità emergenti"].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-light">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Quando serve</h4>
                      <p className="text-sm text-muted-foreground font-light">Quando non avete tempo o struttura per implementare da soli.</p>
                    </div>
                    <p className="text-sm text-primary font-light italic">Questo è il servizio che evita che il report finisca in un cassetto.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="strumenti" className="rounded-2xl border border-border/20 bg-card/10 px-6 data-[state=open]:border-primary/30 transition-colors duration-300">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                      <Wrench className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-light text-foreground">Integrazione e Automazione Strumenti</h3>
                      <p className="text-sm text-muted-foreground font-light">Solo se necessario</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="space-y-5 pl-14">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Cosa facciamo</h4>
                      <ul className="space-y-1.5">
                        {["Selezione strumenti più adatti al vostro contesto", "Configurazione workflow digitali", "Automazioni email e pratiche", "Eventuale sviluppo su misura", "Integrazione tra sistemi esistenti"].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-light">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Cosa non è</h4>
                      <p className="text-sm text-muted-foreground font-light">Non è un software generalista. È un intervento mirato per sostenere la nuova struttura operativa.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <p className="text-sm text-muted-foreground/70 font-light">
              Questi servizi si attivano solo dopo il check-up e sono quotati separatamente in base alla complessità dell'intervento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Richiedi la call <span className="text-primary">preliminare.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              20 minuti per capire il vostro contesto. Nessun impegno.
            </p>
            <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] hover:scale-105">
              <Link to="/contattaci">
                Contattaci
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

export default CheckupOperativo;
