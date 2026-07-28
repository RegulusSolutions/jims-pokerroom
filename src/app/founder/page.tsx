import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import Atmosphere from '@/components/ui/Atmosphere';
import { site } from '@/lib/site';
import { images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Founder',
  description: `${site.founder}, founder of ${site.name} at Colombo Lotus Tower.`,
};

export default function FounderPage() {
  return (
    <>
      <PageHero
        label="Founder"
        lines={['Jim', { text: 'Ramchand.', gold: true }]}
        body="The room carries his name because he is in it. Most nights you will find him at the rail, watching the games run."
        image={images.casino.chips}
      />

      <section className="relative overflow-hidden pb-28">
        <Atmosphere intensity="soft" />
        <div className="shell relative grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal>
            <div className="bracket photo-frame relative aspect-[3/4]">
              <Image
                src={images.about}
                alt={site.founder}
                fill
                sizes="(max-width:1024px) 100vw, 38vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute bottom-7 left-7">
                <p className="font-display text-2xl text-gold-100">{site.founder}</p>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-label text-gold-500">
                  Founder
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <blockquote className="velvet border-l-2 border-gold-500/60 p-8 pl-7">
                <p className="font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-snug text-gold-100">
                  &ldquo;A poker room is only as good as its worst-run table. That is the whole
                  job.&rdquo;
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lede">
                Jim Ramchand opened the room to give Sri Lanka something the island did not have: a
                space that exists for poker rather than one that tolerates it. That meant hiring and
                training croupiers rather than borrowing floor staff, publishing tournament structures
                in advance, and keeping the stakes wide enough that a first-timer and a regular can
                both find a game on a Tuesday.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="lede">
                The room sits inside Majestic Pride at Lotus Tower, which gives visiting players a
                landmark to find and a view worth the lift. Players fly in from across the region for
                the tournament weeks, and the packages that grew out of that &mdash; hotel, transfers,
                sometimes flights &mdash; are handled personally.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="lede">
                Reach him through the room on{' '}
                <a href={site.contact.phoneHref} className="text-gold-400 underline underline-offset-4">
                  {site.contact.phone}
                </a>
                .
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  { k: 'Founded', v: 'Jim Ramchand' },
                  { k: 'Venue', v: 'Majestic Pride, AC6' },
                  { k: 'Focus', v: 'Poker only' },
                ].map((r) => (
                  <div key={r.k} className="velvet p-7">
                    <p className="label mb-3">{r.k}</p>
                    <p className="font-display text-[1.15rem] text-bone">{r.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
