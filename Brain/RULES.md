# RULES

These rules apply to every session and every change. If a rule conflicts with a request, say so and ask before breaking it.

## 1. Start of every session

1. Read, in order, from the `Brain/` folder: `Brain/RULES.md`, `Brain/PRD.md`, `Brain/DESIGN.md`, `Brain/ARCHITECTURE.md`, `Brain/TASKS.md`, `Brain/MEMORY.md`.
2. Check TASKS.md for the next unchecked task. Work on that, nothing else, unless told otherwise.
3. Check MEMORY.md for decisions and open placeholders before inventing anything.

## 2. End of every session

1. Tick finished tasks in TASKS.md.
2. Add decisions, gotchas, and still-open placeholders to MEMORY.md.
3. Add one short entry to the Session log in MEMORY.md (what changed, what is next).

## 3. Scope

- Build only what PRD.md "In scope" lists. Anything in "Out of scope" needs explicit approval first.
- No frameworks, build tools, npm packages, CDNs for scripts, or UI libraries. Google Fonts (as specified in DESIGN.md) is the only external resource.
- Do not add features, sections, pages, or animations that are not in the docs. Propose them in chat instead.
- Do not restructure folders or rename files without recording why in MEMORY.md.

## 4. Code

- Semantic HTML first: `header`, `nav`, `main`, `section`, `footer`, `button`, `a`. Use `div` only when nothing semantic fits.
- All design values come from `styles/tokens.css`. No raw hex, pixel font sizes, or one-off durations in other CSS files.
- Keep CSS selectors flat and low in specificity. Never use `!important`.
- Mobile first. Test at 320px, 390px, 768px, 1024px, 1440px.
- JavaScript is progressive enhancement only. Core content and links must work with JS disabled.
- Comment only where intent is not obvious. Use `EDIT:` comments to mark owner-editable regions (see ARCHITECTURE.md).
- Keep files small and readable. If a CSS file grows past about 400 lines, ask before splitting.

## 5. Design

- Follow DESIGN.md exactly. The palette, fonts, radii, wave placement, and motion plan are decisions, not suggestions.
- Do not introduce: gradients, glassmorphism, card shadows, identical card grids, emoji as decoration, ALL-CAPS labels, tracked-out eyebrow text, numbered section markers (01, 02, 03), one-word accent colouring in headings, middle-dot meta strings, or arrows appended to buttons.
- Do not substitute fonts or colours "because they look similar". If a token is wrong, propose a change and update DESIGN.md first.
- Spend boldness in one place: the hero. Keep the rest calm.

## 6. Content

- Never invent facts about the cafe (history, awards, ingredients, prices, hours, sourcing). Use `{{PLACEHOLDER}}` tokens, and list each new one in MEMORY.md.
- Follow the voice in PRD.md. No filler copy, no marketing clichés, no emoji.
- Prices and hours are data, not decoration: keep them accurate and consistent between HTML and JS.

## 7. Accessibility and performance

- WCAG AA contrast, visible focus, labelled controls, alt text on meaningful images.
- Honour `prefers-reduced-motion`.
- Images: WebP with JPG fallback, explicit width and height, lazy-loaded except the hero.
- Keep total weight under 1.5 MB.

## 8. Working style

- Make the smallest change that completes the task.
- When a requirement is ambiguous, ask one clear question rather than guessing. If the user is unavailable, choose the simplest option and log the assumption in MEMORY.md.
- Explain changes briefly: what changed and why, in plain language.
- If you find a bug or doc inconsistency, report it. Do not silently work around it.
- If the user asks for something that breaks a rule here, name the rule, explain the trade-off, and let them decide.

## 9. Definition of done (for any task)

- [ ] Matches DESIGN.md (tokens, type, radius, motion)
- [ ] Works at 320px and 1440px with no horizontal scroll
- [ ] Keyboard navigable, focus visible
- [ ] Works with JavaScript disabled (core info still readable)
- [ ] No console errors
- [ ] No raw hex or magic numbers outside `tokens.css`
- [ ] No unresolved placeholders hidden in the UI (visible placeholders are logged in MEMORY.md)
- [ ] TASKS.md and MEMORY.md updated
