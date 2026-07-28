'use client';

import { useId } from 'react';
import { motion } from 'framer-motion';

type Suit = '♠' | '♥' | '♦' | '♣';

const SUIT_COLOR: Record<Suit, string> = {
  '♠': '#1a1a1e',
  '♣': '#1a1a1e',
  '♥': '#e11d48',
  '♦': '#e11d48',
};

function PlayingCard({
  rank,
  suit,
  className,
}: {
  rank: string;
  suit: Suit;
  className?: string;
}) {
  const color = SUIT_COLOR[suit];
  return (
    <div
      className={`relative aspect-[5/7] overflow-hidden rounded-lg border border-white/40 bg-gradient-to-br from-white via-[#fff8f0] to-[#f3e6d0] shadow-[0_18px_40px_rgba(0,0,0,.45)] ${className ?? ''}`}
      aria-hidden="true"
    >
      <div className="absolute left-1.5 top-1.5 flex flex-col items-center leading-none" style={{ color }}>
        <span className="font-display text-[0.85rem] font-semibold sm:text-[1.05rem]">{rank}</span>
        <span className="text-[0.7rem] sm:text-[0.85rem]">{suit}</span>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center font-display text-[2.4rem] sm:text-[3.2rem]"
        style={{ color }}
      >
        {suit}
      </div>
      <div
        className="absolute bottom-1.5 right-1.5 flex rotate-180 flex-col items-center leading-none"
        style={{ color }}
      >
        <span className="font-display text-[0.85rem] font-semibold sm:text-[1.05rem]">{rank}</span>
        <span className="text-[0.7rem] sm:text-[0.85rem]">{suit}</span>
      </div>
    </div>
  );
}

function Chip({
  color,
  rim,
  value,
  className,
}: {
  color: string;
  rim: string;
  value: string;
  className?: string;
}) {
  const uid = useId().replace(/:/g, '');
  const gradId = `chip-grad-${uid}`;

  return (
    <div className={`relative aspect-square ${className ?? ''}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_14px_28px_rgba(0,0,0,.55)]">
        <defs>
          <radialGradient id={gradId} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor={rim} />
            <stop offset="55%" stopColor={color} />
            <stop offset="100%" stopColor="#0a0a0c" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill={`url(#${gradId})`} />
        <circle cx="50" cy="50" r="42" fill="none" stroke={rim} strokeWidth="5" />
        <circle cx="50" cy="50" r="36" fill="none" stroke={color} strokeWidth="3" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          const x1 = 50 + Math.cos(a) * 43;
          const y1 = 50 + Math.sin(a) * 43;
          const x2 = 50 + Math.cos(a) * 48;
          const y2 = 50 + Math.sin(a) * 48;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          );
        })}
        <circle
          cx="50"
          cy="50"
          r="22"
          fill="rgba(0,0,0,0.28)"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <text
          x="50"
          y="54"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
          letterSpacing="1"
        >
          {value}
        </text>
      </svg>
    </div>
  );
}

function Die({ pips, className }: { pips: number; className?: string }) {
  const faces: Record<number, string[]> = {
    1: ['center'],
    2: ['tl', 'br'],
    3: ['tl', 'center', 'br'],
    4: ['tl', 'tr', 'bl', 'br'],
    5: ['tl', 'tr', 'center', 'bl', 'br'],
    6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br'],
  };
  const pos: Record<string, string> = {
    tl: 'left-[18%] top-[18%]',
    tr: 'right-[18%] top-[18%]',
    ml: 'left-[18%] top-1/2 -translate-y-1/2',
    mr: 'right-[18%] top-1/2 -translate-y-1/2',
    bl: 'bottom-[18%] left-[18%]',
    br: 'bottom-[18%] right-[18%]',
    center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div
      className={`relative aspect-square rounded-xl border border-white/30 bg-gradient-to-br from-[#fff] via-[#f5f5f5] to-[#d4d4d8] shadow-[0_16px_28px_rgba(0,0,0,.45)] ${className ?? ''}`}
      aria-hidden="true"
    >
      {(faces[pips] ?? faces[5]).map((p) => (
        <span key={p} className={`absolute h-[14%] w-[14%] rounded-full bg-[#1a1a1e] ${pos[p]}`} />
      ))}
    </div>
  );
}

