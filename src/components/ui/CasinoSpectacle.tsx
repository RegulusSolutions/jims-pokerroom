'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Armchair, Check, Dices } from 'lucide-react';
import RouletteWheel from './RouletteWheel';
import { amenities, images } from '@/lib/content';

const PILLARS = [
  { suit: '♠', title: 'Hold\'em nightly', note: 'The house game, every table' },
  { suit: '♥', title: 'Omaha on demand', note: 'Hi and Hi/Lo when you want it' },
  { suit: '♦', title: 'Published structures', note: 'Know the clock before you buy in' },
  { suit: '♣', title: 'Food & drink free', note: 'On the house while you are seated' },
] as const;

const STATS = [
  { value: '2', label: 'Tables' },
  { value: '18', label: 'Seats' },
  { value: '200m', label: 'Up' },
  { value: '6pm', label: 'Open' },
] as const;

/** The edge — reuses the same verified facts shown on /about, kept short for this stage. */
const EDGE_POINTS = amenities.slice(0, 4);

/** Dense casino stage — photo walls, roulette, pillars. No empty center. */
export default function CasinoSpectacle() {
  return (
    <section className="relative overflow-hidden border-y border-gold-500/25 py-20 sm:py-28">
      {/* Photo backdrop — fills the void */}
      <div className="absolute inset-0">
        <Image
          src={images.casino.roulette}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35 scale-105"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, rgba(5,5,6,.92) 0%, rgba(5,5,6,.55) 45%, rgba(5,5,6,.88) 100%),
              linear-gradient(180deg, rgba(5,5,6,.75) 0%, transparent 30%, rgba(5,5,6,.9) 100%),
              radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,162,39,.18), transparent 60%)
            `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 40% 50% at 0% 100%, rgba(155,27,47,.35), transparent 50%), radial-gradient(ellipse 40% 50% at 100% 0%, rgba(13,90,52,.3), transparent 50%)',
          }}
        />
      </div>

      <div className="shell relative">
        {/* Top marquee bar */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4 border border-gold-500/35 px-5 py-3 sm:px-7"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background:
              'linear-gradient(90deg, rgba(155,27,47,.4), rgba(201,162,39,.12) 50%, rgba(13,90,52,.35))',
            boxShadow: 'inset 0 1px 0 rgba(240,223,168,.25), 0 0 50px rgba(201,162,39,.12)',
          }}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold-400/70" />
              <span className="relative h-2 w-2 rounded-full bg-gold-400" />
            </span>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.32em] text-gold-100">
              The house edge
            </p>
          </div>
          <p className="font-mono text-[0.58rem] uppercase tracking-label text-bone/50">
            Diamond Lounge · Casino Marina · Colombo
          </p>
        </motion.div>

        {/* Main stage: left photo | roulette | right copy */}
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[0.85fr_1fr_0.95fr] lg:gap-8">
          {/* Left collage */}
          <motion.div
            className="relative hidden h-full min-h-[420px] lg:block"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="absolute inset-0 overflow-hidden border border-gold-500/30">
              <Image
                src={images.casino.chips}
                alt="Casino chips"
                fill
                sizes="30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-gold-500/30 bg-ink/70 p-5 backdrop-blur-md">
              <p className="font-mono text-[0.55rem] uppercase tracking-label text-gold-400">
                Colour on the rail
              </p>
              <p className="mt-2 font-display text-xl text-gold-100">Chips in the air.</p>
            </div>
            {/* Floating chip PNGs */}
            <div className="absolute -right-6 top-10 w-16 animate-float" style={{ animationDuration: '8s' }}>
              <Image src={images.chipA} alt="" width={80} height={80} className="h-auto w-full drop-shadow-2xl" unoptimized />
            </div>
            <div className="absolute -right-3 bottom-28 w-12 animate-float" style={{ animationDuration: '11s', animationDelay: '1s' }}>
              <Image src={images.chipB} alt="" width={60} height={60} className="h-auto w-full drop-shadow-2xl" unoptimized />
            </div>
          </motion.div>

          {/* Center roulette + wordmark */}
          <motion.div
            className="relative mx-auto flex w-full max-w-[320px] flex-col justify-center py-4 sm:max-w-[380px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
          >
            <RouletteWheel className="relative z-10" />

            {/* Hero wordmark — primary brand signal */}
            <div className="relative z-10 mt-14 text-center">
              <div
                className="relative mx-auto inline-block px-6 py-4 sm:px-10 sm:py-5"
                style={{
                  boxShadow:
                    '0 0 60px rgba(201,162,39,.28), 0 0 120px rgba(201,162,39,.12), inset 0 0 40px rgba(240,223,168,.06)',
                }}
              >
                <div className="absolute inset-0 border border-gold-500/50" />
                <div className="absolute -left-1 -top-1 h-4 w-4 border-l-2 border-t-2 border-gold-300" />
                <div className="absolute -right-1 -top-1 h-4 w-4 border-r-2 border-t-2 border-gold-300" />
                <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-gold-300" />
                <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-gold-300" />

                <p className="relative font-mono text-[0.55rem] uppercase tracking-[0.45em] text-gold-400/90">
                  Private lounge
                </p>
                <h2
                  className="relative mt-2 font-display text-[clamp(3.2rem,9vw,5.5rem)] leading-[0.9] tracking-[0.16em] gold-text"
                  style={{
                    filter:
                      'drop-shadow(0 0 18px rgba(201,162,39,.55)) drop-shadow(0 0 40px rgba(240,223,168,.25))',
                  }}
                >
                  DIAMOND
                </h2>
                <div className="relative mx-auto mt-3 h-px w-24 bg-gold-line opacity-80" />
                <p className="relative mt-3 font-mono text-[0.68rem] uppercase tracking-[0.42em] text-gold-200">
                  Casino Marina
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right content panel */}
          <motion.div
            className="relative flex h-full flex-col border border-gold-500/30 p-7 sm:p-9"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              background:
                'linear-gradient(165deg, rgba(18,14,10,.88), rgba(8,8,10,.92) 55%, rgba(12,22,16,.88))',
              boxShadow: 'inset 0 0 60px rgba(201,162,39,.06), 0 24px 50px rgba(0,0,0,.4)',
            }}
          >
            <div className="absolute right-4 top-4 font-display text-3xl text-gold-500/25" aria-hidden="true">
              ♠
            </div>
            <p className="label">Above Colombo</p>
            <h3 className="h-display mt-4 text-[clamp(1.6rem,3vw,2.2rem)]">
              Eighteen seats.
              <br />
              <span className="gold-text">One game.</span>
            </h3>
            <p className="lede mt-5 text-[0.92rem]">
              Professional dealers, published structures and complimentary food &amp; drink —
              two hundred metres over the city.
            </p>

            {/* The edge — what the room actually gives you, filling the panel */}
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-gold-500/20 pt-6">
              {EDGE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2 text-[0.8rem] leading-snug text-bone/60">
                  <Check size={14} strokeWidth={1.8} className="mt-0.5 shrink-0 text-gold-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Pinned to the base so this panel always reaches the floor of the stage */}
            <div className="mt-auto">
              <div className="mt-8 grid grid-cols-4 gap-2 border-t border-gold-500/20 pt-6">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-display text-[1.35rem] leading-none text-gold-200 sm:text-[1.55rem]">
                      {s.value}
                    </p>
                    <p className="mt-2 font-mono text-[0.5rem] uppercase tracking-label text-bone/40">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <Link href="/bookings" className="btn btn-solid flex-1 flex-col gap-1.5 !py-4">
                  <Armchair size={19} strokeWidth={1.4} />
                  <span>Reserve a seat</span>
                </Link>
                <Link href="/games" className="btn flex-1 flex-col gap-1.5 !py-4">
                  <Dices size={19} strokeWidth={1.4} />
                  <span>Tonight&rsquo;s games</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom pillar row — fills width */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const red = p.suit === '♥' || p.suit === '♦';
            return (
              <motion.div
                key={p.title}
                className="flex items-start gap-4 border border-gold-500/25 bg-ink/55 p-5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                style={{
                  boxShadow: 'inset 0 0 30px rgba(201,162,39,.04)',
                }}
              >
                <span
                  className="font-display text-3xl leading-none"
                  style={{ color: red ? 'rgba(225,29,72,.85)' : 'rgba(201,162,39,.9)' }}
                  aria-hidden="true"
                >
                  {p.suit}
                </span>
                <div>
                  <p className="font-display text-[1.15rem] text-gold-100">{p.title}</p>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-bone/50">{p.note}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile-only chip photo strip (left collage is desktop-only) */}
        <motion.div
          className="relative mt-6 aspect-[21/8] overflow-hidden border border-gold-500/25 lg:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={images.casino.chips}
            alt="Casino chips"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/70" />
        </motion.div>
      </div>
    </section>
  );
}
