import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/data/portfolio";
import PortfolioCard from "@/components/PortfolioCard";

const Lavori = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <PageSEO
        title="Lavori e referenze — PYNK STUDIO"
        description="Selezione di progetti web, mobile, tool e titoli real-time 3D sviluppati dal team. Link solo dove il deploy è verificato."
        path="/lavori"
      />
      <Navbar />

      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden pt-24 pb-12">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute right-[10%] top-[20%] h-[420px] w-[420px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
          />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-sm font-light tracking-wide text-muted-foreground"
          >
            Referenze operative
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl font-light tracking-tight text-foreground md:text-6xl"
          >
            Lavori e <span className="text-primary">progetti</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground"
          >
            Estratti dal nostro workspace (siti, tool, mobile, Unreal/Godot). I link esterni compaiono solo dopo verifica HTTP: niente URL “morti”.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-8">
            <Button asChild variant="outline" className="rounded-full font-light">
              <Link to="/contattaci">
                Raccontaci il prossimo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lavori;
