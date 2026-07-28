const HOST = 'https://darkgray-stork-483947.hostingersite.com/wp-content/uploads';
const HOST2 = 'https://cornflowerblue-rabbit-756428.hostingersite.com/wp-content/uploads';

export const images = {
  logo: `${HOST2}/2025/01/Jims-poker-room-gold-logo-copy-111_11zon.png`,
  logoAlt: `${HOST2}/2023/02/Jims-poker-room-gold-logo-copy-1_11zon.png`,
  about: `${HOST}/2025/03/About-us-829x1024.png`,
  room: `${HOST}/2024/12/Home.jpg`,
  chipA: `${HOST}/2025/01/poker-chip-1-new2.png`,
  chipB: `${HOST}/2025/01/poker-chip-2-new-11.png`,
  /** Colourful casino stock — used for hero atmosphere and floor showcase. */
  casino: {
    hero: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=2000&q=80',
    chips: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=1400&q=80',
    cards: 'https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=1200&q=80',
    roulette: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=1200&q=80',
    felt: 'https://images.unsplash.com/photo-1518895312237-a9e235080b74?auto=format&fit=crop&w=1400&q=80',
    dice: 'https://images.unsplash.com/photo-1528819622765-d6bcf201db90?auto=format&fit=crop&w=1000&q=80',
  },
};

/* ------------------------------------------------------------------ games */
export const games = [
  {
    name: "Texas Hold'em",
    code: 'NLH',
    detail: 'No limit',
    body:
      'The house game. Two hole cards, five community cards, no cap on what you can bet. Cash tables run every night from six, and every tournament on the calendar is Hold\u2019em unless it says otherwise.',
    stakes: ['100 / 200', '200 / 400', '500 / 1,000'],
  },
  {
    name: 'Omaha Hi',
    code: 'PLO',
    detail: 'Pot limit',
    body:
      'Four hole cards, exactly two of which play. Bigger pots, bigger swings, and the game most of our regulars move to once Hold\u2019em stops feeling loose enough.',
    stakes: ['200 / 400', '500 / 1,000'],
  },
  {
    name: 'Omaha Hi/Lo',
    code: 'PLO8',
    detail: 'Pot limit, split pot',
    body:
      'The pot splits between the best high hand and the best qualifying low. Runs on demand \u2014 call ahead and we will open a table if there is interest.',
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
  { value: '2', label: 'Dedicated tables' },
  { value: '9', label: 'Seats per table' },
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
    body: 'Walk in, buy in, play. Food and beverage are on the house for anyone seated in a live game.',
    includes: [
      'Complimentary food & beverage while seated',
      'Seat reservation by phone',
      'Free valet parking',
      'Access to all nightly cash games',
    ],
    image: `${HOST2}/2024/12/470191830_1412180076754766_147858955176354662_n.jpg`,
  },
  {
    name: 'The Weekender',
    price: 'On request',
    for: 'Visiting players',
    body: 'Two nights in Colombo built around a tournament weekend, with the hotel and transfers handled for you.',
    includes: [
      'Two nights at a partner hotel',
      'Airport and venue transfers',
      'One tournament buy-in',
      'Complimentary food & beverage',
      'Guaranteed seat in weekend cash games',
    ],
    image: `${HOST2}/2025/01/WhatsApp-Image-2025-01-29-at-12.58.34_35feeb77.jpg`,
    featured: true,
  },
  {
    name: 'The Series',
    price: 'On request',
    for: 'Groups and Mega Week',
    body: 'A full Mega Week package for players flying in for the series, including flights on qualifying buy-ins.',
    includes: [
      'Flight assistance on qualifying buy-ins',
      'Seven nights accommodation',
      'All Mega Week tournament entries',
      'Private table for groups of six or more',
      'Dedicated host throughout the series',
    ],
    image: `${HOST2}/2024/12/471324131_1421337012505739_7647817090469735492_n.jpg`,
  },
] as const;

