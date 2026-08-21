# Diamond Lounge — Next.js site

A Next.js 15 App Router site for Diamond Lounge at Casino Marina Colombo:
gold-on-black, a 3D poker-table hero, scroll-driven animation and venue content.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

Node 18.18+ (20 or 22 recommended).

---

## Design system

Everything derives from two ramps in `tailwind.config.ts`. Change them there,
not in components.

**Black:** `ink #050506` (page) · `carbon #0B0B0D` (sections) · `onyx #121215`
(surfaces) · `graphite #1C1C21` (borders)

**Gold:** `gold-500 #C9A227` is the brand gold. `gold-200 #F0DFA8` is the light
champagne used for text highlights, `gold-700 #7E6320` the shadow tone in the
gradient.

**Type**
- `font-display` — **Prata**, a Didone. High stroke contrast is what makes gold
  read as gold leaf rather than yellow. Headlines only.
- `font-sans` — **Jost**, a Futura revival. The geometric register of Deco-era
  card rooms. Body and UI.
- `font-mono` — **JetBrains Mono**. Blinds, stakes, buy-ins and countdowns are
  data, so they get a tabular face, never the serif.

**Reusable classes** (`globals.css`): `.h-display`, `.gold-text` (animated
gold-leaf gradient), `.label`, `.lede`, `.shell` (page gutter), `.surface`,
`.bracket` (gold corner brackets that grow on hover), `.btn`, `.btn-solid`.

---

## The signature

The whole homepage scroll is one hand of poker. You land and the dealer pitches
you A♠ K♠. Scroll and the board runs out one card at a time — J♠, Q♠, 10♠ —
while the camera lifts from seat height to a dealer's overhead view. By the
booking CTA you're holding a royal flush in spades.

Section labels follow the same logic: **flop / turn / river / showdown** instead
of 01 / 02 / 03. The only place actual numbering appears is the blind structure,
because a blind structure genuinely is a numbered sequence.

Scene code lives in `src/components/three/`:

| File | Does |
|---|---|
| `SceneMount.tsx` | Capability gate — skips WebGL on mobile, no-WebGL devices and `prefers-reduced-motion`, falling back to a gold radial gradient |
| `PokerScene.tsx` | Canvas, camera keyframe rig, bloom + vignette |
| `Table.tsx` | Felt, gold inlay ring, leather rail |
| `Cards.tsx` | Deal animation and scroll gating |
| `Chips.tsx` | Chip stacks + ambient floating chips |
| `Lighting.tsx` | Overhead lamp, volumetric beam, gold rim lights |
| `materials.ts` | Card faces and backs drawn to canvas — no image assets needed |

---

## Content

All copy and data sit in `src/lib/` as typed objects. No CMS calls, so the whole
site prerenders as static HTML.

| File | Holds |
|---|---|
| `site.ts` | Name, phone, address, hours, nav, footer nav |
| `events.ts` | Tournament calendar (drives `/events` and `/events/[slug]`) |
| `content.ts` | Games, blind structure, packages, FAQ, gallery, amenities |

To add an event, append to the `events` array — the listing page, detail page,
sitemap and static params all pick it up automatically.

---

## Pages

`/` · `/about` · `/founder` · `/games` · `/events` · `/events/past` ·
`/events/[slug]` · `/packages` · `/casino-marina` · `/locations` · `/gallery` ·
`/bookings` · `/faq` · `/responsible-gaming` · `/privacy` · `/terms`

Plus generated `robots.txt` and `sitemap.xml`, JSON-LD `EntertainmentBusiness`
schema in the root layout, and `FAQPage` schema on `/faq`.

---

## What was fixed from the old site

- Legacy localhost links in the nav and footer
- `info@website.com` and the ThemeREX demo social links
- Links pointing at the second staging domain
- Contradictory hours ("Open Mon-Sun" then "Sunday: Closed")
- Stat counters permanently stuck at 0
- "Online casino" copy on a land-based venue's page
- No age gate — now a required 18+ interstitial (`AgeGate.tsx`), which Meta and
  Google both want before they'll approve ads for a gaming venue

---

## Before you go live

1. **Images.** They currently load from the old Hostinger hosts, whitelisted in
   `next.config.mjs`. Download them into `public/images/`, update the paths in
   `src/lib/content.ts` and `src/lib/events.ts`, and drop the `remotePatterns`
   block.
2. **Booking form.** `BookingForm.tsx` opens a prefilled WhatsApp message. Swap
   `handleSubmit` for a POST to `/api/bookings` (or your CRM) when you have one.
3. **Live bar.** The countdown in `LiveBar.tsx` is real; "Tables running" and the
   stake are placeholders. Wire them to an endpoint if you want true live status.
4. **Event data.** Buy-ins, stacks and dates are plausible reconstructions, not
   the venue's actual published numbers. Confirm them with the operator before launch.
5. **Legal pages.** `/privacy` and `/terms` are working drafts. Have a Sri Lankan
   lawyer review them.
6. **OG image.** Add `public/og.jpg` (1200×630) and reference it in
   `layout.tsx` metadata.

---

## Deploy

Vercel: import the repo, framework auto-detects, no env vars needed. Netlify or
any Node host works too — it's a standard `next build` / `next start`.
