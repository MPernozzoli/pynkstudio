import { ExternalLink } from "lucide-react";
import ducksIcon from "@/assets/ducks-in-business-icon.png";
import toccaATe from "@/assets/tocca-a-te-icon.png";

const games = [
  {
    name: "Ducks in Business",
    icon: ducksIcon,
    link: "https://testflight.apple.com/join/2Myk6uNY",
    available: true,
  },
  {
    name: "Tocca a Te",
    icon: toccaATe,
    link: null,
    available: false,
  },
];

const TestFlight = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Prova i nostri nuovi giochi in anteprima
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Scarica le beta tramite TestFlight e aiutaci a migliorarle
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {games.map((game) => {
              const content = (
                <div
                  key={game.name}
                  className={`glass rounded-3xl p-6 flex flex-col items-center gap-4 w-64 border-primary/10 transition-all duration-300 ${
                    game.available
                      ? "hover-glow cursor-pointer hover:border-primary/40"
                      : "opacity-70"
                  }`}
                >
                  <img
                    src={game.icon}
                    alt={game.name}
                    className="w-28 h-28 rounded-[1.75rem] shadow-lg object-cover"
                  />
                  <span className="text-lg font-light text-foreground">
                    {game.name}
                  </span>
                  {game.available ? (
                    <span className="inline-flex items-center gap-1.5 text-sm text-primary font-normal">
                      <ExternalLink className="w-4 h-4" />
                      Prova su TestFlight
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground italic">
                      In arrivo
                    </span>
                  )}
                </div>
              );

              return game.available && game.link ? (
                <a
                  key={game.name}
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={game.name}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestFlight;
