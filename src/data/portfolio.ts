/** Progetti da workspace locale; `href` solo se verificato (HTTP 200). */

export type PortfolioKind = "web" | "game" | "tool" | "mobile";

export type PortfolioItem = {
  id: string;
  title: string;
  kind: PortfolioKind;
  descriptionPlain: string;
  descriptionNerd: string;
  stack: readonly string[];
  /** URL pubblico verificato; assente se non deployato o non verificato */
  href?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "pynkstudio",
    title: "PYNK STUDIO",
    kind: "web",
    descriptionPlain: "Sito istituzionale multi-pagina, consulenza e contatti con email transazionali.",
    descriptionNerd: "Vite, React 18, React Router, shadcn/ui, Supabase Functions per mail, Helmet/JSON-LD.",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Supabase"],
    href: "https://pynkstudio.it",
  },
  {
    id: "nautic-planner",
    title: "Nautic Planner",
    kind: "web",
    descriptionPlain: "Pianificazione nautica: imbarcazioni, tratte, equipaggio e checklist di sicurezza.",
    descriptionNerd: "SPA Vite + shadcn/Radix, form complessi e stato lato client.",
    stack: ["React", "Vite", "TypeScript", "Tailwind", "Zod"],
  },
  {
    id: "claim-connect",
    title: "Claim Connect",
    kind: "web",
    descriptionPlain: "Area assicurato per gestione pratiche sinistri e comunicazioni strutturate.",
    descriptionNerd: "React SPA, flussi guidati, integrazioni dati tipiche del dominio claims.",
    stack: ["React", "Vite", "TypeScript"],
  },
  {
    id: "catdispatcher",
    title: "CAT Dispatcher",
    kind: "web",
    descriptionPlain: "Consultazione e gestione territoriale CAT per comuni e quartieri.",
    descriptionNerd: "Vite, Supabase client, mappe e dati territoriali.",
    stack: ["React", "Vite", "Supabase", "TypeScript"],
  },
  {
    id: "sailingpantry-app",
    title: "SailingPantry",
    kind: "web",
    descriptionPlain: "Applicazione web per organizzazione provisioning e pantry in barca.",
    descriptionNerd: "React Router 7, Firebase, Zustand per stato reattivo.",
    stack: ["React", "Vite", "Firebase", "Zustand"],
  },
  {
    id: "errante",
    title: "Errante",
    kind: "web",
    descriptionPlain: "Prodotto web Next.js con pagamenti, PDF e componenti motion.",
    descriptionNerd: "Next.js 14 App-ready, Stripe, @react-pdf/renderer, Framer Motion.",
    stack: ["Next.js", "React", "Stripe", "Tailwind", "Framer Motion"],
  },
  {
    id: "sparky-chat",
    title: "Sparky Chat",
    kind: "tool",
    descriptionPlain: "Interfaccia conversazionale e tooling interno PerX.",
    descriptionNerd: "Chat UI, integrazione provider LLM, pattern tool-calling lato client.",
    stack: ["React", "TypeScript"],
  },
  {
    id: "perx-fs-app",
    title: "PerX FS (Apple)",
    kind: "mobile",
    descriptionPlain: "App nativa per ecosistema Apple (gestione sinistri / field).",
    descriptionNerd: "Swift, SwiftUI, integrazione backend e sicurezza piattaforma.",
    stack: ["Swift", "SwiftUI", "Xcode"],
  },
  {
    id: "what-the-duck",
    title: "What The Duck",
    kind: "game",
    descriptionPlain: "Titolo Unreal Engine: gameplay 3D e iterazione su blueprint/C++.",
    descriptionNerd: "Unreal Engine, .uproject, pipeline asset e build desktop.",
    stack: ["Unreal Engine", "Blueprints", "C++"],
  },
  {
    id: "stackobot",
    title: "StackOBot",
    kind: "game",
    descriptionPlain: "Progetto template/formazione Unreal con focus su AI agent e stack.",
    descriptionNerd: "UE5 sample, navigazione agente, integrazione moduli gameplay.",
    stack: ["Unreal Engine", "UE5"],
  },
  {
    id: "rts",
    title: "RTS",
    kind: "game",
    descriptionPlain: "Strategia in tempo reale: unità, economia e loop di gioco in Unreal.",
    descriptionNerd: "RTS architecture in UE, performance e LOD.",
    stack: ["Unreal Engine", "C++"],
  },
  {
    id: "godots-journey",
    title: "Godot’s Journey",
    kind: "game",
    descriptionPlain: "Percorso di apprendimento / prototipo in Godot 4.",
    descriptionNerd: "Godot 4, GDScript, scene e resource pipeline.",
    stack: ["Godot", "GDScript"],
  },
  {
    id: "tower-defendant",
    title: "Tower Defendant",
    kind: "game",
    descriptionPlain: "Tower defense in Unreal: onde, torri e bilanciamento.",
    descriptionNerd: "Gameplay framework UE, UI e loop onda.",
    stack: ["Unreal Engine"],
  },
];

/** In evidenza sulla home (anteprima) */
export const portfolioPreviewIds = ["pynkstudio", "nautic-planner", "errante"] as const;

export function getPortfolioPreview(): PortfolioItem[] {
  const order = [...portfolioPreviewIds];
  return order
    .map((id) => portfolioItems.find((p) => p.id === id))
    .filter((p): p is PortfolioItem => p != null);
}
