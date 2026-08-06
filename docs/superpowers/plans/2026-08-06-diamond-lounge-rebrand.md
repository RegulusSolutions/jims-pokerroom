# Diamond Lounge Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand all user-facing site content from Jim's Poker Room (Lotus Tower / Majestic Pride) to Diamond Lounge (Casino Marina Colombo), including an expanded multi-game list, without changing layout or design.

**Architecture:** Content lives in typed modules (`src/lib/site.ts`, `content.ts`, `events.ts`). Pages and sections mostly consume those modules or hardcode venue/brand strings. Update the data modules first, then sweep remaining hardcoded strings, then rename the partner route and add a redirect.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind. No CMS. Verification = ripgrep brand sweep + `npm run build`.

## Global Constraints

- Content and copy only — no visual redesign, no Tailwind token changes, no 3D/layout restructure.
- Keep existing logo and photo URLs; update alt text and surrounding copy only.
- Keep `/founder` Jim Ramchand narrative unchanged (venue lines on that page may still mention old location until a later pass).
- Do not invent fake table counts, buy-ins, or lounge hours beyond values in the spec.
- Do not rename the git repo folder (`jims-pokerroom`).
- Spec: `docs/superpowers/specs/2026-08-06-diamond-lounge-rebrand-design.md`.

---

## File map

| File | Responsibility |
|---|---|
| `src/lib/site.ts` | Brand name, URL, contact, address, hours, socials, partner, nav/footer links |
| `src/lib/content.ts` | Games, roomFacts, amenities, packages, faqs, gallery alts, houseValues, image URL map |
| `src/lib/events.ts` | Event titles/kickers/blurbs (images/slugs kept) |
| `src/app/casino-marina/page.tsx` | Partner venue page (moved from `majestic-pride`) |
| `next.config.mjs` | Redirect `/majestic-pride` → `/casino-marina` |
| Layout/sections/pages listed in Tasks 4–6 | Hardcoded brand/venue strings |

---

### Task 1: Update `site.ts` brand, contact, partner, nav

**Files:**
- Modify: `src/lib/site.ts`
- Test: ripgrep verification (no unit test suite for content)

**Interfaces:**
- Consumes: none
- Produces: `site` object with Diamond Lounge fields; `footerNav.Explore` Casino Marina link → `/casino-marina`

- [ ] **Step 1: Replace `site` export contents**

Overwrite the `site` constant (keep `as const`) with:

```ts
export const site = {
  name: 'Diamond Lounge',
  shortName: 'Diamond Lounge',
  url: 'https://diamondlounge.lk',
  tagline: 'A private lounge inside Casino Marina Colombo',
  description:
    'VIP lounge experience at Casino Marina Colombo — Texas Hold\'em, Teen Patti, Andar Bahar, Blackjack, Baccarat and more.',
  founder: 'Jim Ramchand',

  contact: {
    phone: '+94 11 421 9988',
    phoneHref: 'tel:+94114219988',
    email: 'info@marinacolombo.com',
    whatsapp: 'https://wa.me/94114219988',
  },

  address: {
    venue: 'Casino Marina Colombo',
    building: 'Casino Marina',
    street: '30 Marine Drive',
    city: 'Colombo 03',
    country: 'Sri Lanka',
    mapsQuery: 'Casino+Marina+Colombo+Marine+Drive',
    lat: 6.9271,
    lng: 79.8449,
  },

  hours: [
    { day: 'Monday – Thursday', time: '6:00 pm – 4:00 am' },
    { day: 'Friday – Saturday', time: '6:00 pm – late' },
    { day: 'Sunday', time: 'Closed' },
    { day: 'Poya days', time: 'Closed' },
  ],

  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },

  partner: {
    name: 'Casino Marina Colombo',
    url: 'https://www.casinomarina.com/',
  },
} as const;
```

Remove `altPhone` / `altPhoneHref` if present. Keep `nav` array unchanged. In `footerNav.Explore`, change:

