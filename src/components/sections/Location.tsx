import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Phone } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/lib/site';
import { images } from '@/lib/content';

/** Altitude card + framed map — Lotus Tower as the landmark. */
export default function Location() {
  return (
    <section className="relative overflow-hidden border-t border-gold-500/15 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 80% 40%, rgba(13,90,52,.22), transparent 55%), radial-gradient(ellipse 40% 40% at 10% 90%, rgba(201,162,39,.1), transparent 50%)',
        }}
      />

      <div className="shell relative">
        {/* Altitude banner */}
        <Reveal>
          <div className="relative mb-16 overflow-hidden border border-gold-500/30">
            <div className="absolute inset-0">
              <Image
                src={images.casino.felt}
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" />
            </div>
            <div className="relative grid items-center gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[auto_1fr_auto]">
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-label text-gold-500">
                  Elevation
                </p>
                <p className="mt-2 font-display text-[clamp(3rem,8vw,5.5rem)] leading-none text-gold-200">
                  200<span className="text-[0.45em] text-gold-500">m</span>
                </p>
                <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-label text-bone/45">
                  Above Colombo
                </p>
              </div>
              <div className="hidden h-px bg-gold-line opacity-50 lg:block" />
              <div className="lg:text-right">
                <p className="font-display text-[1.4rem] text-gold-100 sm:text-[1.7rem]">
                  Level AC6 · Lotus Tower
                </p>
                <p className="mt-2 text-[0.9rem] text-bone/55">
                  Inside Majestic Pride Casino · Valet free for players
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              label="Find us"
              title="Level AC6,"
              gold="Lotus Tower."
              body="Inside Majestic Pride Casino, in the tallest self-supporting structure in South Asia. Valet parking at the tower is free for players."
            />

            <div className="mt-10 space-y-3">
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
                {
                  Icon: Clock,
                  title: 'Hours',
                  lines: site.hours.map((h) => `${h.day} — ${h.time}`),
                },
                {
                  Icon: Phone,
                  title: 'Reservations',
                  lines: [site.contact.phone, site.contact.email],
                },
              ].map(({ Icon, title, lines }, i) => (
                <Reveal key={title} delay={i * 0.08}>
                  <div className="group flex gap-5 border border-gold-500/20 bg-onyx/50 p-5 transition-colors duration-400 hover:border-gold-500/45 hover:bg-onyx/80">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold-500/30 text-gold-500 transition-colors group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-ink">
                      <Icon size={16} strokeWidth={1.3} />
                    </span>
                    <div>
                      <p className="label mb-2">{title}</p>
                      {lines.map((l) => (
                        <p key={l} className="text-[0.88rem] leading-relaxed text-bone/60">
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
            <div className="relative h-full min-h-[440px]">
              {/* Suit corner ornaments */}
              <span className="absolute -left-1 -top-1 z-10 font-display text-2xl text-gold-500/50" aria-hidden="true">
                ♠
              </span>
              <span className="absolute -right-1 -top-1 z-10 font-display text-2xl text-[var(--ruby-bright)]/45" aria-hidden="true">
                ♥
              </span>
              <span className="absolute -bottom-1 -left-1 z-10 font-display text-2xl text-[var(--ruby-bright)]/45" aria-hidden="true">
                ♦
              </span>
              <span className="absolute -bottom-1 -right-1 z-10 font-display text-2xl text-gold-500/50" aria-hidden="true">
                ♣
              </span>

              <div className="bracket photo-frame h-full min-h-[440px] border-gold-500/35">
                <iframe
                  title="Map to Jim's Poker Room at Colombo Lotus Tower"
                  src={`https://www.google.com/maps?q=${site.address.mapsQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[440px] w-full grayscale-[0.8] invert-[0.92] hue-rotate-[190deg] contrast-[0.95]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
