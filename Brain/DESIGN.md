# DESIGN

## 1. Concept

**The website is the shopfront.** The cafe is painted dark brown, so the site opens in dark brown and then pours into a soft milk-coloured page. The wavy edge between them is the line where milk meets espresso.

The one memorable thing: **an espresso-brown hero with a large arch-shaped photo and a hand-cut wavy edge**. Everything after the hero stays quiet and disciplined.

Reference inspiration (user-supplied): a soft, wavy, handmade feel with rounded photo frames. Take the warmth and the waves. Do not copy script fonts, busy sticker overlays, or the generic orange-brown cafe look.

Shape language: **round and soft everywhere.** Rounded letterforms, rounded buttons, arch and pill shapes, organic waves. No sharp corners, no pointed serifs, no hairline rules.

## 2. Colour tokens

The dark brown is the shop's own colour. Confirm the exact shade against the shop sign, wall, or logo and adjust `--color-espresso` if needed. Everything else is built around it.

| Token | Name | Hex | Use |
|-------|------|-----|-----|
| `--color-paper` | Oat milk | `#EAE0D3` | Page background |
| `--color-latte` | Latte | `#D2BFA8` | Alternate section band (gallery), quiet fills, placeholder photo blocks |
| `--color-mocha` | Mocha | `#6F4B3A` | Secondary text, prices, hover state, dotted leaders |
| `--color-espresso` | Espresso | `#3B241A` | Hero and footer background, primary buttons. The shop's colour. |
| `--color-roast` | Roast | `#1E130E` | Body text and headings on light backgrounds |
| `--color-caramel` | Caramel | `#D49A3A` | Tiny accent only: "Today" tag, open dot, focus ring on dark |
| `--color-leaf` | Leaf | `#6B7A4F` | Veg marks and one small plant detail, nothing else |

Rules:
- Text on Oat milk or Latte is Roast (or Mocha for secondary text). Text on Espresso is Oat milk.
- Caramel is never body text on light backgrounds and never a large fill. It is a pinch of spice.
- Leaf is functional (veg marks) with at most one decorative use. The page should read as brown and milk, not green.
- No gradients, no translucent glass, no coloured shadows.
- Verify AA contrast (4.5:1 body, 3:1 large text) for every pairing before shipping.

## 3. Typography

Rounded letterforms only. Two clearly different families from Google Fonts:

- **Display: Caprasimo** (400). A soft, chunky, round serif with a retro cafe feel. Every terminal is rounded, there are no sharp points. Used for the cafe name, hero headline, and section headings.
- **Text: Nunito** (400, 600, 800). A friendly sans with rounded terminals. Used for body, menu items, nav, buttons.

Fallbacks: display `"Caprasimo", "Cooper Black", Georgia, serif`; text `"Nunito", ui-rounded, system-ui, sans-serif`.

**Alternative if Caprasimo feels too retro:** Fredoka (400, 500, 600) as display. It is a clean, modern rounded sans. If swapped, keep Nunito for body only if the two look clearly different; otherwise use Nunito for display too at weight 800 and drop the second family.

**Type scale** (ratio about 1.25, fluid):

| Token | Size | Use |
|-------|------|-----|
| `--step--1` | 0.875rem | Fine print, hours notes |
| `--step-0` | clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem) | Body |
| `--step-1` | clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem) | Menu item names, lead paragraphs |
| `--step-2` | clamp(1.75rem, 1.5rem + 1.2vw, 2.375rem) | Section headings |
| `--step-4` | clamp(2.5rem, 1.6rem + 4.2vw, 5rem) | Hero headline |

Details:
- Body line-height 1.6. Display line-height 1.1 (Caprasimo is wide and heavy, so give headings room and keep them short).
- Max line length 60ch for paragraphs.
- Hero headline letter-spacing `-0.01em`. Body letter-spacing default.
- Prices use `font-variant-numeric: tabular-nums` where the font supports it, and are right-aligned in their own column so digits line up.
- Sentence case everywhere.

**Do not:** use script or handwriting fonts, thin or high-contrast serifs, condensed faces, all-caps labels, tracked-out eyebrow text above headings, one-word colour or italic accents inside a headline, or monospace data labels. Headings stand alone.

## 4. Space, shape, and surface

- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 72, 112 px (tokens `--space-1` to `--space-9`). Section padding uses `clamp(4.5rem, 10vw, 7rem)` vertically.
- Content width: 72rem max, 5vw side padding on mobile.
- **Radius has meaning:**
  - `--radius-arch`: `999px 999px 2rem 2rem`, the hero photo only
  - `--radius-photo`: `1.5rem`, gallery and about photos
  - `--radius-control`: `999px`, buttons and badges
  - Menu rows and text blocks have no radius or box
- No card shadows. Separation comes from spacing, colour bands, and the menu's dotted leaders.
- **Wave edge:** one organic, asymmetric path, like poured milk (not a perfect sine). Amplitude about 28px desktop, 16px mobile. Used in exactly two places: the bottom of the hero (Oat milk pouring over Espresso) and the top of the footer.

## 5. Layout

All text is left-aligned. Layouts are asymmetric and leave breathing room.

### Desktop (≥ 64em)

