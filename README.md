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

No external i18n package is required for the current two-language static site. Localization uses typed content, locale-aware route composition, and Next.js metadata/static-export capabilities.

## Localized route architecture

English keeps the original public URLs:

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

Thai mirrors the same information architecture under `/th`:

```text
/th
├── /platform
├── /solutions
│   ├── /foodflow
│   ├── /jobflow
│   └── /careflow
├── /how-it-works
├── /about
└── /contact
```

The language switcher preserves the current logical page when changing language. The site does not automatically redirect visitors based on browser language; language selection remains explicit and predictable.

The static export also includes `/sitemap.xml`, `/robots.txt`, the FLOW app icon, localized metadata, and branded not-found experiences.

## Localization and transcreation contract

Thai is maintained as first-class product communication, not as a literal line-by-line translation of English.

- FLOW, FIMIN FLOW, FoodFlow, JobFlow, and CareFlow remain product/brand names.
- `Systems that flow. Businesses that grow.` remains the official master brand line.
- Thai copy preserves the same product intent, hierarchy, confidence level, and factual boundaries while using natural Thai business language.
- Technical English terms are retained when they improve precision or are established product concepts; surrounding copy explains the meaning in accessible language.
- Localization must never introduce unsupported customer, revenue, growth, metric, or product-readiness claims.
- English and Thai can emphasize different words or use different sentence structures when that is necessary to preserve the same meaning.
- Thai typography removes Latin-only uppercase and tracking behavior instead of forcing English letter-spacing rules onto Thai text.
- English uses Geist; Thai uses Noto Sans Thai through `next/font`.
- Each localized page has its own canonical URL plus `en`, `th`, and `x-default` language alternates.

## Project structure

```text
src/
├── app/
│   ├── (en)/             English root layout and existing public routes
│   ├── (th)/th/          Thai root layout and `/th` routes
│   ├── sitemap.ts        Localized sitemap
│   └── robots.ts
├── components/
│   ├── brand/            FLOW brand system and responsive lockups
│   ├── contact/          Interactive public contact channels
│   ├── flow/             Workflow, architecture, and story components
│   ├── home/             Client-island storytelling experiences for Home
│   ├── i18n/             Language switcher
│   ├── layout/           Localized shell, header, navigation, footer
│   ├── motion/           Reusable motion behavior
│   ├── pages/            Shared locale-aware page compositions
│   ├── platform/         Platform layer experiences
│   ├── primitives/       Layout and semantic typography primitives
│   ├── sections/         Server-first shared website sections
│   ├── solutions/        Reusable solution-page system
│   └── ui/               shadcn / Base UI / Magic UI-derived components
├── content/
│   ├── *.ts              Existing English source content
│   └── th/               Meaning-first Thai product content
├── i18n/
│   ├── config.ts         Locale/path rules
│   ├── schema.ts         Shared content contracts
│   ├── content.ts        Locale content resolver
│   ├── copy.ts           Localized UI/interaction copy
│   └── page-metadata.ts  Localized metadata helpers
└── lib/                  Shared utilities, metadata, motion tokens, brand asset registry
```

Pages and section shells remain Server Components by default. Client Components are limited to navigation interaction and Motion-driven storytelling where browser-side behavior is required. Localized data is passed into interactive components so client code does not depend on a hard-coded English content source.

## Production storytelling system

The Home page deliberately uses different interaction metaphors for different information types instead of repeating the same card + fade pattern:

- **The Problem** — fragmented signals and interrupted context between Customer, Staff, and Owner
- **Signature FLOW Story** — scroll-driven movement from customer intent to business visibility
- **FLOW Core Platform** — interactive capability network with monochrome animated beams and a mobile accordion alternative
- **Business Solutions** — one FLOW core branching into FoodFlow, JobFlow, and CareFlow with interactive workflow switching
- **Product Experience** — one operation shown through Customer, Staff, and Owner lenses
- **How FLOW Works** — sequential vertical progress through the operating journey
- **Business Value** — FROM → TO transformations that emphasize operational outcomes instead of feature volume

The Thai experience uses the same interaction model and information hierarchy while localizing labels, explanations, workflow stages, role language, and business meaning.

`SectionHeading` accepts semantic rich text and `EmphasisText` is used to give product, problem, and outcome language intentional visual weight without introducing random color effects.

Motion respects `prefers-reduced-motion`. Magic UI-derived `AnimatedBeam`, `BlurFade`, and `TextReveal` are hardened for the FLOW monochrome system and reduced-motion fallbacks rather than being used with their default demo styling.

## Official contact channels

- Instagram — `@fim.flow`
- Facebook — `FIM FLOW`
- Email — `fimin.flowofficial@gmail.com`
- LINE — `@614henux`
- GitHub — `firmeen/FLOW-info`

Instagram and email have direct links. Facebook and LINE are displayed by their exact supplied public identifiers without inventing canonical URLs. Channel descriptions and actions are localized while the official identifiers remain unchanged.

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
5. verifies production brand asset paths
6. verifies all nine Thai static routes alongside the existing English routes
7. verifies English/Thai document language and localized alternate URLs
8. verifies the localized sitemap
9. uploads and deploys `out/` only outside pull-request runs

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
- language-specific typography without changing the underlying visual identity
