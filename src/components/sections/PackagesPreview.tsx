import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Atmosphere from '@/components/ui/Atmosphere';
import { packages } from '@/lib/content';

export default function PackagesPreview() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <Atmosphere intensity="soft" />
      <div className="shell relative">
        <SectionHeading
          label="Flying in"
          title="We handle the"
          gold="rest of the trip."
          body="Hotel, transfers and in some cases flights, arranged around the nights you want to play."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.09}>
              <Link href="/packages" className="group block h-full">
                <article
                  className={`bracket velvet flex h-full flex-col overflow-hidden transition-all duration-500 group-hover:border-gold-500/50 ${
                    'featured' in p && p.featured ? 'border-gold-500/45 shadow-[0_0_40px_rgba(201,162,39,.12)]' : ''
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-onyx">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width:1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1100ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
                    {'featured' in p && p.featured && (
                      <span className="absolute left-4 top-4 border border-gold-500 bg-ink/80 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-label text-gold-200 backdrop-blur">
                        Most booked
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="label">{p.for}</p>
                    <h3 className="h-display mt-4 flex items-start justify-between gap-3 text-[1.7rem]">
                      {p.name}
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.3}
                        className="mt-1 shrink-0 text-gold-500 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </h3>
                    <p className="lede mt-4 flex-1 text-[0.9rem]">{p.body}</p>
                    <p className="mt-6 border-t border-gold-500/15 pt-5 font-mono text-[0.68rem] tracking-wider2 text-gold-300">
                      {p.price}
                    </p>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
