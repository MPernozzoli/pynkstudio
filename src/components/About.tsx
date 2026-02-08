const About = () => {
  return (
    <section className="py-32 relative bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light mb-12 text-center text-foreground">
            Chi Siamo
          </h2>
          
          <div className="glass rounded-3xl p-8 md:p-12 space-y-8 hover-glow border-primary/20">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
              PynkStudio è uno <span className="text-primary font-normal">studio creativo e tecnologico</span> che unisce 
              progettazione, design e sviluppo di prodotti digitali. 
              Un approccio <span className="text-primary/80 font-normal">elegante, contemporaneo e non urlato</span>, 
              posizionato tra un'estetica tech fredda e una creative esotica.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
              Con una forte specializzazione nell'ecosistema Apple, creiamo soluzioni software 
              eleganti e performanti che rispettano le Human Interface Guidelines e offrono 
              esperienze utente di altissima qualità.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
              Dalla progettazione all'implementazione, ogni nostro progetto riflette 
              l'attenzione al dettaglio e la passione per l'innovazione tecnologica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
