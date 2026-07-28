import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import EventCard from '@/components/ui/EventCard';
import CtaBand from '@/components/ui/CtaBand';
import Atmosphere from '@/components/ui/Atmosphere';
import { pastEvents } from '@/lib/events';
import { images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Past events',
  description: "Archive of tournaments, series and live nights at Jim's Poker Room, Colombo.",
};

export default function PastEventsPage() {
  return (
    <>
      <PageHero
        label="Archive"
        lines={['Hands', { text: 'already played.', gold: true }]}
        body="Series, final tables and the occasional live band. What the room has run so far."
        image={images.casino.cards}
      />

      <section className="relative overflow-hidden pb-28">
        <Atmosphere intensity="edge" className="opacity-70" />
        <div className="shell relative">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 3) * 0.08}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-16 border-t border-gold-500/15 pt-10">
              <Link href="/events" className="btn">
                Upcoming events
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
