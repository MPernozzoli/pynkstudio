import { MailX, HelpCircle, FileSpreadsheet, UserCog } from "lucide-react";

const problems = [
  {
    icon: MailX,
    text: "Ti perdi richieste via email",
  },
  {
    icon: HelpCircle,
    text: "Non sai chi ha risposto a cosa",
  },
  {
    icon: FileSpreadsheet,
    text: "Hai dati sparsi tra fogli Excel e WhatsApp",
  },
  {
    icon: UserCog,
    text: "Dipende tutto da te",
  },
];

const About = () => {
  return (
    <section className="py-32 relative bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light mb-16 text-center text-foreground">
            Se anche tu…
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 flex items-start gap-5 hover-glow border-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-foreground/90 font-light leading-relaxed">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl text-muted-foreground font-light mt-12">
            Allora possiamo aiutarti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
