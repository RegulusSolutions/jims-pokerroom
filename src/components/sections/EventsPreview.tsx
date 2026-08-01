import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { upcomingEvents } from '@/lib/events';

/** The river — casino "now playing" marquee + gold ticket events. */
export default function EventsPreview() {
  const events = upcomingEvents.slice(0, 4);
  const [featured, ...rest] = events;

  if (!featured) return null;

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 50% -10%, rgba(201,162,39,.25), transparent 50%),
            radial-gradient(ellipse 45% 50% at 0% 60%, rgba(155,27,47,.28), transparent 50%),
            radial-gradient(ellipse 40% 45% at 100% 80%, rgba(13,90,52,.22), transparent 50%),
            linear-gradient(180deg, #08060a 0%, #050506 40%, #0a0c08 100%)
          `,
        }}
      />
      {/* Marquee light bulbs row */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-3 pt-6 opacity-50" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-gold-400"
            style={{
              opacity: i % 3 === 0 ? 1 : 0.35,
              boxShadow: i % 3 === 0 ? '0 0 8px #d9b959' : undefined,
            }}
          />
        ))}
      </div>

      <div className="shell relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="label">The river</p>
            <h2 className="h-display mt-5 text-[clamp(2rem,4.4vw,3.6rem)]">
              What&rsquo;s on{' '}
              <span className="gold-text">this month.</span>
            </h2>
            <p className="lede mt-5 max-w-xl">
              Structures are published in advance so you know what you&rsquo;re sitting down to.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/events" className="btn">
              Full calendar
            </Link>
          </Reveal>
        </div>

        {/* NOW PLAYING banner */}
        <Reveal delay={0.08}>
          <div
            className="mt-12 flex items-center justify-between gap-4 overflow-hidden border border-gold-500/40 px-5 py-3 sm:px-7"
            style={{
              background:
                'linear-gradient(90deg, rgba(155,27,47,.35), rgba(201,162,39,.15) 50%, rgba(13,90,52,.3))',
              boxShadow: 'inset 0 1px 0 rgba(240,223,168,.2), 0 0 40px rgba(201,162,39,.1)',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold-400/70" />
                <span className="relative h-2 w-2 rounded-full bg-gold-400" />
              </span>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-gold-100">
                Now playing
              </p>
            </div>
            <p className="hidden font-mono text-[0.6rem] uppercase tracking-label text-bone/45 sm:block">
              Seats limited · Call ahead
            </p>
          </div>
        </Reveal>

        {/* Featured ticket */}
        <Reveal delay={0.12}>
          <Link href={`/events/${featured.slug}`} className="group mt-5 block">
            <article
              className="relative grid overflow-hidden border border-gold-500/35 lg:grid-cols-[1.2fr_0.9fr]"
              style={{
                background: 'linear-gradient(135deg, #12100c, #0a0a0c 60%, #12080c)',
                boxShadow: '0 30px 70px rgba(0,0,0,.45), inset 0 0 0 1px rgba(240,223,168,.08)',
              }}
            >
              <div className="relative min-h-[280px] sm:min-h-[360px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink/30 to-ink lg:bg-gradient-to-r lg:from-transparent lg:to-ink/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent lg:hidden" />
              </div>

              <div className="relative flex flex-col justify-center p-7 sm:p-10">
                {/* Ticket stub perforation */}
                <div
                  className="pointer-events-none absolute inset-y-6 left-0 hidden w-px border-l border-dashed border-gold-500/30 lg:block"
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-center gap-3">
                  <span className="border border-gold-500 bg-gold-500/15 px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-label text-gold-200">
                    Headline
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-label text-gold-500">
                    {featured.kicker}
                  </span>
                </div>

                <h3 className="h-display mt-5 flex items-start justify-between gap-4 text-[clamp(1.7rem,3vw,2.6rem)]">
                  {featured.title}
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.3}
                    className="mt-2 shrink-0 text-gold-500 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </h3>

                <p className="mt-4 text-[0.95rem] leading-relaxed text-bone/60">{featured.blurb}</p>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gold-500/20 pt-6 font-mono text-[0.65rem] text-bone/50 sm:grid-cols-3">
                  <div>
                    <p className="uppercase tracking-label text-bone/35">When</p>
                    <p className="mt-1.5 text-gold-200">{featured.dateLabel}</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-label text-bone/35">Buy-in</p>
                    <p className="mt-1.5 text-gold-200">{featured.buyIn}</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="uppercase tracking-label text-bone/35">Format</p>
                    <p className="mt-1.5 text-gold-200">{featured.format}</p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </Reveal>

        {/* Ticket strip for remaining events */}
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {rest.map((e, i) => (
            <Reveal key={e.slug} delay={0.15 + i * 0.08}>
              <Link href={`/events/${e.slug}`} className="group block h-full">
                <article
                  className="relative flex h-full flex-col overflow-hidden border border-gold-500/25 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-gold-500/50"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(18,16,12,.95), rgba(8,8,10,.98))',
                    boxShadow: 'inset 0 0 40px rgba(201,162,39,.04)',
                  }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={e.image}
                      alt={e.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1100ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <span className="absolute left-3 top-3 border border-gold-500/50 bg-ink/70 px-2 py-0.5 font-mono text-[0.52rem] uppercase tracking-label text-gold-300 backdrop-blur">
                      {e.kicker}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-mono text-[0.58rem] uppercase tracking-label text-gold-500">
                      {e.dateLabel}
                    </p>
                    <h3 className="h-display mt-2 flex items-start justify-between gap-2 text-[1.35rem]">
                      {e.title}
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.3}
                        className="mt-1 shrink-0 text-gold-500 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </h3>
                    <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 border-t border-gold-500/15 pt-4 font-mono text-[0.6rem] text-bone/45">
                      <span>
                        Buy-in <span className="text-gold-200">{e.buyIn}</span>
                      </span>
                    </div>
                  </div>
                  {/* Ticket notch */}
                  <span
                    className="pointer-events-none absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-gold-500/20 bg-ink"
                    aria-hidden="true"
                  />
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
