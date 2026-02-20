import { Inbox, Zap, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Inbox,
    title: "Organizziamo le richieste in arrivo",
    description:
      "Un unico posto dove raccogliere email, messaggi e richieste clienti. Niente più informazioni perse tra canali diversi.",
  },
  {
    icon: Zap,
    title: "Automatizziamo le attività ripetitive",
    description:
      "Le cose che fai ogni giorno sempre uguali — promemoria, smistamento, notifiche — le facciamo fare al sistema.",
  },
  {
    icon: BarChart3,
    title: "Ti diamo una visione chiara",
    description:
      "Sai sempre a che punto sono le cose: chi sta facendo cosa, cosa manca, cosa è stato completato.",
  },
];

const Solution = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center text-foreground">
          Cosa facciamo concretamente
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 space-y-6 hover-glow border-primary/10 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                <solution.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-xl md:text-2xl font-light text-primary">
                {solution.title}
              </h3>

              <p className="text-foreground/80 leading-relaxed font-light">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
