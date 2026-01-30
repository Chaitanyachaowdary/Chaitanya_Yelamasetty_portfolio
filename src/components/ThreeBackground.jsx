// src/components/ThreeBackground.jsx

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Stars(props) {
    const ref = useRef();

    // Generate random points on a sphere
    const [sphere] = useState(() => {
        const randomInSphere = (numPoints, radius) => {
            const points = new Float32Array(numPoints * 3);
            for (let i = 0; i < numPoints; i++) {
                const r = radius * Math.cbrt(Math.random());
                const theta = Math.random() * 2 * Math.PI;
                const phi = Math.acos(2 * Math.random() - 1);

                const x = r * Math.sin(phi) * Math.cos(theta);
                const y = r * Math.sin(phi) * Math.sin(theta);
                const z = r * Math.cos(phi);

                points[i * 3] = x;
                points[i * 3 + 1] = y;
                points[i * 3 + 2] = z;
            }
            return points;
        };
        return randomInSphere(5000, 1.2);
    });

    useFrame((state, delta) => {
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
        <div className="fixed inset-0 z-[-1] bg-primary">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
