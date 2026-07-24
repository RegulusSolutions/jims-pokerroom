'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GOLD, GOLD_LIGHT } from './materials';

const STACKS: [number, number, number, number][] = [
  [2.4, 1.35, 9, 0], [3.05, 1.0, 6, 2], [2.62, 2.0, 4, 1], [-3.0, 1.2, 7, 3],
];

/** Chip stacks on the felt, plus ambient chips drifting in the dark. */
export default function Chips() {
  const geo = useMemo(() => new THREE.CylinderGeometry(0.42, 0.42, 0.075, 40), []);
  const mats = useMemo(
    () => [
      new THREE.MeshStandardMaterial({ color: '#0B0B0D', roughness: 0.45, metalness: 0.25 }),
      new THREE.MeshStandardMaterial({ color: GOLD, roughness: 0.28, metalness: 0.95 }),
      new THREE.MeshStandardMaterial({ color: GOLD_LIGHT, roughness: 0.5, metalness: 0.3 }),
      new THREE.MeshStandardMaterial({ color: '#1C1C21', roughness: 0.4, metalness: 0.3 }),
    ],
    []
  );

  const floaters = useRef<THREE.Mesh[]>([]);
  const seeds = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => {
        const a = (i / 9) * Math.PI * 2;
        return {
          pos: [
            Math.cos(a) * (4.6 + ((i * 37) % 30) / 10),
            0.5 + ((i * 53) % 32) / 10,
            Math.sin(a) * (3.6 + ((i * 29) % 26) / 10),
          ] as [number, number, number],
          speed: 0.25 + ((i * 17) % 40) / 100,
          offset: (i * 1.7) % 6.28,
          mat: i % 4,
        };
      }),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    floaters.current.forEach((m, i) => {
      if (!m) return;
      const s = seeds[i];
      m.position.y = s.pos[1] + Math.sin(t * s.speed + s.offset) * 0.5;
      m.rotation.x = Math.sin(t * 0.3 + s.offset) * 0.5 + 1;
      m.rotation.z += 0.0035;
    });
  });

  return (
    <>
      <group position={[0, -1.15, 0]}>
        {STACKS.map(([x, z, n, seed], si) => (
          <group key={si} position={[x, 0, z]}>
            {Array.from({ length: n }, (_, i) => (
              <mesh
                key={i}
                geometry={geo}
                material={mats[(seed + i) % 4]}
                position={[Math.sin(i * 2.1 + seed) * 0.012, i * 0.078, 0]}
                rotation={[0, (i * 1.7 + seed) * 0.4, 0]}
                castShadow
              />
            ))}
          </group>
        ))}
      </group>

      {seeds.map((s, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) floaters.current[i] = el; }}
          geometry={geo}
          material={mats[s.mat]}
          position={s.pos}
        />
      ))}
    </>
  );
}
