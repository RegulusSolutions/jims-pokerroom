'use client';

import { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

import Table from './Table';
import Cards from './Cards';
import Chips from './Chips';
import Lighting from './Lighting';

/* Camera keyframes: from seat height, up and over the board as you scroll. */
const KEYS = [
  { p: 0.0, pos: [0, 2.05, 7.0], look: [0, -1.0, 0.9] },
  { p: 0.35, pos: [2.4, 3.1, 4.6], look: [0, -1.1, 0.1] },
  { p: 0.7, pos: [-2.2, 4.2, 3.9], look: [0, -1.1, -0.1] },
  { p: 1.0, pos: [0, 6.6, 2.2], look: [0, -1.1, -0.1] },
];

function camAt(p: number) {
  let i = 0;
  while (i < KEYS.length - 2 && p > KEYS[i + 1].p) i++;
  const A = KEYS[i];
  const B = KEYS[i + 1];
  let t = (p - A.p) / (B.p - A.p);
  t = Math.min(1, Math.max(0, t));
  t = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  return {
    pos: new THREE.Vector3(...A.pos).lerp(new THREE.Vector3(...B.pos), t),
    look: new THREE.Vector3(...A.look).lerp(new THREE.Vector3(...B.look), t),
  };
}

function Rig({ progress }: { progress: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  const smooth = useRef(0);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.tx = e.clientX / window.innerWidth - 0.5;
      mouse.current.ty = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame(({ clock }) => {
    smooth.current += (progress.current - smooth.current) * 0.075;
    mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.045;
    mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.045;

    const k = camAt(smooth.current);
    camera.position.copy(k.pos);
    camera.position.x += mouse.current.x * 1.5;
    camera.position.y += -mouse.current.y * 0.8 + Math.sin(clock.getElapsedTime() * 0.4) * 0.06;
    camera.lookAt(k.look);
  });

  return null;
}

export default function PokerScene() {
  const progress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      camera={{ fov: 38, position: [0, 2.05, 7] }}
      onCreated={({ scene }) => {
        scene.background = new THREE.Color('#050506');
        scene.fog = new THREE.FogExp2('#050506', 0.055);
      }}
    >
      <Suspense fallback={null}>
        <Lighting />
        <Table />
        <Chips />
        <Cards progress={progress} />
        <Rig progress={progress} />
        <EffectComposer>
          <Bloom intensity={0.7} luminanceThreshold={0.62} luminanceSmoothing={0.3} mipmapBlur />
          <Vignette eskil={false} offset={0.24} darkness={0.85} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
