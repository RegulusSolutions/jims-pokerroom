import type { Metadata } from 'next';
import { MapPin, Clock, Phone, Car, Plane, Mail } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBand from '@/components/ui/CtaBand';
import Atmosphere from '@/components/ui/Atmosphere';
import { site } from '@/lib/site';
import { images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Find us',
  description: `${site.name} is on level AC6 of Colombo Lotus Tower, inside Majestic Pride Casino. Directions, hours and parking.`,
};

const gettingHere = [
  {
    Icon: Car,
    t: 'By car',
    b: 'Enter from D. R. Wijewardena Mawatha. Valet parking at the tower is free for players — mention the poker room.',
  },
  {
    Icon: Plane,
    t: 'From the airport',
    b: 'Bandaranaike International is about 45 minutes by expressway. Ask a host and we will arrange the transfer.',
  },
  {
    Icon: MapPin,
    t: 'Once inside',
    b: 'Take the lift to AC6 and follow signs for Majestic Pride. The poker room is on the same level.',
  },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        label="Find us"
        lines={['Level AC6,', { text: 'Lotus Tower.', gold: true }]}
        body="Two hundred metres above Colombo, inside Majestic Pride Casino. You can see the building from most of the city, which makes it hard to get lost."
        image={images.casino.felt}
      />

      <section className="relative overflow-hidden pb-24">
        <Atmosphere intensity="soft" />
        <div className="shell relative">
          <Reveal>
            <div className="bracket photo-frame h-[440px] sm:h-[520px]">
              <iframe
                title="Map to Jim's Poker Room"
                src={`https://www.google.com/maps?q=${site.address.mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.85] invert-[0.92] hue-rotate-[190deg] contrast-[0.95]"
              />
            </div>
          </Reveal>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {[
              {
                Icon: MapPin,
                t: 'Address',
                lines: [
                  site.address.venue,
                  site.address.building,
                  site.address.street,
                  `${site.address.city}, ${site.address.country}`,
                ],
              },
              { Icon: Clock, t: 'Opening hours', lines: site.hours.map((h) => `${h.day} — ${h.time}`) },
              {
                Icon: Phone,
                t: 'Reservations',
                lines: [site.contact.phone, site.contact.altPhone, site.contact.email],
              },
            ].map(({ Icon, t, lines }, i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="velvet h-full p-8">
                  <Icon size={17} strokeWidth={1.3} className="mb-5 text-gold-500" />
                  <p className="label mb-4">{t}</p>
                  {lines.map((l) => (
                    <p key={l} className="text-[0.88rem] leading-relaxed text-bone/60">
                      {l}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-gold-500/15 felt-band py-28">
        <Atmosphere intensity="rich" className="opacity-50" />
        <div className="shell relative">
          <SectionHeading label="Getting here" title="Three ways" gold="in." />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {gettingHere.map(({ Icon, t, b }, i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="velvet h-full p-9 transition-all duration-500 hover:border-gold-500/50">
                  <Icon size={18} strokeWidth={1.3} className="mb-6 text-gold-500" />
                  <h3 className="h-display text-[1.35rem]">{t}</h3>
                  <p className="lede mt-4 text-[0.88rem]">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="mt-14 flex flex-wrap gap-3">
              <a href={site.contact.phoneHref} className="btn btn-solid">
                Call the room
              </a>
              <a href={`mailto:${site.contact.email}`} className="btn inline-flex items-center gap-2">
                <Mail size={14} strokeWidth={1.5} /> Email us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
