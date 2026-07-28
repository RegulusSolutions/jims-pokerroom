import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBand from '@/components/ui/CtaBand';
import Atmosphere from '@/components/ui/Atmosphere';
import { games, blindLevels, images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Games & stakes',
  description:
    "Texas Hold'em, Omaha Hi and Omaha Hi/Lo cash games plus tournament structures at Jim's Poker Room, Colombo.",
};

const houseRules = [
  { rule: 'Cards speak', note: 'The best hand wins at showdown whether or not it is announced correctly.' },
  { rule: 'One player to a hand', note: 'No advice, no discussing a live hand, no showing your cards to the rail.' },
  { rule: 'String bets are called', note: 'Announce the amount or put it all in with one motion.' },
  { rule: 'Phones off the table', note: 'Take calls away from the felt. Nothing on the table but chips and cards.' },
  { rule: 'Chips visible at all times', note: 'Largest denominations in front. No ratholing between hands.' },
  { rule: 'The floor decides', note: 'In the interest of fairness, the floor call is final.' },
];

const accents = [
  { suit: '♠', color: 'rgba(240,223,168,.85)' },
  { suit: '♥', color: 'rgba(225,29,72,.85)' },
  { suit: '♦', color: 'rgba(225,29,72,.85)' },
] as const;

export default function GamesPage() {
  return (
    <>
      <PageHero
        label="Games & stakes"
        lines={['What we', { text: 'deal.', gold: true }]}
        body="Cash tables open at six and run until the last seat empties. Tournament structures are published so you know the clock before you buy in."
        image={images.casino.cards}
      />

      <section className="relative overflow-hidden pb-28">
        <Atmosphere intensity="soft" />
        <div className="shell relative grid gap-5 lg:grid-cols-3">
          {games.map((g, i) => {
            const a = accents[i] ?? accents[0];
            return (
              <Reveal key={g.code} delay={i * 0.08}>
                <div className="group velvet relative flex h-full flex-col overflow-hidden p-9 transition-all duration-500 hover:border-gold-500/50 sm:p-11">
                  <span
                    className="pointer-events-none absolute -right-4 -top-6 font-display text-[6.5rem] leading-none opacity-[0.12] transition-opacity group-hover:opacity-[0.2]"
                    style={{ color: a.color }}
                    aria-hidden="true"
                  >
                    {a.suit}
                  </span>
                  <p className="relative font-mono text-[0.68rem] tracking-wider2 text-gold-500">{g.code}</p>
                  <h2 className="h-display relative mt-5 text-[1.9rem] transition-colors duration-500 group-hover:text-gold-200">
                    {g.name}
                  </h2>
                  <p className="relative mt-2 font-mono text-[0.62rem] uppercase tracking-label text-bone/35">
                    {g.detail}
                  </p>
                  <p className="lede relative mt-6 flex-1 text-[0.9rem]">{g.body}</p>
                  <div className="relative mt-8 border-t border-gold-500/15 pt-6">
                    <p className="label mb-4">Stakes</p>
                    <div className="flex flex-wrap gap-2">
                      {g.stakes.map((s) => (
                        <span
                          key={s}
                          className="border border-gold-500/30 bg-ink/40 px-3 py-1.5 font-mono text-[0.64rem] text-gold-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-gold-500/15 felt-band py-28">
        <Atmosphere intensity="soft" />
        <div className="shell relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            label="Tournament clock"
            title="Standard"
            gold="structure."
            body="Twenty-minute levels on weekdays. Weekend deepstacks run thirty-minute levels off a fifty-thousand starting stack."
          />
          <Reveal delay={0.12}>
            <div className="velvet overflow-hidden">
              <div className="grid grid-cols-[52px_1fr_78px_78px] gap-4 border-b border-gold-500/20 bg-ink/50 px-5 py-3 font-mono text-[0.58rem] uppercase tracking-label text-bone/40 sm:px-6">
                <span>Level</span>
                <span>Blinds</span>
                <span>Ante</span>
                <span className="text-right">Length</span>
              </div>
              {blindLevels.map((l, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[52px_1fr_78px_78px] gap-4 border-t border-gold-500/10 px-5 py-4 font-mono text-[0.78rem] text-bone/70 transition-all duration-300 hover:bg-gold-500/[0.04] hover:pl-7 hover:text-gold-100 sm:px-6"
                >
                  <span className="text-gold-500">{l.level}</span>
                  <span>{l.blinds}</span>
                  <span className="text-bone/40">{l.ante}</span>
                  <span className="text-right text-bone/40">{l.length}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <Atmosphere intensity="edge" className="opacity-70" />
        <div className="shell relative">
          <SectionHeading label="House rules" title="Six things" gold="the floor enforces." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {houseRules.map((r, i) => (
              <Reveal key={r.rule} delay={i * 0.05}>
                <div className="velvet h-full p-8 transition-colors duration-500 hover:border-gold-500/45">
                  <p className="font-mono text-[0.6rem] tracking-label text-gold-500">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-4 font-display text-[1.2rem] text-bone">{r.rule}</h3>
                  <p className="lede mt-3 text-[0.86rem]">{r.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Get a seat." body="Call ahead for a specific stake and we will hold one for you." />
    </>
  );
}
