import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { blindLevels } from '@/lib/content';

/** Tournament clock board — looks like the screen above the table. */
export default function Structure() {
  return (
    <section className="relative overflow-hidden border-y border-gold-500/15 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 70% 40%, rgba(155,27,47,.22), transparent 55%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(201,162,39,.1), transparent 50%)',
        }}
      />

      <div className="shell relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            label="Tonight's structure"
            title="Twenty-minute"
            gold="levels."
            body="A standard weekday tournament clock. Weekend deepstacks run thirty-minute levels with a fifty-thousand starting stack."
          />

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { k: 'Starting stack', v: '20,000' },
                { k: 'Level length', v: '20 min' },
                { k: 'Late reg', v: 'End of L4' },
              ].map((m) => (
                <div key={m.k} className="border border-gold-500/25 bg-ink/50 px-4 py-3">
                  <p className="font-mono text-[0.55rem] uppercase tracking-label text-bone/40">{m.k}</p>
                  <p className="mt-1 font-display text-lg text-gold-200">{m.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="clock-board overflow-hidden">
            {/* Clock header */}
            <div className="flex items-center justify-between gap-4 border-b border-gold-500/25 bg-ink/60 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                </span>
                <p className="font-mono text-[0.62rem] uppercase tracking-label text-gold-300">
                  Clock running
                </p>
              </div>
              <p className="font-mono text-[0.58rem] uppercase tracking-label text-bone/40">
                Jim&rsquo;s · AC6
              </p>
            </div>

            {/* Big current level callout */}
            <div className="grid grid-cols-3 gap-px border-b border-gold-500/20 bg-gold-500/15">
              {[
                { l: 'Level', v: 'L1' },
                { l: 'Blinds', v: '100 / 200' },
                { l: 'Ante', v: '—' },
              ].map((cell) => (
                <div key={cell.l} className="bg-ink/90 px-4 py-5 text-center sm:px-5 sm:py-6">
                  <p className="font-mono text-[0.55rem] uppercase tracking-label text-bone/40">
                    {cell.l}
                  </p>
                  <p className="clock-digit mt-2 font-display text-[1.35rem] text-gold-200 sm:text-[1.6rem]">
                    {cell.v}
                  </p>
                </div>
              ))}
            </div>

            {/* Blind ladder */}
            <div className="grid grid-cols-[48px_1fr_64px_64px] gap-3 bg-ink/40 px-4 py-2.5 font-mono text-[0.55rem] uppercase tracking-label text-bone/35 sm:grid-cols-[56px_1fr_72px_72px] sm:gap-4 sm:px-6">
              <span>Lvl</span>
              <span>Blinds</span>
              <span>Ante</span>
              <span className="text-right">Time</span>
            </div>

            {blindLevels.map((l, i) => {
              const breakRow = !l.level.startsWith('L');
              return (
                <div
                  key={i}
                  className={`grid grid-cols-[48px_1fr_64px_64px] gap-3 border-t border-gold-500/10 px-4 py-3.5 font-mono text-[0.75rem] transition-colors duration-300 sm:grid-cols-[56px_1fr_72px_72px] sm:gap-4 sm:px-6 ${
                    breakRow
                      ? 'bg-[rgba(155,27,47,.18)] text-gold-100'
                      : 'text-bone/75 hover:bg-gold-500/[0.06] hover:text-gold-100'
                  }`}
                >
                  <span className="clock-digit text-gold-500">{l.level}</span>
                  <span className="clock-digit">{l.blinds}</span>
                  <span className="text-bone/40">{l.ante || '—'}</span>
                  <span className="text-right text-bone/40">{l.length}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
