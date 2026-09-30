# Premier Records & Music Publishing

The digital home of Premier's music, publishing, catalogue, artists and creative ecosystem.

Premier is a premium digital platform representing a record label, music publishing company, catalogue, artists, creative projects, licensing opportunities, company history and business operations.

## Current Status

**Mockup / prototype phase.**

- The public homepage is built, including a featured-artist carousel for the verified Premier roster (Sir Victor Uwaifo, Gentleman Mike Ejeagha, Dr. Victor Olaiya, Mya Blue).
- Content is **placeholder data** in `src/data/mock.ts` — clearly marked and not to be mistaken for confirmed Premier information. Real artist rosters, images, biographies and metadata will replace it.
- The Firebase project has **not been created yet** (Lead Developer decision). When it is established, content will move from mock data to Firestore-backed services.
- The protected admin/CMS experience is a future roadmap phase.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (v4, radix-nova) |
| Animation | Framer Motion |
| Routing | React Router 7 |
| Icons | lucide-react |
| Fonts | Fraunces (display) · Geist (sans) |
| Backend (planned) | Firebase — Authentication, Firestore, Storage, Cloud Functions, Hosting |

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at the URL printed in the terminal (default `http://localhost:5173`).

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) then production build (`vite build`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```
src/
├── components/
│   ├── home/        # Homepage sections (Hero, FeaturedArtist carousel, LatestMusic, etc.)
│   ├── layout/      # Header, Footer, PagePlaceholder, SectionReveal
│   └── ui/          # shadcn/ui primitives (Button, Card, Badge, Sheet, etc.)
├── data/
│   └── mock.ts      # Placeholder content (clearly marked, not production data)
├── hooks/
│   └── useHomeContent.ts  # Homepage data hook (shaped for the future Firestore swap)
├── lib/
│   ├── motion.ts    # Shared Framer Motion variants
│   └── utils.ts     # `cn()` helper
├── pages/           # Route pages (public + utility)
├── services/
│   └── firebase.ts  # Firebase placeholder (not configured yet)
├── types/
│   └── index.ts     # Shared domain types (Artist, Release, CatalogueItem, etc.)
├── App.tsx          # Router definition
├── index.css        # Tailwind v4 theme, Premier palette, typography tokens
└── main.tsx
```

## Routing

Public routes:

```
/                    Home
/artists             Artists directory
/artists/:slug       Artist profile
/music               Music / releases
/music/:slug         Release details
/publishing          Music publishing
/catalogue           Catalogue
/catalogue/:slug     Catalogue item
/licensing           Licensing & sync
/about               Company story
/news                News & announcements
/news/:slug          Article
/contact             Business enquiries & contact
/privacy             Privacy policy
/terms               Terms of service
```

A protected `/admin` CMS is planned for a later phase.

## Environment Configuration

Copy `.env.example` to `.env` and fill in values once the Firebase project is set up:

```bash
cp .env.example .env
```

`.env` is gitignored. The Firebase keys in `.env.example` are empty placeholders — Firebase project creation is deferred.

## Design System

- **Colors:** Premier neutral foundation (warm off-white background, near-black text) with a restrained crimson accent (`premier-red`), defined as oklch tokens in `src/index.css` for both light and dark modes.
- **Typography:** Fraunces Variable (serif display headings) + Geist Variable (sans body/UI).
- **Motion:** Framer Motion variants in `src/lib/motion.ts` — fade-up, fade-in, scale-in and stagger patterns, with a `SectionReveal` wrapper for viewport-triggered reveals.

## Repository

https://github.com/VictorChidex1/premier-records