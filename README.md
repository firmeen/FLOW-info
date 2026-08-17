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
│   ├── brand/           FLOW brand system and responsive lockups
│   ├── contact/         Interactive public contact channels
│   ├── flow/            Workflow, architecture, and story components
│   ├── home/            Client-island storytelling experiences for Home
│   ├── layout/          Header, navigation, footer
│   ├── motion/          Reusable motion behavior
│   ├── primitives/      Layout and semantic typography primitives
│   ├── sections/        Server-first shared website sections
│   ├── solutions/       Reusable solution-page system
│   └── ui/              shadcn / Base UI / Magic UI-derived components
├── content/             Brand, navigation, platform, contact, and solution content
└── lib/                 Shared utilities, metadata, motion tokens, and brand asset registry
```

Pages and section shells remain Server Components by default. Client Components are limited to navigation interaction and Motion-driven storytelling where browser-side behavior is required.

## Production storytelling system

The Home page deliberately uses different interaction metaphors for different information types instead of repeating the same card + fade pattern:

- **The Problem** — fragmented signals and interrupted context between Customer, Staff, and Owner
- **Signature FLOW Story** — scroll-driven movement from customer intent to business visibility
- **FLOW Core Platform** — interactive capability network with monochrome animated beams and a mobile accordion alternative
- **Business Solutions** — one FLOW core branching into FoodFlow, JobFlow, and CareFlow with interactive workflow switching
- **How FLOW Works** — sequential vertical progress through the operating journey
- **Business Value** — FROM → TO transformations that emphasize operational outcomes instead of feature volume

`SectionHeading` accepts semantic rich text and `EmphasisText` is used to give product, problem, and outcome language intentional visual weight without introducing random color effects.

Motion respects `prefers-reduced-motion`. Magic UI-derived `AnimatedBeam`, `BlurFade`, and `TextReveal` are hardened for the FLOW monochrome system and reduced-motion fallbacks rather than being used with their default demo styling.

## Official contact channels

- Instagram — `@fim.flow`
- Facebook — `FIM FLOW`
- Email — `fimin.flowofficial@gmail.com`
- LINE — `@614henux`
- GitHub — `firmeen/FLOW-info`

Instagram and email have direct links. Facebook and LINE are displayed by their exact supplied public identifiers without inventing canonical URLs.

## Brand assets

The original FLOW source asset set is preserved under `public/assets/`:

- `flow-logo.png` — primary full website logo
- `flow-icon.png` — standalone FLOW symbol
- `flow-compact.png` — compact brand lockup
- `flow-dark.png` — reverse logo for dark surfaces
- `flow-favicon.png` — browser/site identity source
- `flow-wordmark.png` — FLOW wordmark only
- `flow-icon-dark.png` — self-contained dark app/avatar icon
- `flow-og.png` — social sharing cover
- `foodflow-menu-sprite.png` — retained FoodFlow product source asset

The uploaded logo files are JPEG-encoded images even though their source filenames end in `.png`. To preserve the artwork byte-for-byte while serving the correct MIME type, `public/assets/web/` contains `.jpg` delivery aliases that point to the exact same Git blobs. The production brand components use those aliases; the original uploads remain untouched.

`src/lib/brand-assets.ts` is the single registry for logo roles, native dimensions, audited outer-canvas crop values, and GitHub Pages-safe public asset paths.

Production placement rules:

- Desktop / wide website header: primary `flow-logo` lockup
- Constrained / mobile header and mobile navigation: `flow-compact`
- Dark Home hero and footer: reverse `flow-dark`
- Browser icon: official `flow-favicon` source through the App Router icon convention
- Open Graph / Twitter preview: official `flow-og` artwork

The large FoodFlow sprite remains a retained source asset and is not loaded by the representation website until a verified product presentation requires it.

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

`.github/workflows/nextjs.yml` is the single Next.js validation/deployment workflow. It validates pull requests and deploys `main` to GitHub Pages.

The workflow runs:

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`
5. verifies production brand asset paths and App Router icon output
6. uploads `out/`
7. deploys the Pages artifact when the event is not a pull request

The build receives `NEXT_PUBLIC_BASE_PATH` from `actions/configure-pages`, so public brand image URLs resolve under the `/FLOW-info` project path in production while remaining root-relative during local development.

## Brand direction

The public website follows the FLOW identity:

- monochrome / near-black / zinc / off-white
- minimal geometric composition
- large typography and whitespace
- semantic emphasis instead of decorative color
- business-first product communication
- controlled motion that explains fragmentation, connection, flow, transformation, and outcome
- official FLOW lockups selected by surface contrast and available space
