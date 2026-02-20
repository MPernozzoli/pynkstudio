import { motion } from "framer-motion";
import { Copy, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContattoRapido = () => {
  const [copied, setCopied] = useState(false);
  const email = "info@pynkstudio.it";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contatto" className="py-28 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
          Scrivici, ti rispondiamo <span className="text-primary">in giornata.</span>
        </h2>

        {/* Email + copy */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-xl md:text-2xl font-light text-foreground/90 tracking-wide">
            {email}
          </span>
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg border border-border/30 bg-card/20 hover:bg-card/40 hover:border-primary/40 transition-all duration-300"
            aria-label="Copia email"
          >
            {copied ? (
              <Check className="w-5 h-5 text-primary" />
            ) : (
              <Copy className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
        </div>

        <p className="text-muted-foreground font-light max-w-lg mx-auto mb-10 leading-relaxed">
          Nella mail, dicci:<br />
          <span className="text-foreground/80">settore</span> + <span className="text-foreground/80">problema</span> + <span className="text-foreground/80">strumenti che usi</span> (es. Excel, Gmail, gestionale).
          <br />
          Così rispondiamo con qualcosa di utile, non con un messaggio generico.
        </p>

        <Button
          size="lg"
          asChild
          className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(330_80%_60%/0.4)] hover:scale-105"
        >
          <a href={`mailto:${email}?subject=Richiesta%20informazioni&body=Ciao%2C%20vi%20scrivo%20perch%C3%A9...%0A%0ASettore%3A%20%0AProblema%3A%20%0AStrumenti%20che%20uso%3A%20`}>
            Scrivi una mail
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default ContattoRapido;
