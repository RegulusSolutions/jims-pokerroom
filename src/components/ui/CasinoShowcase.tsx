'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { images } from '@/lib/content';

const shots = [
  { src: images.casino.chips, alt: 'Stacks of colour on the felt', tag: '01 · Chips', span: 'hero' as const },
  { src: images.casino.table, alt: 'Tournament night under the lights', tag: '02 · Action', span: 'tall' as const },
  { src: images.casino.cards, alt: 'Hole cards in the air', tag: '03 · Cards', span: 'sq' as const },
  { src: images.casino.roulette, alt: 'The wheel of the house', tag: '04 · Wheel', span: 'sq' as const },
  { src: images.casino.night, alt: 'Cash game in progress', tag: '05 · Cash', span: 'wide' as const },
  { src: images.casino.series, alt: 'Mega Week energy', tag: '06 · Series', span: 'sq' as const },
];

/** Dramatic casino gallery — light beams, gold frames, mosaic stage. */
export default function CasinoShowcase() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #120808 0%, #050506 35%, #06140c 70%, #050506 100%),
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(201,162,39,.2), transparent 50%)
          `,
        }}
      />
      {/* Diagonal gold slash */}
      <div
        className="pointer-events-none absolute -left-1/4 top-1/3 h-px w-[150%] rotate-[-8deg] opacity-30"
        style={{ background: 'linear-gradient(90deg, transparent, #c9a227, transparent)' }}
      />
      <div
        className="pointer-events-none absolute -left-1/4 top-[38%] h-px w-[150%] rotate-[-8deg] opacity-15"
        style={{ background: 'linear-gradient(90deg, transparent, #e11d48, transparent)' }}
      />

      <div className="shell relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-display text-3xl text-[var(--ruby-bright)]/70" aria-hidden="true">
                ♦
              </span>
              <div>
                <p className="label">The floor</p>
                <h2 className="h-display mt-4 max-w-xl text-[clamp(1.9rem,4.2vw,3.2rem)]">
                  Colour on the felt.{' '}
                  <span className="gold-text">Action in the air.</span>
                </h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <Link href="/gallery" className="btn">
              Full gallery
            </Link>
          </Reveal>
        </div>

        {/* Casino mosaic */}
        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4 lg:auto-rows-[220px]">
          {shots.map((s, i) => {
            const span =
              s.span === 'hero'
                ? 'col-span-2 row-span-2 md:col-span-2'
                : s.span === 'tall'
                  ? 'row-span-2'
                  : s.span === 'wide'
                    ? 'col-span-2'
                    : '';
            return (
              <Reveal key={s.src} delay={i * 0.06} className={`h-full ${span}`}>
                <motion.figure
                  className="group relative h-full min-h-[160px] overflow-hidden border border-gold-500/25"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.45 }}
                  style={{
                    boxShadow: 'inset 0 0 0 1px rgba(240,223,168,.08), 0 20px 50px rgba(0,0,0,.35)',
                  }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(ellipse at 50% 100%, rgba(201,162,39,.35), transparent 55%)',
                    }}
                  />
                  {/* Corner gold ticks */}
                  <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-gold-400/70" />
                  <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-gold-400/70" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className="font-mono text-[0.58rem] uppercase tracking-label text-gold-300">
                      {s.tag}
                    </span>
                    <p className="mt-1.5 font-display text-[1.05rem] text-gold-100 sm:text-[1.2rem]">
                      {s.alt}
                    </p>
                  </figcaption>
                </motion.figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
