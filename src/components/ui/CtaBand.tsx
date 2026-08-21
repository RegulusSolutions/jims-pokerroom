import Link from 'next/link';
import Reveal from './Reveal';
import CasinoMotifs from './CasinoMotifs';
import { site } from '@/lib/site';

export default function CtaBand({
  label = 'Showdown',
  title = 'Take the seat.',
  body = 'Call ahead on a tournament night and a host will help arrange your seat.',
}: {
  label?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-gold-500/15 bg-carbon py-28 sm:py-36">
      <CasinoMotifs dense />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 80% at 50% 50%, rgba(201,162,39,.13), transparent 68%)',
        }}
      />
      <div className="shell relative text-center">
        <Reveal>
          <p className="label">{label}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="h-display mt-6 text-[clamp(2.4rem,6.5vw,5.2rem)]">
            <span className="gold-text">{title}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="lede mx-auto mt-7 max-w-lg">{body}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-11 flex flex-wrap justify-center gap-3">
            <a href={site.contact.phoneHref} className="btn btn-solid">
              Call {site.contact.phone}
            </a>
            <Link href="/bookings" className="btn">Reserve online</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
