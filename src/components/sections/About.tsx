import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { images, roomFacts } from '@/lib/content';

/** The flop — cinematic room reveal with spotlight glass panel. */
export default function About() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40" id="room">
      {/* Deep ruby → gold → emerald mesh */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 60% at 70% 40%, rgba(201,162,39,.18), transparent 55%),
            radial-gradient(ellipse 50% 55% at 10% 80%, rgba(155,27,47,.3), transparent 50%),
            radial-gradient(ellipse 40% 45% at 90% 90%, rgba(13,90,52,.25), transparent 45%),
            linear-gradient(160deg, #0a0608 0%, #050506 50%, #06100c 100%)
          `,
        }}
      />
      {/* Soft spotlight */}
      <div
        className="pointer-events-none absolute left-[20%] top-0 h-[60%] w-[50%] -translate-x-1/2 opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(240,223,168,.15), transparent 70%)' }}
      />

      <div className="shell relative">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Full cinematic photo */}
          <Reveal>
            <div className="relative h-full min-h-[420px] overflow-hidden border border-gold-500/30 sm:min-h-[520px]">
              <Image
                src={images.room}
                alt="Inside Diamond Lounge at Casino Marina"
                fill
                sizes="(max-width:1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

              {/* Floating glass caption */}
              <div
                className="absolute bottom-6 left-6 right-6 border border-gold-500/35 bg-ink/55 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm sm:p-6"
                style={{ boxShadow: '0 20px 50px rgba(0,0,0,.4), inset 0 1px 0 rgba(240,223,168,.12)' }}
              >
                <p className="font-mono text-[0.58rem] uppercase tracking-label text-gold-400">
                  Diamond Lounge · Casino Marina
                </p>
                <p className="mt-3 font-display text-[1.55rem] leading-snug text-gold-100">
                  Dedicated felt.
                  <br />
                  Nothing else.
                </p>
              </div>

              {/* Suit ornaments */}
              <span className="absolute right-5 top-5 font-display text-2xl text-gold-500/40" aria-hidden="true">
                ♠
              </span>
            </div>
          </Reveal>

          {/* Copy panel with gradient frame */}
          <Reveal delay={0.1}>
            <div
              className="relative flex h-full flex-col justify-center border border-gold-500/25 p-8 sm:p-10 lg:p-12"
              style={{
                background:
                  'linear-gradient(165deg, rgba(18,14,10,.92) 0%, rgba(8,8,10,.95) 50%, rgba(10,20,14,.9) 100%)',
                boxShadow: 'inset 0 0 80px rgba(201,162,39,.06), 0 30px 60px rgba(0,0,0,.35)',
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    'radial-gradient(ellipse at 100% 0%, rgba(155,27,47,.2), transparent 45%)',
                }}
              />

              <div className="relative">
                <p className="label">The flop</p>
                <h2 className="h-display mt-5 text-[clamp(2rem,4vw,3.4rem)]">
                  A room that only
                  <br />
                  <span className="gold-text">does one thing.</span>
                </h2>

                <div className="mt-6 h-px w-20 bg-gold-line" />

                <p className="lede mt-7">
                  Diamond Lounge brings private-table service to Casino Marina. It is built for
                  people who came to play cards &mdash; casual players on a Friday and serious
                  regulars enjoying a structured game in the same lounge.
                </p>
                <p className="lede mt-5">
                  Hold&rsquo;em and PLO5 share the felt with Roulette, Andar Bahar, Blackjack,
                  Baccarat and Niu Niu. Professional dealers keep the action moving, with food and
                  drink on the house while you&rsquo;re seated.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-3">
                  {roomFacts.filter((fact) => fact.value !== '18+').map((fact, index) => (
                    <div
                      key={fact.label}
                      className="border border-gold-500/20 bg-ink/40 px-2 py-5 text-center"
                      style={{
                        boxShadow: `inset 0 -2px 20px ${
                          ['rgba(201,162,39,.35)', 'rgba(225,29,72,.3)', 'rgba(22,163,74,.3)'][index]
                        }`,
                      }}
                    >
                      <p className="font-display text-[2rem] leading-none text-gold-200 sm:text-[2.4rem]">
                        {fact.value}
                      </p>
                      <p className="mt-2.5 font-mono text-[0.52rem] uppercase tracking-label text-bone/40">
                        {fact.label}
                      </p>
                    </div>
                  ))}
                </div>

                <Link href="/about" className="btn mt-10 w-fit">
                  More about the room
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
