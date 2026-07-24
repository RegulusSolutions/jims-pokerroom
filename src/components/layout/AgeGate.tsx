'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const KEY = 'jpr-age-ok';

/** 18+ interstitial. Required for a licensed gaming venue and for
 *  Meta / Google ad approval. Uses sessionStorage, not cookies. */
export default function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(KEY)) setOpen(true);
    } catch {
      /* private mode — just show the site */
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  if (!open) return null;

  const accept = () => {
    try { sessionStorage.setItem(KEY, '1'); } catch {}
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink px-6"
    >
      <div className="vignette pointer-events-none absolute inset-0" />
      <div className="relative w-full max-w-lg text-center">
        <p className="label mb-8">{site.address.building} &middot; {site.address.city}</p>
        <h1 id="age-title" className="h-display text-[clamp(2rem,6vw,3.4rem)]">
          Are you <span className="gold-text">eighteen</span>?
        </h1>
        <p className="lede mx-auto mt-7 max-w-sm">
          {site.name} is a licensed gaming venue. You must be 18 or over to enter,
          and you&rsquo;ll be asked for photo ID at the door.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button onClick={accept} className="btn btn-solid">Yes, I&rsquo;m 18 or over</button>
          <a href="https://www.google.com" className="btn">Leave the site</a>
        </div>
        <p className="mt-10 font-mono text-[0.6rem] uppercase tracking-label text-ash">
          Play within your limits
        </p>
      </div>
    </div>
  );
}
