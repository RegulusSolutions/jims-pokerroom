# Diamond Lounge rebrand — design spec

**Date:** 2026-08-06  
**Status:** Approved for planning  
**Approach:** Central content swap (layout and design unchanged)

## Goal

Rebrand the Jim's Poker Room Next.js site into **Diamond Lounge**: a separate VIP lounge experience inside **Casino Marina Colombo**, with multi-game table content. Change copy and content data only. Keep existing layout, components, visual system, logo image URLs, and photos (assets replaced later by the owner).

## Product definition

- **Brand:** Diamond Lounge  
- **Positioning:** Private / VIP lounge inside Casino Marina Colombo (not a standalone casino floor)  
- **Games:** Texas Hold'em, Omaha Hi, Teen Patti, Andar Bahar, Blackjack, Baccarat; Omaha Hi/Lo remains optional / on request  
- **Founder:** Keep `/founder` and Jim Ramchand content unchanged for now  
- **Assets:** Keep current logo and photo URLs; update alt text and surrounding copy only  

## Brand & site config (`src/lib/site.ts`)

| Field | Value |
|---|---|
| `name` | Diamond Lounge |
| `shortName` | Diamond Lounge |
| `url` | `https://diamondlounge.lk` (placeholder until real domain) |
| `tagline` | A private lounge inside Casino Marina Colombo |
| `description` | VIP lounge at Casino Marina — poker, Teen Patti, Andar Bahar, Blackjack, Baccarat and more |
| `founder` | Jim Ramchand (unchanged) |
| `partner.name` | Casino Marina Colombo |
| `partner.url` | `https://www.casinomarina.com/` |
| Address | Casino Marina Colombo, 30 Marine Drive, Colombo 03, Sri Lanka |
| Maps query | Casino Marina Colombo Marine Drive |
| Phone | `+94 11 421 9988` (public Marina main line) |
| Email | `info@marinacolombo.com` (public Marina) |
| Alt phones | Remove Jim’s personal numbers for now; use the Marina main line only until lounge-specific numbers exist |
| Hours | Keep current evening / Sunday & Poya closed pattern until lounge hours are confirmed |
| Socials | Placeholder Diamond Lounge URLs or `#` until real accounts exist |
| Nav | Same structure; partner page href becomes `/casino-marina` |
| Footer Explore | “Majestic Pride” → “Casino Marina” linking to `/casino-marina` |

Nav/footer visible brand text becomes “Diamond Lounge” (logo image file unchanged).

## Games & editorial content (`src/lib/content.ts`)

### Games

Expand `games` to a proper multi-game list using the existing card shape (`name`, `code`, `detail`, `body`, `stakes`):

1. Texas Hold'em  
2. Omaha Hi  
3. Teen Patti  
4. Andar Bahar  
5. Blackjack  
6. Baccarat  
7. Omaha Hi/Lo (on request — keep)

Poker entries keep blinds-style stakes. Table games use limit / table-minimum language (placeholder ranges OK; mark as provisional if needed).

### Room facts & amenities

- Reword `roomFacts` away from “2 dedicated tables / 9 seats” toward lounge-accurate labels (private lounge, multi-game tables, 18+, doors open). Do not invent fake table counts.  
- Keep amenities list where still true; swap venue-specific wording (valet at Marina, etc.).

### Packages, FAQ, house values, gallery alts

- Packages: keep three tiers; reframe “The Seat” / Weekender / Series for lounge access and Marina location (not Lotus Tower / Mega Week-specific Jim’s branding).  
- FAQ: rewrite answers for Casino Marina entrance, multi-game mix, Diamond Lounge framing; update phone/address.  
- `houseValues`: drop “one game only” / Lotus Tower view framing; speak to private lounge + multi-game quality.  
- Gallery: keep `src` URLs; update `alt` text to Diamond Lounge / Marina (no Jim’s / Lotus Tower).

## Events (`src/lib/events.ts`)

- Keep event list structure, dates, images, and slug routes unless a slug is brand-locked to Jim’s.  
- Soften titles/blurbs that only make sense as Jim’s Mega Week / Cobra Turbo branding into lounge-neutral tournament / cash-game language.  
- Daily / cash games blurbs must mention the full game mix, not Hold’em-only.

Exact calendar remains provisional until the owner supplies a real Diamond Lounge schedule.

## Routes

- Move `src/app/majestic-pride/` → `src/app/casino-marina/`.  
- Rewrite page copy: Diamond Lounge as the private lounge inside Casino Marina.  
- Update every internal link from `/majestic-pride` to `/casino-marina`.  
- Add redirect `/majestic-pride` → `/casino-marina` (Next.js redirect config preferred).

## Page & component string updates

Sweep user-facing strings in:

- `src/app/layout.tsx` metadata / keywords  
- Home sections: Hero, About, GamesStrip, Structure, EventsPreview, PackagesPreview, Location, Marquee, CasinoSpectacle, CasinoShowcase, CtaBand  
- Pages: about, games, events (+ past, slug), packages, gallery, locations, bookings, faq, terms, privacy, responsible-gaming, not-found  
- Layout: Nav, Footer, LiveBar, AgeGate (if brand mentioned)  
- README brand references  

SEO titles/descriptions must say Diamond Lounge / Casino Marina Colombo, not Jim’s / Lotus Tower / Majestic Pride.

## Explicit non-goals

- No visual redesign (colors, fonts, layout, 3D scene, motion).  
- No logo or photo asset replacement.  
- No founder page rewrite.  
- No git repo / folder rename (`jims-pokerroom`).  
- No inventing unverified table counts, buy-ins, or lounge hours beyond placeholders already agreed.

## Success criteria

1. User-facing copy no longer presents the product as Jim’s Poker Room at Lotus Tower / Majestic Pride (founder page exempt).  
2. Games page and strip present the multi-game set above.  
3. `/casino-marina` works; `/majestic-pride` redirects.  
4. Contact/address/partner point at Casino Marina public details + Diamond Lounge placeholders.  
5. Existing logo and photo URLs still load; only text/alts changed.  
6. Layout and design system unchanged.

## Open items for later (owner)

- Final domain, email, phones, hours, social accounts  
- Diamond Lounge logo and real photography  
- Real event calendar and package pricing  
- Founder page decision (keep, rewrite, or remove)  
- Confirm whether Omaha Hi/Lo stays on the public games list  
