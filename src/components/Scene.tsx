import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float, Instances, Instance, Line, Torus } from '@react-three/drei';
import * as THREE from 'three';

const ParticleNetwork = () => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 60; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10 - 5
        )
      );
    }
    return pts;
  }, []);

  return (
    <group>
      <Instances limit={100} castShadow receiveShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color="#0A2540" />
        {points.map((pos, i) => (
          <Float key={i} speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <Instance position={pos} />
          </Float>
        ))}
      </Instances>
      
      {/* Draw some connecting lines between points to simulate network */}
      {points.slice(0, 30).map((pos, i) => {
        if (i === 0) return null;
        return (
          <Line
            key={`line-${i}`}
            points={[points[i - 1], pos]}
            color="#0055FF"
            lineWidth={0.5}
            transparent
            opacity={0.15}
          />
        );
      })}
    </group>
  );
};

const GlowingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock, mouse }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = clock.getElapsedTime() * 0.02;
      
      // Subtle parallax based on mouse
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouse.x * 3, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouse.y * 3, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Torus args={[2.5, 0.02, 16, 100]} position={[-2, 1, -2]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <meshStandardMaterial 
            color="#0A2540" 
            metalness={0.8}
            roughness={0.2}
          />
        </Torus>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[1.5, 64, 64]} position={[4, -1, -3]}>
           <meshPhysicalMaterial 
            color="#ffffff"
            transmission={0.9}
            opacity={1}
            metalness={0}
            roughness={0}
            ior={1.5}
            thickness={2}
            clearcoat={1}
          />
        </Sphere>
      </Float>

      <Float speed={1.2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.4, 32, 32]} position={[0, -2, 2]}>
          <meshStandardMaterial 
            color="#FF6A00" 
            emissive="#FF6A00"
            emissiveIntensity={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.2, 32, 32]} position={[-3, -3, 1]}>
          <meshStandardMaterial 
            color="#0055FF" 
            emissive="#0055FF"
            emissiveIntensity={1}
          />
        </Sphere>
      </Float>
    </group>
  );
};

export default function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} color="#ffffff" />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#0A2540" />
      <pointLight position={[4, -1, -3]} intensity={2} color="#0055FF" distance={10} />
      
      <GlowingShapes />
      <ParticleNetwork />
      
      <fog attach="fog" args={['#FFFFFF', 8, 25]} />
    </>
  );
}
