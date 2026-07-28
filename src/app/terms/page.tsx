import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Terms & conditions' };

const sections = [
  { t: 'Entry', b: 'Entry is restricted to persons 18 years and over. Photo ID is required and admission is at the discretion of Majestic Pride Casino and its door staff.' },
  { t: 'Reservations', b: 'A seat request is a request, not a confirmed booking, until a host confirms it by phone or message. Unclaimed seats are released fifteen minutes after a tournament starts.' },
  { t: 'Game rules', b: 'All games run under the published house rules. The floor decision is final in the interest of fairness, including on disputed hands, misdeals and player conduct.' },
  { t: 'Conduct', b: 'We reserve the right to remove any player for abusive behaviour, collusion, soft play, chip dumping or interfering with the running of a game.' },
  { t: 'Structures and prizes', b: 'Published structures, buy-ins and guarantees may change if entries fall materially short. Any change is announced before cards are in the air.' },
  { t: 'Liability', b: 'Players are responsible for their own chips and belongings. Gambling carries financial risk and is undertaken at your own discretion.' },
];

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" lines={['Terms &', { text: 'conditions.', gold: true }]} />
      <section className="relative overflow-hidden pb-28">
        <div className="shell relative max-w-3xl space-y-6">
          {sections.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <div className="velvet p-8">
                <p className="font-mono text-[0.6rem] tracking-label text-gold-500">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="h-display mt-4 text-[1.4rem]">{s.t}</h2>
                <p className="lede mt-4">{s.b}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <p className="lede border-t border-gold-500/15 pt-8">
              Governed by the laws of Sri Lanka. Contact{' '}
              <a href={`mailto:${site.contact.email}`} className="text-gold-400 underline underline-offset-4">
                {site.contact.email}
              </a>
              . This page is a working draft — have it reviewed by a Sri Lankan lawyer before launch.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
