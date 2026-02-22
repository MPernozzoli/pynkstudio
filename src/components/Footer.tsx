import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/checkup-operativo" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
              Check-up Operativo
            </Link>
            <Link to="/per-le-aziende" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
              Per le aziende
            </Link>
            <Link to="/metodo" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
              Metodo
            </Link>
            <Link to="/contattaci" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
              Contattaci
            </Link>
            <Link to="/altri-progetti" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
              Altri progetti
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/pynkstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/pynkstudios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center space-y-4">
          <p className="text-muted-foreground font-light">
            © {new Date().getFullYear()} <span className="text-primary">PYNK STUDIO</span>. Tutti i diritti riservati.
          </p>
          <p className="text-sm text-muted-foreground/60 font-light">
            P.IVA 13577530960 · Made with precision in Italy 🇮🇹
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground/50 font-light">
            <span>Questo sito non raccoglie cookie</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
