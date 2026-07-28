import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Atmosphere from '@/components/ui/Atmosphere';
import { blindLevels } from '@/lib/content';

export default function Structure() {
  return (
    <section className="relative overflow-hidden border-y border-gold-500/15 ruby-band py-28 sm:py-36">
      <Atmosphere intensity="soft" />
      <div className="shell relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          label="Tonight's structure"
          title="Twenty-minute"
          gold="levels."
          body="A standard weekday tournament clock. Weekend deepstacks run thirty-minute levels with a fifty-thousand starting stack."
        />

        <Reveal delay={0.14}>
          <div className="velvet overflow-hidden">
            <div className="grid grid-cols-[52px_1fr_78px_78px] gap-4 border-b border-gold-500/20 bg-ink/50 px-5 py-3 font-mono text-[0.58rem] uppercase tracking-label text-bone/40 sm:px-6">
              <span>Level</span>
              <span>Blinds</span>
              <span>Ante</span>
              <span className="text-right">Length</span>
            </div>
            {blindLevels.map((l, i) => {
              const breakRow = l.level === '—';
              return (
                <div
                  key={i}
                  className={`grid grid-cols-[52px_1fr_78px_78px] gap-4 border-t border-gold-500/10 px-5 py-4 font-mono text-[0.78rem] transition-all duration-400 hover:bg-gold-500/[0.04] hover:pl-7 sm:px-6 ${
                    breakRow ? 'bg-[rgba(155,27,47,.12)] text-gold-200' : 'text-bone/75 hover:text-gold-100'
                  }`}
                >
                  <span className="text-gold-500">{l.level}</span>
                  <span>{l.blinds}</span>
                  <span className="text-bone/40">{l.ante}</span>
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
