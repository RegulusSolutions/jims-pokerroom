import type { Metadata } from 'next';
import { MapPin, Clock, Phone, Car, Plane, Mail } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBand from '@/components/ui/CtaBand';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Find us',
  description: `${site.name} is on level AC6 of Colombo Lotus Tower, inside Majestic Pride Casino. Directions, hours and parking.`,
};

const gettingHere = [
  { Icon: Car, t: 'By car', b: 'Enter from D. R. Wijewardena Mawatha. Valet parking at the tower is free for players — mention the poker room.' },
  { Icon: Plane, t: 'From the airport', b: 'Bandaranaike International is about 45 minutes by expressway. Ask a host and we will arrange the transfer.' },
  { Icon: MapPin, t: 'Once inside', b: 'Take the lift to AC6 and follow signs for Majestic Pride. The poker room is on the same level.' },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        label="Find us"
        lines={['Level AC6,', { text: 'Lotus Tower.', gold: true }]}
        body="Two hundred metres above Colombo, inside Majestic Pride Casino. You can see the building from most of the city, which makes it hard to get lost."
      />

      <section className="pb-24">
        <div className="shell">
          <Reveal>
            <div className="bracket h-[440px] overflow-hidden border border-gold-500/15 sm:h-[520px]">
              <iframe
                title="Map to Jim's Poker Room"
                src={`https://www.google.com/maps?q=${site.address.mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.9] invert-[0.92] hue-rotate-[190deg] contrast-[0.9]"
              />
            </div>
          </Reveal>

          <div className="mt-6 grid gap-px border border-gold-500/12 bg-gold-500/12 lg:grid-cols-3">
            {[
              {
                Icon: MapPin,
                t: 'Address',
                lines: [site.address.venue, site.address.building, site.address.street, `${site.address.city}, ${site.address.country}`],
              },
              { Icon: Clock, t: 'Opening hours', lines: site.hours.map((h) => `${h.day} — ${h.time}`) },
              { Icon: Phone, t: 'Reservations', lines: [site.contact.phone, site.contact.altPhone, site.contact.email] },
            ].map(({ Icon, t, lines }, i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="h-full bg-ink p-8">
                  <Icon size={17} strokeWidth={1.3} className="mb-5 text-gold-500" />
                  <p className="label mb-4">{t}</p>
                  {lines.map((l) => (
                    <p key={l} className="text-[0.88rem] leading-relaxed text-bone/60">{l}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold-500/12 bg-carbon/40 py-28">
        <div className="shell">
          <SectionHeading label="Getting here" title="Three ways" gold="in." />
          <div className="mt-14 grid gap-px border border-gold-500/12 bg-gold-500/12 sm:grid-cols-3">
            {gettingHere.map(({ Icon, t, b }, i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="h-full bg-ink p-9 transition-colors duration-500 hover:bg-onyx">
                  <Icon size={18} strokeWidth={1.3} className="mb-6 text-gold-500" />
                  <h3 className="h-display text-[1.35rem]">{t}</h3>
                  <p className="lede mt-4 text-[0.88rem]">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="mt-14 flex flex-wrap gap-3">
              <a href={site.contact.phoneHref} className="btn btn-solid">Call the room</a>
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
