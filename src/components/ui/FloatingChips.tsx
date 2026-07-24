import Image from 'next/image';
import { images } from '@/lib/content';

/** CSS-only floating chips for pages that don't mount WebGL.
 *  Purely decorative, so it stays out of the accessibility tree. */
export default function FloatingChips() {
  const chips = [
    { src: images.chipA, cls: 'left-[4%] top-[16%] w-20 sm:w-28', delay: '0s', dur: '11s' },
    { src: images.chipB, cls: 'right-[6%] top-[30%] w-14 sm:w-20', delay: '1.8s', dur: '9s' },
    { src: images.chipA, cls: 'left-[12%] bottom-[14%] w-12 sm:w-16', delay: '3.2s', dur: '13s' },
    { src: images.chipB, cls: 'right-[14%] bottom-[22%] w-16 sm:w-24', delay: '0.9s', dur: '10s' },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {chips.map((c, i) => (
        <div
          key={i}
          className={`absolute animate-float opacity-25 ${c.cls}`}
          style={{ animationDelay: c.delay, animationDuration: c.dur }}
        >
          <Image src={c.src} alt="" width={140} height={140} className="h-auto w-full" unoptimized />
        </div>
      ))}
    </div>
  );
}
