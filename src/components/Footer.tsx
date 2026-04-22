import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-border/20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground/70 font-light">
            <Link to="/servizi" className="hover:text-primary transition-colors">Servizi</Link>
            <Link to="/settori" className="hover:text-primary transition-colors">Settori</Link>
            <Link to="/lavori" className="hover:text-primary transition-colors">Lavori</Link>
            <Link to="/consulenza" className="hover:text-primary transition-colors">Consulenza</Link>
            <Link to="/contattaci" className="hover:text-primary transition-colors">Contattaci</Link>
            <Link to="/altri-progetti" className="hover:text-primary transition-colors">Altri progetti</Link>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground/50 font-light">
            <span>© {new Date().getFullYear()} <span className="text-primary/70">PYNK STUDIO</span></span>
            <span>·</span>
            <span>P.IVA 13577530960</span>
            <span>·</span>
            <a href="https://www.linkedin.com/company/pynkstudio" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.instagram.com/pynkstudios" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
