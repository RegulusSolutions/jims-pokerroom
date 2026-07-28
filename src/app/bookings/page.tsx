import type { Metadata } from 'next';
import { Phone, MessageCircle, Clock } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import BookingForm from '@/components/ui/BookingForm';
import Atmosphere from '@/components/ui/Atmosphere';
import { site } from '@/lib/site';
import { images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Reserve a seat',
  description: `Reserve a seat at ${site.name}, Colombo Lotus Tower. Cash games, tournaments and private tables.`,
};

export default function BookingsPage() {
  return (
    <>
      <PageHero
        label="Reservations"
        lines={['Hold me', { text: 'a seat.', gold: true }]}
        body="Two tables, eighteen seats. Walk-ins are welcome any night, but if you want a specific stake or a tournament entry, tell us in advance."
        image={images.casino.hero}
      />

      <section className="relative overflow-hidden pb-28">
        <Atmosphere intensity="soft" />
        <div className="shell relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <div className="velvet p-1">
              <div className="bg-ink/40 p-6 sm:p-8">
                <BookingForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {[
              {
                Icon: Phone,
                t: 'Call the room',
                b: 'Fastest option on a busy night. Someone answers whenever we are open.',
                cta: site.contact.phone,
                href: site.contact.phoneHref,
              },
              {
                Icon: MessageCircle,
                t: 'WhatsApp',
                b: 'Send your name, the night and the stake. A host confirms in writing.',
                cta: 'Open WhatsApp',
                href: site.contact.whatsapp,
              },
            ].map(({ Icon, t, b, cta, href }, i) => (
              <Reveal key={t} delay={0.1 + i * 0.07}>
                <a
                  href={href}
                  className="velvet bracket block p-8 transition-all duration-500 hover:border-gold-500/50"
                >
                  <Icon size={18} strokeWidth={1.3} className="mb-6 text-gold-500" />
                  <h3 className="h-display text-[1.35rem]">{t}</h3>
                  <p className="lede mt-3 text-[0.88rem]">{b}</p>
                  <p className="mt-6 font-mono text-[0.72rem] tracking-wider2 text-gold-300">{cta}</p>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <div className="velvet p-8">
                <Clock size={18} strokeWidth={1.3} className="mb-6 text-gold-500" />
                <p className="label mb-4">When we are open</p>
                <ul className="space-y-2 font-mono text-[0.72rem] text-bone/55">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="text-gold-200/75">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-gold-500/15 pt-5 text-[0.82rem] leading-relaxed text-bone/45">
                  Strictly 18+. Photo ID is checked at the Majestic Pride entrance before you reach
                  the poker room.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
