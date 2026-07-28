import Image from 'next/image';
import SplitHeading from './SplitHeading';
import Reveal from './Reveal';
import Atmosphere from './Atmosphere';

export default function PageHero({
  label,
  lines,
  body,
  image,
}: {
  label: string;
  lines: (string | { text: string; gold?: boolean })[];
  body?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pb-24 sm:pt-48">
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(115deg, rgba(5,5,6,.85) 0%, transparent 45%, rgba(13,90,52,.25) 100%)',
            }}
          />
        </div>
      ) : (
        <Atmosphere intensity="edge" className="opacity-90" />
      )}

      {/* top suit rail */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-8 pt-28 font-display text-lg text-gold-500/25 sm:gap-14 sm:text-xl"
        aria-hidden="true"
      >
        <span>♠</span>
        <span className="text-[var(--ruby-bright)]/40">♥</span>
        <span className="text-[var(--ruby-bright)]/40">♦</span>
        <span>♣</span>
      </div>

      <div className="shell relative">
        <Reveal y={16}>
          <p className="label">{label}</p>
        </Reveal>
        <div className="mt-7">
          <SplitHeading lines={lines} className="text-[clamp(2.6rem,7.5vw,6.4rem)]" delay={0.1} />
        </div>
        {body && (
          <Reveal delay={0.45}>
            <p className="lede mt-8 max-w-2xl text-bone/70">{body}</p>
          </Reveal>
        )}
        <Reveal delay={0.5}>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gold-line opacity-50" />
            <span className="suit-divider text-sm" aria-hidden="true">
              ♦
            </span>
            <div className="h-px flex-1 bg-gold-line opacity-50" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
