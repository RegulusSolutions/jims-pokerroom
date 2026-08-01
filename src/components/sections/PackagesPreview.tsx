import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { packages } from '@/lib/content';

const tiers = [
  { chip: '#16a34a', rim: '#86efac', value: '25', label: 'Local' },
  { chip: '#c9a227', rim: '#f0dfa8', value: '1K', label: 'Guest' },
  { chip: '#0B0B0D', rim: '#f0dfa8', value: '5K', label: 'Series' },
] as const;

function TierChip({ color, rim, value }: { color: string; rim: string; value: string }) {
  const ticks = [
    { x1: 92, y1: 50, x2: 98, y2: 50 },
    { x1: 83.98, y1: 74.7, x2: 88.85, y2: 78.04 },
    { x1: 62.98, y1: 89.98, x2: 65.88, y2: 95.27 },
    { x1: 37.02, y1: 89.98, x2: 34.12, y2: 95.27 },
    { x1: 16.02, y1: 74.7, x2: 11.15, y2: 78.04 },
    { x1: 8, y1: 50, x2: 2, y2: 50 },
    { x1: 16.02, y1: 25.3, x2: 11.15, y2: 21.96 },
    { x1: 37.02, y1: 10.02, x2: 34.12, y2: 4.73 },
    { x1: 62.98, y1: 10.02, x2: 65.88, y2: 4.73 },
    { x1: 83.98, y1: 25.3, x2: 88.85, y2: 21.96 },
  ] as const;

  return (
    <svg viewBox="0 0 100 100" className="h-14 w-14 drop-shadow-[0_8px_20px_rgba(0,0,0,.5)] sm:h-16 sm:w-16" aria-hidden="true">
      <defs>
        <radialGradient id={`tier-${value}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor={rim} />
          <stop offset="55%" stopColor={color} />
          <stop offset="100%" stopColor="#050506" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#tier-${value})`} />
      <circle cx="50" cy="50" r="40" fill="none" stroke={rim} strokeWidth="5" />
      {ticks.map((t, i) => (
        <line
          key={i}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke="rgba(255,255,255,.7)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      <circle cx="50" cy="50" r="20" fill="rgba(0,0,0,.3)" stroke="rgba(255,255,255,.4)" strokeWidth="1.2" />
      <text x="50" y="54" textAnchor="middle" fill="white" fontSize="12" fontFamily="ui-monospace,monospace" fontWeight="600">
        {value}
      </text>
    </svg>
  );
}

/** Packages as chip denominations — green / gold / black stacks. */
export default function PackagesPreview() {
  return (
    <section className="relative overflow-hidden border-t border-gold-500/15 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(13,90,52,.25), transparent 55%), radial-gradient(ellipse 40% 40% at 90% 80%, rgba(201,162,39,.12), transparent 50%)',
        }}
      />

      <div className="shell relative">
        <SectionHeading
          label="Flying in"
          title="We handle the"
          gold="rest of the trip."
          body="Hotel, transfers and in some cases flights, arranged around the nights you want to play."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => {
            const tier = tiers[i] ?? tiers[0];
            const featured = 'featured' in p && p.featured;
            return (
              <Reveal key={p.name} delay={i * 0.1}>
                <Link href="/packages" className="group block h-full">
                  <article
                    className={`relative flex h-full flex-col overflow-hidden border transition-all duration-500 group-hover:-translate-y-1.5 ${
                      featured
                        ? 'border-gold-500/55 bg-gradient-to-b from-[#1a1608] to-onyx shadow-[0_0_50px_rgba(201,162,39,.15)]'
                        : 'border-gold-500/25 bg-onyx/80 group-hover:border-gold-500/50'
                    }`}
                  >
                    {/* Chip denomination header */}
                    <div className="flex items-center justify-between border-b border-gold-500/20 px-6 py-5">
                      <div className="flex items-center gap-4">
                        <TierChip color={tier.chip} rim={tier.rim} value={tier.value} />
                        <div>
                          <p className="font-mono text-[0.55rem] uppercase tracking-label text-bone/40">
                            {tier.label} buy-in
                          </p>
                          <p className="label mt-1">{p.for}</p>
                        </div>
                      </div>
                      {featured && (
                        <span className="border border-gold-500 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-label text-gold-300">
                          Most booked
                        </span>
                      )}
                    </div>

                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width:1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1100ms] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3 className="h-display flex items-start justify-between gap-3 text-[1.65rem]">
                        {p.name}
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.3}
                          className="mt-1 shrink-0 text-gold-500 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </h3>
                      <p className="lede mt-4 flex-1 text-[0.9rem]">{p.body}</p>

                      <ul className="mt-6 space-y-2 border-t border-gold-500/15 pt-5">
                        {p.includes.slice(0, 3).map((inc) => (
                          <li key={inc} className="flex items-start gap-2.5 text-[0.82rem] text-bone/60">
                            <Check size={13} strokeWidth={1.6} className="mt-0.5 shrink-0 text-gold-500" />
                            {inc}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-6 font-mono text-[0.68rem] tracking-wider2 text-gold-300">
                        {p.price}
                      </p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
