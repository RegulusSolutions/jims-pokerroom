import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import EventCard from '@/components/ui/EventCard';
import CtaBand from '@/components/ui/CtaBand';
import { events, getEvent } from '@/lib/events';
import { blindLevels } from '@/lib/content';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: 'Event not found' };
  return {
    title: event.title,
    description: event.blurb,
    openGraph: { title: event.title, description: event.blurb, images: [event.image] },
  };
}

export default async function EventPage({ params }: Params) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <>
      <section className="relative">
        <div className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        </div>

        <div className="shell relative -mt-44 pb-20">
          <Reveal y={20}>
            <Link
              href="/events"
              className="mb-9 inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-label text-gold-500 transition-colors hover:text-gold-200"
            >
              <ArrowLeft size={13} strokeWidth={1.5} /> All events
            </Link>
          </Reveal>
          <Reveal y={26} delay={0.06}>
            <p className="label">{event.kicker}</p>
            <h1 className="h-display mt-5 text-[clamp(2.4rem,6.5vw,5.4rem)]">
              <span className="gold-text">{event.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede mt-8 max-w-2xl">{event.blurb}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-14 grid gap-px border border-gold-500/12 bg-gold-500/12 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: 'When', v: event.dateLabel },
                { k: 'Buy-in', v: event.buyIn },
                { k: 'Starting stack', v: event.stack },
                { k: 'Format', v: event.format },
              ].map((r) => (
                <div key={r.k} className="bg-ink p-7">
                  <dt className="label mb-3">{r.k}</dt>
                  <dd className="font-display text-[1.1rem] leading-snug text-bone">{r.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-16 grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="label">Structure</p>
                <h2 className="h-display mt-5 text-[1.9rem]">The clock</h2>
                <p className="lede mt-5 text-[0.92rem]">
                  Late registration and re-entry rules are announced at the table before cards go in
                  the air. Ask the floor if anything is unclear.
                </p>
                <Link href="/bookings" className="btn mt-9">Reserve a seat</Link>
              </div>
              <div className="border-t border-gold-500/20">
                {blindLevels.map((l, i) => (
                  <div key={i} className="grid grid-cols-[52px_1fr_78px] gap-4 border-t border-gold-500/12 py-4 font-mono text-[0.76rem] text-bone/70">
                    <span className="text-gold-500">{l.level}</span>
                    <span>{l.blinds}</span>
                    <span className="text-right text-bone/40">{l.length}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-gold-500/12 py-24">
        <div className="shell">
          <p className="label mb-10">Also on the calendar</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.08}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
