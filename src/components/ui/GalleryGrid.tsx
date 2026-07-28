'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Shot = { readonly src: string; readonly alt: string; readonly span?: string };

export default function GalleryGrid({ shots }: { shots: readonly Shot[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const move = useCallback(
    (d: number) => setIndex((i) => (i === null ? null : (i + d + shots.length) % shots.length)),
    [shots.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, move]);

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] lg:grid-cols-4">
        {shots.map((s, i) => (
          <button
            key={s.src + i}
            onClick={() => setIndex(i)}
            className={cn(
              'bracket group relative overflow-hidden border border-gold-500/20 bg-onyx',
              s.span === 'wide' && 'lg:col-span-2',
              s.span === 'tall' && 'row-span-2'
            )}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width:640px) 50vw, 25vw"
              className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-4 text-left font-mono text-[0.62rem] uppercase tracking-wider2 text-gold-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {s.alt}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/96 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setIndex(null)}
              aria-label="Close"
              className="absolute right-5 top-5 p-3 text-gold-400 transition-colors hover:text-gold-100"
            >
              <X size={26} strokeWidth={1.3} />
            </button>
            <button
              onClick={() => move(-1)}
              aria-label="Previous"
              className="absolute left-3 p-3 text-gold-400 transition-colors hover:text-gold-100 sm:left-8"
            >
              <ChevronLeft size={34} strokeWidth={1.1} />
            </button>
            <button
              onClick={() => move(1)}
              aria-label="Next"
              className="absolute right-3 p-3 text-gold-400 transition-colors hover:text-gold-100 sm:right-8"
            >
              <ChevronRight size={34} strokeWidth={1.1} />
            </button>

            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-6 max-h-[78vh] w-full max-w-4xl"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={shots[index].src}
                  alt={shots[index].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-5 text-center font-mono text-[0.68rem] uppercase tracking-label text-gold-400">
                {shots[index].alt} &middot; {index + 1} / {shots.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
