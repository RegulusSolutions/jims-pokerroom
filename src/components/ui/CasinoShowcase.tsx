import Image from 'next/image';
import Reveal from './Reveal';
import Atmosphere from './Atmosphere';
import { images } from '@/lib/content';

const shots: { src: string; alt: string; span?: 'wide' }[] = [
  { src: images.casino.chips, alt: 'Stacks of colour on the felt', span: 'wide' },
  { src: images.casino.cards, alt: 'Hole cards in the air' },
  { src: images.casino.roulette, alt: 'The wheel of the house' },
  { src: images.casino.felt, alt: 'Green felt under the lights', span: 'wide' },
  { src: images.casino.dice, alt: 'Dice on the rail' },
  { src: images.room, alt: "Jim's Poker Room at Lotus Tower" },
];

/** Colourful casino imagery strip — the visual language of the floor. */
export default function CasinoShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-gold-500/15 py-20 sm:py-28">
      <Atmosphere intensity="rich" className="opacity-70" />

      <div className="shell relative">
        <Reveal>
          <p className="label">The floor</p>
          <h2 className="h-display mt-5 max-w-2xl text-[clamp(1.9rem,4.2vw,3.2rem)]">
            Colour on the felt.{' '}
            <span className="gold-text">Action in the air.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:gap-4 lg:auto-rows-[280px] lg:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal
              key={s.src + i}
              delay={i * 0.06}
              className={
                s.span === 'wide'
                  ? 'col-span-2 row-span-1'
                  : i === 5
                    ? 'col-span-2 lg:col-span-1'
                    : ''
              }
            >
              <figure className="bracket photo-frame group relative h-full">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width:640px) 100vw, 50vw"
                  className="object-cover"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 font-mono text-[0.6rem] uppercase tracking-wider2 text-gold-100/90 sm:p-5 sm:text-[0.65rem]">
                  {s.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
