const HOST = 'https://darkgray-stork-483947.hostingersite.com/wp-content/uploads';
const HOST2 = 'https://cornflowerblue-rabbit-756428.hostingersite.com/wp-content/uploads';

export const images = {
  logo: `${HOST2}/2025/01/Jims-poker-room-gold-logo-copy-111_11zon.png`,
  logoAlt: `${HOST2}/2023/02/Jims-poker-room-gold-logo-copy-1_11zon.png`,
  about: `${HOST}/2025/03/About-us-829x1024.png`,
  room: `${HOST}/2024/12/Home.jpg`,
  chipA: `${HOST}/2025/01/poker-chip-1-new2.png`,
  chipB: `${HOST}/2025/01/poker-chip-2-new-11.png`,
  /** Verified working colourful casino imagery + room shots. */
  casino: {
    hero: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=2000&q=80',
    chips: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=1400&q=80',
    cards: 'https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=1200&q=80',
    roulette: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=1200&q=80',
    /** Room photography — replaces broken Unsplash felt/dice URLs */
    felt: `${HOST}/2024/12/Home.jpg`,
    table: `${HOST}/2025/04/Poker-at-lotus-tower-3-25.04-1-scaled.jpg`,
    night: `${HOST}/2025/12/WhatsApp-Image-2025-12-28-at-6.41.59-PM.jpeg`,
    series: `${HOST}/2026/03/WhatsApp-Image-2026-03-10-at-7.01.47-PM.jpeg`,
    weekend: `${HOST}/2026/02/WhatsApp-Image-2026-02-16-at-5.13.55-PM.jpeg`,
    cobra: `${HOST}/2025/04/Introducing-Poker-cobra-trubo-scaled.jpg`,
  },
};

/* ------------------------------------------------------------------ games */
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

/* --------------------------------------------------- tournament structure */
export const blindLevels = [
  { level: 'L1', blinds: '100 / 200', ante: '\u2014', length: '20 min' },
  { level: 'L2', blinds: '200 / 400', ante: '\u2014', length: '20 min' },
  { level: 'L3', blinds: '300 / 600', ante: '600', length: '20 min' },
  { level: 'L4', blinds: '500 / 1,000', ante: '1,000', length: '20 min' },
  { level: '\u2014', blinds: 'Late registration closes', ante: '', length: 'End of L4' },
  { level: 'L5', blinds: '800 / 1,600', ante: '1,600', length: '20 min' },
  { level: 'L6', blinds: '1,200 / 2,400', ante: '2,400', length: '20 min' },
  { level: '\u2014', blinds: 'Redraw to final table', ante: '', length: 'At 9 players' },
] as const;

/* ------------------------------------------------------------- room facts */
export const roomFacts = [
  { value: 'VIP', label: 'Private lounge' },
  { value: 'Multi', label: 'Game tables' },
  { value: '18+', label: 'Minimum age' },
  { value: '6pm', label: 'Doors open' },
] as const;

export const amenities = [
  'Professional croupiers',
  'Auto shufflers',
  'Complimentary food & beverage',
  'Tableside service',
  'Phone-in seat list',
  'Currency exchange',
  'Valet parking',
  'Non-smoking room',
  'Free WiFi',
  'Discounted hotel rates',
] as const;

/* --------------------------------------------------------------- packages */
export const packages = [
  {
    name: 'The Seat',
    price: 'Complimentary',
    for: 'Local players',
    body:
      'Walk in through Casino Marina, take a seat in the Diamond Lounge, and play. Food and beverage are on the house for anyone seated in a live game.',
    includes: [
      'Complimentary food & beverage while seated',
      'Seat reservation by phone',
      'Free valet parking at Casino Marina',
      'Access to nightly cash games and table games in the lounge',
    ],
    image: `${HOST}/2024/12/Home.jpg`,
  },
  {
    name: 'The Weekender',
    price: 'On request',
    for: 'Visiting players',
    body:
      'Two nights in Colombo built around a tournament weekend at Casino Marina, with hotel and transfers handled for you.',
    includes: [
      'Two nights at a partner hotel',
      'Airport and Marina transfers',
      'One tournament buy-in',
      'Complimentary food & beverage in the lounge',
      'Priority seating for weekend cash games',
    ],
    image: `${HOST}/2026/02/WhatsApp-Image-2026-02-16-at-5.13.55-PM.jpeg`,
    featured: true,
  },
  {
    name: 'The Series',
    price: 'On request',
    for: 'Groups and series players',
    body:
      'A full stay package for players flying in for a tournament series at Casino Marina, including travel assistance on qualifying buy-ins.',
    includes: [
      'Flight assistance on qualifying buy-ins',
      'Seven nights accommodation',
      'Scheduled tournament entries for the series',
      'Private lounge table for groups of six or more',
      'Dedicated host throughout your stay',
    ],
    image: `${HOST}/2026/03/WhatsApp-Image-2026-03-10-at-7.01.47-PM.jpeg`,
  },
] as const;

