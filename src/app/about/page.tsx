import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBand from '@/components/ui/CtaBand';
import Atmosphere from '@/components/ui/Atmosphere';
import { houseValues, amenities, images, roomFacts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About the room',
  description:
    'Diamond Lounge is a private multi-game lounge inside Casino Marina Colombo, with cards, table games and host-led service.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Who are we"
        lines={['A room built', { text: 'for the game.', gold: true }]}
        body="A private multi-game lounge inside Casino Marina, bringing cards, table games and thoughtful host service together."
        image={images.room}
      />

      <section className="relative overflow-hidden pb-28">
        <Atmosphere intensity="soft" />
        <div className="shell relative grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div className="space-y-6">
            <Reveal>
              <p className="lede">
                Diamond Lounge is an intimate space inside Casino Marina Colombo for guests who want
                more from a night out. Cards, table games and a polished, professional atmosphere
                bring casual players and serious regulars together in one private lounge.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lede">
                Texas Hold&rsquo;em and PLO5 are joined by Roulette, Andar Bahar, Blackjack,
                Baccarat and Niu Niu. From cash tables to tournament structures and classic casino
                games, there is a table for every kind of player.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="lede">
                Staff run the games efficiently, which is the part that actually matters: hands per
                hour is the difference between a good night and a wasted one.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="velvet mt-12 grid grid-cols-2 gap-8 p-8 sm:grid-cols-4">
                {roomFacts.map((fact) => (
                  <div key={fact.label}>
                    <p className="font-display text-[2.2rem] leading-none text-gold-400">
                      {fact.value}
                    </p>
                    <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-label text-bone/40">
                      {fact.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="bracket photo-frame relative aspect-[3/4]">
              <Image
                src={images.about}
                alt="Inside Diamond Lounge at Casino Marina"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-gold-500/15 felt-band py-28">
        <Atmosphere intensity="rich" className="opacity-50" />
        <div className="shell relative">
          <SectionHeading label="The house" title="What we" gold="hold to." />
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {houseValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="group velvet h-full p-9 transition-all duration-500 hover:border-gold-500/50 sm:p-11">
                  <p className="font-mono text-[0.62rem] tracking-label text-gold-500">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="h-display mt-5 text-[1.5rem] transition-colors duration-500 group-hover:text-gold-200">
                    {v.title}
                  </h3>
                  <p className="lede mt-4 text-[0.9rem]">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <Atmosphere intensity="edge" className="opacity-60" />
        <div className="shell relative">
          <SectionHeading label="In the room" title="What you get" gold="when you sit." />
          <Reveal delay={0.12}>
            <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((a) => (
                <li
                  key={a}
                  className="velvet px-7 py-6 font-mono text-[0.75rem] tracking-wide text-bone/70 transition-all duration-400 hover:border-gold-500/45 hover:text-gold-200"
                >
                  <span className="mr-3 text-gold-500">♦</span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/founder" className="btn mt-12">
              Meet the founder
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
