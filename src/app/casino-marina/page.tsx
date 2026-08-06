import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBand from '@/components/ui/CtaBand';
import Atmosphere from '@/components/ui/Atmosphere';
import { site } from '@/lib/site';
import { images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Casino Marina Colombo',
  description:
    'Diamond Lounge is a private VIP lounge inside Casino Marina Colombo on Marine Drive.',
};

export default function CasinoMarinaPage() {
  return (
    <>
      <PageHero
        label="Our home"
        lines={['Inside', { text: 'Casino Marina.', gold: true }]}
        body="Diamond Lounge occupies its own lounge space within Casino Marina Colombo."
        image={images.casino.roulette}
      />

      <section className="relative overflow-hidden pb-28">
        <Atmosphere intensity="soft" />
        <div className="shell relative grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="bracket photo-frame relative aspect-[4/3]">
              <Image
                src={images.room}
                alt="Casino Marina Colombo on Marine Drive"
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <p className="lede">
                Casino Marina is the venue around us &mdash; gaming floors, dining and a waterfront
                setting on Marine Drive. Entry, ID checks and the dress standard are handled at the
                casino entrance before you reach Diamond Lounge.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lede">
                Diamond Lounge is the private multi-game room inside that casino: dedicated tables,
                attentive service and a quieter atmosphere away from the main floor.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <a
                href={site.partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-4 inline-flex items-center gap-2"
              >
                Visit Casino Marina <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-gold-500/15 felt-band py-28">
        <Atmosphere intensity="rich" className="opacity-50" />
        <div className="shell relative">
          <SectionHeading label="Before you arrive" title="Three things" gold="to know." />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              {
                t: 'Arrive at 30 Marine Drive',
                b: 'Casino Marina Colombo sits on Marine Drive in Colombo 03. Parking and drop-off are at the venue entrance.',
              },
              {
                t: 'Enter Casino Marina',
                b: 'Bring photo ID — strictly 18 and over. Dress smart casual; no beachwear, shorts or open sandals.',
              },
              {
                t: 'Ask for Diamond Lounge',
                b: 'Staff at the entrance will direct you to our private lounge on the gaming floor.',
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.07}>
                <div className="velvet h-full p-9 transition-all duration-500 hover:border-gold-500/50">
                  <p className="font-mono text-[0.6rem] tracking-label text-gold-500">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="h-display mt-5 text-[1.35rem]">{c.t}</h3>
                  <p className="lede mt-4 text-[0.88rem]">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.24}>
            <Link href="/locations" className="btn mt-12">
              How to get here
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
