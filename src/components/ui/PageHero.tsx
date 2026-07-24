import SplitHeading from './SplitHeading';
import Reveal from './Reveal';

export default function PageHero({
  label,
  lines,
  body,
}: {
  label: string;
  lines: (string | { text: string; gold?: boolean })[];
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pt-48">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(201,162,39,.16), transparent 70%)',
        }}
      />
      <div className="shell relative">
        <Reveal y={16}>
          <p className="label">{label}</p>
        </Reveal>
        <div className="mt-7">
          <SplitHeading lines={lines} className="text-[clamp(2.6rem,7.5vw,6.4rem)]" delay={0.1} />
        </div>
        {body && (
          <Reveal delay={0.45}>
            <p className="lede mt-8 max-w-2xl">{body}</p>
          </Reveal>
        )}
        <Reveal delay={0.5}>
          <div className="mt-12 h-px w-full bg-gold-line opacity-50" />
        </Reveal>
      </div>
    </section>
  );
}
