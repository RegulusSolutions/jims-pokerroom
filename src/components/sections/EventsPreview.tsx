import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import EventCard from '@/components/ui/EventCard';
import Atmosphere from '@/components/ui/Atmosphere';
import { upcomingEvents } from '@/lib/events';

export default function EventsPreview() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <Atmosphere intensity="edge" className="opacity-80" />
      <div className="shell relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            label="The river"
            title="What's on"
            gold="this month."
            body="Structures are published in advance so you know what you're sitting down to."
          />
          <Reveal delay={0.2}>
            <Link href="/events" className="btn">
              Full calendar
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.slice(0, 3).map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.09}>
              <EventCard event={e} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
