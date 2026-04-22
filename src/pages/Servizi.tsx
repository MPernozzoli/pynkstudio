import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, LayoutDashboard, Smartphone, Monitor, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNerdMode } from "@/contexts/NerdModeContext";
import { serviziCards, serviziPage, t } from "@/lib/copy";
import StackChips from "@/components/StackChips";

const icons = [Globe, LayoutDashboard, Smartphone, Monitor, Bot] as const;

const staggerParent = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] as const } },
};

const Servizi = () => {
  const { nerd } = useNerdMode();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <PageSEO
        title="Servizi di sviluppo — PYNK STUDIO"
        description="Siti e landing, web app, app iOS/Android, desktop macOS/Windows, automazioni e AI. Stack dichiarato in modalità tecnica."
        path="/servizi"
      />
      <Navbar />

      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute h-[480px] w-[480px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
              top: "10%",
              right: "15%",
            }}
          />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={nerd ? "n" : "p"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <h1 className="text-4xl font-light leading-tight tracking-tight text-foreground md:text-6xl">
                  {t(serviziPage.heroTitle, nerd)}
                </h1>
                <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                  {t(serviziPage.heroSubtitle, nerd)}
                </p>
              </motion.div>
            </AnimatePresence>
            <Button
              size="lg"
              asChild
              className="mt-10 group rounded-full bg-primary px-8 py-6 text-base font-light text-primary-foreground transition-all hover:shadow-glow"
            >
              <Link to="/contattaci">
                Raccontaci il progetto
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto grid max-w-6xl gap-8 md:grid-cols-1"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {serviziCards.map((card, index) => {
              const Icon = icons[index] ?? Globe;
              return (
                <motion.article
                  key={card.id}
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                  className="group rounded-3xl border border-border/20 bg-card/10 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/35 hover:shadow-[0_24px_60px_-28px_hsl(var(--primary)/0.12)] md:p-10"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="min-w-0 flex-1 space-y-3">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${card.id}-${nerd}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h2 className="text-2xl font-light text-primary md:text-3xl">{t(card.title, nerd)}</h2>
                          <p className="mt-2 font-light leading-relaxed text-foreground/80">{t(card.desc, nerd)}</p>
                        </motion.div>
                      </AnimatePresence>
                      {nerd && <StackChips items={card.stack} />}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-background to-card/20 py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="mx-auto mb-6 max-w-xl text-sm font-light text-muted-foreground">
            Non trovate la voce giusta? Uniamo più ambiti nello stesso progetto.
          </p>
          <Button size="lg" variant="outline" asChild className="rounded-full px-8 font-light">
            <Link to="/contattaci">Scrivici</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servizi;
