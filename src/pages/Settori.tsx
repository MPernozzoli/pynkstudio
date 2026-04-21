import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Briefcase, Factory, Landmark, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNerdMode } from "@/contexts/NerdModeContext";
import { settoriCards, settoriPage, t } from "@/lib/copy";
import StackChips from "@/components/StackChips";

const icons = [ShoppingBag, Briefcase, Factory, Landmark, Building2] as const;

const Settori = () => {
  const { nerd } = useNerdMode();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <PageSEO
        title="Settori — PYNK STUDIO"
        description="E-commerce, servizi professionali, industria, cultura e turismo, PA. Sviluppo software su misura."
        path="/settori"
      />
      <Navbar />

      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute h-[400px] w-[400px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
              bottom: "20%",
              left: "10%",
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
                  {t(settoriPage.heroTitle, nerd)}
                </h1>
                <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                  {t(settoriPage.heroSubtitle, nerd)}
                </p>
              </motion.div>
            </AnimatePresence>
            <Button
              size="lg"
              asChild
              className="mt-8 group rounded-full bg-primary px-8 py-6 text-base font-light text-primary-foreground"
            >
              <Link to="/servizi">
                Vedi i servizi
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {settoriCards.map((card, index) => {
              const Icon = icons[index] ?? Building2;
              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-3xl border border-border/20 bg-card/10 p-8 backdrop-blur-sm transition-colors hover:border-primary/25"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md shadow-primary/15">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div key={`${card.id}-${nerd}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                      <h2 className="text-xl font-light text-foreground md:text-2xl">{t(card.title, nerd)}</h2>
                      <p className="mt-3 font-light leading-relaxed text-foreground/75">{t(card.desc, nerd)}</p>
                    </motion.div>
                  </AnimatePresence>
                  {nerd && <StackChips items={card.stack} />}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto px-6 text-center">
          <Button size="lg" asChild className="group rounded-full bg-primary px-10 py-7 text-lg font-light text-primary-foreground">
            <Link to="/contattaci">
              Progetto in uno di questi settori?
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Settori;
