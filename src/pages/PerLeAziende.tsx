import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, CheckCircle2, Search, Settings, Wrench, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const problemi = [
"Le richieste dei clienti si perdono tra email, WhatsApp e telefonate.",
"Nessuno sa esattamente chi deve fare cosa e entro quando.",
"Il titolare è coinvolto in ogni decisione, anche le più piccole.",
"I processi funzionano solo perché le persone se li ricordano.",
"I dati sono sparsi in fogli Excel, cartelle condivise, chat.",
"Quando qualcuno è assente, il lavoro si blocca."];


const metodologia = [
{
  icon: Search,
  title: "Analisi",
  desc: "Osserviamo i vostri flussi di lavoro reali. Non quelli dichiarati, quelli che accadono davvero ogni giorno."
},
{
  icon: Settings,
  title: "Strutturazione",
  desc: "Definiamo responsabilità, priorità e procedure. Prima la struttura, poi — se serve — gli strumenti."
},
{
  icon: Wrench,
  title: "Implementazione",
  desc: "Vi affianchiamo nell'applicazione delle modifiche. Graduale, senza stravolgere il lavoro quotidiano."
},
{
  icon: ShieldCheck,
  title: "Monitoraggio",
  desc: "Verifichiamo che i cambiamenti tengano nel tempo e correggiamo dove necessario."
}];


const PerLeAziende = () => {

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Riorganizzazione operativa per PMI — PYNK STUDIO"
        description="Aiutiamo PMI di servizi a rimettere ordine nei workflow operativi. Prima il sistema, poi gli strumenti."
        path="/per-le-aziende" />

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)", top: "15%", left: "25%" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1]">
              Il problema non è il software.<br />
              È il <span className="text-primary">modo in cui lavorate.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Aiutiamo PMI di servizi a rimettere ordine nei workflow operativi. Prima il sistema, poi gli strumenti.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] hover:scale-105">
                <Link to="/checkup-operativo">
                  Inizia dal Check-up Operativo
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IL PROBLEMA OPERATIVO */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
              Il problema <span className="text-primary">operativo</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-10 leading-relaxed">
              Queste sono le situazioni che troviamo più spesso nelle PMI di servizi. Non sono eccezioni: sono la norma.
            </p>
            <div className="space-y-4">
              {problemi.map((p, i) => <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-start gap-4 p-4 rounded-2xl border border-border/20 bg-card/10">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80 font-light">{p}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LA NOSTRA METODOLOGIA */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">
              La nostra <span className="text-primary">metodologia</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {metodologia.map((m, i) =>
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group rounded-2xl border border-border/20 bg-card/10 backdrop-blur-sm p-7 space-y-4 hover:border-primary/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20">
                  <m.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-light text-foreground group-hover:text-primary transition-colors duration-300">{m.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{m.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* PERCHÉ LAVORIAMO COSÌ */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Perché lavoriamo <span className="text-primary">così</span>
            </h2>
            <div className="space-y-6 text-foreground/80 font-light text-lg leading-relaxed">
              <p>
                Molte aziende comprano software pensando che risolverà il caos. Invece aggiunge complessità a un sistema che già non funziona.
              </p>
              <p>
                Il nostro approccio è diverso: prima capiamo come lavorate davvero, poi identifichiamo cosa non funziona, e solo dopo proponiamo modifiche — di processo, di organizzazione, di strumenti.
              </p>
              <p>
                In quest'ordine. Sempre.
              </p>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-foreground font-light text-lg">
                <strong className="font-medium">Prima il sistema, poi gli strumenti.</strong> Questa è la nostra regola.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Iniziamo dal <span className="text-primary">check-up.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] hover:scale-105">
                <Link to="/checkup-operativo">
                  Scopri il Check-up Operativo
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-10 py-7 rounded-full font-light tracking-wide border-border/50 hover:border-primary/50 transition-all duration-300">
                <Link to="/contattaci">Contattaci</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default PerLeAziende;