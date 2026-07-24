import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { games } from '@/lib/content';

export default function GamesStrip() {
  return (
    <section className="border-t border-gold-500/12 bg-carbon/40 py-28 sm:py-36">
      <div className="shell">
        <SectionHeading
          label="The turn"
          title="Three games,"
          gold="every night."
          body="Hold'em is the house game. Omaha runs alongside it for players who want more variance in the pot."
        />

        <div className="mt-16 border-t border-gold-500/15">
          {games.map((g, i) => (
            <Reveal key={g.code} delay={i * 0.07}>
              <Link
                href="/games"
                className="group grid items-start gap-5 border-b border-gold-500/15 py-9 transition-all duration-500 hover:pl-4 sm:grid-cols-[90px_1fr_260px] sm:gap-10"
              >
                <span className="font-mono text-[0.72rem] tracking-wider2 text-gold-500">
                  {g.code}
                </span>
                <div>
                  <h3 className="h-display text-[1.7rem] transition-colors duration-500 group-hover:text-gold-200 sm:text-[2.1rem]">
                    {g.name}
                    <span className="ml-3 font-mono text-[0.62rem] uppercase tracking-label text-bone/35">
                      {g.detail}
                    </span>
                  </h3>
                  <p className="lede mt-4 max-w-xl text-[0.92rem]">{g.body}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  {g.stakes.map((s) => (
                    <span
                      key={s}
                      className="border border-gold-500/25 px-3 py-1.5 font-mono text-[0.62rem] tracking-wide text-gold-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
