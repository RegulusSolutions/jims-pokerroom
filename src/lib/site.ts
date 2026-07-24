export const site = {
  name: "Jim's Poker Room",
  shortName: 'Jims Poker Room',
  url: 'https://jimspokerroom.lk',
  tagline: "Sri Lanka's dedicated poker room",
  description:
    "Texas Hold'em and Omaha cash games and structured tournaments inside Majestic Pride at Colombo Lotus Tower. Nine seats, professional croupiers, seven nights a week.",
  founder: 'Jim Ramchand',

  contact: {
    phone: '+94 70 779 8888',
    phoneHref: 'tel:+94707798888',
    altPhone: '+94 77 365 4615',
    altPhoneHref: 'tel:+94773654615',
    email: 'jimramchand@gmail.com',
    whatsapp: 'https://wa.me/94707798888',
  },

  address: {
    venue: 'Majestic Pride Casino, Level AC6',
    building: 'Colombo Lotus Tower',
    street: '320 D. R. Wijewardena Mawatha',
    city: 'Colombo 01000',
    country: 'Sri Lanka',
    mapsQuery: 'Colombo+Lotus+Tower+Majestic+Pride+Casino',
    lat: 6.9271,
    lng: 79.8612,
  },

  hours: [
    { day: 'Monday – Thursday', time: '6:00 pm – 4:00 am' },
    { day: 'Friday – Saturday', time: '6:00 pm – late' },
    { day: 'Sunday', time: 'Closed' },
    { day: 'Poya days', time: 'Closed' },
  ],

  social: {
    facebook: 'https://www.facebook.com/jimspokerroom/',
    instagram: 'https://www.instagram.com/jimspokerroom/',
    linkedin: 'https://www.linkedin.com/in/jim-ramchand-9097b19a/',
  },

  partner: {
    name: 'Majestic Pride Casino',
    url: 'https://majesticpridelanka.com/',
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
    { label: 'Majestic Pride', href: '/majestic-pride' },
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
