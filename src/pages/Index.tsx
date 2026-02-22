import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, CheckCircle2, Search, Wrench, Settings, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";

const problemiHome = [
  "Pratiche ferme perché nessuno sa chi deve occuparsene.",
  "Email importanti perse in mezzo a decine di messaggi.",
  "Responsabilità poco chiare: tutti fanno tutto, nessuno chiude niente.",
  "Il titolare è sempre nel mezzo, perché senza di lui si blocca tutto.",
];

const percorsiAttuazione = [
  {
    icon: HeadphonesIcon,
    title: "Supporto operativo",
    desc: "Vi affianchiamo nell'applicazione delle priorità emerse dal check-up, senza stravolgere il lavoro quotidiano.",
  },
  {
    icon: Settings,
    title: "Ridisegno workflow",
    desc: "Riorganizziamo i flussi di lavoro che creano colli di bottiglia, attribuendo responsabilità chiare.",
  },
  {
    icon: Wrench,
    title: "Implementazione strumenti",
    desc: "Se servono strumenti digitali, li scegliamo e li configuriamo noi. Solo quando è necessario, mai prima.",
  },
];

const Index = () => {

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="PYNK STUDIO — Riorganizzazione operativa per PMI di servizi"
        description="Quando il lavoro è fuori controllo, vi aiutiamo a rimettere ordine. Check-up operativo in 7 giorni per PMI di servizi italiane."
        path="/"
      />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)", top: "10%", left: "20%" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1]"
            >
              Quando il lavoro è fuori controllo, vi aiutiamo a{" "}
              <span className="text-primary">rimettere ordine.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
            >
              Analizziamo workflow, comunicazioni e responsabilità operative per riportare chiarezza e priorità nel lavoro quotidiano.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] hover:scale-105">
                <Link to="/checkup-operativo">
                  Scopri il Check-up Operativo
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-10 py-7 rounded-full font-light tracking-wide border-border/50 hover:border-primary/50 transition-all duration-300">
                <Link to="/contattaci">
                  Parliamo 20 minuti
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IL PROBLEMA */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
              Il caos operativo non è un problema di <span className="text-primary">persone.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
              Nella maggior parte delle PMI di servizi che incontriamo, le persone lavorano bene. Il problema è che mancano strutture chiare: chi fa cosa, quando, con quale priorità.
            </p>

            <div className="space-y-4">
              {problemiHome.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-border/20 bg-card/10"
                >
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80 font-light">{p}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground font-light mt-8"
            >
              Non servono più strumenti. Serve capire dove si blocca il lavoro e rimettere ordine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CHECK-UP OPERATIVO - ANTEPRIMA */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-light">Il nostro servizio principale</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground">
              Check-up Operativo in <span className="text-primary">7 giorni</span>
            </h2>

            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Una diagnosi strutturata dei vostri workflow operativi. Identifichiamo le 3–5 criticità prioritarie e vi consegniamo un piano d'azione concreto a 30, 60 e 90 giorni.
            </p>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-primary/20 bg-primary/5 text-left max-w-2xl mx-auto">
              <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-foreground/80 font-light">
                <strong className="font-medium text-foreground">Il check-up è un prodotto completo.</strong> Alla fine avrete un quadro chiaro delle criticità e un piano operativo per intervenire in autonomia, senza bisogno di altri servizi.
              </p>
            </div>

            <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] hover:scale-105">
              <Link to="/checkup-operativo">
                Scopri come funziona
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SERVIZI AGGIUNTIVI */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
              Servizi di <span className="text-primary">attuazione</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-3">
              Separati dal check-up, acquistabili a parte. Per chi vuole un affiancamento nell'applicazione del piano o ha bisogno di interventi su problematiche particolarmente complesse.
            </p>
            <p className="text-sm text-muted-foreground/70 font-light max-w-xl mx-auto">
              Non sono obbligatori: il check-up vi dà già tutto per intervenire. Questi servizi servono quando preferite non farlo da soli.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {percorsiAttuazione.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-3xl border border-border/20 bg-card/10 backdrop-blur-sm p-8 space-y-4 hover:border-primary/30 transition-all duration-500"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/30 bg-card/20 mb-2">
                  <span className="text-xs text-muted-foreground font-light">Servizio aggiuntivo</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-light text-foreground group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-28 relative bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Parliamo del vostro <span className="text-primary">contesto operativo.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              20 minuti per capire se ha senso lavorare insieme. Nessun impegno.
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

export default Index;
