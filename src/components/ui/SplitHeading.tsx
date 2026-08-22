'use client';

import { motion, useReducedMotion } from 'framer-motion';

/** Line-by-line masked rise. Used once per page, on the h1. */
export default function SplitHeading({
  lines,
  className = '',
  delay = 0,
}: {
  lines: (string | { text: string; gold?: boolean })[];
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <h1 className={`h-display ${className}`}>
      {lines.map((line, i) => {
        const text = typeof line === 'string' ? line : line.text;
        const gold = typeof line === 'string' ? false : line.gold;
        return (
          <span key={i} className="block overflow-hidden pt-[0.12em] pb-[0.16em]">
            <motion.span
              className={`block ${gold ? 'gold-text' : ''}`}
              initial={reduced ? false : { y: '112%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: delay + i * 0.11, ease: [0.16, 1, 0.3, 1] }}
            >
              {text}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
}
