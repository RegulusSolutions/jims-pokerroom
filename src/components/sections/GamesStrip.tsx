import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { games } from '@/lib/content';

const seats = [
  {
    suit: '♠',
    color: '#c9a227',
    hole: [
      { r: 'A', s: '♠' },
      { r: 'K', s: '♠' },
    ],
  },
  {
    suit: '♥',
    color: '#e11d48',
    hole: [
      { r: 'A', s: '♥' },
      { r: 'A', s: '♦' },
    ],
  },
  {
    suit: '♦',
    color: '#e11d48',
    hole: [
      { r: 'Q', s: '♦' },
      { r: 'J', s: '♦' },
    ],
  },
] as const;

function HoleCard({ rank, suit }: { rank: string; suit: string }) {
  const red = suit === '♥' || suit === '♦';
  return (
    <div
      className="flex aspect-[5/7] w-11 flex-col justify-between rounded-sm border border-white/40 bg-gradient-to-br from-white to-[#efe6d4] px-1 py-1 shadow-lg sm:w-12"
      style={{ color: red ? '#e11d48' : '#1a1a1e' }}
      aria-hidden="true"
    >
      <span className="font-display text-[0.65rem] font-semibold leading-none">{rank}</span>
      <span className="self-center font-display text-base leading-none">{suit}</span>
      <span className="rotate-180 self-end font-display text-[0.65rem] font-semibold leading-none">
        {rank}
      </span>
    </div>
  );
}

/** Three seats at a felt table — each game is a place at the rail. */
export default function GamesStrip() {
  return (
    <section className="relative overflow-hidden border-t border-gold-500/15 py-28 sm:py-36">
      {/* Deep felt stage */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 70% at 50% 55%, #0d5a34 0%, #063820 38%, #050506 72%)',
        }}
      />
      <div className="pointer-events-none absolute inset-x-[8%] top-[18%] bottom-[12%] rounded-[50%] border border-gold-500/25 opacity-40" />
      <div className="pointer-events-none absolute inset-x-[14%] top-[24%] bottom-[18%] rounded-[50%] border border-gold-500/15 opacity-30" />

      <div className="shell relative">
        <SectionHeading
          label="The turn"
          title="Seven games,"
          gold="one lounge."
          body="Hold'em and PLO5 share the felt with Roulette, Andar Bahar, Blackjack, Baccarat and Niu Niu — all inside Diamond Lounge at Casino Marina."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {games.map((g, i) => {
            const seat = seats[i] ?? seats[0];
            return (
              <Reveal key={g.code} delay={i * 0.1}>
                <Link href="/games" className="group block h-full">
                  <article className="relative flex h-full flex-col overflow-hidden rounded-sm border border-gold-500/30 bg-ink/75 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold-500/60 group-hover:shadow-[0_24px_60px_rgba(0,0,0,.45)]">
                    {/* Seat rail */}
                    <div className="h-1.5 w-full" style={{ backgroundColor: seat.color }} />

                    <div className="flex flex-1 flex-col p-7 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[0.68rem] tracking-wider2 text-gold-500">
                            Seat {String(i + 1).padStart(2, '0')} · {g.code}
                          </p>
                          <h3 className="h-display mt-4 text-[1.75rem] transition-colors duration-500 group-hover:text-gold-200 sm:text-[1.95rem]">
                            {g.name}
                          </h3>
                          <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-label text-bone/40">
                            {g.detail} &middot; {g.tables} {g.tables === 1 ? 'table' : 'tables'}
                          </p>
                        </div>
                        <div className="flex -space-x-2 pt-1">
                          {seat.hole.map((c) => (
                            <div
                              key={c.r + c.s}
                              className="transition-transform duration-500 group-hover:-translate-y-1 first:rotate-[-8deg] last:rotate-[8deg]"
                            >
                              <HoleCard rank={c.r} suit={c.s} />
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="lede mt-6 flex-1 text-[0.9rem]">{g.body}</p>

                      <div className="mt-8 border-t border-gold-500/20 pt-5">
                        <p className="mb-3 font-mono text-[0.55rem] uppercase tracking-label text-bone/35">
                          Stakes tonight
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {g.stakes.map((s) => (
                            <span
                              key={s}
                              className="border border-gold-500/35 bg-[#063820]/50 px-3 py-1.5 font-mono text-[0.62rem] tracking-wide text-gold-200"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.35}>
          <div className="mt-10 flex justify-center">
            <Link href="/games" className="btn">
              Full stakes & rules
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
