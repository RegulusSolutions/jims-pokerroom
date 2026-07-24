import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy policy' };

const sections = [
  {
    t: 'What we collect',
    b: 'When you send a seat request we collect your name, phone number, preferred date and any notes you add. If you visit the room, Majestic Pride records your ID at the entrance under its own casino licensing obligations.',
  },
  {
    t: 'Why we collect it',
    b: 'Only to confirm and hold your seat, and to contact you if a game or structure changes. We do not sell player data or share it with advertisers.',
  },
  {
    t: 'How long we keep it',
    b: 'Reservation details are kept for twelve months so we can recognise returning players, then deleted. Ask us at any time and we will remove your details sooner.',
  },
  {
    t: 'Cookies',
    b: 'This site stores one item in your browser: confirmation that you passed the age check, held for the session only. Analytics, if enabled, is aggregate and does not identify you.',
  },
  {
    t: 'Your choices',
    b: 'Write to us to see what we hold, correct it, or have it deleted. We will act on the request within thirty days.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" lines={['Privacy', { text: 'policy.', gold: true }]} />
      <section className="pb-28">
        <div className="shell max-w-3xl space-y-10">
          {sections.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <div className="border-t border-gold-500/15 pt-8">
                <h2 className="h-display text-[1.4rem]">{s.t}</h2>
                <p className="lede mt-4">{s.b}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <p className="lede border-t border-gold-500/15 pt-8">
              Questions about any of this go to{' '}
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
