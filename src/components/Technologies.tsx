import { useState } from "react";
import { ChevronDown } from "lucide-react";

const technologies = [
  {
    name: "Swift",
    description: "Linguaggio moderno di Apple per sviluppo iOS e macOS, potente e sicuro per app native ad alte prestazioni."
  },
  {
    name: "SwiftUI",
    description: "Framework dichiarativo Apple per creare interfacce utente intuitive e reattive su tutte le piattaforme."
  },
  {
    name: "Node.js",
    description: "Runtime JavaScript per backend scalabili, perfetto per API REST, microservizi e applicazioni real-time."
  },
  {
    name: "Supabase",
    description: "Piattaforma open-source per backend as a service con database PostgreSQL, autenticazione e storage integrati."
  },
  {
    name: "Unreal Engine",
    description: "Motore grafico di Epic Games per videogiochi AAA ed esperienze immersive con grafica fotorealistica."
  },
  {
    name: "Blender",
    description: "Suite completa open-source per modellazione 3D, animazione, rendering e VFX di livello professionale."
  },
  {
    name: "QGIS",
    description: "Sistema informativo geografico open-source per analisi, visualizzazione e gestione di dati spaziali complessi."
  },
  {
    name: "ArcGIS",
    description: "Piattaforma GIS professionale di Esri per mapping avanzato, analisi spaziale e gestione dati geospaziali."
  },
  {
    name: "React",
    description: "Libreria JavaScript di Meta per costruire interfacce utente moderne, componibili e ad alte prestazioni."
  },
  {
    name: "TypeScript",
    description: "Superset di JavaScript con tipizzazione statica per codice più robusto, manutenibile e scalabile."
  },
  {
    name: "PostgreSQL",
    description: "Database relazionale open-source avanzato con supporto JSON, GIS e performance eccezionali."
  },
  {
    name: "Leaflet",
    description: "Libreria JavaScript leggera e potente per mappe interattive web-friendly e mobile-responsive."
  },
  {
    name: "UIKit",
    description: "Framework iOS di Apple per costruire interfacce utente native con controllo granulare e personalizzazione avanzata."
  },
  {
    name: "Xcode",
    description: "IDE completo di Apple per sviluppo iOS/macOS con debugging avanzato, profiling e simulatori integrati."
  },
  {
    name: "Git",
    description: "Sistema di controllo versione distribuito per tracciare modifiche, collaborare e gestire codice in team."
  }
];

const Technologies = () => {
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center glow-text">
          Tecnologie
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <button
                key={index}
                onClick={() => setExpandedTech(expandedTech === tech.name ? null : tech.name)}
                className="glass rounded-2xl px-6 py-4 hover-glow group cursor-pointer transition-all text-left"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg font-light text-foreground/90 group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-muted-foreground transition-transform ${
                      expandedTech === tech.name ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {expandedTech === tech.name && (
                  <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">
                    {tech.description}
                  </p>
                )}
              </button>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 text-lg font-light">
            E molte altre tecnologie all'avanguardia per creare soluzioni su misura
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