```ts
{ label: 'Casino Marina', href: '/casino-marina' },
```

(replace the Majestic Pride entry).

- [ ] **Step 2: Grep for leftover Jim contact fields in site.ts**

Run:

```bash
rg -n "Jim's Poker|jimspokerroom|Majestic Pride|Lotus Tower|altPhone" src/lib/site.ts
```

Expected: no matches (founder name `Jim Ramchand` may remain — that is intentional).

- [ ] **Step 3: Commit**

```bash
git add src/lib/site.ts
git commit -m "content: rebrand site.ts to Diamond Lounge at Casino Marina"
```

---

### Task 2: Expand games and rewrite `content.ts` editorial data

**Files:**
- Modify: `src/lib/content.ts`

**Interfaces:**
- Consumes: none
- Produces: `games` array with 7 entries (codes: `NLH`, `PLO`, `TP`, `AB`, `BJ`, `BAC`, `PLO8`); updated `roomFacts`, `packages`, `faqs`, `gallery` alts, `houseValues`
- Keep `images` URL strings unchanged (including filenames that contain `Jims`)

- [ ] **Step 1: Replace `games` array**

```ts
export const games = [
  {
    name: "Texas Hold'em",
    code: 'NLH',
    detail: 'No limit',
    body:
      'Two hole cards, five community cards, no cap on what you can bet. Cash tables run every night from six, and every tournament on the calendar is Hold\'em unless it says otherwise.',
    stakes: ['100 / 200', '200 / 400', '500 / 1,000'],
  },
  {
    name: 'Omaha Hi',
    code: 'PLO',
    detail: 'Pot limit',
    body:
      'Four hole cards, exactly two of which play. Bigger pots, bigger swings — the game regulars move to when Hold\'em stops feeling loose enough.',
    stakes: ['200 / 400', '500 / 1,000'],
  },
  {
    name: 'Teen Patti',
    code: 'TP',
    detail: 'Three cards',
    body:
      'Classic three-card showdown with blind, chaal and show. Fast rounds, familiar to most players walking in from the Marina floor.',
    stakes: ['Table limits on request'],
  },
  {
    name: 'Andar Bahar',
    code: 'AB',
    detail: 'Side betting',
    body:
      'One joker, two sides. Cards deal until a match lands on Andar or Bahar. Simple to learn, quick to play, open whenever the lounge is live.',
    stakes: ['Table limits on request'],
  },
  {
    name: 'Blackjack',
    code: 'BJ',
    detail: 'Table game',
    body:
      'Hit, stand, double, split — beat the dealer to 21 without going over. Standard casino rules with lounge-side service at the table.',
    stakes: ['Table limits on request'],
  },
  {
    name: 'Baccarat',
    code: 'BAC',
    detail: 'Table game',
    body:
      'Player, Banker or Tie. Clean rounds, clear odds, and the calm pace a private lounge is built for.',
    stakes: ['Table limits on request'],
  },
  {
    name: 'Omaha Hi/Lo',
    code: 'PLO8',
    detail: 'Pot limit, split pot',
    body:
      'The pot splits between the best high hand and the best qualifying low. Opens on request when there is enough interest.',
    stakes: ['On request'],
  },
] as const;
```

- [ ] **Step 2: Update `roomFacts`**

```ts
export const roomFacts = [
  { value: 'VIP', label: 'Private lounge' },
  { value: 'Multi', label: 'Game tables' },
  { value: '18+', label: 'Minimum age' },
  { value: '6pm', label: 'Doors open' },
] as const;
```

- [ ] **Step 3: Rewrite packages, faqs, gallery alts, houseValues**

