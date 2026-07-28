'use client';

import { useEffect, useState } from 'react';
import { nextDailyAt } from '@/lib/utils';

/** Fixed bottom status strip. The countdown is real; the table counts are
 *  placeholders wired to be replaced by an API route later. */
export default function LiveBar() {
  const [left, setLeft] = useState('--:--:--');
  const [live, setLive] = useState(false);

  useEffect(() => {
    let target = nextDailyAt(18);
    const tick = () => {
      const now = new Date();
      const hour = now.getHours();
      setLive(hour >= 18 || hour < 4);
      let s = Math.floor((target.getTime() - now.getTime()) / 1000);
      if (s < 0) {
        target = nextDailyAt(18);
        s = Math.floor((target.getTime() - now.getTime()) / 1000);
      }
      const h = String(Math.floor(s / 3600)).padStart(2, '0');
      const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
      const sec = String(s % 60).padStart(2, '0');
      setLeft(`${h}:${m}:${sec}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-500/25 bg-ink/85 backdrop-blur-xl">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'linear-gradient(90deg, rgba(13,90,52,.2), transparent 40%, transparent 60%, rgba(155,27,47,.15))',
        }}
      />
      <div className="shell relative flex items-center gap-4 overflow-hidden whitespace-nowrap py-2.5 font-mono text-[0.64rem] tracking-wider2 text-bone/55 sm:gap-7">
        <span className="flex items-center gap-2">
          <span
            className={`inline-block h-1.5 w-1.5 animate-pulseDot rounded-full ${
              live ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : 'bg-gold-400 shadow-[0_0_10px_#D9B959]'
            }`}
          />
          <span className="text-gold-200">{live ? 'Tables running' : 'Room closed'}</span>
        </span>
        <span className="text-gold-500/40">/</span>
        <span className="hidden sm:inline">
          Cash from <span className="text-gold-200">100 / 200</span>
        </span>
        <span className="hidden text-gold-500/40 sm:inline">/</span>
        <span>
          Doors open in <span className="text-gold-200">{left}</span>
        </span>
        <span className="hidden text-gold-500/40 md:inline">/</span>
        <span className="hidden md:inline">Lotus Tower &middot; AC6</span>
      </div>
    </div>
  );
}