/** Decorative floating casino motifs — cards, chips, dice. Purely visual. */
export default function CasinoMotifs({ dense = false }: { dense?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-1/4 top-0 h-[70%] w-[70%] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(22,101,52,.55), transparent 68%)' }}
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[60%] w-[60%] rounded-full opacity-35 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(185,28,28,.4), transparent 68%)' }}
      />
      <div
        className="absolute left-1/3 top-1/4 h-[40%] w-[40%] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,162,39,.35), transparent 70%)' }}
      />

      <motion.div
        className="absolute right-[4%] top-[18%] w-[4.6rem] sm:right-[8%] sm:w-[6.5rem] lg:w-[7.5rem]"
        initial={{ opacity: 0, y: 40, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 14 }}
        transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative">
          <div className="absolute left-0 top-0 w-full -rotate-[18deg] opacity-90">
            <PlayingCard rank="A" suit="♠" />
          </div>
          <div className="absolute left-3 top-1 w-full rotate-[-2deg] opacity-95 sm:left-4">
            <PlayingCard rank="K" suit="♥" />
          </div>
          <div className="relative left-6 top-2 w-full rotate-[12deg] sm:left-8">
            <PlayingCard rank="Q" suit="♦" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[3%] top-[28%] w-[3.8rem] -rotate-[16deg] sm:left-[7%] sm:w-[5.2rem] lg:w-[5.8rem]"
        initial={{ opacity: 0, x: -30, rotate: -28 }}
        animate={{ opacity: 1, x: 0, rotate: -16 }}
        transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="animate-float" style={{ animationDuration: '11s' }}>
          <PlayingCard rank="J" suit="♣" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[22%] left-[6%] w-14 sm:bottom-[18%] sm:left-[10%] sm:w-20 lg:w-24"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.7 }}
      >
        <div className="animate-float" style={{ animationDuration: '9s', animationDelay: '0.4s' }}>
          <Chip color="#dc2626" rim="#fca5a5" value="100" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[28%] right-[10%] w-12 sm:bottom-[24%] sm:right-[14%] sm:w-16 lg:w-20"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.85 }}
      >
        <div className="animate-float" style={{ animationDuration: '10s', animationDelay: '1.2s' }}>
          <Chip color="#2563eb" rim="#93c5fd" value="500" />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[18%] top-[12%] w-10 sm:left-[22%] sm:w-14 lg:w-16"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 1 }}
      >
        <div className="animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}>
          <Chip color="#16a34a" rim="#86efac" value="25" />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[22%] top-[42%] w-11 sm:right-[26%] sm:w-14"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.95, scale: 1 }}
        transition={{ duration: 0.9, delay: 1.1 }}
      >
        <div className="animate-float" style={{ animationDuration: '8.5s', animationDelay: '0.8s' }}>
          <Chip color="#c9a227" rim="#f0dfa8" value="1K" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[36%] left-[28%] w-9 rotate-12 sm:w-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.15 }}
      >
        <div className="animate-float" style={{ animationDuration: '13s', animationDelay: '1.5s' }}>
          <Die pips={5} />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[32%] top-[16%] w-8 -rotate-[18deg] sm:w-11"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.25 }}
      >
        <div className="animate-float" style={{ animationDuration: '10.5s', animationDelay: '0.3s' }}>
          <Die pips={6} />
        </div>
      </motion.div>

      {dense && (
        <>
          <div
            className="absolute bottom-[12%] right-[28%] w-10 animate-float sm:w-14"
            style={{ animationDuration: '11s', animationDelay: '2.4s' }}
          >
            <Chip color="#0B0B0D" rim="#f0dfa8" value="5K" />
          </div>
          <div className="absolute left-[40%] top-[8%] w-[3.2rem] rotate-[8deg] opacity-90 sm:w-[4.5rem]">
            <div className="animate-float" style={{ animationDuration: '14s' }}>
              <PlayingCard rank="10" suit="♥" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
