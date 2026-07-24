'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Accordion({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-gold-500/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-gold-500/15">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-gold-200"
            >
              <span className="font-display text-[1.1rem] leading-snug text-bone sm:text-[1.25rem]">
                {item.q}
              </span>
              <Plus
                size={19}
                strokeWidth={1.3}
                className={cn(
                  'shrink-0 text-gold-500 transition-transform duration-500',
                  isOpen && 'rotate-45'
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="lede max-w-2xl pb-7 pr-10 text-[0.94rem]">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
