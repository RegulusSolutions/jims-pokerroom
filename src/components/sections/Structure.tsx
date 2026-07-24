import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { blindLevels } from '@/lib/content';

/** A blind structure genuinely is a numbered sequence, which is the only
 *  reason this section gets level numbering. */
export default function Structure() {
  return (
    <section className="border-y border-gold-500/12 bg-carbon/40 py-28 sm:py-36">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          label="Tonight's structure"
          title="Twenty-minute"
          gold="levels."
          body="A standard weekday tournament clock. Weekend deepstacks run thirty-minute levels with a fifty-thousand starting stack."
        />

        <Reveal delay={0.14}>
          <div className="border-t border-gold-500/20">
            <div className="grid grid-cols-[52px_1fr_78px_78px] gap-4 py-3 font-mono text-[0.58rem] uppercase tracking-label text-bone/35">
              <span>Level</span><span>Blinds</span><span>Ante</span><span className="text-right">Length</span>
            </div>
            {blindLevels.map((l, i) => (
              <div
                key={i}
                className="grid grid-cols-[52px_1fr_78px_78px] gap-4 border-t border-gold-500/12 py-4 font-mono text-[0.78rem] text-bone/70 transition-all duration-400 hover:pl-2 hover:text-gold-100"
              >
                <span className="text-gold-500">{l.level}</span>
                <span>{l.blinds}</span>
                <span className="text-bone/40">{l.ante}</span>
                <span className="text-right text-bone/40">{l.length}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
