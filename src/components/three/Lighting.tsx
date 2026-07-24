'use client';

import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/** The hanging lamp over a poker table is the most characteristic object in
 *  the room, so it is the key light, the volumetric beam and the mood. */
export default function Lighting() {
  const beam = useRef<THREE.Mesh>(null);
  const spot = useRef<THREE.SpotLight>(null);
  const target = useRef<THREE.Object3D>(null);

  // Point the spot at the felt rather than at the world origin.
  useEffect(() => {
    if (spot.current && target.current) {
      spot.current.target = target.current;
      spot.current.target.updateMatrixWorld();
    }
  }, []);

  useFrame(({ clock }) => {
    if (!beam.current) return;
    const m = beam.current.material as THREE.MeshBasicMaterial;
    m.opacity = 0.05 + Math.sin(clock.getElapsedTime() * 1.7) * 0.007;
  });

  return (
    <>
      <ambientLight intensity={0.5} color="#2A2418" />

      <object3D ref={target} position={[0, -1.1, 0]} />
      <spotLight
        ref={spot}
        position={[0, 7.4, 0.6]}
        angle={0.62}
        penumbra={0.55}
        intensity={130}
        distance={30}
        color="#FFE2A8"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0006}
      />

      <mesh ref={beam} position={[0, 3.2, 0.6]}>
        <coneGeometry args={[4.3, 8.6, 48, 1, true]} />
        <meshBasicMaterial
          color="#FFD79A"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* gold rim from behind, warm fill from the front */}
      <pointLight position={[-6.5, 3.4, -7.5]} intensity={60} distance={30} color="#C9A227" />
      <pointLight position={[7, 2.4, -6.5]} intensity={34} distance={26} color="#7E6320" />
      <pointLight position={[4, 1.6, 5.5]} intensity={18} distance={20} color="#F0DFA8" />
    </>
  );
}
