import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ClipboardList,
  Users,
  Search,
  FileText,
  ListOrdered,
  LayoutGrid,
  Wrench,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

const target = [
  "Carico quotidiano ingestibile, poco tempo per capire cosa non funziona.",
  "Molte comunicazioni e scadenze gestite con strumenti non adatti.",
  "Responsabilità poco chiare: tutti fanno tutto, nessuno chiude.",
];

const stepsCheckup = [
  { icon: Phone, title: "Call preliminare", desc: "20 minuti per capire se il check-up è lo strumento giusto." },
  { icon: ClipboardList, title: "Raccolta informazioni", desc: "Documenti, procedure, descrizione dei flussi attuali." },
  { icon: Users, title: "Sessione operativa", desc: "Osserviamo il lavoro reale con chi lo svolge ogni giorno." },
  { icon: Search, title: "Analisi", desc: "Criticità, colli di bottiglia, sovrapposizioni di ruoli." },
  { icon: FileText, title: "Restituzione", desc: "Report con priorità e piano a 30, 60 e 90 giorni." },
];

const framework = [
  { icon: Search, number: "1", title: "Analisi", desc: "Flussi reali, strumenti, dove si blocca il lavoro." },
  { icon: ListOrdered, number: "2", title: "Priorità", desc: "Cosa affrontare prima per massimo impatto." },
  { icon: LayoutGrid, number: "3", title: "Strutturazione", desc: "Workflow, ruoli, procedure esplicite." },
  { icon: Wrench, number: "4", title: "Implementazione", desc: "Cambiamenti graduali; strumenti solo se servono." },
  { icon: BarChart3, number: "5", title: "Monitoraggio", desc: "Verifica nel tempo e aggiustamenti." },
];

const deliverables = [
  "3–5 criticità prioritarie per impatto.",
  "Piano operativo a 30, 60 e 90 giorni.",
  "Indicazioni sugli strumenti solo se necessarie.",
];

const Consulenza = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Consulenza operativa PMI — PYNK STUDIO"
        description="Check-up operativo in 7 giorni e affiancamento su processi. Servizio complementare allo sviluppo software."
        path="/consulenza"
      />
      <Navbar />

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute h-[500px] w-[500px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
              top: "15%",
              left: "20%",
            }}
          />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-light text-muted-foreground"
            >
              Oltre allo sviluppo
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl"
            >
              Consulenza operativa per <span className="text-primary">PMI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-muted-foreground"
            >
              Mettiamo ordine in workflow e responsabilità prima di parlare di software. Il nostro ingresso tipico è il{" "}
              <strong className="font-medium text-foreground">Check-up Operativo in 7 giorni</strong>: un prodotto completo, con esito chiaro.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row"
            >
              <Button
                size="lg"
                asChild
                className="group rounded-full bg-primary px-10 py-7 text-lg font-light tracking-wide text-primary-foreground transition-all duration-500 hover:scale-105 hover:bg-primary/90 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)]"
              >
                <Link to="/contattaci">
                  Parliamo 20 minuti
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <h2 className="mb-4 text-3xl font-light text-foreground md:text-5xl">
              Check-up in <span className="text-primary">7 giorni</span>
            </h2>
            <p className="font-light leading-relaxed text-muted-foreground">
              Diagnosi strutturata dei flussi operativi. Alla fine avete criticità prioritarie e un piano concreto — potete anche applicarlo in autonomia.
            </p>
          </motion.div>
          <div className="mx-auto max-w-3xl space-y-4">
            {stepsCheckup.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 rounded-2xl border border-border/20 bg-card/10 p-5 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-light text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm font-light text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-background to-card/20 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="mb-6 text-2xl font-light text-foreground md:text-4xl">
                A chi è <span className="text-primary">rivolto</span>
              </h2>
              <ul className="space-y-3">
                {target.map((line) => (
                  <li key={line} className="flex items-start gap-3 font-light text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="mb-6 text-2xl font-light text-foreground md:text-4xl">
                Cosa <span className="text-primary">ricevete</span>
              </h2>
              <ul className="space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 font-light text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-light text-muted-foreground">
                Non è consulenza legale, HR disciplinare né una lista di software da comprare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-light text-foreground md:text-5xl"
          >
            Il nostro <span className="text-primary">metodo</span>
          </motion.h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {framework.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-5 rounded-2xl border border-border/20 bg-card/10 p-6 backdrop-blur-sm transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20">
                  <span className="text-lg font-light text-primary-foreground">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-light text-foreground">{step.title}</h3>
                  <p className="mt-1 font-light leading-relaxed text-foreground/70">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-2xl text-center text-sm font-light text-muted-foreground"
          >
            Quando il check-up indica strumenti digitali, li progettiamo e realizziamo noi come software house. Prima il sistema, poi il codice.
          </motion.p>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-background to-card/20 py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-xl space-y-6">
            <h2 className="text-3xl font-light text-foreground md:text-5xl">
              Volete partire da <span className="text-primary">qui</span>?
            </h2>
            <Button
              size="lg"
              asChild
              className="group rounded-full bg-primary px-10 py-7 text-lg font-light tracking-wide text-primary-foreground transition-all duration-500 hover:scale-105 hover:bg-primary/90 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)]"
            >
              <Link to="/contattaci">
                Contattaci
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulenza;
