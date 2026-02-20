

# Ristrutturazione sito PynkStudio: multi-pagina con navigazione

## Panoramica

Il sito passa da single-page a multi-pagina con 3 aree principali + homepage nuova. Il form di contatto viene arricchito con telefono e motivo del contatto. La sezione TestFlight si sposta nella pagina "Per le idee".

---

## Struttura delle pagine

```text
/                    --> Homepage nuova (presentazione + 3 card verso le aree)
/per-le-aziende      --> Contenuto attuale (problema, soluzione, servizi business, come lavoriamo)
/per-le-idee         --> Validazione idee, sviluppo app/giochi, TestFlight
/per-le-persone      --> Siti personali/portfolio, consulenza individuale, formazione
```

Ogni pagina interna avrà in fondo il form di contatto aggiornato.

---

## 1. Navbar globale

Nuovo componente `Navbar.tsx` visibile su tutte le pagine:
- Logo PynkStudio a sinistra
- Link: Per le aziende, Per le idee, Per le persone, Contattaci
- Menu hamburger su mobile
- Sfondo glass con blur, sticky in alto

---

## 2. Homepage nuova (`/`)

- Hero minimale: titolo "Trasformiamo problemi in soluzioni. Per tutti." + sottotitolo
- 3 card grandi che rimandano alle 3 pagine:
  - **Per le aziende** -- "Mettiamo ordine nel lavoro quotidiano"
  - **Per le idee** -- "Dall'idea al prodotto, passo dopo passo"
  - **Per le persone** -- "Soluzioni su misura per te"
- CTA finale verso il contatto

---

## 3. Pagina "Per le aziende" (`/per-le-aziende`)

Riutilizza i componenti attuali con questa sequenza:
- Hero specifico aziende (titolo attuale "Mettiamo ordine...")
- Sezione problema ("Se anche tu...")
- Sezione soluzione ("Cosa facciamo concretamente")
- Servizi filtrati per aziende (Software su misura, AI, Automazione, Mappe, Identita visiva, Testi)
- Come lavoriamo (3 step)
- Form contatto

---

## 4. Pagina "Per le idee" (`/per-le-idee`)

- Hero: "Hai un'idea? Ti aiutiamo a farla diventare reale."
- Sezione percorso: validazione, prototipo, sviluppo, lancio
- Servizi: Sviluppo software, Videogiochi, Design, Contenuti
- Sezione TestFlight (i giochi in beta, spostata da homepage)
- Form contatto

---

## 5. Pagina "Per le persone" (`/per-le-persone`)

- Hero: "Soluzioni pensate per te, non per un'azienda."
- Sezioni servizi: Siti web personali/portfolio, Consulenza individuale, Formazione e coaching
- Form contatto

---

## 6. Form contatto aggiornato

Nuovi campi aggiunti al form attuale:
- **Telefono** (opzionale) -- campo Input tipo tel
- **Motivo del contatto** (obbligatorio) -- Select dropdown con opzioni:
  - "Migliorare la mia azienda"
  - "Sviluppare un'idea o un business"
  - "Creare un gioco o un'app"
  - "Aggiungere un servizio a un sistema esistente"
  - "Sito web o portfolio personale"
  - "Consulenza o formazione"
  - "Altro"

L'edge function `send-contact-email` verra aggiornata per includere telefono e motivo nell'email.

---

## 7. Footer aggiornato

Aggiunta link di navigazione verso le 3 pagine + contattaci. Il testo cookie resta.

---

## Dettagli tecnici

### File nuovi
- `src/components/Navbar.tsx` -- barra di navigazione globale
- `src/pages/PerLeAziende.tsx` -- pagina aziende
- `src/pages/PerLeIdee.tsx` -- pagina idee
- `src/pages/PerLePersone.tsx` -- pagina persone

### File modificati
- `src/App.tsx` -- aggiunta route `/per-le-aziende`, `/per-le-idee`, `/per-le-persone`
- `src/pages/Index.tsx` -- nuova homepage con 3 card
- `src/components/Contact.tsx` -- aggiunta campo telefono + select motivo
- `src/components/Footer.tsx` -- aggiunta link navigazione
- `supabase/functions/send-contact-email/index.ts` -- aggiunta phone e reason al template email

### Componenti riutilizzati
I componenti About, Solution, Services, HowWeWork, TestFlight vengono riutilizzati/adattati nelle pagine interne tramite props o versioni dedicate. Nessun componente viene eliminato.

