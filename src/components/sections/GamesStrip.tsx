import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Atmosphere from '@/components/ui/Atmosphere';
import { games } from '@/lib/content';

const accents = [
  { suit: '♠', color: 'rgba(240,223,168,.9)', wash: 'rgba(201,162,39,.14)' },
  { suit: '♥', color: 'rgba(225,29,72,.9)', wash: 'rgba(155,27,47,.18)' },
  { suit: '♦', color: 'rgba(225,29,72,.9)', wash: 'rgba(155,27,47,.14)' },
] as const;

export default function GamesStrip() {
  return (
    <section className="relative overflow-hidden border-t border-gold-500/15 felt-band py-28 sm:py-36">
      <Atmosphere intensity="rich" className="opacity-60" />
      <div className="shell relative">
        <SectionHeading
          label="The turn"
          title="Three games,"
          gold="every night."
          body="Hold'em is the house game. Omaha runs alongside it for players who want more variance in the pot."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {games.map((g, i) => {
            const a = accents[i] ?? accents[0];
            return (
              <Reveal key={g.code} delay={i * 0.08}>
                <Link href="/games" className="group block h-full">
                  <article className="velvet relative flex h-full flex-col overflow-hidden p-8 transition-all duration-500 group-hover:border-gold-500/50 sm:p-9">
                    <div
                      className="pointer-events-none absolute -right-6 -top-8 font-display text-[7rem] leading-none opacity-[0.12] transition-opacity duration-500 group-hover:opacity-[0.22]"
                      style={{ color: a.color }}
                      aria-hidden="true"
                    >
                      {a.suit}
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(ellipse at 80% 0%, ${a.wash}, transparent 55%)`,
                      }}
                    />

                    <div className="relative flex items-center justify-between">
                      <span className="font-mono text-[0.72rem] tracking-wider2 text-gold-500">
                        {g.code}
                      </span>
                      <span className="font-display text-2xl" style={{ color: a.color }} aria-hidden="true">
                        {a.suit}
                      </span>
                    </div>

                    <h3 className="h-display relative mt-8 text-[1.85rem] transition-colors duration-500 group-hover:text-gold-200 sm:text-[2.05rem]">
                      {g.name}
                    </h3>
                    <p className="relative mt-2 font-mono text-[0.62rem] uppercase tracking-label text-bone/40">
                      {g.detail}
                    </p>
                    <p className="lede relative mt-5 flex-1 text-[0.9rem]">{g.body}</p>

                    <div className="relative mt-8 flex flex-wrap gap-2 border-t border-gold-500/15 pt-6">
                      {g.stakes.map((s) => (
                        <span
                          key={s}
                          className="border border-gold-500/30 bg-ink/40 px-3 py-1.5 font-mono text-[0.62rem] tracking-wide text-gold-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
