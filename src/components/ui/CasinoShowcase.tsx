'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame, Spade, Trophy, UserCheck, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import { images } from '@/lib/content';

const AREA_CLASS = {
  a: '[grid-area:a]',
  b: '[grid-area:b]',
  c: '[grid-area:c]',
  d: '[grid-area:d]',
  e: '[grid-area:e]',
  f: '[grid-area:f]',
} as const;

/** Six photos in a fixed-height bento — every cell filled, no empty space. */
const shots = [
  { src: images.casino.chips, alt: 'Stacks of colour on the felt', tag: '01 · Chips', area: 'a' as const },
  { src: images.casino.cards, alt: 'Hole cards in the air', tag: '02 · Cards', area: 'b' as const },
  { src: images.casino.table, alt: 'Tournament night under the lights', tag: '03 · Action', area: 'c' as const },
  { src: images.casino.roulette, alt: 'The wheel of the house', tag: '04 · Wheel', area: 'd' as const },
  { src: images.casino.night, alt: 'Cash game in progress', tag: '05 · Cash', area: 'e' as const },
  { src: images.casino.series, alt: 'Mega Week energy', tag: '06 · Series', area: 'f' as const },
];

const HIGHLIGHTS: { icon: LucideIcon; label: string; note: string; gradient: string }[] = [
  {
    icon: Spade,
    label: 'Cash nightly',
    note: 'Hold\u2019em from six, every table',
    gradient: 'linear-gradient(120deg, #9b1b2f 0%, #c9a227 45%, #0d5a34 100%)',
  },
  {
    icon: Trophy,
    label: 'Mega Week series',
    note: 'The calendar\u2019s biggest field',
    gradient: 'linear-gradient(120deg, #0d5a34 0%, #9b1b2f 50%, #c9a227 100%)',
  },
  {
    icon: UserCheck,
    label: 'Pro croupiers',
    note: 'Trained dealers, every seat',
    gradient: 'linear-gradient(120deg, #c9a227 0%, #0d5a34 50%, #9b1b2f 100%)',
  },
  {
    icon: Flame,
    label: 'Full house, most nights',
    note: 'Book ahead on tournament nights',
    gradient: 'linear-gradient(120deg, #9b1b2f 0%, #0d5a34 45%, #c9a227 100%)',
  },
];

/** Dramatic casino gallery — fixed-height bento mosaic, no empty cells. */
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

        {/*
          Fixed height + named areas — every cell occupied, staggered sizes.
          Mobile 2×4 · Desktop 3×4
        */}
        <div
          className="
            mt-14 grid h-[560px] grid-cols-2 grid-rows-4 gap-3
            sm:h-[640px] sm:gap-4
            md:h-[720px] md:grid-cols-3
            [grid-template-areas:'a_c'_'a_c'_'b_d'_'e_f']
            md:[grid-template-areas:'a_b_c'_'a_b_c'_'a_e_c'_'d_e_f']
          "
        >
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06} className={`min-h-0 ${AREA_CLASS[s.area]}`}>
              <motion.figure
                className="group relative h-full w-full overflow-hidden border border-gold-500/25"
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
                  sizes="(max-width:768px) 50vw, 33vw"
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
          ))}
        </div>

        <div className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.label} delay={0.1 + i * 0.06} className="h-full">
                <motion.div
                  className="relative flex h-full min-h-[140px] flex-col items-center justify-center gap-3 overflow-hidden border border-gold-500/30 p-5 text-center"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.45 }}
                  style={{
                    boxShadow: 'inset 0 0 0 1px rgba(240,223,168,.1), 0 20px 50px rgba(0,0,0,.35)',
                  }}
                >
                  <div
                    className="absolute inset-0 animate-gradientShift"
                    style={{ backgroundImage: h.gradient, backgroundSize: '240% 240%' }}
                  />
                  <div className="absolute inset-0 bg-ink/45" />
                  <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-gold-100/60" />
                  <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-gold-100/60" />
                  <Icon
                    size={26}
                    strokeWidth={1.3}
                    className="relative z-10 text-gold-100 drop-shadow-[0_2px_10px_rgba(0,0,0,.5)]"
                  />
                  <div className="relative z-10">
                    <p className="font-display text-[0.98rem] leading-tight text-gold-50 sm:text-[1.05rem]">
                      {h.label}
                    </p>
                    <p className="mt-1 font-mono text-[0.56rem] uppercase tracking-label text-bone/70">
                      {h.note}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
