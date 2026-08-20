# Maison Bloem — Website

A Next.js (App Router + TypeScript) site for Maison Bloem, a premium Belgian
waffle boutique launching in London.

## Running locally

Requires Node.js 18.18+ (project was built with Node 24).

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
src/
  app/                 # Routes (App Router) — one folder per page
    page.tsx            → /
    our-story/page.tsx  → /our-story
    menu/page.tsx       → /menu
    locations/page.tsx  → /locations
    jobs/page.tsx       → /jobs
    contact/page.tsx    → /contact
    api/contact, api/newsletter  → form endpoints
  components/          # Reusable UI (Nav, Footer, Button, MenuTabs, ...)
  content/             # All editable copy & data — see below
  styles/tokens.css    # Brand colors, fonts, spacing as CSS variables
public/
  images/              # Drop real photos here — see public/images/README.md
```

## Updating content

**You should never need to touch a component or a page to change copy.**
Everything editable lives in `src/content/*.ts`:

- `brand.ts` — name, tagline, emails, social handles, nav & footer links
- `menu.ts` — every menu category and item (name, description, price, tag)
- `locations.ts` — each city, its status (`opening` vs `future`), and details
- `jobs.ts` — open roles on the Jobs page
- `home.ts` / `story.ts` — section-by-section copy for the Home and Our Story
  pages

Edit the relevant file, save, and the site updates — no other changes needed.
Each file is plain TypeScript with a typed shape, so your editor will warn you
if a field is missing.

### Example: adding a menu item

Open `src/content/menu.ts`, find the right category, and add an object to its
`items` array:

```ts
{
  name: "New Waffle",
  description: "A short, appetising description.",
  price: "£10",
  tag: "New", // optional
}
```

## Replacing placeholder images

Every image on the site is currently a styled placeholder (a soft gradient
with a waffle-grid icon and a caption showing the expected filename). Drop a
real photo into `public/images/` using **that exact filename** and the page
automatically switches to the real image — see
[`public/images/README.md`](public/images/README.md) for the full list of
expected filenames and what each one is used for.

## The heading font (Ivy Journal)

The brand guidelines specify **Ivy Journal** as the primary heading font.
It's a paid font not available on Google Fonts, so the site currently uses
**Fraunces** (a free, visually similar italic serif) as a placeholder.

To swap in the real font once you've purchased it:

1. Add the `.woff2` file(s) to `src/app/fonts/`.
2. In `src/app/layout.tsx`, replace the `Fraunces` import from `next/font/google`
   with a local font loaded via `next/font/local`, keeping the same
   `variable: "--font-fraunces-raw"` name so nothing else needs to change.

## Wiring up the forms

The newsletter signup and contact form both POST to local API routes
(`src/app/api/newsletter/route.ts` and `src/app/api/contact/route.ts`). Right
now they validate the input and log it to the server console — they don't
send real emails yet.

To connect a real provider (e.g. [Resend](https://resend.com)):

1. `npm install resend`
2. In each route handler, replace the `console.log(...)` call with a call to
   the provider's SDK, using an API key stored in an environment variable
   (`.env.local`, never committed).

## Deploying

The project is a standard Next.js app and deploys as-is to
[Vercel](https://vercel.com) (recommended — zero config) or any Node hosting
that supports Next.js.

## Notes on scope

- **Shop / merchandise** is intentionally not included — it would need a real
  e-commerce/payment integration and was out of scope for this build.
- All copy is written for a **London** launch (2026), with New York and Los
  Angeles positioned as future locations.
