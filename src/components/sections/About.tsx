import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import { images } from '@/lib/content';

export default function About() {
  return (
    <section className="relative py-28 sm:py-40" id="room">
      <div className="shell grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="bracket relative aspect-[4/5] overflow-hidden border border-gold-500/15">
            <Image
              src={images.room}
              alt="The poker room at Colombo Lotus Tower"
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover opacity-75 grayscale transition-all duration-[1200ms] hover:opacity-100 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="label">The flop</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h-display mt-5 text-[clamp(2.1rem,4.6vw,3.8rem)]">
              A room that only<br />
              <span className="gold-text">does one thing.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede mt-7">
              Jim&rsquo;s isn&rsquo;t a casino floor with a poker table pushed into the corner.
              It&rsquo;s a dedicated room inside Majestic Pride at Lotus Tower, built for people
              who came to play cards &mdash; casual players on a Friday and serious regulars
              grinding a structure, in the same nine seats.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="lede mt-5">
              We spread Hold&rsquo;em every night and Omaha most nights, with published blind
              structures and dealers who keep the hands moving. Food and drink are on the house
              while you&rsquo;re seated.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gold-500/15 pt-9">
              {[
                { n: 2, s: '', label: 'Dedicated tables' },
                { n: 9, s: '', label: 'Seats per table' },
                { n: 6, s: 'pm', label: 'Doors open' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[2.4rem] leading-none text-gold-400">
                    <Counter value={stat.n} suffix={stat.s} />
                  </p>
                  <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-label text-bone/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <Link href="/about" className="btn mt-11">More about the room</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
