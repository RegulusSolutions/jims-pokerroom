import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBand from '@/components/ui/CtaBand';
import Counter from '@/components/ui/Counter';
import Atmosphere from '@/components/ui/Atmosphere';
import { houseValues, amenities, images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About the room',
  description:
    "Jim's Poker Room is a dedicated poker room inside Majestic Pride at Colombo Lotus Tower, focused exclusively on Hold'em and Omaha cash games and tournaments.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Who are we"
        lines={['A room built', { text: 'for the game.', gold: true }]}
        body="Not as large as the country's major casinos, and deliberately so. Jim's has carved out a niche in the local poker scene by doing one thing properly."
        image={images.room}
      />

      <section className="relative overflow-hidden pb-28">
        <Atmosphere intensity="soft" />
        <div className="shell relative grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div className="space-y-6">
            <Reveal>
              <p className="lede">
                Jim&rsquo;s Poker Room in Sri Lanka is known for offering a dedicated and intimate
                environment for poker enthusiasts. While not as large as some of the country&rsquo;s
                major casinos, it has carved out a niche within the local poker scene by focusing
                exclusively on poker games and tournaments. The room attracts both casual players and
                serious competitors looking for well-structured games in a friendly and professional
                setting.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lede">
                The room primarily spreads Texas Hold&rsquo;em cash games at stakes to suit different
                levels of play, with pot limit Omaha running alongside on most nights. Tournaments
                follow competitive formats across a range of buy-ins, so newcomers and experienced
                players can both find a structure worth entering.
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
                {[
                  { n: 2, s: '', l: 'Tables' },
                  { n: 9, s: '', l: 'Seats each' },
                  { n: 3, s: '', l: 'Game types' },
                  { n: 18, s: '+', l: 'Minimum age' },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-[2.2rem] leading-none text-gold-400">
                      <Counter value={s.n} suffix={s.s} />
                    </p>
                    <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-label text-bone/40">
                      {s.l}
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
                alt="Inside Jim's Poker Room"
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
