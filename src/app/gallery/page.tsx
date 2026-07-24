import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import GalleryGrid from '@/components/ui/GalleryGrid';
import CtaBand from '@/components/ui/CtaBand';
import { gallery } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Gallery',
  description: "Inside Jim's Poker Room — tournament nights, final tables and live events at Colombo Lotus Tower.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        lines={['The room,', { text: 'in play.', gold: true }]}
        body="Tournament nights, final tables and the occasional live band, two hundred metres above Colombo."
      />

      <section className="pb-28">
        <div className="shell">
          <GalleryGrid shots={gallery} />
        </div>
      </section>

      <CtaBand title="See it yourself." body="Doors open at six. Bring ID." />
    </>
  );
}
