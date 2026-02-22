import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import TestFlight from "@/components/TestFlight";
import { motion } from "framer-motion";

const AltriProgetti = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageSEO
        title="Altri progetti — PYNK STUDIO"
        description="Videogiochi, progetti sperimentali e beta test. Esplora i progetti laterali di PYNK STUDIO."
        path="/altri-progetti"
      />
      <Navbar />

      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-light text-foreground">
              Altri <span className="text-primary">progetti</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Videogiochi, esperimenti e progetti paralleli. Non fanno parte del nostro core, ma ci piacciono.
            </p>
          </motion.div>
        </div>
      </section>

      <TestFlight />

      <Footer />
    </div>
  );
};

export default AltriProgetti;
