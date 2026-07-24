import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import EventCard from '@/components/ui/EventCard';
import CtaBand from '@/components/ui/CtaBand';
import { upcomingEvents } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Upcoming events',
  description:
    "Tournament calendar for Jim's Poker Room — Poker Mega Week, Cobra Turbo, weekend deepstacks and nightly cash games at Colombo Lotus Tower.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="Upcoming events"
        lines={["What's", { text: 'coming up.', gold: true }]}
        body="Buy-ins, structures and start times, published in advance. Seats are capped at eighteen across two tables, so tournament nights fill."
      />

      <section className="pb-28">
        <div className="shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 3) * 0.08}>
                <EventCard event={e} priority={i === 0} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-gold-500/15 pt-10">
              <p className="lede max-w-md text-[0.92rem]">
                Looking for something that has already run? The archive has final tables and
                photographs from past series.
              </p>
              <Link href="/events/past" className="btn">Past events</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand label="Register" title="Buy in." body="Reserve a tournament seat by phone or send a request and a host will call you back." />
    </>
  );
}