/* -------------------------------------------------------------------- faq */
export const faqs = [
  {
    q: 'Do I need to book, or can I walk in?',
    a: 'You can walk in any night we are open. If you want a specific stake or a seat during Mega Week, call +94 70 779 8888 ahead and we will hold one \u2014 the room only has two tables, so busy nights fill.',
  },
  {
    q: 'What is the minimum age?',
    a: 'Eighteen. Bring photo ID; the casino checks it at the entrance to Majestic Pride before you reach the poker room.',
  },
  {
    q: 'Which games do you spread?',
    a: "Texas Hold'em is the house game and runs every night. Pot limit Omaha Hi runs most nights, and we will open an Omaha Hi/Lo table on request if there is enough interest.",
  },
  {
    q: 'What are the stakes?',
    a: 'Cash games start at 100 / 200 and run up to 500 / 1,000 depending on the night and the field. Higher stakes can be arranged for a private table.',
  },
  {
    q: 'Is there a dress code?',
    a: 'Smart casual. No beachwear, shorts or open sandals \u2014 Majestic Pride applies its own dress standard at the entrance.',
  },
  {
    q: 'Do you cover food and drinks?',
    a: 'Yes. Food and beverage are complimentary for anyone seated in a live game.',
  },
  {
    q: 'Can you arrange a hotel and airport transfer?',
    a: 'Yes, through our packages. Visiting players on qualifying buy-ins can have accommodation, transfers and in some cases flights arranged \u2014 talk to a host when you book.',
  },
  {
    q: 'How do I get there and where do I park?',
    a: 'The room is on level AC6 of Colombo Lotus Tower, inside Majestic Pride Casino. Valet parking at the tower is free for players.',
  },
  {
    q: 'Are you open on Poya days?',
    a: 'No. The room is closed on Poya days and on Sundays, in line with Sri Lankan gaming regulations.',
  },
  {
    q: 'Can I organise a private game?',
    a: 'Yes. We can close a table for groups of six or more with your own dealer. Give us a few days notice.',
  },
] as const;

/* ---------------------------------------------------------------- gallery */
export const gallery = [
  { src: `${HOST}/2024/12/Home.jpg`, alt: 'The poker room at Lotus Tower', span: 'wide' },
  { src: `${HOST}/2025/04/Poker-at-lotus-tower-3-25.04-1-scaled.jpg`, alt: 'Tournament night in progress' },
  { src: `${HOST}/2025/04/Introducing-Poker-cobra-trubo-scaled.jpg`, alt: 'Poker Cobra Turbo' },
  { src: `${HOST}/2025/06/WhatsApp-Image-2025-06-28-at-12.04.40_7b5ef19f.jpg`, alt: 'Rookantha Gunathilake live at the room', span: 'tall' },
  { src: `${HOST}/2026/03/WhatsApp-Image-2026-03-10-at-7.01.47-PM.jpeg`, alt: 'Poker Mega Week' },
  { src: `${HOST}/2026/02/WhatsApp-Image-2026-02-16-at-5.13.55-PM.jpeg`, alt: 'Weekend deepstack final table' },
  { src: `${HOST2}/2024/12/471324131_1421337012505739_7647817090469735492_n.jpg`, alt: 'Players at the table', span: 'wide' },
  { src: `${HOST}/2026/02/WhatsApp-Image-2026-02-05-at-10.40.51-AM.jpeg`, alt: 'February poker weekend' },
  { src: `${HOST2}/2024/12/470191830_1412180076754766_147858955176354662_n.jpg`, alt: 'The room on a busy night' },
  { src: `${HOST}/2026/01/WhatsApp-Image-2026-01-02-at-5.36.33-PM.jpeg`, alt: 'January poker weekend' },
  { src: `${HOST}/2025/04/WhatsApp-Image-2025-04-15-at-19.06.08_0e113694.jpg`, alt: 'Poker For All beginner night' },
  { src: `${HOST}/2025/12/WhatsApp-Image-2025-12-28-at-6.41.59-PM.jpeg`, alt: 'Nightly cash game' },
] as const;

/* -------------------------------------------------------------- the house */
export const houseValues = [
  {
    title: 'One game, done properly',
    body: 'We are not a casino floor with a poker table pushed into the corner. The whole room exists for cards, which is why the structures are published, the dealers are trained and the games actually run on time.',
  },
  {
    title: 'Croupiers who deal, not chat',
    body: 'Every table is run by a professional croupier. Hands per hour is the number that decides whether a night was worth your time, and we protect it.',
  },
  {
    title: 'Stakes for whoever sits down',
    body: 'A first-timer on 100 / 200 and a regular at 500 / 1,000 are in the same room on the same night. Nobody gets moved off a table for playing small.',
  },
  {
    title: 'A view nobody else has',
    body: 'Level AC6 of Lotus Tower, two hundred metres over Colombo. It is a good place to lose a flip and still enjoy the evening.',
  },
] as const;
