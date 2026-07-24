import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBand from '@/components/ui/CtaBand';
import { site } from '@/lib/site';
import { images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Majestic Pride Casino',
  description:
    "Jim's Poker Room sits inside Majestic Pride Casino on level AC6 of Colombo Lotus Tower.",
};

export default function MajesticPridePage() {
  return (
    <>
      <PageHero
        label="Our home"
        lines={['Inside', { text: 'Majestic Pride.', gold: true }]}
        body="The poker room occupies its own space on level AC6 of Colombo Lotus Tower, within the Majestic Pride Casino floor."
      />

      <section className="pb-28">
        <div className="shell grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="bracket relative aspect-[4/3] overflow-hidden border border-gold-500/15">
              <Image
                src={images.room}
                alt="Majestic Pride Casino at Colombo Lotus Tower"
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <p className="lede">
                Majestic Pride is the casino floor around us &mdash; tables, slots, restaurants and
                a bar, all inside the tallest self-supporting structure in South Asia. Entry, ID
                checks and the dress standard are handled at the casino entrance before you reach
                the poker room.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lede">
                The arrangement suits both sides. Players get a full venue with everything a night
                out needs; we get to keep the poker room quiet and dedicated to one game.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <a
                href={site.partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-4 inline-flex items-center gap-2"
              >
                Visit Majestic Pride <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-gold-500/12 bg-carbon/40 py-28">
        <div className="shell">
          <SectionHeading label="Before you arrive" title="Three things" gold="to know." />
          <div className="mt-14 grid gap-px border border-gold-500/12 bg-gold-500/12 sm:grid-cols-3">
            {[
              { t: 'Bring photo ID', b: 'Checked at the casino entrance. Strictly 18 and over, no exceptions.' },
              { t: 'Dress smart casual', b: 'No beachwear, shorts or open sandals. The casino applies its own standard at the door.' },
              { t: 'Ask for the poker room', b: 'We are on the same level. Staff at the entrance will point you through.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.07}>
                <div className="h-full bg-ink p-9 transition-colors duration-500 hover:bg-onyx">
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
            <Link href="/locations" className="btn mt-12">How to get here</Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
