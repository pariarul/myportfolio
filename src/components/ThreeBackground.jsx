import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 100]} scale={2}>
                <MeshDistortMaterial
                    color="#222"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const ParticleField = () => {
    const count = 2000;
    const mesh = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;
            temp.push({ t, factor, speed, x, y, z, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        particles.forEach((particle, i) => {
            let { t, factor, speed, x, y, z } = particle;
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            // Subtle movement
            dummy.position.set(
                x + Math.cos(t / 10) * factor + (Math.sin(t * 1) * factor) / 10,
                y + Math.sin(t / 10) * factor + (Math.cos(t * 2) * factor) / 10,
                z + Math.cos(t / 10) * factor + (Math.sin(t * 3) * factor) / 10
            );

            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();

            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <dodecahedronGeometry args={[0.05, 0]} />
            <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.5} />
        </instancedMesh>
    );
};

const ThreeBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-black opacity-80">
            <Canvas camera={{ position: [0, 0, 8] }} gl={{ antialias: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#444" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />

                <ParticleField />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Sphere args={[1.5, 64, 64]} position={[3, 0, 0]}>
                        <MeshDistortMaterial
                            color="#111"
                            distort={0.4}
                            speed={2}
                            roughness={0.4}
                            metalness={0.9}
                        />
                    </Sphere>
                </Float>

                <Float speed={3} rotationIntensity={1} floatIntensity={1}>
                    <Sphere args={[1, 64, 64]} position={[-3, -2, -2]}>
                        <MeshDistortMaterial
                            color="#1a1a1a"
                            distort={0.6}
                            speed={3}
                            roughness={0.2}
                            metalness={1}
                        />
                    </Sphere>
                </Float>
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
