import { useState } from "react";

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

  // Posizioni sparse per le bolle (in percentuali)
  const positions = [
    { top: '10%', left: '15%' },
    { top: '5%', left: '45%' },
    { top: '15%', left: '75%' },
    { top: '35%', left: '10%' },
    { top: '30%', left: '55%' },
    { top: '40%', left: '85%' },
    { top: '55%', left: '25%' },
    { top: '60%', left: '65%' },
    { top: '50%', left: '40%' },
    { top: '75%', left: '15%' },
    { top: '80%', left: '50%' },
    { top: '70%', left: '80%' },
    { top: '25%', left: '35%' },
    { top: '45%', left: '70%' },
    { top: '85%', left: '70%' },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center glow-text">
          Tecnologie
        </h2>

        <div className="max-w-6xl mx-auto relative" style={{ minHeight: '800px' }}>
          {technologies.map((tech, index) => {
            const isExpanded = expandedTech === tech.name;
            const position = positions[index] || { top: '50%', left: '50%' };
            
            return (
              <button
                key={index}
                onClick={() => setExpandedTech(isExpanded ? null : tech.name)}
                className={`glass absolute group cursor-pointer
                  transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${isExpanded 
                    ? 'rounded-3xl shadow-glow z-20 w-80 h-auto p-6' 
                    : 'rounded-full w-36 h-36 hover-glow'}`}
                style={{ 
                  top: position.top,
                  left: position.left,
                  transform: 'translate(-50%, -50%)',
                  animation: `float ${3 + index * 0.3}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className={`flex items-center justify-center transition-all duration-500
                  ${isExpanded ? 'flex-col items-start h-auto' : 'h-full'}`}>
                  <span className={`font-light transition-all duration-300
                    ${isExpanded ? 'text-xl text-primary mb-3 text-left w-full' : 'text-base text-foreground/90 group-hover:text-primary text-center'}`}>
                    {tech.name}
                  </span>
                  <div 
                    className={`overflow-hidden transition-all duration-500
                      ${isExpanded ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-sm text-muted-foreground font-light leading-relaxed text-left">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}

          <p className="text-center text-muted-foreground mt-12 text-lg font-light absolute bottom-0 left-0 right-0">
            E molte altre tecnologie all'avanguardia per creare soluzioni su misura
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
