'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import SplitHeading from '@/components/ui/SplitHeading';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center pb-28 pt-36">
      <div className="shell">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          {site.address.building} &middot; Level AC6 &middot; Colombo
        </motion.p>

        <div className="mt-8">
          <SplitHeading
            lines={[{ text: "Sri Lanka's" }, { text: 'poker room.', gold: true }]}
            className="text-[clamp(3.2rem,10.5vw,9.5rem)]"
            delay={0.35}
          />
        </div>

        <motion.p
          className="lede mt-9 max-w-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          Nine seats, one game. Texas Hold&rsquo;em and Omaha cash tables and structured
          tournaments, dealt by professional croupiers two hundred metres above Colombo.
        </motion.p>

        <motion.div
          className="mt-11 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/bookings" className="btn btn-solid">Reserve a seat</Link>
          <Link href="/games" className="btn">Tonight&rsquo;s games</Link>
        </motion.div>

        <motion.div
          className="mt-20 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-label text-bone/35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Scroll to see the flop
          <ArrowDown size={13} strokeWidth={1.4} className="animate-bounce text-gold-500" />
        </motion.div>
      </div>
    </section>
  );
}
