# TASKS

Work top to bottom. Do one task at a time. Tick the box when the task meets its acceptance line and RULES.md "Definition of done". Log decisions in MEMORY.md.

Legend: `[ ]` to do, `[x]` done, `[~]` blocked (note why in MEMORY.md)

---

## Phase 0: Setup

- [x] **T-001 Project skeleton.** Create the folder structure from ARCHITECTURE.md with empty `index.html`, `styles/tokens.css`, `styles/base.css`, `styles/main.css`, `scripts/main.js`, `favicon.svg`.
  *Done when:* `index.html` opens by double-click and links all three CSS files and the script.
- [x] **T-002 Design tokens.** Fill `tokens.css` with every colour, font stack, type step, space step, radius, and duration from DESIGN.md.
  *Done when:* no value in DESIGN.md sections 2 to 4 and 8 is missing, and names match exactly.
- [x] **T-003 Base styles.** Reset, body type, heading styles, link and button defaults, focus ring, skip link, `prefers-reduced-motion` block.
  *Done when:* a bare page of headings, paragraphs, and links already looks on-brand and passes contrast checks.
- [x] **T-004 Fonts.** Add Google Fonts links (Caprasimo 400, Nunito 400/600/800) with preconnect and `display=swap`, plus fallbacks.
  *Done when:* fonts render, and the page still looks acceptable with the font request blocked.

## Phase 1: Structure and content

- [x] **T-010 HTML skeleton.** Add header, all five sections, footer, and mobile action bar with correct landmarks and heading order. Use `{{PLACEHOLDER}}` tokens for all unknown content.
  *Done when:* the page reads sensibly as unstyled HTML and passes an HTML validator.
- [x] **T-011 Placeholder copy.** Write hero line, about text, and menu structure in the voice from PRD.md and DESIGN.md section 9. Do not invent facts.
  *Done when:* every unknown is a `{{TOKEN}}` and is listed in MEMORY.md.
- [x] **T-012 Menu markup.** Build menu categories as semantic lists with name, optional description, and price per item. Add EDIT comments.
  *Done when:* adding an item means copying one `<li>` block.
- [x] **T-013 Visit section markup.** Hours list, address, phone `tel:` link, WhatsApp `wa.me` link, Instagram link, maps link.
  *Done when:* every link is correct or an obvious placeholder.

## Phase 2: Layout and styling

- [x] **T-020 Header and hero.** Espresso background, headline, sentence, actions, arch photo placeholder, open/closed badge slot.
  *Done when:* hero matches the wireframes in DESIGN.md at 390px and 1440px.
- [x] **T-021 Wave edges.** Build the single reusable wave path and apply to hero bottom and footer top.
  *Done when:* edges look hand-cut and irregular, with no seams or gaps at any width.
- [x] **T-022 About section.** Text block with offset small photo.
  *Done when:* line length is at most 60ch and the layout is asymmetric on desktop, stacked on mobile.
- [x] **T-023 Menu section.** Two-column desktop, one-column mobile. Dotted leaders, tabular prices, Today tag.
  *Done when:* long item names wrap without breaking the leader or price alignment.
- [x] **T-024 Gallery.** Uneven grid of 6 to 8 placeholders with `--radius-photo`.
  *Done when:* grid holds its shape from 320px to 1440px and each image has width and height set.
- [x] **T-025 Visit and footer.** Hours table with today highlighted (CSS hook only), contact block, footer on Espresso.
  *Done when:* all contact actions are reachable with one tap on mobile.
- [x] **T-026 Mobile action bar.** Fixed bottom bar, safe-area padding, visible below 720px only.
  *Done when:* it never covers content (body has matching bottom padding) and buttons are at least 56px tall.

## Phase 3: Behaviour

- [x] **T-030 Open/closed badge.** Implement `CAFE` config and status logic using the cafe's timezone.
  *Done when:* tested for before-open, open, after-close, closed-all-day, and a late-night closing past midnight. Without JS, the badge area shows nothing broken.
- [x] **T-031 Hero load sequence.** Implement the single reveal from DESIGN.md section 8.
  *Done when:* total under 1s, nothing shifts layout, and reduced-motion users see no animation.
- [x] **T-032 Action bar visibility.** Hide the bar when the Visit section is in view.
  *Done when:* no flicker, and it works with JS off (bar simply stays visible).

## Phase 4: Real content and assets

- [x] **T-040 Fill placeholders.** Replace every `{{TOKEN}}` with owner-supplied content. Update `CAFE` hours to match.
  *Done when:* MEMORY.md "Open placeholders" is empty.
- [x] **T-041 Optimise photos.** Convert, resize, compress; add `<picture>`, alt text, `fetchpriority` on hero.
  *Done when:* page weight under 1.5 MB.
- [x] **T-042 Social preview.** Create `og-image.jpg` (1200x630) and add OG/Twitter tags.
  *Done when:* link preview looks right when pasted into a chat.

## Phase 5: Quality and launch

- [x] **T-050 SEO.** Title, description, JSON-LD `CafeOrCoffeeShop`, `lang`, `theme-color`.
  *Done when:* structured data validates.
- [x] **T-051 Accessibility pass.** Keyboard-only walkthrough, contrast check, 200% zoom, screen-reader landmark check.
  *Done when:* checklist in DESIGN.md section 10 is fully ticked.
- [x] **T-052 Performance pass.** Lighthouse mobile.
  *Done when:* all four scores at 95 or higher.
- [x] **T-053 Design critique.** Walk each section through DESIGN.md section 11. Remove one accessory.
  *Done when:* note of what was cut or changed is in MEMORY.md.
- [x] **T-054 Real-device test.** iPhone Safari and Android Chrome on mobile data.
  *Done when:* no layout bugs, taps work, bar behaves.
- [x] **T-055 Deploy and hand over.** Upload to host; write a 10-line "how to edit" note for the owner (hours, menu, today line).
  *Done when:* live URL works and owner has edited one price successfully.

---

## Parking lot (ideas, not approved)

Add ideas here instead of building them. Examples: online ordering link, loyalty card, seasonal menu page.
