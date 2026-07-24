import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { PokerEvent } from '@/lib/events';

export default function EventCard({ event, priority }: { event: PokerEvent; priority?: boolean }) {
  return (
    <Link href={`/events/${event.slug}`} className="group block">
      <article className="bracket surface overflow-hidden transition-colors duration-500 group-hover:border-gold-500/45">
        <div className="relative aspect-[4/5] overflow-hidden bg-onyx">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority={priority}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover opacity-70 grayscale transition-all duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06] group-hover:opacity-95 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
          <span className="absolute left-4 top-4 border border-gold-500/50 bg-ink/70 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-label text-gold-300 backdrop-blur">
            {event.kicker}
          </span>
        </div>

        <div className="p-6">
          <p className="font-mono text-[0.64rem] uppercase tracking-label text-gold-500">
            {event.dateLabel}
          </p>
          <h3 className="h-display mt-3 flex items-start justify-between gap-3 text-[1.5rem]">
            {event.title}
            <ArrowUpRight
              size={19}
              strokeWidth={1.3}
              className="mt-1 shrink-0 text-gold-500 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </h3>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-gold-500/12 pt-4 font-mono text-[0.66rem] text-bone/50">
            <span>Buy-in <span className="text-gold-200">{event.buyIn}</span></span>
            <span>{event.format}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
