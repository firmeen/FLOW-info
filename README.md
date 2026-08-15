# FLOW Official Representation Website

Public representation website for **FLOW**, the SME operations platform being developed by **FIMIN FLOW**.

> **Systems that flow. Businesses that grow.**

This repository is intentionally separate from the operational FLOW application. It contains the public product/company website used to explain the platform, its business solutions, and the way FLOW connects customer actions with day-to-day operations and business information.

## Stack

- Next.js 16 / App Router
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn + Base UI primitives
- Motion
- Remix Icon
- GitHub Pages static export

## Route architecture

```text
/
├── /platform
├── /solutions
│   ├── /foodflow
│   ├── /jobflow
│   └── /careflow
├── /how-it-works
├── /about
└── /contact
```

The static export also includes `/sitemap.xml`, `/robots.txt`, the FLOW app icon, and a branded not-found experience.

## Project structure

```text
src/
├── app/                 Route entry points, metadata routes, and page composition
├── components/
│   ├── brand/           FLOW brand rendering adapters
│   ├── flow/            Workflow, architecture, and story components
│   ├── layout/          Header, navigation, footer
│   ├── motion/          Reusable motion behavior
│   ├── primitives/      Layout and typography primitives
│   ├── sections/        Shared website sections
│   ├── solutions/       Reusable solution-page system
│   └── ui/              shadcn / Base UI components
├── content/             Brand, navigation, platform, company, and solution content
└── lib/                 Shared utilities, metadata, and motion tokens
```

Pages and layouts remain Server Components by default. Client Components are limited to navigation interaction and Motion-driven storytelling where browser-side behavior is required.

## Brand assets

The FLOW source asset set is stored under `public/assets/`:

- `flow-logo.png`
- `flow-wordmark.png`
- `flow-compact.png`
- `flow-dark.png`
- `flow-icon.png`
- `flow-icon-dark.png`
- `flow-favicon.png`
- `flow-og.png`
- `foodflow-menu-sprite.png`

`flow-og.png` is used as the shared Open Graph / Twitter social preview image. The large FoodFlow sprite remains a retained source asset and is not loaded by the representation website until a verified product presentation requires it.

The representation site does not invent product screenshots, customer metrics, testimonials, or product readiness claims. Product captures should only be presented after a verified asset has been selected for that surface.

## Implementation phases

### Phase 1 — Foundation & System

Completed foundation includes the design tokens, global layout, navigation, route shells, metadata helpers, static export, GitHub Pages CI, content separation, and reusable motion primitives.

### Phase 2 — Core Story & Product Experience

Completed core experience includes:

- complete Home storytelling flow
- signature scroll-driven FLOW story
- core capability presentation
- FoodFlow / JobFlow / CareFlow overview
- product-surface presentation without fake screenshots
- animated workflow timeline with reduced-motion fallback
- detailed Platform architecture and layers
- deeper How FLOW Works journey
- shared solution-core and operational comparison views

### Phase 3 — Solution Ecosystem & Production Polish

Phase 3 completes the public representation structure with:

- one reusable deep-page system shared by FoodFlow, JobFlow, and CareFlow
- audience, workflow, customer/staff/owner experience, capability, and shared-core sections
- complete About and Contact pages without invented contact channels
- custom not-found experience
- canonical metadata, Open Graph, Twitter metadata, sitemap, and robots output
- stronger reduced-motion behavior for the signature FLOW story
- final static-export and production validation through GitHub Actions

## Development

```bash
npm ci
npm run dev
```

Validation:

```bash
npm run lint
npm run typecheck
npm run build
```

Or run all checks:

```bash
npm run check
```

`next.config.ts` uses `output: "export"`, so successful production builds generate the static website in `out/`.

## Deployment

`.github/workflows/nextjs.yml` validates pull requests and deploys `main` to GitHub Pages.

The workflow runs:

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`
5. uploads `out/`
6. deploys the Pages artifact when the event is not a pull request

## Brand direction

The public website follows the FLOW identity:

- monochrome / near-black / zinc / off-white
- minimal geometric composition
- large typography and whitespace
- business-first product communication
- controlled motion that explains flow rather than decorating every element
