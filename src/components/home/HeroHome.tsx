import { ArrowRight, Clock, ShieldCheck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const results = [
  { icon: Clock, text: "−30% tempo su attività ripetitive" },
  { icon: ShieldCheck, text: "Zero richieste perse" },
  { icon: BarChart3, text: "Report chiari, sempre aggiornati" },
];

interface HeroHomeProps {
  onContactClick: () => void;
  onExamplesClick: () => void;
}

const HeroHome = ({ onContactClick, onExamplesClick }: HeroHomeProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: "hsl(330 80% 60%)", top: "10%", left: "20%" }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{ background: "hsl(330 80% 80%)", bottom: "10%", right: "15%" }}
          animate={{ x: [0, -30, 20, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(330 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(330 80% 60%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-light tracking-widest uppercase">
              Code · Create · Sync
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1]"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {["Software", "e", "automazioni", "che", "ti"].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  variants={{
                    hidden: { y: 80, opacity: 0, rotateX: 40 },
                    visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {["fanno", "risparmiare"].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em] text-primary"
                  variants={{
                    hidden: { y: 80, opacity: 0, rotateX: 40 },
                    visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
              {["tempo"].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em] text-primary"
                  variants={{
                    hidden: { y: 80, opacity: 0, rotateX: 40 },
                    visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {["ogni", "settimana."].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  variants={{
                    hidden: { y: 80, opacity: 0, rotateX: 40 },
                    visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
          >
            Sistemiamo processi, email e richieste clienti:
            <br className="hidden md:block" />
            meno caos, meno errori, più controllo.
          </motion.p>

          {/* Result bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {results.map((r, i) => (
              <div key={i} className="flex items-center gap-2 text-sm md:text-base text-foreground/80">
                <r.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-light">{r.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              size="lg"
              onClick={onContactClick}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full font-light tracking-wide transition-all duration-500 hover:shadow-[0_0_60px_hsl(330_80%_60%/0.4)] hover:scale-105"
            >
              Scrivici (ti rispondiamo in giornata)
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onExamplesClick}
              className="text-lg px-10 py-7 rounded-full font-light tracking-wide border-border/50 hover:border-primary/50 hover:bg-card/30 transition-all duration-500"
            >
              Guarda esempi di lavori
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="pt-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroHome;
