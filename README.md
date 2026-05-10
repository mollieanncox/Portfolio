 # Mollie Cox — Portfolio

A custom portfolio site built with Astro + Tailwind, using your existing brand system. Cream + ink + orange + purple, New Spirit display, Satoshi body.

---

## Set up the fonts (do this first)

**Satoshi** is loaded automatically via Fontshare — already wired up.

**New Spirit** is on Adobe Fonts (Typekit). To use it on your live site:

1. Sign in to [fonts.adobe.com](https://fonts.adobe.com) (free with an Adobe ID)
2. Search "New Spirit," click "Add to Web Project"
3. Create a new web project — name it `mollie-cox-portfolio`
4. Copy the kit ID (it'll look like `abc1xyz`)
5. Open `src/styles/global.css`
6. Find this line:
   ```css
   @import url('https://use.typekit.net/YOUR_KIT_ID.css');
   ```
7. Replace `YOUR_KIT_ID` with your actual kit ID

If you skip this step, the site will fall back to Georgia (which still reads as a confident editorial serif). Site works fine while you set this up.

---

## Get it running locally

You'll need Node.js 18+. Then:

```bash
cd portfolio
npm install
npm run dev
```

The site will run at `http://localhost:4321`.

---

## File structure

```
portfolio/
├── src/
│   ├── layouts/
│   │   ├── Base.astro          # Site shell: header, footer, nav
│   │   └── CaseStudy.astro     # Wrapper for individual case studies
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro         # About page
│   │   └── work/
│   │       ├── linear-migration.astro       # ✅ Complete
│   │       ├── pdlc-redesign.astro          # 🟡 Skeleton — fill in
│   │       ├── auxin-design-system.astro    # 🟡 Skeleton — fill in
│   │       ├── fleetio-team-scaling.astro   # 🟡 Skeleton — fill in
│   │       └── ivy-positioning.astro        # 🟡 Skeleton — fill in
│   └── styles/
│       └── global.css          # Typography, colors, custom components
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs         # Brand color palette + fonts
└── package.json
```

---

## Brand system applied

**Colors** (in `tailwind.config.mjs`)

- `cream` (#F4EFE5) — primary warm background
- `ink` (#02101D) — body text, deep near-black
- `orange` (#E13D0F) — primary accent, the "brand period" color
- `purple` (#9B40C4) — secondary accent, used in About preview wash
- `purple-pale` (#E5D4F2) — lavender background for variety
- `purple-wash` (#F0E5F8) — very pale lavender
- `navy-deep` (#02101D) — used in Linear case study stat callout
- `taupe` — earth tone for occasional warmth

**Typography**

- Display: New Spirit (via Adobe Fonts)
- Body: Satoshi Variable (via Fontshare)
- Mono: JetBrains Mono (via Google Fonts)

**Brand period**

That signature orange period at the end of headlines is implemented as `<span class="brand-period">.</span>` — appears throughout the site to reinforce your visual signature.

---

## How to fill in case studies

Each case study lives in `src/pages/work/[slug].astro`. The Linear one is fully written — use it as your model. The other four are skeletons with `[TODO: ...]` placeholders.

Working with Claude Code on your Mac:

1. Open this folder in your terminal: `cd portfolio`
2. Run: `claude`
3. Tell it: "Fill in the PDLC redesign case study at src/pages/work/pdlc-redesign.astro using my notes below" — then paste your notes
4. Iterate until the writing sounds like you, not like AI

---

## Updating content

**Homepage hero stats** — edit directly in `src/pages/index.astro`. The hero section has the "20", "2.7×", "6 → 15", and "17K+" values inline.

**Case study list** — the `caseStudies` array at the top of `index.astro` controls which case studies appear and in what order.

**About page** — edit `src/pages/about.astro` directly.

**Adding a portrait** — drop a JPG into `public/` (e.g. `public/portrait.jpg`) and update the placeholder block in `about.astro`:

```astro
<!-- Replace this -->
<div class="aspect-[3/4] bg-cream-warm border ...">
  <p>[ Add a portrait here ... ]</p>
</div>

<!-- With this -->
<img
  src="/portrait.jpg"
  alt="Mollie Cox"
  class="aspect-[3/4] w-full object-cover border border-ink/10"
/>
```

---

## Deploying to Vercel + connecting GoDaddy

1. **Push to GitHub** — create a new repo, push this folder
2. **Deploy to Vercel** — go to [vercel.com/new](https://vercel.com/new), import your GitHub repo, click Deploy. Astro is auto-detected.
3. **Get a `*.vercel.app` URL** — Vercel deploys instantly
4. **Connect molliecox.com** — in Vercel project settings, go to Domains, add `molliecox.com`. Vercel will show you DNS records to add.
5. **Update GoDaddy DNS:**
   - Log in to GoDaddy
   - Find `molliecox.com` in your Products
   - Click DNS / Manage DNS
   - In Records, add the A record and CNAME record Vercel showed you
   - Save and wait ~30 minutes for propagation
6. **HTTPS auto-provisions** via Let's Encrypt once DNS resolves

---

## Adding crayon scribble decorations (optional)

If you want to bring in those signature purple crayon scribbles from your post templates and LinkedIn banner: drop SVG scribble files into `public/scribbles/` and use them as background images or absolute-positioned decorative elements. Use sparingly — at the Head of Design level the punch comes from restraint.

Example use in a section:

```astro
<section class="relative">
  <img
    src="/scribbles/scribble-1.svg"
    class="absolute top-12 right-0 w-32 opacity-60 pointer-events-none"
    alt=""
  />
  <!-- your content -->
</section>
```

---

## Honest checklist before you go live

- [ ] Set up Adobe Fonts kit for New Spirit (see top of README)
- [ ] Replace the portrait placeholder with a real photo
- [ ] Fill in all four skeleton case studies
- [ ] Proofread the Linear case study (it's a draft based on your deck — verify every claim)
- [ ] Update the Bounce Podcast link in the footer with your actual show URL
- [ ] Test on mobile (resize your browser; site is responsive)
- [ ] Set up the custom domain on Vercel + GoDaddy DNS
- [ ] Add your resume PDF to `public/resume.pdf` and link from About page
- [ ] Update `astro.config.mjs` `site:` URL to match `https://molliecox.com`

---

## Quick prompts to give Claude Code

Once you're running locally, here are good prompts:

- "Fill in the Auxin case study at src/pages/work/auxin-design-system.astro using these notes: [paste]"
- "Add a Speaking & Teaching page that lists my conference talks and Bounce podcast episodes"
- "Add a press/recognition page at src/pages/press.astro"
- "Add a downloadable resume PDF link in the About page sidebar"
- "Add purple crayon scribble SVGs as decorative elements on the homepage and About page"
- "Create a 6th case study for Veer at src/pages/work/veer-founding.astro"
