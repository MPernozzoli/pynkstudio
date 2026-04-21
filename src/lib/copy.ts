/** Testi doppi: linguaggio semplice vs dettaglio tecnico (Nerd mode) */

export type Dual = { plain: string; nerd: string };

export function t(d: Dual, nerd: boolean): string {
  return nerd ? d.nerd : d.plain;
}

export const homeHero = {
  title: {
    plain: "Software house italiana. Siti, app e strumenti su misura.",
    nerd: "Full-stack studio · TypeScript-first · ship to prod.",
  },
  subtitle: {
    plain:
      "Progettiamo e realizziamo prodotti digitali chiari e affidabili: dal sito vetrina alla web app, dalle app mobile alle applicazioni desktop. Parliamo la vostra lingua, non solo quella del codice.",
    nerd:
      "Next.js / React, API REST e GraphQL, Postgres (Supabase), SwiftUI & Kotlin, Electron/Tauri dove serve. CI/CD, osservabilità e accessibilità come default, non optional.",
  },
};

export const homeDevPillars = [
  {
    id: "web",
    title: { plain: "Siti e web app", nerd: "Web & product engineering" },
    desc: {
      plain:
        "Landing, e-commerce, portali e gestionali che il team usa davvero: veloci, ordinati, facili da aggiornare.",
      nerd:
        "Next.js App Router, RSC dove utile, Tailwind, shadcn/ui, CMS headless (Sanity/Payload), Vercel/edge, SEO tecnico e Core Web Vitals.",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Vercel"],
  },
  {
    id: "mobile",
    title: { plain: "App iOS e Android", nerd: "Mobile · native & cross" },
    desc: {
      plain:
        "App per clienti e collaboratori: notifiche, offline, integrazione con i vostri sistemi.",
      nerd:
        "SwiftUI/UIKit per iOS, Kotlin/Jetpack su Android, React Native/Expo per MVP cross-platform, push, keychain, deep linking, store release.",
    },
    stack: ["Swift", "SwiftUI", "Kotlin", "React Native", "Expo"],
  },
  {
    id: "desktop",
    title: { plain: "Applicazioni desktop", nerd: "Desktop & tooling" },
    desc: {
      plain:
        "Programmi su misura per ufficio, produzione o amministrazione, anche quando il browser non basta.",
      nerd:
        "macOS nativo (Swift/AppKit), Electron o Tauri per Windows/macOS/Linux, integrazione file system, auto-update, firma notarizzazione Apple.",
    },
    stack: ["Swift", "AppKit", "Electron", "Tauri", "Rust"],
  },
] as const;

export const homeCrossSkills = [
  {
    id: "ai",
    title: { plain: "AI e automazioni", nerd: "LLM · RAG · automazione" },
    desc: {
      plain:
        "Assistenti sui vostri documenti, integrazioni tra strumenti, meno lavoro ripetitivo.",
      nerd:
        "OpenAI/Anthropic APIs, modelli open-weight su Hugging Face, RAG con pgvector, LangChain/LlamaIndex light, queue workers, webhooks.",
    },
    stack: ["OpenAI", "pgvector", "Python", "Node.js", "webhooks"],
  },
  {
    id: "ux",
    title: { plain: "UX e design", nerd: "Design systems & a11y" },
    desc: {
      plain:
        "Interfacce coerenti, accessibili, pensate per chi deve usarle ogni giorno.",
      nerd:
        "Figma → component library, design tokens, WCAG 2.2 AA, focus management, test utente iterativi.",
    },
    stack: ["Figma", "WCAG", "Radix", "Storybook"],
  },
  {
    id: "data",
    title: { plain: "Dati e mappe", nerd: "GIS · analytics" },
    desc: {
      plain:
        "Dashboard, report e mappe interattive per decidere con numeri sotto mano.",
      nerd:
        "PostGIS, Mapbox/Leaflet, ETL leggeri, charting (Recharts/Tremor), export CSV/Parquet.",
    },
    stack: ["PostGIS", "Mapbox", "PostgreSQL", "React"],
  },
  {
    id: "integrazioni",
    title: { plain: "Integrazioni", nerd: "API & event-driven" },
    desc: {
      plain:
        "Colleghiamo CRM, gestionale, pagamenti e strumenti che già usate.",
      nerd:
        "REST/GraphQL, OAuth2, Stripe, Zapier/Make fallback, idempotency, retry/backoff, OpenAPI.",
    },
    stack: ["REST", "GraphQL", "Stripe", "OAuth2", "webhooks"],
  },
] as const;

export const homeSectorsStrip = {
  title: {
    plain: "Settori in cui lavoriamo",
    nerd: "Verticali & integrazioni tipiche",
  },
  subtitle: {
    plain: "Dal commercio ai servizi professionali, dalla cultura all’industria.",
    nerd: "Pattern ripetibili: auth, ruoli, fatturazione, logistica, contenuti multilingua.",
  },
};

export const homeConsulting = {
  title: {
    plain: "Consulenza operativa per PMI",
    nerd: "Ops consulting (secondario)",
  },
  desc: {
    plain:
      "Oltre allo sviluppo, affianchiamo piccole e medie imprese a mettere ordine in processi e responsabilità — ad esempio con un check-up operativo in 7 giorni.",
    nerd:
      "Discovery operativo, workflow mapping, RACI, handoff verso software interno o commissionato. Non sostituisce legal/HR.",
  },
};

export const serviziPage = {
  heroTitle: {
    plain: "Cosa costruiamo",
    nerd: "Service catalog · engineering",
  },
  heroSubtitle: {
    plain:
      "Dal sito che racconta la vostra attività agli strumenti che fanno funzionare l’azienda ogni giorno.",
    nerd:
      "Stack dichiarato per trasparenza. Ogni progetto ha architettura, repository, ambienti e handover documentato.",
  },
} as const;

export const serviziCards = [
  {
    id: "siti",
    title: { plain: "Siti web e landing", nerd: "Marketing sites & landing" },
    desc: {
      plain:
        "Siti veloci, curati nei testi e nelle immagini, pronti per Google e per i social. Facili da aggiornare quando cambiate offerta.",
      nerd:
        "Next.js 15, ISR/SSG, MDX, sitemap/robots, JSON-LD, OG images dinamiche, CMS headless, analytics privacy-first (Plausible/PostHog).",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Sanity", "Vercel"],
  },
  {
    id: "webapp",
    title: { plain: "Web app e gestionali", nerd: "B2B web apps & admin" },
    desc: {
      plain:
        "Portali per clienti, back-office, approvazioni e flussi su misura: tutto nel browser, con accessi sicuri.",
      nerd:
        "React SPA o Next full-stack, TanStack Query, Zod, Supabase Auth/RLS o custom JWT, file upload (S3-compatible), audit log.",
    },
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Zod"],
  },
  {
    id: "mobile",
    title: { plain: "App mobile", nerd: "iOS · Android" },
    desc: {
      plain:
        "App per i vostri utenti o per il team sul campo: notifiche, login sicuro, aggiornamenti dallo store.",
      nerd:
        "SwiftUI + TCA o MVVM, Kotlin Compose, RN/Expo per time-to-market; push APNs/FCM, deep links, biometric auth.",
    },
    stack: ["SwiftUI", "Kotlin", "React Native", "Expo"],
  },
  {
    id: "desktop",
    title: { plain: "Applicazioni desktop", nerd: "Desktop clients" },
    desc: {
      plain:
        "Programmi per Windows e Mac quando servono stampanti, file locali o lavoro senza connessione stabile.",
      nerd:
        "macOS Swift/AppKit, cross-platform Electron/Tauri; auto-update (Sparkle/electron-updater), code signing, crash reporting.",
    },
    stack: ["Swift", "Electron", "Tauri", "Rust"],
  },
  {
    id: "ai",
    title: { plain: "Automazioni e AI", nerd: "Automation · LLM" },
    desc: {
      plain:
        "Collegiamo gli strumenti che già usate e, dove ha senso, aggiungiamo assistenti sui vostri documenti.",
      nerd:
        "Node/Python workers, queue (BullMQ), OpenAI/Anthropic, RAG su pgvector, function calling, valutazione offline delle risposte.",
    },
    stack: ["Node.js", "Python", "OpenAI", "pgvector", "Redis"],
  },
] as const;

export const settoriPage = {
  heroTitle: {
    plain: "Settori e contesti",
    nerd: "Industries · solution patterns",
  },
  heroSubtitle: {
    plain:
      "Stesso rigore tecnico, linguaggio adattato al vostro mercato. Esempi generici, senza nomi cliente.",
    nerd:
      "Blueprint riusabili: auth multi-ruolo, cataloghi, prenotazioni, documentale, integrazioni ERP leggere.",
  },
} as const;

export const settoriCards = [
  {
    id: "ecommerce",
    title: { plain: "E-commerce e retail", nerd: "Commerce stack" },
    desc: {
      plain:
        "Negozi online, cataloghi ricchi, pagamenti e spedizioni collegati ai vostri processi.",
      nerd:
        "Shopify Hydrogen/Custom storefront, Stripe Connect/SCA, inventory sync, Algolia search, webhooks ordine → WMS/ERP.",
    },
    stack: ["Shopify", "Stripe", "Next.js", "Algolia"],
  },
  {
    id: "professionisti",
    title: { plain: "Servizi professionali", nerd: "Professional services" },
    desc: {
      plain:
        "Studi legali, consulenza, formazione: siti credibili, aree riservate clienti e gestione pratiche.",
      nerd:
        "Portali con RBAC, document versioning, firma elettronica via provider, logging accessi, export PDF/A.",
    },
    stack: ["Next.js", "Supabase", "RBAC", "PDF"],
  },
  {
    id: "industria",
    title: { plain: "PMI e industria", nerd: "SMB / manufacturing" },
    desc: {
      plain:
        "Strumenti interni per produzione, qualità, commesse e magazzino — meno Excel disperso.",
      nerd:
        "CRUD app + reporting, barcode/mobile web, integrazione CSV/API verso gestionale, job schedulati, backup.",
    },
    stack: ["React", "PostgreSQL", "cron", "REST"],
  },
  {
    id: "cultura",
    title: { plain: "Cultura e turismo", nerd: "Culture & tourism" },
    desc: {
      plain:
        "Siti multilingua, calendari eventi, prenotazioni e contenuti multimediali.",
      nerd:
        "i18n routing, CDN media, mappe interattive, caching edge, form rate-limit, integrazione booking provider.",
    },
    stack: ["Next.js", "i18n", "Mapbox", "CDN"],
  },
  {
    id: "pa",
    title: { plain: "PA e associazioni", nerd: "Public sector / NPO" },
    desc: {
      plain:
        "Comunicazione chiara, modulistica, aree riservate volontari o soci.",
      nerd:
        "Accessibilità AA, cookie policy, hosting UE, ruoli granulari, audit trail, export dati su richiesta.",
    },
    stack: ["WCAG", "EU hosting", "audit log", "RBAC"],
  },
] as const;
