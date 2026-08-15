import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Floating 3D data cubes — lightweight instanced geometry
 * with emissive edges to give a neon wireframe feel.
 */
function DataCube({
  position,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
  });

  return (
    <Float speed={2 * speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#0a0e1a"
          emissive="#22d3ee"
          emissiveIntensity={0.15}
          metalness={0.8}
          roughness={0.3}
          wireframe
        />
      </mesh>
    </Float>
  );
}

/** Abstract rotating geometric ring */
function DataRing({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[0.8, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

/** Floating particle field — data particles */
function ParticleField({ count = 800 }: { count?: number }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

/** Group that subtly follows the mouse for parallax */
function MouseParallax({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.3;
    const y = state.pointer.y * 0.3;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y, 0.05);
  });

  return <group ref={group}>{children}</group>;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#22d3ee" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[0, 5, 5]} intensity={0.4} color="#a78bfa" />

        <MouseParallax>
          {/* Floating data cubes */}
          <DataCube position={[-2.5, 1.2, -1]} scale={0.9} speed={1} />
          <DataCube position={[2.8, -0.8, -2]} scale={1.1} speed={0.8} />
          <DataCube position={[1.5, 1.8, -3]} scale={0.6} speed={1.2} />
          <DataCube position={[-1.8, -1.5, -1.5]} scale={0.7} speed={0.9} />
          <DataCube position={[3.5, 1.5, -4]} scale={0.5} speed={1.1} />

          {/* Rotating rings */}
          <DataRing position={[0, 0, -2]} scale={1.2} />
          <DataRing position={[-3, -0.5, -3]} scale={0.8} />
          <DataRing position={[2, 0.5, -4]} scale={0.6} />

          {/* Particles */}
          <ParticleField count={600} />
        </MouseParallax>
      </Suspense>
    </Canvas>
  );
}