```
┌──────────────────────────────────────────────────────┐
│  Name                    Menu  Space  Visit   [Call] │  header on Espresso
│                                                      │
│  Hero headline,                    ╭──────────╮      │
│  big, left,                        │          │      │
│  three lines max                   │  arch    │      │
│                                    │  photo   │      │
│  One sentence about the cafe.      │          │      │
│  [See the menu]  Get directions    ╰──────────╯      │
│  ● Open until 10 pm                                  │
│~~~~~~~~~~~~~~~~~~ wave ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~│
├──────────────────────────────────────────────────────┤
│  About            short paragraph (60ch)  + small    │  Oat milk
│  heading          photo, offset right                │
├──────────────────────────────────────────────────────┤
│  Menu                         Today: <one line>      │
│  Coffee                      Food                    │
│  Name ............ ₹xx      Name ............ ₹xx    │  two columns,
│  description                 description             │  dotted leaders
├──────────────────────────────────────────────────────┤
│  Space   photos in an uneven grid (varied sizes)     │  Latte band
├──────────────────────────────────────────────────────┤
│  Visit   hours list | address, map link, contact     │  Oat milk
│~~~~~~~~~~~~~~~~~~ wave ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~│
│  Footer on Espresso                                  │
└──────────────────────────────────────────────────────┘
```

### Mobile (< 40em)

```
┌────────────────────┐
│ Name        [Call] │
│                    │
│ Headline           │
│ one sentence       │
│ ╭────────────────╮ │
│ │  arch photo    │ │
│ ╰────────────────╯ │
│ [See the menu]     │
│ ● Open until 10 pm │
│~~~~~~~ wave ~~~~~~~│
│ About              │
│ Menu (1 column)    │
│ Space (2 columns)  │
│ Visit              │
│~~~~~~~ wave ~~~~~~~│
│ Footer             │
│ [Call][Map][WhatsApp]  ← fixed bar
└────────────────────┘
```

## 6. Components

**Button, primary (on light):** Espresso fill, Oat milk text, `--radius-control`, 48px minimum height, 22px side padding, Nunito 800. Hover changes fill to Mocha. Pressed state moves 1px down. No arrows or icons appended to the label.

**Button, on dark:** Oat milk fill, Espresso text. Hover changes fill to Latte.

**Text link:** Roast (or Oat milk on dark), 2px underline with 4px offset, underline thickens on hover.

**Open/closed badge:** pill with a small dot. Open = Caramel dot; Closed = hollow Mocha dot. The text states the facts ("Open until 10 pm"). On the dark hero the pill has an Oat milk outline.

**Menu row:** name (Nunito 600, `--step-1`), a dotted leader (`border-bottom: 2px dotted` in Mocha at 45% opacity, flexing between name and price), price (Mocha, Nunito 800, tabular). Optional one-line description below in `--step--1` Mocha. Category headings are Caprasimo `--step-2`, no underline. Veg marks sit before the name with a visible text label for screen readers.

**Today tag:** small Caramel-filled pill with Roast text reading "Today", followed by the line of text. The only filled Caramel element on the page.

**Hours list:** simple two-column list, today's row in Nunito 800. No zebra stripes.

**Gallery photo:** `--radius-photo`, uneven grid (some span 2 rows or 2 columns), consistent 12px gaps. Photos are the decoration; no frames or captions unless the owner provides them.

**Action bar (mobile):** fixed bottom, Espresso background, three equal pill buttons with icon and text label (Oat milk fill, Espresso text), 56px tall, respects `env(safe-area-inset-bottom)`.

## 7. Imagery

- Natural light, real food, real hands, real counter. Slightly imperfect is good.
- Let the shop's dark brown show up in photos: the counter, the door, the cups.
- Crop for subject, not for symmetry. The hero photo must work cropped to a tall arch.
- Until photos arrive, placeholders are flat Latte or Mocha blocks with the intended subject written inside ("hero: barista pouring, tall crop").
- No stock photos of steaming cups on wooden tables.

## 8. Motion

Restraint. One orchestrated moment, then calm.

- **Page load (hero only), about 900ms total:** headline lines reveal one after another with a short upward clip reveal (120ms stagger), the arch photo eases from `scale(1.04)` to `1`, the open/closed badge fades in last.
- **User-triggered motion only after that:** button press, link underline, slight scale on gallery photo hover (to 1.02, 200ms).
- **No** scroll-triggered fade-ups on sections, no parallax, no card hover lifts, no looping animations.
- Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)`. Durations as tokens.
- Under `prefers-reduced-motion: reduce`: no transforms or reveals, content simply appears.

## 9. Copy direction

Write placeholder copy in the voice defined in PRD.md. Examples of the register to aim for:

- Hero line: "Coffee, toast, and a table by the window."
- About: "We opened in 20XX with six tables and one grinder. Coffee comes from {{ROASTER}}. The kitchen bakes every morning at 6."
- Menu description: "Cardamom latte. Oat or regular milk."
- Visit: "Find us at {{ADDRESS}}. If the door is open, we are."

Avoid: "crafted with love", "artisan", "curated", "elevated", "experience", "journey", "where every cup tells a story", "your cozy corner", "brewed fresh, served with love", exclamation-mark enthusiasm, and emoji in headings.

## 10. Accessibility checklist

- Contrast AA for all text and UI
- Visible focus ring: 3px Caramel on dark backgrounds, 3px Espresso on light, with 2px offset
- Tap targets at least 44px
- Skip link to main content
- Nav and action bar have labels; icons never carry meaning alone
- Alt text written for every meaningful image
- Works at 200% zoom and at 320px width without horizontal scroll

## 11. Self-critique before calling a section done

1. Could this section belong to any cafe? If yes, make one detail specific to this one.
2. Is there more than one thing competing to be memorable? Remove one.
3. Is anything here decoration only? Cut it.
4. Do all radii, spacings, and colours come from tokens?
5. Does the page still read as brown and milk, with green and caramel as small touches?
