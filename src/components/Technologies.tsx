const technologies = [
  "Swift",
  "SwiftUI",
  "Node.js",
  "Supabase",
  "Unreal Engine",
  "Blender",
  "QGIS",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Leaflet",
  "UIKit",
  "Xcode",
  "Git"
];

const Technologies = () => {
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
              <div
                key={index}
                className="glass rounded-2xl px-6 py-4 hover-glow group cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-lg font-light text-foreground/90 group-hover:text-primary transition-colors">
                  {tech}
                </span>
              </div>
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
