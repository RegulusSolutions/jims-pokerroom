import Reveal from './Reveal';

export default function SectionHeading({
  label,
  title,
  gold,
  body,
  align = 'left',
}: {
  label: string;
  title: string;
  gold?: string;
  body?: string;
  align?: 'left' | 'center';
}) {
  const center = align === 'center';
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <p className="label">{label}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="h-display mt-5 text-[clamp(2rem,4.4vw,3.6rem)]">
          {title} {gold && <span className="gold-text">{gold}</span>}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.16}>
          <p className={`lede mt-6 ${center ? 'mx-auto' : ''}`}>{body}</p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <div className={`mt-8 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
          <div className="h-px w-10 bg-gold-line sm:w-14" />
          <span className="suit-divider text-sm" aria-hidden="true">
            ♦
          </span>
          <div className="h-px w-10 bg-gold-line sm:w-14" />
        </div>
      </Reveal>
    </div>
  );
}