/* -------------------------------------------------------------------- faq */
export const faqs = [
  {
    q: 'Do I need to book, or can I walk in?',
    a: 'You can walk in any night we are open. Enter through Casino Marina Colombo on Marine Drive and ask for the Diamond Lounge. For a specific stake or a guaranteed seat on a busy weekend, call +94 11 421 9988 ahead and we will hold one for you.',
  },
  {
    q: 'What is the minimum age?',
    a: 'Eighteen. Bring photo ID; Casino Marina checks it at the main entrance before you reach the lounge.',
  },
  {
    q: 'Which games do you spread?',
    a: "Hold'em and Omaha run most nights. Teen Patti, Andar Bahar, Blackjack and Baccarat are available in the lounge, and Omaha Hi/Lo opens on request when there is enough interest.",
  },
  {
    q: 'What are the stakes?',
    a: 'Cash games start at 100 / 200 and run up to 500 / 1,000 depending on the night and the field. Table limits for card games and higher poker stakes can be arranged — ask the host.',
  },
  {
    q: 'Is there a dress code?',
    a: 'Smart casual. No beachwear, shorts or open sandals — Casino Marina applies its dress standard at the entrance.',
  },
  {
    q: 'Do you cover food and drinks?',
    a: 'Yes. Food and beverage are complimentary for anyone seated in a live game in the Diamond Lounge.',
  },
  {
    q: 'Can you arrange a hotel and airport transfer?',
    a: 'Yes, through our packages. Visiting players on qualifying buy-ins can have accommodation, transfers and in some cases flights arranged — talk to a host when you book.',
  },
  {
    q: 'How do I get there and where do I park?',
    a: 'Diamond Lounge is inside Casino Marina Colombo at 30 Marine Drive, Colombo 03. Valet parking at the Marina is free for players.',
  },
  {
    q: 'Are you open on Poya days?',
    a: 'No. The lounge is closed on Poya days and on Sundays, in line with Sri Lankan gaming regulations.',
  },
  {
    q: 'Can I organise a private game?',
    a: 'Yes. We can reserve a lounge table for groups of six or more with your own dealer. Give us a few days notice.',
  },
] as const;

/* ---------------------------------------------------------------- gallery */
export const gallery = [
  { src: `${HOST}/2024/12/Home.jpg`, alt: 'Diamond Lounge at Casino Marina Colombo', span: 'wide' },
  { src: `${HOST}/2025/04/Poker-at-lotus-tower-3-25.04-1-scaled.jpg`, alt: 'Tournament night in the lounge' },
  { src: `${HOST}/2025/04/Introducing-Poker-cobra-trubo-scaled.jpg`, alt: 'Turbo tournament format at Diamond Lounge' },
  { src: `${HOST}/2025/06/WhatsApp-Image-2025-06-28-at-12.04.40_7b5ef19f.jpg`, alt: 'Live entertainment at Casino Marina', span: 'tall' },
  { src: `${HOST}/2026/03/WhatsApp-Image-2026-03-10-at-7.01.47-PM.jpeg`, alt: 'Tournament series at Diamond Lounge' },
  { src: `${HOST}/2026/02/WhatsApp-Image-2026-02-16-at-5.13.55-PM.jpeg`, alt: 'Weekend deepstack final table' },
  { src: `${HOST}/2025/12/WhatsApp-Image-2025-12-28-at-6.41.59-PM.jpeg`, alt: 'Nightly cash game in the lounge', span: 'wide' },
  { src: `${HOST}/2026/02/WhatsApp-Image-2026-02-05-at-10.40.51-AM.jpeg`, alt: 'February poker weekend at Marina' },
  { src: `${HOST}/2026/01/WhatsApp-Image-2026-01-02-at-5.36.33-PM.jpeg`, alt: 'January poker weekend at Diamond Lounge' },
  { src: `${HOST}/2025/04/WhatsApp-Image-2025-04-15-at-19.06.08_0e113694.jpg`, alt: 'Beginner-friendly poker night' },
  { src: `${HOST}/2025/03/About-us-829x1024.png`, alt: 'Inside Diamond Lounge' },
] as const;

/* -------------------------------------------------------------- the house */
export const houseValues = [
  {
    title: 'A lounge, not a corner table',
    body: 'Diamond Lounge is a private room inside Casino Marina — dedicated space, proper lighting and service, with Hold\'em, table games and regional favourites under one roof.',
  },
  {
    title: 'Croupiers who deal, not chat',
    body: 'Every table is run by a professional croupier. Hands per hour is the number that decides whether a night was worth your time, and we protect it.',
  },
  {
    title: 'Stakes and games for whoever sits down',
    body: 'From 100 / 200 Hold\'em to pot-limit Omaha and table limits on Teen Patti or Baccarat — the mix changes with the crowd, not with your buy-in.',
  },
  {
    title: 'Marine Drive, done right',
    body: 'Casino Marina sits on the waterfront in Colombo 03. The lounge is where you step away from the main floor without leaving the building.',
  },
] as const;
