# SIRPAM - Project Structure

## Directory Layout
```
Sirpam_website/
├── backend/                  # Express.js API server
│   ├── index.js              # Entry point: Express app, MongoDB connection, routes
│   ├── .env                  # Environment variables (PORT, MONGO_URI)
│   └── package.json          # Backend dependencies (express, mongoose, cors, dotenv)
└── frontend/                 # React SPA (Vite)
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    └── src/
        ├── assets/           # Static images (hero.png, Buddha.jpeg, Paint.jpg)
        ├── components/       # Reusable UI sections
        │   ├── Header.jsx    # Fixed nav with animated fullscreen mobile menu
        │   ├── Footer.jsx
        │   ├── HeroSection.jsx
        │   ├── PromiseSection.jsx
        │   ├── GallerySection.jsx
        │   └── TestimonialsSection.jsx
        ├── pages/            # Route-level page components
        │   ├── HomePage.jsx  # Composes all home sections
        │   └── CustomizationPage.jsx
        ├── App.jsx           # BrowserRouter + Routes definition
        ├── main.jsx          # React DOM entry point
        └── index.css         # Global styles, Tailwind v4 theme, custom utilities
```

## Routing
| Path         | Component           |
|--------------|---------------------|
| `/`          | HomePage            |
| `/customize` | CustomizationPage   |

Header also links to `/collection`, `/about`, `/contact` (not yet implemented).

## Architectural Patterns
- **Page = composition of section components** — pages import and stack section components, no logic lives in pages
- **Component-local animation variants** — Framer Motion variants defined at the top of each component file as constants
- **Global layout shell** — Header and Footer are rendered in App.jsx outside `<Routes>`, so they persist across all pages
- **Backend is minimal/standalone** — single `index.js` with graceful no-DB startup; no route files yet
