export type PokerEvent = {
  slug: string;
  title: string;
  kicker: string;
  date: string;          // ISO
  dateLabel: string;
  buyIn: string;
  stack: string;
  format: string;
  blurb: string;
  image: string;
  status: 'upcoming' | 'past';
  featured?: boolean;
};

const HOST = 'https://darkgray-stork-483947.hostingersite.com/wp-content/uploads';

export const events: PokerEvent[] = [
  {
    slug: 'poker-cobra-turbo',
    title: 'Poker Cobra Turbo',
    kicker: 'Tournament night',
    date: '2026-08-08T19:00:00+05:30',
    dateLabel: '8 August 2026 · 7:00 pm',
    buyIn: 'LKR 25,000 + 5,000',
    stack: '30,000 starting stack',
    format: '12-minute levels · one re-entry',
    blurb:
      'The fastest structure on the calendar. Twelve-minute levels, a shallow start and a single re-entry through late registration — built for players who would rather gamble than grind.',
    image: `${HOST}/2025/04/Introducing-Poker-cobra-trubo-scaled.jpg`,
    status: 'upcoming',
    featured: true,
  },
  {
    slug: 'poker-mega-week',
    title: 'Lounge Mega Week',
    kicker: 'Seven nights, seven structures',
    date: '2026-08-03T19:00:00+05:30',
    dateLabel: '3 – 9 August 2026',
    buyIn: 'From LKR 10,000',
    stack: 'Varies by event',
    format: 'Seven consecutive tournament nights',
    blurb:
      'Seven nights of tournament poker at Diamond Lounge, Casino Marina — one structure each evening, closing with the Cobra Turbo. Day-one entries carry a leaderboard score across the whole series.',
    image: `${HOST}/2026/03/WhatsApp-Image-2026-03-10-at-7.01.47-PM.jpeg`,
    status: 'upcoming',
    featured: true,
  },
  {
    slug: 'weekend-deepstack',
    title: 'Weekend Deepstack',
    kicker: 'Every Saturday',
    date: '2026-08-01T18:30:00+05:30',
    dateLabel: 'Every Saturday · 6:30 pm',
    buyIn: 'LKR 15,000',
    stack: '50,000 starting stack',
    format: '30-minute levels · unlimited re-entry to L6',
    blurb:
      'The deepest structure we run. Fifty big blinds to start, half-hour levels and late registration through level six, so there is real poker to play after the bubble.',
    image: `${HOST}/2026/02/WhatsApp-Image-2026-02-16-at-5.13.55-PM.jpeg`,
    status: 'upcoming',
  },
  {
    slug: 'daily-games',
    title: 'Daily Cash Games',
    kicker: 'Running now',
    date: '2026-07-24T18:00:00+05:30',
    dateLabel: 'Nightly from 6:00 pm',
    buyIn: 'From LKR 10,000',
    stack: '100 big blinds recommended',
    format: "Hold'em · Omaha · Teen Patti · Andar Bahar · Blackjack · Baccarat",
    blurb:
      'Cash tables open at six with the full mix — Hold\'em, Omaha, Teen Patti, Andar Bahar, Blackjack and Baccarat — running until the last seat empties. Call ahead and we will hold a seat at the stake you want.',
    image: `${HOST}/2025/12/WhatsApp-Image-2025-12-28-at-6.41.59-PM.jpeg`,
    status: 'upcoming',
  },
  {
    slug: 'poker-for-all',
    title: 'Poker For All',
    kicker: 'Beginner friendly',
    date: '2026-07-30T19:00:00+05:30',
    dateLabel: 'Last Thursday monthly · 7:00 pm',
    buyIn: 'LKR 5,000',
    stack: '20,000 starting stack',
    format: 'Freezeout · dealer-assisted table',
    blurb:
      'A low buy-in freezeout for people playing their first live tournament. Dealers explain the action as it happens and nobody at the table minds the questions.',
    image: `${HOST}/2025/04/WhatsApp-Image-2025-04-15-at-19.06.08_0e113694.jpg`,
    status: 'upcoming',
  },
  {
    slug: 'rookantha-live',
    title: 'A Night of Legends',
    kicker: 'Rookantha Gunathilake & Band ANTS',
    date: '2025-06-28T20:00:00+05:30',
    dateLabel: '28 June 2025',
    buyIn: 'Free entry',
    stack: '—',
    format: 'Live music night',
    blurb:
      'Rookantha Gunathilake played the room with Band ANTS while the cash tables ran behind him. Cards and a full house, in both senses.',
    image: `${HOST}/2025/06/WhatsApp-Image-2025-06-28-at-12.04.40_7b5ef19f.jpg`,
    status: 'past',
  },
  {
    slug: 'non-stop-poker-action',
    title: 'Non-Stop Poker Action',
    kicker: 'Holiday series',
    date: '2025-04-25T19:00:00+05:30',
    dateLabel: '25 April 2025',
    buyIn: 'LKR 20,000',
    stack: '40,000 starting stack',
    format: '20-minute levels',
    blurb:
      'Three days of continuous tournament and cash action across the room, timed to the Sinhala and Tamil New Year holiday.',
    image: `${HOST}/2025/04/Poker-at-lotus-tower-3-25.04-1-scaled.jpg`,
    status: 'past',
  },
  {
    slug: 'poker-weekend-january',
    title: 'January Poker Weekend',
    kicker: 'New year opener',
    date: '2026-01-02T19:00:00+05:30',
    dateLabel: '2 January 2026',
    buyIn: 'LKR 15,000',
    stack: '30,000 starting stack',
    format: 'Freezeout',
    blurb:
      'The first structure of the year, played to a nine-handed final table that went past four in the morning.',
    image: `${HOST}/2026/01/WhatsApp-Image-2026-01-02-at-5.36.33-PM.jpeg`,
    status: 'past',
  },
  {
    slug: 'poker-weekend-february',
    title: 'February Poker Weekend',
    kicker: 'Monthly major',
    date: '2026-02-05T19:00:00+05:30',
    dateLabel: '5 February 2026',
    buyIn: 'LKR 15,000',
    stack: '30,000 starting stack',
    format: '25-minute levels · one re-entry',
    blurb:
      'A full field across two starting flights, merging into a single day-two on the Sunday.',
    image: `${HOST}/2026/02/WhatsApp-Image-2026-02-05-at-10.40.51-AM.jpeg`,
    status: 'past',
  },
];

export const upcomingEvents = events.filter((e) => e.status === 'upcoming');
export const pastEvents = events.filter((e) => e.status === 'past');
export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
