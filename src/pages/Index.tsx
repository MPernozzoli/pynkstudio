import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import HeroHome from "@/components/home/HeroHome";
import ProblemiTipici from "@/components/home/ProblemiTipici";
import PacchettiServizi from "@/components/home/PacchettiServizi";
import CaseStudies from "@/components/home/CaseStudies";
import ComeLavoriamoHome from "@/components/home/ComeLavoriamoHome";
import ContattoRapido from "@/components/home/ContattoRapido";
import TuttiIServizi from "@/components/home/TuttiIServizi";
import { motion } from "framer-motion";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById("contatto")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExamples = () => {
    document.getElementById("esempi")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="PYNK STUDIO — Software e automazioni per PMI italiane"
        description="Sistemiamo processi, email e richieste clienti della tua azienda. Meno caos, meno errori, più controllo. Ti rispondiamo in giornata."
        path="/"
      />
      <Navbar />

      <HeroHome onContactClick={scrollToContact} onExamplesClick={scrollToExamples} />

      <ProblemiTipici />

      {/* Tech marquee divider */}
      <div className="overflow-hidden py-8 border-y border-border/20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-12 items-center">
              {["Swift", "React", "Node.js", "Unreal Engine", "Blender", "QGIS", "TypeScript", "Supabase", "Figma", "PostgreSQL", "SwiftUI", "Python"].map((tech) => (
                <span key={`${setIdx}-${tech}`} className="text-2xl md:text-3xl font-extralight text-muted-foreground/20 tracking-wide">
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <PacchettiServizi />

      <CaseStudies />

      <ComeLavoriamoHome />

      <ContattoRapido />

      {/* All services (for those who want to dig deeper) */}
      <TuttiIServizi />

      <Footer />
    </div>
  );
};

export default Index;
