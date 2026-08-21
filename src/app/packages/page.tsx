import type { Metadata } from 'next';
import Image from 'next/image';
import { Check } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import Atmosphere from '@/components/ui/Atmosphere';
import { packages, images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Packages',
  description:
    "Diamond Lounge packages at Casino Marina — hotel, transfers, table reservations and flight assistance for guests travelling to Colombo.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        label="Packages"
        lines={['Come for the cards.', { text: 'We do the rest.', gold: true }]}
        body="Food and beverage are complimentary for anyone seated in a live game. Beyond that, visiting players can have the hotel, the transfers and sometimes the flight handled by a host."
        image={images.casino.chips}
      />

      <section className="relative overflow-hidden pb-28">
        <Atmosphere intensity="soft" />
        <div className="shell relative space-y-6">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article
                className={`bracket velvet grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr] ${
                  'featured' in p && p.featured
                    ? 'border-gold-500/45 shadow-[0_0_50px_rgba(201,162,39,.1)]'
                    : ''
                }`}
              >
                <div className="relative min-h-[300px] overflow-hidden bg-onyx">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width:1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-[1100ms] hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-onyx/80" />
                </div>

                <div className="p-9 sm:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="label">{p.for}</p>
                    {'featured' in p && p.featured && (
                      <span className="border border-gold-500 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-label text-gold-300">
                        Most booked
                      </span>
                    )}
                  </div>

                  <h2 className="h-display mt-5 text-[clamp(1.8rem,3.4vw,2.6rem)]">{p.name}</h2>
                  <p className="lede mt-5">{p.body}</p>

                  <ul className="mt-9 space-y-3 border-t border-gold-500/15 pt-8">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-3 text-[0.9rem] text-bone/65">
                        <Check size={14} strokeWidth={1.6} className="mt-1 shrink-0 text-gold-500" />
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-9 font-mono text-[0.72rem] tracking-wider2 text-gold-300">{p.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        label="Talk to a host"
        title="Build your trip."
        body="Tell us the nights you want to play and we will put the rest around it."
      />
    </>
  );
}
