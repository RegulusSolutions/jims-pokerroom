'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import { racetrack, GOLD } from './materials';

/** The table: charcoal felt, brushed-gold inlay ring, black leather rail. */
export default function Table() {
  const felt = useMemo(() => new THREE.ShapeGeometry(racetrack(4.6, 2.9, 2.6), 48), []);
  const inlay = useMemo(
    () =>
      new THREE.ExtrudeGeometry(racetrack(4.8, 3.1, 2.82), {
        depth: 0.05, bevelEnabled: true, bevelSize: 0.05,
        bevelThickness: 0.04, bevelSegments: 3, curveSegments: 48,
      }),
    []
  );
  const rail = useMemo(
    () =>
      new THREE.ExtrudeGeometry(racetrack(5.18, 3.48, 3.12), {
        depth: 0.36, bevelEnabled: true, bevelSize: 0.17,
        bevelThickness: 0.15, bevelSegments: 5, curveSegments: 48,
      }),
    []
  );

  return (
    <group position={[0, -1.15, 0]}>
      <mesh geometry={felt} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#0D0D10" roughness={0.98} metalness={0} />
      </mesh>

      <mesh geometry={inlay} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <meshStandardMaterial color={GOLD} roughness={0.26} metalness={1} />
      </mesh>

      <mesh geometry={rail} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.17, 0]} receiveShadow>
        <meshStandardMaterial color="#121215" roughness={0.4} metalness={0.4} />
      </mesh>
    </group>
  );
}
