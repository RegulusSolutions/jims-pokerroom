'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { cardFaceTexture, cardBackTexture } from './materials';

/* A♠ K♠ in the hole, J♠ Q♠ T♠ on the board.
   Scroll the page and the site deals you a royal flush in spades. */
type Slot = {
  rank: string;
  suit: string;
  target: [number, number, number];
  tilt: number;
  delay: number;      // seconds after mount (hole cards)
  gate: number | null; // scroll progress that triggers it (board cards)
};

const SLOTS: Slot[] = [
  { rank: 'A', suit: '\u2660', target: [-1.05, -1.06, 1.95], tilt: -0.1, delay: 0.9, gate: null },
  { rank: 'K', suit: '\u2660', target: [0.15, -1.06, 2.05], tilt: 0.07, delay: 1.15, gate: null },
  { rank: 'J', suit: '\u2660', target: [-2.1, -1.06, -0.1], tilt: -0.05, delay: 0, gate: 0.22 },
  { rank: 'Q', suit: '\u2660', target: [-0.95, -1.06, -0.1], tilt: 0.03, delay: 0, gate: 0.3 },
  { rank: '10', suit: '\u2660', target: [0.2, -1.06, -0.1], tilt: -0.02, delay: 0, gate: 0.38 },
];

const DEAL = new THREE.Vector3(-6.6, 2.2, 2.4); // the dealer's hand, off-table
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export default function Cards({ progress }: { progress: React.MutableRefObject<number> }) {
  const refs = useRef<THREE.Mesh[]>([]);
  const p = useRef<number[]>(SLOTS.map(() => 0));

  const back = useMemo(() => cardBackTexture(), []);
  const geo = useMemo(() => new THREE.BoxGeometry(1.02, 1.44, 0.016), []);

  const materials = useMemo(
    () =>
      SLOTS.map((s) => {
        const edge = new THREE.MeshStandardMaterial({ color: '#EFEBE2', roughness: 0.8 });
        return [
          edge, edge, edge, edge,
          new THREE.MeshStandardMaterial({ map: cardFaceTexture(s.rank, s.suit), roughness: 0.55 }),
          new THREE.MeshStandardMaterial({ map: back, roughness: 0.55 }),
        ];
      }),
    [back]
  );

  useFrame(({ clock }) => {
    const el = clock.getElapsedTime();
    SLOTS.forEach((s, i) => {
      const mesh = refs.current[i];
      if (!mesh) return;

      const want =
        s.gate === null
          ? Math.min(1, Math.max(0, (el - s.delay) / 0.9))
          : Math.min(1, Math.max(0, (progress.current - s.gate) / 0.07));

      p.current[i] += (want - p.current[i]) * 0.12;
      const t = ease(p.current[i]);

      mesh.position.lerpVectors(DEAL, new THREE.Vector3(...s.target), t);
      mesh.position.y += Math.sin(t * Math.PI) * 1.5;  // arc through the air
      mesh.rotation.x = -Math.PI / 2;
      mesh.rotation.z = s.tilt * t + (1 - t) * 1.4;
      mesh.rotation.y = (1 - t) * Math.PI * 2;          // flip face-up on landing
    });
  });

  return (
    <>
      {SLOTS.map((s, i) => (
        <mesh
          key={s.rank + s.suit}
          ref={(el) => { if (el) refs.current[i] = el; }}
          geometry={geo}
          material={materials[i]}
          position={DEAL.toArray()}
          castShadow
        />
      ))}
    </>
  );
}
