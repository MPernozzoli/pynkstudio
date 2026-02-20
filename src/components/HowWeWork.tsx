import { Search, Lightbulb, Wrench } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Analisi del caos attuale",
    description:
      "Capiamo come lavori oggi: dove perdi tempo, dove si perdono le informazioni, cosa dipende solo da te.",
  },
  {
    icon: Lightbulb,
    number: "2",
    title: "Proposta concreta e semplice",
    description:
      "Ti presentiamo una soluzione chiara, senza stravolgere ciò che già funziona. Niente progetti faraonici.",
  },
  {
    icon: Wrench,
    number: "3",
    title: "Implementazione senza stravolgere",
    description:
      "Mettiamo in piedi il sistema lavorando con gli strumenti che già usi. Tu continui a lavorare, noi sistemiamo.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-32 relative bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center text-foreground">
          Come lavoriamo
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 md:p-10 flex items-start gap-6 md:gap-8 hover-glow border-primary/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                <span className="text-xl font-light text-primary-foreground">{step.number}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-light text-primary">
                  {step.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed font-light text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
