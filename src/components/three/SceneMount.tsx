'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const PokerScene = dynamic(() => import('./PokerScene'), { ssr: false });

/** WebGL is opt-in: it only mounts on capable devices that haven't asked for
 *  reduced motion. Everything else gets the static gold gradient behind the
 *  copy, which keeps the page readable on a mid-range phone on mobile data. */
export default function SceneMount() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    try {
      const c = document.createElement('canvas');
      const gl = c.getContext('webgl2') || c.getContext('webgl');
      if (gl) setOk(true);
    } catch {
      /* no WebGL — stay on the fallback */
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {ok ? (
        <PokerScene />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(201,162,39,.16),transparent_58%)]" />
      )}
      <div className="vignette pointer-events-none absolute inset-0" />
    </div>
  );
}
