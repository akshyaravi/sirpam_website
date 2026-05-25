# SIRPAM - Tech Stack

## Frontend
| Technology | Version | Role |
|---|---|---|
| React | ^19.2.6 | UI framework |
| Vite | ^8.0.12 | Build tool & dev server |
| Tailwind CSS | ^4.3.0 | Utility-first styling (v4 via `@tailwindcss/vite`) |
| Framer Motion | ^12.39.0 | Animations |
| React Router DOM | ^7.15.1 | Client-side routing |
| Lucide React | ^1.16.0 | Icon library |
| clsx + tailwind-merge | latest | Conditional class utilities |

## Backend
| Technology | Version | Role |
|---|---|---|
| Node.js (ESM) | current | Runtime (`"type": "module"`) |
| Express | ^5.2.1 | HTTP server |
| Mongoose | ^9.6.2 | MongoDB ODM |
| dotenv | ^17.4.2 | Environment config |
| cors | ^2.8.6 | Cross-origin requests |
| nodemon | ^3.1.14 | Dev auto-restart |

## Fonts
- **Cormorant Garamond** (serif, weights 300–700 + italic) — headings
- **Playfair Display** (serif, variable) — headings fallback
- Loaded via Google Fonts in `index.css`

## Tailwind v4 Theme (index.css `@theme`)
```css
--color-coconut-milk: #EBE9DD
--color-sage:         #A8A696
--color-warm-beige:   #D4C7AF
--color-taupe-brown:  #766B5D
--font-serif:         "Cormorant Garamond", "Playfair Display", ...
--font-sans:          "Inter", ui-sans-serif, ...
```

## Dev Commands
```bash
# Frontend
cd frontend
npm run dev       # Vite dev server
npm run build     # Production build
npm run lint      # ESLint
npm run preview   # Preview production build

# Backend
cd backend
npm run dev       # nodemon index.js
npm start         # node index.js
```

## Environment Variables (backend/.env)
```
PORT=5000
MONGO_URI=<mongodb_connection_string>
```
