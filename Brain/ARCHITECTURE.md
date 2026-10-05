# ARCHITECTURE

The simplest thing that works. A small cafe does not need a framework. Every choice below favours speed, readability, and easy edits.

## 1. Stack

- **HTML5**, hand-written, semantic
- **CSS**, plain files, custom properties for all design tokens
- **Vanilla JavaScript**, one small file, no dependencies
- **No** frameworks, bundlers, package manager, Tailwind, or CSS-in-JS
- **Hosting:** any static host (Netlify drop, GitHub Pages, Cloudflare Pages). Deploy = upload the folder.

The site must open correctly by double-clicking `index.html`. No local server required.

## 2. Folder structure

```
/
├─ index.html
├─ styles/
│  ├─ tokens.css       design tokens only (colour, type, space, radius, motion)
│  ├─ base.css         reset, element defaults, typography, focus styles
│  └─ main.css         layout, sections, components
├─ scripts/
│  └─ main.js          open/closed badge, mobile bar visibility, hero reveal
├─ assets/
│  ├─ img/             optimised photos (webp + jpg fallback)
│  ├─ icons/           small inline-able SVGs
│  └─ og-image.jpg     1200x630 link preview
├─ favicon.svg
└─ Brain/              project docs for the agent (not part of the deployed site)
   ├─ PRD.md
   ├─ ARCHITECTURE.md
   ├─ DESIGN.md
   ├─ MEMORY.md
   ├─ RULES.md
   └─ TASKS.md
```

The `Brain/` folder holds planning docs only. Do not upload it when deploying, and do not link to it from the site.

Do not add folders or files outside this structure without recording the reason in MEMORY.md.

## 3. Page structure (index.html)

```
<header>            site name, nav, call button, open/closed badge
<main>
  <section id="top">     hero
  <section id="about">   short story
  <section id="menu">    today line + categories
  <section id="space">   gallery
  <section id="visit">   hours, address, contact
</main>
<footer>
<nav class="action-bar">  mobile only, fixed bottom
```

Each section has an `id`, one `<h2>`, and is a landmark via `aria-labelledby`. Heading order never skips levels.

## 4. CSS architecture

- Load order: `tokens.css` → `base.css` → `main.css`.
- **Every** colour, font, size, space, radius, and duration is a custom property in `tokens.css`. No raw hex or magic numbers in `main.css`.
- Class naming: simple BEM-ish (`menu__item`, `menu__price`). Flat selectors. Avoid nesting beyond two levels and avoid id selectors.
- Check specificity when two rules touch the same property (especially section padding vs. component margin).
- Mobile first. Min-width media queries only. Breakpoints: `40em` (640px), `64em` (1024px).
- Use `clamp()` for type and section spacing instead of many breakpoints.
- Layout via CSS Grid and Flexbox. No floats, no absolute positioning for layout.
- Wave dividers: one reusable inline SVG path, applied with `mask-image` or as an inline `<svg>` at section edges. Defined once.

## 5. JavaScript

One file, `scripts/main.js`, wrapped in an IIFE or ES module with no globals. Everything is progressive enhancement: the page is fully usable if it fails.

Features:

1. **Hours config + open/closed badge**
   ```js
   const CAFE = {
     timezone: "Asia/Kolkata",
     hours: { // 24h "HH:MM", null = closed
       mon: ["08:00", "22:00"], tue: ["08:00", "22:00"], wed: ["08:00", "22:00"],
       thu: ["08:00", "22:00"], fri: ["08:00", "23:00"], sat: ["08:00", "23:00"],
       sun: ["09:00", "22:00"]
     }
   };
   ```
   Compute status with `Intl.DateTimeFormat` using the configured timezone (not the visitor's). Show "Open until 10 pm" or "Closed, opens tomorrow at 8 am". The static hours table in HTML must always match this config; note any change in MEMORY.md.
2. **Hero load sequence** (see DESIGN.md Motion). Add a class once on `DOMContentLoaded`. Skip entirely under `prefers-reduced-motion`.
3. **Action bar:** show only on small screens; hide when the Visit section is in view (IntersectionObserver).

No other scripts. No jQuery, no sliders, no lightboxes.

## 6. Images

- Source photos go through: resize, compress, export WebP plus JPG fallback.
- Sizes: hero 1200px wide max; gallery 800px wide max; target under 150 KB each.
- Use `<picture>` with `srcset`/`sizes`, explicit `width` and `height` (prevents layout shift), `loading="lazy"` on everything except the hero image, which gets `fetchpriority="high"`.
- Alt text describes what is in the photo, in plain words. Decorative images use `alt=""`.
- Until real photos exist, use neutral placeholder blocks in the Latte/Mocha tones with a visible "photo goes here" label. Never use stock-photo hotlinks.

## 7. Fonts

Loaded from Google Fonts with `preconnect` and `display=swap`, limited to the exact weights used (see DESIGN.md). Every `font-family` has a real fallback stack. If the owner wants zero third-party requests, self-host the same files in `assets/fonts/`.

## 8. SEO and sharing

- Unique `<title>` and meta description with the cafe name and area
- Open Graph and Twitter tags using `assets/og-image.jpg`
- `lang="en"` on `<html>`
- JSON-LD `CafeOrCoffeeShop` with name, address, phone, hours, menu URL, and `sameAs` Instagram
- `favicon.svg`, `theme-color` set to Espresso

## 9. Editing guide for the owner

All routine edits happen in `index.html`, marked with comments:

```
<!-- EDIT: today's special -->
<!-- EDIT: menu items start -->
<!-- EDIT: hours (also update main.js) -->
```

Hours exist in two places (HTML text and `CAFE` config). Keep this fact visible in comments next to both.

## 10. Deployment

1. Optimise images
2. Run the checks in RULES.md "Definition of done"
3. Upload the site files to the host (everything except `Brain/`)
4. Test on a real phone over mobile data
