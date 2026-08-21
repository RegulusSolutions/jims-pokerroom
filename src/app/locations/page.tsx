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
  description: `${site.name} is inside Casino Marina on Marine Drive in Colombo 03. Directions, hours and arrival details.`,
};

const gettingHere = [
  {
    Icon: Car,
    t: 'By car',
    b: 'Head to Casino Marina at 30 Marine Drive, Colombo 03. Contact a host before you arrive for parking and entrance guidance.',
  },
  {
    Icon: Plane,
    t: 'From the airport',
    b: 'Bandaranaike International is about 45 minutes by expressway. Ask a host and we will arrange the transfer.',
  },
  {
    Icon: MapPin,
    t: 'Once inside',
    b: 'Enter through Casino Marina and follow signs for Diamond Lounge. A host can help with directions on arrival.',
  },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        label="Find us"
        lines={['Casino Marina,', { text: 'Marine Drive.', gold: true }]}
        body="Diamond Lounge is inside Casino Marina at 30 Marine Drive, Colombo 03. Contact a host before you travel for the smoothest arrival."
        image={images.casino.felt}
      />

      <section className="relative overflow-hidden pb-24">
        <Atmosphere intensity="soft" />
        <div className="shell relative">
          <Reveal>
            <div className="bracket photo-frame h-[440px] sm:h-[520px]">
              <iframe
                title="Map to Diamond Lounge"
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
                lines: [site.contact.phone, site.contact.email],
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
