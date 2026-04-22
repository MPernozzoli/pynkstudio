import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AltriProgetti = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <PageSEO
        title="Altri progetti — PYNK STUDIO"
        description="Laboratorio, esperimenti e progetti paralleli. Le beta mobile su TestFlight sono nella pagina Lavori."
        path="/altri-progetti"
      />
      <Navbar />

      <section className="relative pb-16 pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl space-y-6 text-center"
          >
            <h1 className="text-4xl font-light text-foreground md:text-6xl">
              Altri <span className="text-primary">progetti</span>
            </h1>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Spazio per esperimenti e idee laterali. Le anteprime mobile su{" "}
              <strong className="font-medium text-foreground">TestFlight</strong> le trovi insieme al resto del portfolio nella pagina{" "}
              <Link to="/lavori" className="text-primary underline-offset-4 hover:underline">
                Lavori
              </Link>
              .
            </p>
            <Button asChild variant="outline" className="mt-4 rounded-full font-light">
              <Link to="/lavori">
                Vai a Lavori
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AltriProgetti;
