// src/components/ParticleScene.jsx
// The actual WebGL scene — lazy-loaded by ParticleField so the three.js
// bundle only ships to visitors who can see it (motion allowed + WebGL).
import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Sky-blue → violet gradient: matches the site accent AND the brand purple.
const C1 = [0.22, 0.74, 0.97]; // #38bdf8 sky
const C2 = [0.66, 0.55, 0.98]; // #a78bfa violet
const COUNT = 2400;

function Points() {
  const ref = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const golden = Math.PI * (3 - Math.sqrt(5)); // fibonacci sphere
    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const radius = 2.6 + (Math.random() - 0.5) * 0.35;
      positions[i * 3] = Math.cos(theta) * r * radius;
      positions[i * 3 + 1] = y * radius;
      positions[i * 3 + 2] = Math.sin(theta) * r * radius;
      const t = (y + 1) / 2;
      colors[i * 3] = C1[0] + (C2[0] - C1[0]) * t;
      colors[i * 3 + 1] = C1[1] + (C2[1] - C1[1]) * t;
      colors[i * 3 + 2] = C1[2] + (C2[2] - C1[2]) * t;
    }
    return { positions, colors };
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.06; // slow auto-spin
    ref.current.rotation.x += (mouse.current.y * 0.25 - ref.current.rotation.x) * 0.03;
    ref.current.rotation.z += (mouse.current.x * 0.12 - ref.current.rotation.z) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={COUNT} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} vertexColors transparent opacity={0.9} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function ParticleScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 60 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
      <Points />
    </Canvas>
  );
}
