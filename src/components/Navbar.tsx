import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import pynkLogo from "@/assets/pynk-logo-transparent.png";
import MagneticText from "@/components/MagneticText";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Check-up Operativo", to: "/checkup-operativo" },
  { label: "Per le aziende", to: "/per-le-aziende" },
  { label: "Metodo", to: "/metodo" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <img src={pynkLogo} alt="Pynk Studio" className="h-8 w-auto" />
          <MagneticText text="PYNK STUDIO" className="text-lg font-light text-foreground tracking-wide" />
        </Link>

        {!isMobile && (
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-light transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              to="/contattaci"
              className="text-sm font-light text-primary-foreground bg-primary hover:bg-primary/90 px-5 py-2 rounded-full transition-all hover:shadow-glow"
            >
              Contattaci
            </Link>
          </div>
        )}

        {isMobile && (
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground p-2">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className="glass border-t border-border/30 px-6 py-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block text-lg font-light transition-colors ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contattaci"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center text-sm font-light text-primary-foreground bg-primary hover:bg-primary/90 px-5 py-3 rounded-full transition-all mt-2"
          >
            Contattaci
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
