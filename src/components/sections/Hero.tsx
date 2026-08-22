'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import SplitHeading from '@/components/ui/SplitHeading';
import CasinoMotifs from '@/components/ui/CasinoMotifs';
import { images } from '@/lib/content';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-24 pt-36 sm:pb-28">
      {/* Full-bleed colourful casino plane */}
      <div className="absolute inset-0">
        <Image
          src={images.casino.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] scale-105"
        />
        {/* Dark wash for text legibility over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(5,5,6,.92) 0%, rgba(5,5,6,.75) 50%, rgba(5,5,6,.6) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #050506 0%, transparent 42%)',
          }}
        />
      </div>

      <CasinoMotifs />

      <div className="shell relative z-10">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {site.address.building} &middot; Marine Drive &middot; Colombo
        </motion.p>

        <div className="mt-7 max-w-4xl">
          <SplitHeading
            lines={[{ text: "Colombo's" }, { text: 'private lounge.', gold: true }]}
            className="text-[clamp(2.6rem,7.5vw,6.5rem)]"
            delay={0.3}
          />
        </div>

        <motion.p
          className="lede mt-8 max-w-xl text-bone/75"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Seven games, one lounge. Texas Hold&rsquo;em, PLO5, Roulette, Andar Bahar,
          Blackjack, Baccarat and Niu Niu, dealt by professional croupiers at Casino Marina.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/bookings" className="btn btn-solid">Reserve a seat</Link>
          <Link href="/games" className="btn">Tonight&rsquo;s games</Link>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-label text-bone/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Enter the room
          <ArrowDown size={13} strokeWidth={1.4} className="animate-bounce text-gold-500" />
        </motion.div>
      </div>
    </section>
  );
}
