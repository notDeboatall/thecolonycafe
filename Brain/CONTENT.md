# CONTENT

Real content for the site, taken from the owner's photos. This file **overrides** the placeholder copy examples in DESIGN.md section 9 and the "Today" line wording. Anything marked `{{CONFIRM}}` could not be read clearly or is not yet known. Do not guess those values. Keep them as visible placeholders and list them in MEMORY.md.

## 1. Brand facts

- **Name:** The Colony Café (accent on the é, as on the sign). Short form in the header: "The Colony".
- **Tagline from the sign:** Sip. Chill. Repeat. (Owner's own words, use as the hero headline.)
- **Sign icons:** Coffee, Burger, Dessert.
- **Logo:** a white steaming cup on a deep purple circle with a yellow ring, text "THE COLONY CAFE". Use the logo only as a photo or image. Do **not** bring purple into the UI palette.
- **Odia name on the sign:** optional. Our fonts have no Odia glyphs. If used, show it as a cropped image from the sign, or load "Noto Sans Oriya" for that one line. Ask the owner for the exact spelling.
- **Real interior, for design reference:** black marble counter, dark fluted wall panels with white LED strips, a textured copper-bronze feature wall, geometric copper pendant lamps with warm amber light, chrome bar stools, backlit menu boards, a green plant by the window. Caramel in our palette stands for the lamp glow. Espresso and Mocha stand for the copper-bronze wall.
- **Not yet known:** `{{ADDRESS}}`, `{{MAPS_URL}}`, `{{PHONE}}`, `{{WHATSAPP_NUMBER}}`, `{{INSTAGRAM_HANDLE}}`, `{{HOURS}}`.

**Warning for the agent:** the phone number visible on the "TO-LET" board above the sign in the exterior photo belongs to a landlord, not the cafe. Never use it.

## 2. Copy

- **Hero headline:** Sip. Chill. Repeat.
- **Hero line:** Mojitos, shakes, pizzas, burgers and desserts. Pull up a stool.
- **Primary action:** See the menu. **Secondary link:** Get directions.
- **About (draft, owner to edit):** "The Colony Café is a small counter-service spot with a few stools and a menu that runs from tea to pizza. Order at the counter, grab a seat, stay as long as you like. We opened in {{OPENING_YEAR}}."
- **Sunday offer** (from the whiteboard at the counter, wording to confirm): "Sundays: buy any two pizzas, two burgers or two sandwiches and get a mojito and a scoop of vanilla ice cream free." `{{CONFIRM}}` exact terms with the owner. Show it in the slot that DESIGN.md calls the Today tag, but the tag says "Sundays" instead of "Today".
- **Do not claim** anything not confirmed: no "specialty coffee", "freshly roasted", "homemade", "all veg", "best in town". The menu is drinks and fast food, so write like that.

## 3. Menu data

Currency ₹. Prices are as printed on the owner's two menu cards and the backlit boards. Group in the page as **Drinks** (Tea and coffee, Mojitos, Mocktails, Shakes, Fresh juice) and **Food** (Pizza, Burgers, Sandwiches, Salads, Desserts and snacks).

For categories where every item has the same price (Mojitos, Fresh juice), show **one price in the category heading** and list the flavours underneath without repeating the price. This keeps the menu short and easy to scan.

### Tea and coffee
- Hot coffee ₹15 `{{CONFIRM}}` (looks very low next to the other coffees)
- Cold coffee ₹109
- Cappuccino ₹99
- Black coffee ₹29
- Tea ₹15
- Ginger tea ₹20
- Irani tea ₹49
- Dum tea ₹29
- Lemon tea ₹19
- Green tea ₹19

### Mojitos, ₹99 each
Virgin, Ocean blue, Blueberry, Black currant, Orange cola, Guava punch, Kiwi twist, Spicy mango, Kala khatta, Green apple

### Mocktails
- Blue deep sea ₹149
- Sunrise mocktail ₹149
- Midnight moon ₹169
- Virgin piña colada ₹199
- Blue blossom ₹159
- Orange blossom ₹159
- Strawberry blossom ₹159
- Rose heaven garden ₹199
- Fruit punch ₹149
- Orange smash mocktail ₹179

### Shakes
- Chocolate ₹99
- Vanilla ₹99
- Nutella ₹99
- Orange ₹99
- Mango ₹99
- Blueberry ₹99
- Black currant ₹99
- Dry fruit ₹129
- Badam date ₹129
- Café special ₹139

### Fresh juice, ₹69 each
Watermelon, Pomegranate, Orange, Grape, Mix fruit, Pineapple, Mosambi, Apple, Beetroot

### Pizza (6 inch / 8 inch)
- Margarita ₹99 / ₹{{CONFIRM}}
- Veg ₹119 / ₹{{CONFIRM}}
- Tandoori paneer ₹159 / ₹199
- Peri peri paneer ₹139 / ₹169
- Special mushroom ₹139 / ₹169
- Mushroom cheese ₹149 `{{CONFIRM}}` / ₹199
- Café special ₹149 / ₹199

### Burgers
- Aloo tikki ₹99
- Paneer tikki ₹149
- Veg ₹99
- Tandoori paneer ₹159
- Special mushroom ₹169
- Café special ₹179

### Sandwiches
- Special veggies ₹119
- Mushroom cheese ₹149
- Tandoori paneer ₹149
- Peri peri paneer ₹139
- Café special ₹169

### Salads
- Fruit salad ₹89
- Creamy fruit salad ₹139
- Russian salad ₹169
- Café special ₹199
- Fruit salad with ice cream ₹169

### Desserts and snacks
- Brownie sizzling ₹159
- Brownie sundae ₹119
- Apricot delight ₹129
- Kunafa ₹119
- Brownie tub ₹119

**Menu notes:** a few prices were hidden by glare in the photos (the `{{CONFIRM}}` items). Dietary marks are not printed on the menu, so show none until the owner confirms which items are veg. Paneer, mushroom and aloo items look vegetarian, but do not label them.

## 4. Photo plan

Photos are numbered in the order they were uploaded (1 = first). If the numbers do not line up, match by the description.

Store the **untouched originals** in `Brain/reference/originals/`. They are never deployed. Cleaned, final images go in `assets/img/` with the names below. The agent exports WebP plus JPG at the sizes in ARCHITECTURE.md section 6.

| # | Shows | Use | Final name | Crop |
|---|-------|-----|-----------|------|
| 10 | Copper pendant lamp above glowing menu boards | **Hero** (arch) | `hero-lamp-menu-boards.jpg` | 4:5 portrait, centred on the big lamp (roughly the middle 60% of the width) |
| 12 | Logo roundel on the fluted counter, plant at left | **About** | `about-counter-logo.jpg` | 4:5 portrait |
| 8 | Whole counter and seating, wide | Gallery, large tile | `space-counter-seating.jpg` | 3:2 landscape |
| 9 | Lamps and copper wall | Gallery | `space-copper-wall-lamps.jpg` | Top 70%, drop the fridge and the man at bottom right |
| 11 | Fluted wall with LED strips and lamps | Gallery, detail | `space-fluted-wall-detail.jpg` | Square or 4:5 |
| 1 | Glass front door with bunting and stools | Gallery, or "find us" | `space-glass-door.jpg` | Right half only (door, bunting, stools) |
| 3 | Lit shopfront sign at dusk | **Visit** section, and the share image | `visit-shopfront-sign.jpg`, then `og-image.jpg` at 1200x630 | Sign only |
| 2 | Drinks menu card | Reference only, source of menu data | `Brain/reference/menu-drinks.jpg` | none |
| 4 | Food menu card | Reference only | `Brain/reference/menu-food.jpg` | none |
| 7 | Sunday offer whiteboard | Reference only (offer text is editable HTML, so it never goes stale) | `Brain/reference/sunday-offer.jpg` | none |
| 5, 13 | Near-duplicates of photo 8 | Skip. Keep as backups | none | none |
| 6 | Cluttered counter corner (monitor, phones, calculator) | Skip | none | none |

**Gap:** there are no real photos of food or drinks. The pictures on the menu cards are stock images and must not be used. Before launch, shoot 6 photos in natural light: a mojito, a shake, a pizza, a burger, a brownie sizzler, and a cup of tea or coffee. Use these in the Menu section and the gallery. Suggested names: `food-mojito.jpg`, `food-shake.jpg`, `food-pizza.jpg`, `food-burger.jpg`, `food-brownie-sizzler.jpg`, `food-tea.jpg`.

### Privacy and safety checks before any photo goes live
- Remove or blur every **PhonePe / UPI QR code** (photos 5, 6, 8, 12, 13).
- Remove or blur **customers' faces**, unless they have agreed. Ask staff too.
- Make sure the landlord's **TO-LET phone number** is gone from the exterior photo.

### AI cleanup prompts

Use the same prefix for every photo, then add the photo's own instructions. Check each result against the original and reject it if the AI changed anything you did not ask for.

**Prefix (paste at the start of every prompt):**
> Retouch this photo of a real cafe. Do only what I list below. Do not add, invent, restyle, or beautify anything. Keep all text, logos and signage exactly as they are. Keep the original colours and lighting, photorealistic. Keep the same aspect ratio and full resolution.

**Photo 10, hero** (`hero-lamp-menu-boards.jpg`)
> Remove the white ceiling conduit pipes, the smoke detector, and the loose wires near the track lights. Straighten the vertical lines slightly so the menu boards sit level. Lift the shadows a little and reduce the purple cast on the ceiling so it looks warm neutral. Leave the lamps and the menu boards unchanged.

**Photo 12, about** (`about-counter-logo.jpg`)
> Remove the woman and the laptop behind the counter, showing only the black marble counter top and the dark wall behind. Remove the payment QR stand at the right edge. Remove the chrome stool leg at the bottom left. Reduce reflections on the window glass at the left. Keep the logo roundel, the plant, the straw cup and the fluted panel unchanged.

**Photo 8, wide interior** (`space-counter-seating.jpg`)
> Remove the three people seated against the back wall, the man on the bar stool at the right foreground, and the woman at the laptop in the bottom-left corner. Remove the payment QR stand and the orange tape dispenser. Leave the empty chairs, stool, counter, lamps, menu boards and the staff member cooking at the stove. Reduce the wide-angle distortion so the vertical lines are straighter.

**Photo 9, lamps and copper wall** (`space-copper-wall-lamps.jpg`)
> Remove the CCTV camera, the smoke detector, the white wall socket with its hanging cables, and the loose pipe at the left. Then crop out the fridge and the person at the bottom so the frame shows only the lamps, menu boards and copper wall.

**Photo 11, fluted wall** (`space-fluted-wall-detail.jpg`)
> Remove the cable bundle and junction box at the top centre. Keep the pendant lamps and all the LED strips unchanged.

**Photo 1, glass door** (`space-glass-door.jpg`)
> Crop to the right half of the image showing the glass door, the prayer-flag bunting and the bar stools. Reduce reflections on the glass. Remove the cardboard box at the bottom right and the sticker and small lock plate on the glass. Keep the bunting, stools and warm lights unchanged.

**Photo 3, sign** (`visit-shopfront-sign.jpg`)
> Crop to the illuminated signboard only. Correct the perspective so the sign edges are straight and level. Remove the "TO-LET" board and its phone number above the sign, and any neighbouring signs at the edges. Do not regenerate, redraw or alter any lettering on the sign, including the Odia script. Keep the glow of the letters natural.
>
> If the AI changes any letters, use a plain perspective-corrected crop from an ordinary photo editor instead.

## 5. Scroll animation (supersedes "no scroll-triggered fade-ups" in DESIGN.md)

The owner wants a basic scroll animation. Keep it simple, and keep the hero load sequence as it is.

**What animates:** one reveal, used the same way everywhere. An element fades from `opacity 0` to `1` while moving up from `translateY(16px)` to `0` over 600ms using the easing token. It plays once, the first time it enters view, and never repeats.

**Where it applies** (mark each with `data-reveal`):
- About text block and its photo
- Each menu category block as a whole (not each row)
- Each gallery photo
- Each block in the Visit section (hours, address, contact)

**Where it does not apply:** header, hero, wave edges, footer, the mobile action bar, and individual menu rows.

**Stagger:** elements revealed together (gallery photos, menu groups side by side) get `--reveal-delay` in steps of 80ms, at most 4 steps.

**Rules:**
- Animate `opacity` and `transform` only. No layout changes.
- Use one `IntersectionObserver` in `main.js`, with `threshold: 0.15` and a bottom `rootMargin` of `-10%`. Unobserve each element after it reveals.
- Anything already in view on load reveals at once without delay.
- **Works without JS:** content is visible by default. A tiny inline script in `<head>` adds a `js` class to `<html>`, and only then does CSS hide `[data-reveal]` until `.is-visible` is added.
- **Reduced motion:** under `prefers-reduced-motion: reduce`, nothing is hidden and nothing animates.
- Add tokens to `tokens.css`: `--reveal-distance: 16px`, `--reveal-duration: 600ms`, `--reveal-step: 80ms`.

## 6. To collect from the owner

- Exact name spelling and Odia text for the sign
- Address and maps link, phone, WhatsApp, Instagram
- Opening hours, every day
- Confirmation of the `{{CONFIRM}}` prices and of the Sunday offer terms
- Which items are vegetarian
- Permission to show customers or staff in photos
- 6 photos of the food and drinks
