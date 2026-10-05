# MEMORY

The project's running notes. The agent reads this at the start of every session and updates it at the end. Keep entries short and factual. Newest entries go at the top of each log.

## 1. Project snapshot

- **What:** one-page website for a small neighbourhood cafe (demo for the owner)
- **Stack:** static HTML, CSS, vanilla JS. No build step.
- **Design direction:** espresso hero with arch photo and wavy edge, oat-milk body, latte/caramel accents, Caprasimo + Nunito
- **Current phase:** Phase 4 (Real content and assets)
- **Next task:** T-041

## 2. Decisions

Format: `D-NNN | date | decision | reason`

| ID | Date | Decision | Reason |
|----|------|----------|--------|
| D-001 | {{DATE}} | Single-page static site, no framework | Small cafe, owner edits plain HTML, fastest load |
| D-002 | {{DATE}} | Palette avoids default cream and terracotta; uses oat milk, latte, espresso, caramel pinch | Distinct identity, avoids generic cafe look |
| D-003 | {{DATE}} | Menu is real HTML text with dotted leaders, not cards or images | Fast on phones, easy to edit, feels like a menu board |
| D-004 | {{DATE}} | Motion limited to one hero load sequence | Calm feel, performance, avoids template look |
| D-005 | {{DATE}} | Open/closed badge uses the cafe's timezone, not the visitor's | Correct for tourists and travellers |
| D-006 | 2026-10-04 | Palette and fonts changed to Espresso/Latte and Caprasimo/Nunito | Owner wants a coffee-based palette built on the shop's dark brown, and rounded fonts |

## 3. Open placeholders (owner input needed)

Remove a line when it is filled in the site. If this list is empty, Phase 4 is complete.

- [ ] `{{ADDRESS}}`
- [ ] `{{MAPS_URL}}`
- [ ] `{{PHONE}}`
- [ ] `{{WHATSAPP_NUMBER}}`
- [ ] `{{INSTAGRAM_HANDLE}}`
- [ ] `{{HOURS}}` (all 7 days, also update `CAFE` in `main.js`)
- [ ] `{{PHOTOS}}` (hero, about, 6 to 8 gallery)
- [ ] Replace the six AI food photos with real photos before launch
- [ ] `{{OPENING_YEAR}}` and any story details for the About text
- [ ] Prices and terms marked `{{CONFIRM}}` in the menu and Sunday offer

## 4. Facts that live in two places

Keep these in sync and record changes here.

| Fact | Location A | Location B |
|------|-----------|-----------|
| Opening hours | `index.html` Visit section | `CAFE.hours` in `scripts/main.js` |
| Phone number | Header, Visit, action bar, JSON-LD | (search all four when changing) |
| Cafe name | `<title>`, header, hero, footer, JSON-LD, OG tags | |

## 5. Gotchas and lessons

Add things that cost time so they are not repeated.

- (none yet)

## 6. Rejected ideas

Things we considered and decided against, so we do not re-propose them.

- Script font for headings (readability on small phones, looks like a template)
- Image-based menu or PDF menu (slow, not accessible, hard to update)
- Card grid for menu items (generic, uses space poorly on small screens)
- Scroll-triggered fade-ins on every section (template feel)
- Pointed serifs (owner requested rounded type)
- Green-grey palette (owner requested coffee-based palette built on shop's dark brown)

## 7. Session log

Format: `date | what changed | what is next`

- 2026-10-05 | Completed Batch C and D: Verified layout against DESIGN.md, added scroll reveal animations, and set CAFE.confirmed = false for the hidden status badge | Start Batch E
- 2026-10-05 | Completed Batch B: Added, resized and compressed all photos as WebP/JPG with proper alt texts and placeholders | Start Batch C
- 2026-10-05 | Completed Batch A: Added real copy, full menu structure, and Sunday offer from CONTENT.md | Start Batch B
- 2026-10-04 | Completed T-030 to T-032: Implemented open/closed logic, hero animations, and action bar observer | Start T-040
- 2026-10-04 | Completed T-022 to T-026: Styled all remaining sections (About, Menu, Space, Visit, Footer, Action Bar) | Start T-030
- 2026-10-04 | Completed T-020, T-021: Styled header, hero section, and applied SVG wave edges | Start T-022
- 2026-10-04 | Completed T-010 to T-013: Added HTML skeleton, placeholder copy, menu and visit markup. Removed test page | Start T-020
- 2026-10-04 | Completed T-002, T-003, T-004: Added design tokens, base styles, and Google fonts. Added temporary test.html | Start T-010
- 2026-10-04 | Completed T-001: Created project skeleton (folders, basic files) | Start T-002
- {{DATE}} | Docs created (PRD, ARCHITECTURE, DESIGN, MEMORY, RULES, TASKS) | Start T-001
