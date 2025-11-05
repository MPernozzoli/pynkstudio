const About = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-center glow-text">
            Chi Siamo
          </h2>
          
          <div className="glass rounded-3xl p-8 md:p-12 space-y-6 hover-glow">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
              PynkStudio è un team indipendente di sviluppatori e designer che unisce 
              competenze in <span className="text-primary font-normal">ingegneria del software</span>, 
              <span className="text-secondary font-normal"> arti digitali</span> e 
              <span className="text-accent font-normal"> storytelling interattivo</span>.
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
