import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Atmosphere from '@/components/ui/Atmosphere';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Responsible gaming',
  description: `Responsible gaming policy and player safeguards at ${site.name}.`,
};

const points = [
  {
    t: 'Strictly 18 and over',
    b: 'Photo ID is checked at the entrance to Majestic Pride. Anyone unable to prove they are 18 will not be seated, and we do not make exceptions.',
  },
  {
    t: 'Decide your limit before you sit',
    b: 'Bring what you can afford to lose and leave the rest at home. A buy-in you would be uncomfortable losing is the wrong buy-in.',
  },
  {
    t: 'Poker is entertainment, not income',
    b: 'Treat the buy-in as the cost of the evening. If you are playing to recover money you have already lost, stop for the night.',
  },
  {
    t: 'Ask us for a self-exclusion',
    b: 'Speak to a host or the floor and we will bar you from the room for a period you choose. The request is confidential and we do not ask why.',
  },
  {
    t: 'No credit, no lending',
    b: 'We do not extend credit to players and we discourage borrowing between players at the table.',
  },
  {
    t: 'Take breaks',
    b: 'Long sessions make for bad decisions. Step away from the table, eat something, and come back when you are clear.',
  },
];

export default function ResponsibleGamingPage() {
  return (
    <>
      <PageHero
        label="18+"
        lines={['Play within', { text: 'your limits.', gold: true }]}
        body="Gambling should cost you an evening, not a month. These are the safeguards we apply and the ones we ask you to apply yourself."
      />

      <section className="relative overflow-hidden pb-28">
        <Atmosphere intensity="soft" />
        <div className="shell relative">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {points.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 0.07}>
                <div className="velvet h-full p-9 transition-all duration-500 hover:border-gold-500/45">
                  <p className="font-mono text-[0.6rem] tracking-label text-gold-500">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="h-display mt-5 text-[1.3rem]">{p.t}</h2>
                  <p className="lede mt-4 text-[0.88rem]">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="velvet mt-10 p-9 sm:p-12">
              <p className="label mb-5">If it has stopped being a game</p>
              <p className="lede max-w-2xl">
                If gambling is affecting your finances, your work or the people around you, talk to
                someone. Speak to a host at the room and we will arrange a self-exclusion the same
                night, or contact the National Institute of Mental Health helpline in Sri Lanka on{' '}
                <span className="font-mono text-gold-300">1926</span> for free, confidential support.
              </p>
              <p className="lede mt-5 max-w-2xl">
                You can also reach us directly on{' '}
                <a href={site.contact.phoneHref} className="text-gold-400 underline underline-offset-4">
                  {site.contact.phone}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
