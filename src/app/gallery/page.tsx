import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import GalleryGrid from '@/components/ui/GalleryGrid';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/ui/Reveal';
import { gallery, images } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Inside Diamond Lounge at Casino Marina — tournament nights, final tables and live events in Colombo.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        lines={['The room,', { text: 'in play.', gold: true }]}
        body="Tournament nights, final tables and the occasional live band inside Casino Marina on Marine Drive."
        image={images.casino.table}
      />

      {/* Featured wide cinematic strip */}
      <section className="relative overflow-hidden pb-10">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% 0%, rgba(201,162,39,.15), transparent 55%), radial-gradient(ellipse 40% 50% at 0% 100%, rgba(155,27,47,.2), transparent 50%)',
          }}
        />
        <div className="shell relative">
          <Reveal>
            <figure
              className="relative aspect-[21/9] min-h-[240px] overflow-hidden border border-gold-500/30"
              style={{
                boxShadow: '0 30px 70px rgba(0,0,0,.4), inset 0 0 0 1px rgba(240,223,168,.08)',
              }}
            >
              <Image
                src={images.casino.chips}
                alt="Colour on the felt"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-6 sm:p-10">
                <p className="font-mono text-[0.6rem] uppercase tracking-label text-gold-400">
                  Featured
                </p>
                <p className="mt-3 font-display text-[clamp(1.5rem,3vw,2.4rem)] text-gold-100">
                  Colour on the felt. Action in the air.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, transparent, rgba(13,90,52,.12) 40%, transparent)',
          }}
        />
        <div className="shell relative">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <span className="font-display text-2xl text-gold-500/50" aria-hidden="true">
                ♠ ♥ ♦ ♣
              </span>
              <p className="font-mono text-[0.62rem] uppercase tracking-label text-bone/40">
                Full archive
              </p>
            </div>
          </Reveal>
          <GalleryGrid shots={gallery} />
        </div>
      </section>

      <CtaBand title="See it yourself." body="Open 24 hours. Bring ID." />
    </>
  );
}
