const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground font-light">
            © {new Date().getFullYear()} <span className="text-primary">PYNK STUDIO</span>. Tutti i diritti riservati.
          </p>
          <p className="text-sm text-muted-foreground/60 font-light">
            Made with passion in Italy 🇮🇹
          </p>
          <p className="text-xs text-muted-foreground/50 font-light">
            Questo sito non raccoglie cookie
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