- Packages: keep three objects and image URLs; reframe bodies/includes for Diamond Lounge / Casino Marina (no Mega Week / Lotus Tower). Example first package name can stay `The Seat` or become `Lounge Access` — prefer keeping names, rewriting bodies.
- FAQs: replace Majestic Pride / Lotus Tower / two-tables answers with Casino Marina entrance, multi-game mix, phone `+94 11 421 9988`, Marine Drive address. Keep the same question count (~10).
- Gallery: keep every `src`; change `alt` strings to Diamond Lounge / Casino Marina (no Jim's / Lotus Tower).
- `houseValues`: four items about private lounge quality, professional dealers, multi-game stakes, Marina setting — not “one game only” or Lotus Tower altitude.

- [ ] **Step 4: Verify games count and old venue strings**

```bash
rg -n "name: '" src/lib/content.ts | head -20
rg -n "Majestic Pride|Lotus Tower|Jim's Poker|Mega Week" src/lib/content.ts
```

Expected: seven game `name` entries; no Majestic/Lotus/Jim's Poker/Mega Week in content.ts (logo URL filenames containing `Jims` are OK).

- [ ] **Step 5: Commit**

```bash
git add src/lib/content.ts
git commit -m "content: expand Diamond Lounge games and rewrite editorial data"
```

---

### Task 3: Soften events copy in `events.ts`

**Files:**
- Modify: `src/lib/events.ts`

**Interfaces:**
- Consumes: none
- Produces: same `PokerEvent` type and slugs; updated titles/kickers/blurbs where venue/brand-locked

- [ ] **Step 1: Update event strings (keep slugs, dates, images, buy-ins)**

Apply these content edits (exact field replacements):

| slug | fields to change |
|---|---|
| `poker-cobra-turbo` | `kicker`: `'Tournament night'`; soften blurb to drop Mega Week-as-Jim's framing if present |
| `poker-mega-week` | `title`: `'Lounge Mega Week'`; `kicker`: `'Seven nights, seven structures'`; blurb: series at Diamond Lounge / Casino Marina |
| `daily-games` | `format`: `"Hold'em · Omaha · Teen Patti · Andar Bahar · Blackjack · Baccarat"`; blurb mentions full mix |
| `non-stop-poker-action` | `kicker`: `'Holiday series'` (was Lotus Tower series); blurb without Lotus Tower |

Leave past music/weekend events mostly intact except strip “Lotus Tower” / “Jim's” if they appear.

- [ ] **Step 2: Verify**

```bash
rg -n "Lotus Tower|Jim's|Majestic" src/lib/events.ts
```

Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add src/lib/events.ts
git commit -m "content: retarget event copy for Diamond Lounge"
```

---

### Task 4: Rename partner route + redirect

**Files:**
- Create: `src/app/casino-marina/page.tsx` (content from majestic-pride, rewritten)
- Delete: `src/app/majestic-pride/page.tsx` (and folder)
- Modify: `next.config.mjs`

**Interfaces:**
- Consumes: `site`, `images` from lib
- Produces: route `/casino-marina`; permanent redirect from `/majestic-pride`

- [ ] **Step 1: Create `src/app/casino-marina/page.tsx`**

Copy structure from `src/app/majestic-pride/page.tsx`. Change:

```ts
export const metadata: Metadata = {
  title: 'Casino Marina Colombo',
  description:
    'Diamond Lounge is a private VIP lounge inside Casino Marina Colombo on Marine Drive.',
};

export default function CasinoMarinaPage() {
  // PageHero lines: ['Inside', { text: 'Casino Marina.', gold: true }]
  // body: Diamond Lounge occupies its own lounge space within Casino Marina Colombo.
  // Copy: Marina is the casino around the lounge; Diamond Lounge is the private multi-game room.
  // CTA: Visit Casino Marina → site.partner.url
  // Steps: Arrive at 30 Marine Drive → Enter Casino Marina → Ask for Diamond Lounge
}
```

Keep the same layout components (`PageHero`, `Reveal`, `Atmosphere`, `CtaBand`, grid, image). Only rewrite text/alts/metadata/function name.

- [ ] **Step 2: Delete old route**

Delete `src/app/majestic-pride/page.tsx` (and empty folder).

- [ ] **Step 3: Add redirect in `next.config.mjs`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'darkgray-stork-483947.hostingersite.com' },
      { protocol: 'https', hostname: 'cornflowerblue-rabbit-756428.hostingersite.com' },
      { protocol: 'https', hostname: 'jimspokerroom.lk' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/majestic-pride',
        destination: '/casino-marina',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
```

- [ ] **Step 4: Commit**

```bash
git add src/app/casino-marina/page.tsx src/app/majestic-pride next.config.mjs
git commit -m "feat: replace Majestic Pride page with Casino Marina route"
```

---

### Task 5: Layout chrome — Nav, Footer, LiveBar, layout metadata

**Files:**
- Modify: `src/components/layout/Nav.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/layout/LiveBar.tsx`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `site` from Task 1
- Produces: visible “Diamond Lounge” chrome; SEO keywords for lounge + Marina

- [ ] **Step 1: Nav brand text**

In `Nav.tsx`, replace hardcoded Jim's / Poker Room spans with:

```tsx
<span className="font-display text-[1.02rem] uppercase tracking-[0.16em] text-bone">
  Diamond
</span>
<span className="font-display text-[1.02rem] uppercase tracking-[0.16em] text-gold-500 transition-colors group-hover:text-gold-200">
  Lounge
</span>
```

Keep `aria-label={site.name}`.

- [ ] **Step 2: Footer brand + tagline line**

Replace Jim's Poker Room heading with Diamond Lounge (gold on “Lounge”). Replace Lotus Tower tagline sentence with something that uses `site.tagline` or hardcodes Marina Drive.

- [ ] **Step 3: LiveBar**

Replace `Lotus Tower · AC6` with `Casino Marina · Colombo`.

- [ ] **Step 4: `layout.tsx` metadata**

```ts
title: {
  default: `${site.name} — Casino Marina Colombo`,
  template: `%s — ${site.name}`,
},
keywords: [
  'Diamond Lounge',
  'Casino Marina Colombo',
  'VIP lounge Colombo',
  "Texas Hold'em Colombo",
  'Teen Patti Colombo',
  'Blackjack Baccarat Colombo',
],
openGraph: {
  // ...
  title: `${site.name} — Casino Marina Colombo`,
  // keep siteName/description/url from site
},
```

- [ ] **Step 5: Verify + commit**

```bash
rg -n "Jim|Lotus|Majestic|Poker Room" src/components/layout src/app/layout.tsx
```

Expected: no Jim's Poker Room / Lotus / Majestic in these files.

```bash
git add src/components/layout/Nav.tsx src/components/layout/Footer.tsx src/components/layout/LiveBar.tsx src/app/layout.tsx
git commit -m "content: Diamond Lounge chrome and SEO metadata"
```

---

### Task 6: Home sections + remaining pages string sweep

**Files:**
- Modify home sections: `src/components/sections/Hero.tsx`, `About.tsx`, `GamesStrip.tsx`, `Structure.tsx`, `Location.tsx`, `src/app/page.tsx` (Marquee items), `src/components/ui/CasinoSpectacle.tsx`, and any other section grep hits
- Modify pages: `about`, `games`, `events`, `events/past`, `packages`, `gallery`, `locations`, `bookings`, `faq`, `terms`, `privacy`, `responsible-gaming`
- Modify: `src/components/ui/BookingForm.tsx`
- Modify: `README.md`
- Do **not** rewrite founder narrative in `src/app/founder/page.tsx` (exempt). Optional: change only the Venue fact if it hardcodes Majestic — prefer leave as-is per spec.

**Interfaces:**
- Consumes: `games`, `site` from Tasks 1–2
- Produces: no user-facing Jim's Poker Room / Lotus Tower / Majestic Pride outside founder page and intentional image URL filenames

- [ ] **Step 1: Run inventory grep**

```bash
rg -n "Jim|Lotus|Majestic|poker room|jimspokerroom" src README.md --glob '!**/founder/**'
```

Work down every hit outside `src/app/founder/`.

- [ ] **Step 2: Key heading replacements (exact)**

`Hero.tsx`:

```tsx
lines={[{ text: 'Colombo\'s' }, { text: 'private lounge.', gold: true }]}
```

`GamesStrip.tsx` SectionHeading:

```tsx
title="Seven games,"
gold="one lounge."
body="Hold'em and Omaha share the felt with Teen Patti, Andar Bahar, Blackjack and Baccarat — all inside Diamond Lounge at Casino Marina."
```

(`games.map` already renders all games; 3-column grid stays — content-only.)

`page.tsx` Marquee: replace `Lotus Tower AC6` with `Casino Marina`.

`Location.tsx` / `locations/page.tsx`: Marine Drive directions; map title `Map to Diamond Lounge`; remove AC6 / Lotus Tower / Majestic Pride.

`About.tsx` + `about/page.tsx`: private lounge / multi-game / Casino Marina; drop Jim's exclusive poker-room framing.

`CasinoSpectacle.tsx`: replace Lotus Tower · AC6 and “Est. poker room” / “Poker Room” labels with Diamond Lounge / Casino Marina wording.

`Structure.tsx`: replace `Jim's · AC6` with `Diamond Lounge`.

`BookingForm.tsx` + bookings/terms/privacy/responsible-gaming: Casino Marina entrance ID checks.

Page `metadata.description` strings on games/events/packages/gallery/faq/bookings/locations: use Diamond Lounge + Casino Marina.

- [ ] **Step 3: Full brand sweep**

```bash
rg -n "Jim's Poker|jimspokerroom|Majestic Pride|Lotus Tower|Lotus Tower" src README.md
```

Expected matches only in:
- `src/app/founder/page.tsx` (exempt)
- Image URL path segments containing `Jims` in `content.ts`
- Possibly comments — clean comments that claim Lotus Tower as current venue

- [ ] **Step 4: Build**

```bash
npm run build
```

Expected: success, no TypeScript errors (watch for removed `altPhone` references — update any component that read `site.contact.altPhone`).

```bash
rg -n "altPhone" src
```

If hits remain, remove or switch to `site.contact.phone`.

- [ ] **Step 5: Commit**

```bash
git add src README.md
git commit -m "content: complete Diamond Lounge copy sweep across pages"
```

---

### Task 7: Final acceptance check

**Files:** none new

- [ ] **Step 1: Success-criteria grep**

```bash
rg -n "Jim's Poker Room|Majestic Pride|Lotus Tower|jimspokerroom\.lk" src README.md
```

Document remaining hits; only founder page + image filename URLs allowed.

- [ ] **Step 2: Manual smoke (dev server)**

```bash
npm run dev
```

Check:
1. Home hero / nav / footer say Diamond Lounge  
2. `/games` lists all seven games  
3. `/casino-marina` loads  
4. `/majestic-pride` redirects to `/casino-marina`  
5. `/locations` shows Marine Drive / Casino Marina  
6. `/founder` still shows Jim Ramchand  

- [ ] **Step 3: Final commit if any cleanup**

```bash
git add -A
git status
# commit only if leftover fixes remain
git commit -m "chore: Diamond Lounge rebrand acceptance cleanup"
```

---

## Spec coverage checklist

| Spec requirement | Task |
|---|---|
| `site.ts` brand/contact/partner | Task 1 |
| Expand games + content editorial | Task 2 |
| Events soften | Task 3 |
| `/casino-marina` + redirect | Task 4 |
| Nav/Footer/SEO | Task 5 |
| Page/section string sweep + README | Task 6 |
| Success criteria verification | Task 7 |
| Founder unchanged | Explicit skip in Task 6 |
| Logo/photos kept | Tasks 2–6 (URLs untouched) |
| No visual redesign | Global constraints |

## Self-review notes

- No TBD placeholders in task steps.  
- `GamesStrip` maps all `games`; expanding to 7 cards is intentional and does not require a layout redesign.  
- Lat/lng for Marina approximate (`6.9271, 79.8449`); mapsQuery string is the primary map driver.  
- Social `#` placeholders match spec until real accounts exist.  
