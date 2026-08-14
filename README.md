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

## Current route architecture

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
│   ├── layout/          Header, navigation, footer
│   ├── motion/          Reusable motion behavior
│   ├── primitives/      Layout and typography primitives
│   ├── sections/        Reusable website sections
│   └── ui/              shadcn / Base UI components
├── content/             Brand, navigation, page, and solution copy/data
└── lib/                 Shared utilities, metadata, and motion tokens
```

The default architecture keeps pages and layouts as Server Components. Client Components are introduced only where interaction or Motion requires browser-side JavaScript.

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

The final FLOW image/vector asset pack should live under a dedicated brand asset path when committed. Until then, layout components use a text wordmark adapter so the final asset can be swapped in without changing navigation or footer architecture.
