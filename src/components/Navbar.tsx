import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import pynkLogo from "@/assets/pynk-logo-transparent.png";
import MagneticText from "@/components/MagneticText";
import ThemeToggle from "@/components/ThemeToggle";
import NerdToggle from "@/components/NerdToggle";

const navLinks = [
  { label: "Servizi", to: "/servizi" },
  { label: "Settori", to: "/settori" },
  { label: "Consulenza", to: "/consulenza" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <img src={pynkLogo} alt="Pynk Studio" className="h-8 w-auto" />
          <MagneticText text="PYNK STUDIO" className="text-lg font-light tracking-wide text-foreground" />
        </Link>

        {!isMobile && (
          <div className="flex items-center gap-6 lg:gap-8">
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
            <NerdToggle />
            <ThemeToggle />
            <Link
              to="/contattaci"
              className="rounded-full bg-primary px-5 py-2 text-sm font-light text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-glow"
            >
              Contattaci
            </Link>
          </div>
        )}

        {isMobile && (
          <div className="flex items-center gap-1">
            <NerdToggle />
            <ThemeToggle />
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-foreground" aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}>
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className="glass animate-fade-in space-y-4 border-t border-border/30 px-6 py-6">
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
            className="mt-2 block w-full rounded-full bg-primary px-5 py-3 text-center text-sm font-light text-primary-foreground transition-all hover:bg-primary/90"
          >
            Contattaci
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
