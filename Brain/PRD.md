# PRD: Cafe Website

> Read order for the agent (all in the `Brain/` folder): RULES.md → PRD.md → DESIGN.md → ARCHITECTURE.md → TASKS.md → MEMORY.md

## 1. What we are building

A fast, single-page website for one small neighbourhood cafe. It should feel like the cafe itself: warm, a little handmade, and unhurried. It is a demo that the owner can approve quickly, then keep running without a developer.

## 2. Goal

Turn a person searching on their phone into a customer walking through the door.

## 3. Audience

- **Locals deciding where to go now.** Phone in hand, often outdoors. They want hours, location, and a sense of the place within seconds.
- **Regulars checking the menu or today's special.**
- **Friends sharing the link.** The page has to look good when opened from a chat message.

Assume mobile first. Assume slow or patchy data.

## 4. The visitor's jobs (in priority order)

1. Find out if the cafe is open right now.
2. Get there (directions in one tap).
3. See what is served and what it costs.
4. Contact the cafe (call or WhatsApp in one tap).
5. Get a feel for the space and the people.

If a design decision makes any of jobs 1 to 4 slower, it is the wrong decision.

## 5. Scope

**In scope**

- One scrolling page: header, hero, about, menu, gallery, visit/contact, footer
- Real menu text on the page (no PDF, no menu images)
- "Open now / Closed" status computed from the listed hours
- Mobile sticky action bar: Call, Directions, WhatsApp
- A "Today" line the owner can edit in one place
- Basic SEO and a good link preview when shared
- Accessible, responsive, works without JavaScript for all core info

**Out of scope (do not build)**

- Online ordering, payments, carts, accounts
- Booking or reservation systems
- Blog, CMS, admin panel, database
- Multi-language switcher
- Cookie banners or analytics (unless the owner asks later)
- Any framework or build step

## 6. Functional requirements

| ID | Requirement |
|----|-------------|
| FR-1 | Header shows the cafe name and links to Menu, Space, Visit. A Call button sits on the right. |
| FR-2 | Hero shows the name, one-sentence description, a primary action to the menu, and a secondary link to directions. |
| FR-3 | About is 3 to 5 sentences in the cafe's own voice. |
| FR-4 | Menu groups items into categories. Each item has a name, a short description (optional), and a price. Dietary marks (veg, vegan) use text or an icon with a text label. |
| FR-5 | "Today" line appears above the menu and is one editable string in `index.html`. |
| FR-6 | Gallery shows 6 to 8 photos with proper alt text. |
| FR-7 | Visit section lists address, weekly hours, phone, WhatsApp link, Instagram link, and a "Open in Maps" link. |
| FR-8 | An open/closed badge reads the hours from a single config object in `main.js` and updates on load. If JS fails, the static hours still show. |
| FR-9 | On screens narrower than 720px, a fixed bottom bar offers Call, Directions, WhatsApp. |
| FR-10 | Footer repeats name, address, and Instagram. |

## 7. Non-functional requirements

- **Performance:** Lighthouse mobile score 95 or higher for Performance, Accessibility, Best Practices, and SEO. Total page weight under 1.5 MB including images. Largest Contentful Paint under 2.5 s on a mid-range phone on 4G.
- **Accessibility:** WCAG AA contrast, visible keyboard focus, semantic landmarks, alt text on every meaningful image, `prefers-reduced-motion` respected.
- **Browser support:** last 2 versions of Chrome, Safari, Firefox, Edge; Android Chrome; iOS Safari.
- **Maintainability:** the owner (or a friend) can change hours, menu items, and prices by editing plain HTML without breaking anything.

## 8. Voice

Plain, specific, short. Written like a friendly person behind the counter, not a brand.

- Say what the thing is: "Cardamom latte, with oat or regular milk."
- Do not sell the thing: no "crafted with love", "where every cup tells a story", "your daily dose of happiness", "elevate your coffee ritual".
- Sentence case everywhere. No exclamation marks unless the owner uses them.

## 9. Success criteria for the demo

- Someone who has never seen the cafe can answer "is it open, where is it, what's the cheapest coffee" in under 15 seconds.
- The owner says "that looks like us" without being told what to look at.
- The page does not look like a template or an AI-generated landing page.

## 10. Open questions (owner to answer, tracked in MEMORY.md)

- Final cafe name and tagline
- Exact address, map link, phone, WhatsApp number
- Hours for each day
- Full menu with prices
- 6 to 8 real photos (space, food, people)
- Instagram handle
- Anything unusual to mention (pet friendly, wifi, board games, power sockets, outdoor seating)
