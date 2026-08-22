'use client';

import { useReducedMotion } from 'framer-motion';

/** Decorative roulette — CSS conic wheel, no float math (SSR-safe). */
export default function RouletteWheel({ className = '' }: { className?: string }) {
  const reduced = useReducedMotion();

  // Alternating ruby / ink pockets around the wheel
  const stops: string[] = [];
  for (let i = 0; i < 18; i++) {
    const start = i * 20;
    const end = start + 20;
    const color = i % 2 === 0 ? '#9b1b2f' : '#0a0a0c';
    stops.push(`${color} ${start}deg ${end}deg`);
  }

  return (
    <div className={`relative aspect-square ${className}`} aria-hidden="true">
      <div className="absolute inset-[-8%] rounded-full bg-gold-500/25 blur-3xl animate-neonPulse" />

      {/* Wood bowl */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 40% 35%, #3a2a12, #120e08 55%, #050506)',
          boxShadow:
            'inset 0 0 0 3px rgba(201,162,39,.7), inset 0 0 0 8px rgba(10,10,12,.9), 0 30px 70px rgba(0,0,0,.6)',
        }}
      />

      {/* Spinning pocket ring */}
      <div
        className={`absolute inset-[7%] rounded-full ${reduced ? '' : 'animate-wheelSpin'}`}
        style={{
          background: `conic-gradient(from -90deg, ${stops.join(',')})`,
          boxShadow: 'inset 0 0 0 1px rgba(240,223,168,.4)',
        }}
      >
        {/* Gold frets via repeating gradient overlay */}
        <div
          className="absolute inset-0 rounded-full opacity-70"
          style={{
            background:
              'repeating-conic-gradient(from -90deg, transparent 0deg 19.2deg, rgba(240,223,168,.55) 19.2deg 20deg)',
          }}
        />
      </div>

      {/* Inner cone — dark gold, not green felt */}
      <div
        className="absolute inset-[28%] rounded-full"
        style={{
          background: 'radial-gradient(circle at 45% 40%, #2a2414, #121215 55%, #050506)',
          boxShadow: 'inset 0 0 0 2px rgba(201,162,39,.55), 0 0 30px rgba(0,0,0,.4)',
        }}
      />

      {/* Hub */}
      <div
        className="absolute inset-[40%] flex items-center justify-center rounded-full"
        style={{
          background: 'linear-gradient(145deg, #f0dfa8, #c9a227 45%, #7e6320)',
          boxShadow: '0 4px 16px rgba(0,0,0,.45)',
        }}
      >
        <span className="font-display text-[clamp(1.2rem,4vw,1.8rem)] leading-none text-ink">D</span>
      </div>

      {/* Orbiting ball track */}
      <div
        className={`absolute inset-[4%] rounded-full ${reduced ? '' : 'animate-ballOrbit'}`}
      >
        <span
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold-100"
          style={{ boxShadow: '0 0 10px #f0dfa8, 0 0 2px #fff' }}
        />
      </div>

      {/* Pointer */}
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-0.5">
        <div
          className="h-0 w-0 border-l-[6px] border-r-[6px] border-t-[12px] border-l-transparent border-r-transparent border-t-gold-200"
          style={{ filter: 'drop-shadow(0 2px 6px rgba(201,162,39,.7))' }}
        />
      </div>
    </div>
  );
}
