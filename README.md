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

## Project structure

```text
src/
├── app/                 Route entry points and metadata
├── components/
│   ├── brand/           FLOW brand rendering adapters
│   ├── flow/            Workflow, architecture, and story components
│   ├── layout/          Header, navigation, footer
│   ├── motion/          Reusable motion behavior
│   ├── primitives/      Layout and typography primitives
│   ├── sections/        Reusable website sections
│   └── ui/              shadcn / Base UI components
├── content/             Brand, navigation, page, platform, and solution content
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

The current representation site does not invent product screenshots or operational metrics. Product captures should only be presented after a verified asset has been selected for that surface.

## Current implementation phases

### Phase 1 — Foundation & System

Completed foundation includes the design tokens, global layout, navigation, route shells, metadata helpers, static export, GitHub Pages CI, content separation, and reusable motion primitives.

### Phase 2 — Core Story & Product Experience

Current Phase 2 work adds:

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

Reserved for the deeper FoodFlow, JobFlow, CareFlow page system, About, Contact completion, final social/contact data, SEO surface completion, performance/accessibility QA, and production polish.

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
