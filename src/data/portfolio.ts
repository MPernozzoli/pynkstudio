/** Progetti curati; `href` solo se verificato (HTTP 200 o link TestFlight Apple). */

export type PortfolioKind = "web" | "game" | "tool" | "mobile";

export type PortfolioCardImage = "ducks" | "tocca";

export type PortfolioItem = {
  id: string;
  title: string;
  kind: PortfolioKind;
  descriptionPlain: string;
  descriptionNerd: string;
  stack: readonly string[];
  href?: string;
  /** Icona app per card mobile (TestFlight) */
  cardImage?: PortfolioCardImage;
  /** Nota sotto la card quando non c’è href (es. work in progress) */
  statusNote?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "perx",
    title: "PerX",
    kind: "web",
    descriptionPlain:
      "Gestionale per studi peritali: pratiche di sinistro gestite in modo proattivo, con meno errori, meno contestazioni e tempi più corti — migliorando qualità del periziale e del processo.",
    descriptionNerd:
      "Web app dominio sinistri/perizie: workflow guidati, controlli incrociati, tracciamento stati, integrazioni verso portali e documentale. Focus su riduzione rework e tempi di ciclo.",
    stack: ["React", "TypeScript", "Web app", "Workflow"],
    href: "https://perx.it",
  },
  {
    id: "catdispatcher",
    title: "CAT Dispatcher",
    kind: "tool",
    descriptionPlain:
      "Strumento web per studi peritali: coordina sul territorio le attività CAT in modo strutturato e, dove possibile, automatizza assegnazioni e comunicazioni tra parti coinvolte.",
    descriptionNerd:
      "Mappa e dominio CAT: ruoli peritali, enti territoriali, priorità e stati. Supabase + React per dati in tempo reale, notifiche e viste operative per chi lavora sul campo.",
    stack: ["React", "Vite", "TypeScript", "Supabase", "Mappe"],
  },
  {
    id: "claim-connect",
    title: "Claim Connect",
    kind: "web",
    descriptionPlain:
      "Portale per l’assicurato: pratiche sinistro, documenti e messaggi in un flusso chiaro, senza perdere il filo tra email e allegati.",
    descriptionNerd:
      "SPA React, form e validazione lato client, API verso backend sinistri; modelli dati allineati al dominio claims e UX guidata.",
    stack: ["React", "Vite", "TypeScript"],
  },
  {
    id: "godots-journey",
    title: "Godot's Journey",
    kind: "game",
    descriptionPlain:
      "Gioco 3D in sviluppo su Godot: ambienti, personaggi e meccaniche in evoluzione; usciamo con link pubblico quando la build sarà pronta da condividere.",
    descriptionNerd:
      "Godot 4, pipeline 3D, GDScript, scene e risorse modulari; iterazione su camera, input e loop di gameplay.",
    stack: ["Godot 4", "GDScript", "3D"],
    statusNote: "In sviluppo — nessun link store al momento.",
  },
  {
    id: "ducks-in-business",
    title: "Ducks in Business",
    kind: "mobile",
    descriptionPlain:
      "Gioco mobile in beta su TestFlight: feedback in anteprima prima del rilascio sull’App Store.",
    descriptionNerd:
      "Build iOS via TestFlight, iterazione su UX touch, economia di gioco e sessioni corte.",
    stack: ["iOS", "Swift", "TestFlight"],
    href: "https://testflight.apple.com/join/2Myk6uNY",
    cardImage: "ducks",
  },
  {
    id: "tocca-a-te",
    title: "Tocca a Te",
    kind: "mobile",
    descriptionPlain:
      "Altro titolo mobile in anteprima su TestFlight: stessa filosofia — provare sul serio prima di pubblicare.",
    descriptionNerd:
      "Beta chiusa Apple TestFlight, raccolta crash/analytics, bilanciamento da sessioni reali.",
    stack: ["iOS", "TestFlight"],
    href: "https://testflight.apple.com/join/Q5uuDAGe",
    cardImage: "tocca",
  },
];

/** In evidenza sulla home (anteprima) */
export const portfolioPreviewIds = ["perx", "catdispatcher", "claim-connect"] as const;

export function getPortfolioPreview(): PortfolioItem[] {
  const order = [...portfolioPreviewIds];
  return order
    .map((id) => portfolioItems.find((p) => p.id === id))
    .filter((p): p is PortfolioItem => p != null);
}
