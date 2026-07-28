import Link from 'next/link';
import Atmosphere from '@/components/ui/Atmosphere';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Atmosphere intensity="rich" />
      <div className="relative">
        <div className="mb-8 flex justify-center gap-6 font-display text-2xl text-gold-500/35" aria-hidden="true">
          <span>♠</span>
          <span className="text-[var(--ruby-bright)]/40">♥</span>
          <span className="text-[var(--ruby-bright)]/40">♦</span>
          <span>♣</span>
        </div>
        <p className="label mb-6">Folded</p>
        <h1 className="h-display text-[clamp(3rem,12vw,9rem)]">
          <span className="gold-text">404</span>
        </h1>
        <p className="lede mx-auto mt-6 max-w-md">
          That page isn&rsquo;t in the deck. Head back to the table.
        </p>
        <Link href="/" className="btn btn-solid mt-10">
          Back to the room
        </Link>
      </div>
    </section>
  );
}
