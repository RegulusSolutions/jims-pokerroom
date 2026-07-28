import Link from 'next/link';
import { MapPin, Clock, Phone } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Atmosphere from '@/components/ui/Atmosphere';
import { site } from '@/lib/site';

export default function Location() {
  return (
    <section className="relative overflow-hidden border-t border-gold-500/15 py-28 sm:py-36">
      <Atmosphere intensity="soft" />
      <div className="shell relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            label="Find us"
            title="Level AC6,"
            gold="Lotus Tower."
            body="Inside Majestic Pride Casino, in the tallest self-supporting structure in South Asia. Valet parking at the tower is free for players."
          />

          <div className="mt-12 space-y-5">
            {[
              {
                Icon: MapPin,
                title: 'Address',
                lines: [
                  site.address.venue,
                  `${site.address.building}, ${site.address.street}`,
                  `${site.address.city}, ${site.address.country}`,
                ],
              },
              { Icon: Clock, title: 'Hours', lines: site.hours.map((h) => `${h.day} — ${h.time}`) },
              { Icon: Phone, title: 'Reservations', lines: [site.contact.phone, site.contact.email] },
            ].map(({ Icon, title, lines }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="velvet flex gap-5 p-6">
                  <Icon size={17} strokeWidth={1.3} className="mt-1 shrink-0 text-gold-500" />
                  <div>
                    <p className="label mb-2">{title}</p>
                    {lines.map((l) => (
                      <p key={l} className="text-[0.9rem] leading-relaxed text-bone/60">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Link href="/locations" className="btn mt-10">
              Directions
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="bracket photo-frame h-full min-h-[420px]">
            <iframe
              title="Map to Jim's Poker Room at Colombo Lotus Tower"
              src={`https://www.google.com/maps?q=${site.address.mapsQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full grayscale-[0.85] invert-[0.92] hue-rotate-[190deg] contrast-[0.95]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
