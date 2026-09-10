# Hanadi Qanan — Personal Portfolio

A calm, editorial single-page portfolio positioning Hanadi Mohammed Qanan as an
**ERP & business-systems specialist and technical consultant** — not only an Odoo
developer. Built to send to clients and to use for international / remote job
applications.

## Stack

| Tool | Why |
|---|---|
| **Next.js 14 (App Router), static export** | Component reuse, first-class SEO (Metadata API, Open Graph, JSON-LD), trivial deploy. `next build` emits a fully static site to `out/`. |
| **TypeScript** | All page copy lives in typed objects in `content/`, so adding an Arabic locale later is a one-file translation. |
| **Tailwind CSS** | Design tokens (colour, type scale, spacing) centralised in `tailwind.config.ts` + `app/globals.css`. |
| **`next/font` (Fraunces + Inter)** | Self-hosted, no layout shift, no third-party font request. |
| **lucide-react** | A handful of line icons, tree-shaken. |
| **sharp** (optional, build only) | Regenerates the social share image from `assets/og-card.svg`. |

No animation library — reveal-on-scroll is a ~40-line `IntersectionObserver`
component (`components/ui/Reveal.tsx`) that respects `prefers-reduced-motion`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # static export to ./out
npx serve out      # preview the production build
```

## Where to edit content

All text and data are in **`content/`** — you never need to touch the components.

| File | Contains |
|---|---|
| `content/site.ts` | Name, role, email, WhatsApp, location toggle, CV path, production URL, social links, nav |
| `content/copy.en.ts` | Every narrative string: hero, about, "What I solve", "How I work", section intros, SEO title/description |
| `content/projects.en.ts` | Case studies (Challenge / Solution / Role / Technologies / Impact) and the "Also delivered" list |
| `content/experience.en.ts` | Experience timeline, certifications, education, languages, toolkit tags |

### Placeholders to fill in

Search the `content/` folder for **`PLACEHOLDER`**. Each marks a fact that needs
your confirmation:

- Experience timeline — job titles, employer type, month/year ranges
- Second (earlier) role, if any
- Education — degree, field, university, year
- Languages and proficiency levels
- Odoo 19 certification — Functional or Developer track, and year
- Location — set `showLocation: true` in `content/site.ts` once confirmed
- Production URL — replace `https://hanadiqanan.com` in `content/site.ts`

The employer is referred to only as "Odoo Gold Partner" by request — it is never
named anywhere in the content.

### Headshot

Replace `public/headshot-placeholder.svg` with a real photo and update the
`src` in `components/sections/About.tsx` (e.g. `/headshot.jpg`, 600×720 or similar
portrait ratio).

### CV

Replace `public/hanadi-qanan-cv.pdf` with the real PDF, keeping the same filename.

### Social links (LinkedIn, GitHub, …)

Add entries to `socials` in `content/site.ts`:

```ts
socials: [
  { label: "LinkedIn", href: "https://linkedin.com/in/…" },
  { label: "GitHub", href: "https://github.com/…" },
],
```

They appear automatically in the contact section (and can be surfaced in the
header/footer the same way).

## Design tokens

- Colours, fonts, type scale, spacing: `tailwind.config.ts`
- Base element styles, reveal animation, container: `app/globals.css`

Palette: warm off-white `#FAF9F6`, deep navy ink `#1C2B4A`, single muted-blue
accent `#4F7291`.

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset: **Next.js**. No environment variables needed.
4. Deploy. Vercel runs `npm run build`; the static output is served from `out/`.
5. Add your custom domain under **Project → Settings → Domains**, then update
   `url` in `content/site.ts` and redeploy so SEO metadata uses the real domain.

Any static host works too (Netlify, Cloudflare Pages, GitHub Pages) — the build
output in `out/` is plain HTML/CSS/JS.

## Adding Arabic later

The architecture is ready for it:

1. Copy `content/copy.en.ts` → `content/copy.ar.ts` and translate the strings
   (same for `projects` / `experience` if localising those).
2. Add an `app/[locale]/` segment (or a locale switch) that selects the content
   object, and set `dir="rtl"` + an Arabic font (e.g. IBM Plex Sans Arabic via
   `next/font`) on `<html>` for the Arabic route.
3. The components take content as props/imports only — no copy is hard-coded in
   them — so no component logic changes.

## Project structure

```
app/            layout (fonts, metadata, JSON-LD), page composition, sitemap, robots, icon
components/
  layout/       Header (sticky nav + scrollspy + mobile menu), Footer
  sections/     Hero, WhatIDo, About, WhatISolve, Expertise, SelectedWork,
                Experience, Credentials, Toolkit, HowIWork, Contact
  ui/           Section, Reveal, Button, Pill, SocialLinks
content/        all copy & data (see above)
assets/         og-card.svg (source for the social image)
scripts/        generate-og.mjs
public/         headshot placeholder, CV placeholder, og.png, favicon
```
