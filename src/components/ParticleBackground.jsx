import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function GlassOrb({ position, size, color, speed, offset }) {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(t * speed + offset) * 2;
    meshRef.current.position.x = position[0] + Math.cos(t * speed * 0.6 + offset) * 1.5;
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.x = t * 0.1;
    innerRef.current.scale.setScalar(0.6 + Math.sin(t * speed * 2 + offset) * 0.05);
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Outer glass shell */}
      <mesh>
        <sphereGeometry args={[size, 64, 64]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.08}
          roughness={0}
          metalness={0.1}
          thickness={0.5}
          transmission={0.9}
        />
      </mesh>

      {/* Inner glow core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[size * 0.55, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Rim glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[size * 0.95, size * 0.04, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={3}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

export default function ParticleBackground() {
  const orbs = useMemo(() => [
    { position: [0, 0, 0], size: 3.5, color: '#a855f7', speed: 0.08, offset: 0 },
    { position: [-5, 3, -2], size: 1.8, color: '#3b82f6', speed: 0.12, offset: 1 },
    { position: [5, -2, -1], size: 2.2, color: '#7c3aed', speed: 0.1, offset: 2 },
    { position: [-3, -4, -3], size: 1.4, color: '#60a5fa', speed: 0.15, offset: 3 },
    { position: [4, 4, -2], size: 1.6, color: '#a855f7', speed: 0.09, offset: 4 },
  ], []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 0,
      background: 'linear-gradient(135deg, #050008 0%, #0d0221 50%, #050015 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 5]} color="#ffffff" intensity={2} />
        <pointLight position={[5, 5, 5]} color="#a855f7" intensity={6} />
        <pointLight position={[-5, -5, 5]} color="#3b82f6" intensity={5} />
        {orbs.map((orb, i) => (
          <GlassOrb key={i} {...orb} />
        ))}
      </Canvas>
    </div>
  );
}