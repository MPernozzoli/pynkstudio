import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Globe, Link2, Map, Monitor, Palette, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNerdMode } from "@/contexts/NerdModeContext";
import {
  homeConsulting,
  homeCrossSkills,
  homeDevPillars,
  homeHero,
  homeSectorsStrip,
  t,
} from "@/lib/copy";
import StackChips from "@/components/StackChips";

const pillarIcons = [Globe, Smartphone, Monitor] as const;
const crossLucide = [Brain, Palette, Map, Link2] as const;

const sectorPills = ["E-commerce", "Servizi professionali", "Industria", "Cultura e turismo", "PA e associazioni"];

const Index = () => {
  const { nerd } = useNerdMode();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <PageSEO
        title="PYNK STUDIO — Software house italiana"
        description="Sviluppo di siti web, web app, applicazioni mobile e desktop. Consulenza operativa per PMI."
        path="/"
      />
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute h-[600px] w-[600px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
              top: "10%",
              left: "20%",
            }}
          />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={nerd ? "hero-n" : "hero-p"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h1 className="text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  {t(homeHero.title, nerd)}
                </h1>
                <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                  {t(homeHero.subtitle, nerd)}
                </p>
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
            >
              <Button
                size="lg"
                asChild
                className="group rounded-full bg-primary px-10 py-7 text-lg font-light tracking-wide text-primary-foreground transition-all duration-500 hover:scale-105 hover:bg-primary/90 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)]"
              >
                <Link to="/servizi">
                  I nostri servizi
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-border/50 px-10 py-7 text-lg font-light tracking-wide transition-all duration-300 hover:border-primary/50"
              >
                <Link to="/contattaci">Contattaci</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center text-3xl font-light text-foreground md:text-5xl"
          >
            Cosa <span className="text-primary">facciamo</span>
          </motion.h2>
          <p className="mx-auto mb-14 max-w-xl text-center font-light text-muted-foreground">
            Dal sito alle app: un unico team che segue progetto, qualità e messa online.
          </p>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {homeDevPillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-3xl border border-border/20 bg-card/10 p-8 backdrop-blur-sm transition-colors hover:border-primary/30"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div key={`${pillar.id}-${nerd}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                      <h3 className="text-xl font-light text-foreground">{t(pillar.title, nerd)}</h3>
                      <p className="mt-3 font-light leading-relaxed text-foreground/80">{t(pillar.desc, nerd)}</p>
                    </motion.div>
                  </AnimatePresence>
                  {nerd && <StackChips items={[...pillar.stack]} />}
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button variant="link" asChild className="font-light text-primary">
              <Link to="/servizi">
                Approfondisci i servizi
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-background to-card/20 py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-light text-foreground md:text-5xl">
              Competenze <span className="text-primary">trasversali</span>
            </h2>
          </motion.div>
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
            {homeCrossSkills.map((skill, i) => {
              const Icon = crossLucide[i];
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-border/20 bg-card/10 p-6 backdrop-blur-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div key={`${skill.id}-${nerd}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                      <h3 className="text-lg font-light text-foreground">{t(skill.title, nerd)}</h3>
                      <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{t(skill.desc, nerd)}</p>
                    </motion.div>
                  </AnimatePresence>
                  {nerd && <StackChips items={[...skill.stack]} />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <AnimatePresence mode="wait">
              <motion.div key={nerd ? "sec-n" : "sec-p"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                <h2 className="text-3xl font-light text-foreground md:text-5xl">{t(homeSectorsStrip.title, nerd)}</h2>
                <p className="mt-4 font-light text-muted-foreground">{t(homeSectorsStrip.subtitle, nerd)}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {sectorPills.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-border/30 bg-card/20 px-4 py-2 text-sm font-light text-foreground/80"
                >
                  {label}
                </span>
              ))}
            </div>
            <Button asChild variant="outline" className="mt-10 rounded-full font-light">
              <Link to="/settori">Vedi i settori</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-background to-card/20 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-3xl border border-border/20 bg-card/10 p-10 text-center backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              <motion.div key={nerd ? "c-n" : "c-p"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                <h2 className="text-2xl font-light text-foreground md:text-3xl">{t(homeConsulting.title, nerd)}</h2>
                <p className="mt-4 font-light leading-relaxed text-muted-foreground">{t(homeConsulting.desc, nerd)}</p>
              </motion.div>
            </AnimatePresence>
            <Button asChild variant="link" className="mt-4 font-light text-primary">
              <Link to="/consulenza">Scopri la consulenza</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl space-y-8">
            <h2 className="text-3xl font-light text-foreground md:text-5xl">
              Un progetto da <span className="text-primary">fare insieme?</span>
            </h2>
            <p className="text-lg font-light text-muted-foreground">Raccontateci obiettivi e tempi: vi rispondiamo con chiarezza.</p>
            <Button
              size="lg"
              asChild
              className="group rounded-full bg-primary px-10 py-7 text-lg font-light text-primary-foreground transition-all duration-500 hover:scale-105 hover:bg-primary/90 hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)]"
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

export default Index;
