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

export const nav = [
  { label: 'The Room', href: '/about' },
  { label: 'Games', href: '/games' },
  { label: 'Events', href: '/events' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Find Us', href: '/locations' },
] as const;

export const footerNav = {
  Explore: [
    { label: 'About the room', href: '/about' },
    { label: 'Founder', href: '/founder' },
    { label: 'Games & stakes', href: '/games' },
    { label: 'Casino Marina', href: '/casino-marina' },
  ],
  Play: [
    { label: 'Upcoming events', href: '/events' },
    { label: 'Past events', href: '/events/past' },
    { label: 'Packages', href: '/packages' },
    { label: 'Reserve a seat', href: '/bookings' },
  ],
  Info: [
    { label: 'Find us', href: '/locations' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Responsible gaming', href: '/responsible-gaming' },
  ],
} as const;
