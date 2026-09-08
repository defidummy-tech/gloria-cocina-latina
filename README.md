# Gloria · Cocina Latina

Einseitige Website für **Mama Gloria** – kolumbianische und lateinamerikanische
Küche, Catering und Privatküche in der Schweiz.

## Stack

- Vite + React 19
- Tailwind CSS v4 (`@tailwindcss/vite`)
- framer-motion, lucide-react, yet-another-react-lightbox

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Produktion nach ./dist
npm run preview  # gebautes dist lokal ansehen
```

## Inhalt anpassen

- Texte: `src/components/sections/*.jsx`
- Bilder: `public/images/` (in den Sektionen per Pfad `/images/…` referenziert)
- Farben / Fonts: `src/styles/index.css` (`@theme`-Block)
- Instagram-Link: Konstante `INSTAGRAM_URL` in `Navbar.jsx`, `Hero.jsx`,
  `Footer.jsx`, `Contact.jsx`

## Deployment (Render)

Statische Site. `render.yaml` liegt im Repo:

1. Render → **New** → **Blueprint** → dieses GitHub-Repo wählen.
2. Render liest `render.yaml`: Build `npm install && npm run build`,
   Publish-Verzeichnis `./dist`.
3. **Apply** – fertig. Jeder Push auf `main` deployt automatisch neu.

Alternativ ohne Blueprint: **New** → **Static Site** → Repo wählen →
Build Command `npm install && npm run build`, Publish Directory `dist`.
