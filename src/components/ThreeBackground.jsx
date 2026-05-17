import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Stars(props) {
    const ref = useRef();

    const reducedMotion = useMemo(
        () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        []
    );

    const [sphere] = useState(() => {
        const points = new Float32Array(5000 * 3);
        const radius = 1.2;
        for (let i = 0; i < 5000; i++) {
            const r = radius * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            points[i * 3 + 2] = r * Math.cos(phi);
        }
        return points;
    });

    useFrame((_, delta) => {
        if (!ref.current || reducedMotion) return;
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#38bdf8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-primary" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
