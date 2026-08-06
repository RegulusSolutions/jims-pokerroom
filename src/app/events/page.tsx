import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import EventCard from '@/components/ui/EventCard';
import CtaBand from '@/components/ui/CtaBand';
import Atmosphere from '@/components/ui/Atmosphere';
import { upcomingEvents } from '@/lib/events';
import { images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Upcoming events',
  description:
    "Tournament calendar for Diamond Lounge at Casino Marina — Poker Mega Week, Cobra Turbo, weekend deepstacks and nightly cash games.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="Upcoming events"
        lines={["What's", { text: 'coming up.', gold: true }]}
        body="Buy-ins, structures and start times, published in advance. Seats are capped at eighteen across two tables, so tournament nights fill."
        image={images.casino.roulette}
      />

      <section className="relative overflow-hidden pb-28">
        <Atmosphere intensity="edge" className="opacity-70" />
        <div className="shell relative">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 3) * 0.08}>
                <EventCard event={e} priority={i === 0} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="velvet mt-16 flex flex-wrap items-center justify-between gap-6 p-8 sm:p-10">
              <p className="lede max-w-md text-[0.92rem]">
                Looking for something that has already run? The archive has final tables and
                photographs from past series.
              </p>
              <Link href="/events/past" className="btn">
                Past events
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        label="Register"
        title="Buy in."
        body="Reserve a tournament seat by phone or send a request and a host will call you back."
      />
    </>
  );
}
