import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MethaneParticles({ count = 1200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = Math.random() * 25 - 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      vel[i] = Math.random() * 0.03 + 0.01;
    }
    return [pos, vel];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015;
      
      const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        posArray[i3 + 1] += velocities[i];
        posArray[i3] += Math.sin(state.clock.elapsedTime * 0.5 + i * 0.1) * 0.003;
        posArray[i3 + 2] += Math.cos(state.clock.elapsedTime * 0.5 + i * 0.1) * 0.003;
        
        if (posArray[i3 + 1] > 15) {
          posArray[i3 + 1] = -12;
          posArray[i3] = (Math.random() - 0.5) * 30;
          posArray[i3 + 2] = (Math.random() - 0.5) * 20;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#22d3ee"
        size={0.12}
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function AmbientParticles({ count = 800 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 8 + Math.random() * 12;
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.04}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function GlowingSpheres() {
  const groupRef = useRef<THREE.Group>(null);
  
  const spheres = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      position: [
        Math.sin(i * 1.0) * 8,
        Math.cos(i * 0.7) * 4 - 2,
        Math.sin(i * 0.5) * 5 - 3,
      ] as [number, number, number],
      scale: 0.4 + Math.random() * 0.5,
      speed: 0.5 + Math.random() * 0.5,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      groupRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime * spheres[i].speed + i) * 0.002;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {spheres.map((sphere, i) => (
        <mesh key={i} position={sphere.position}>
          <sphereGeometry args={[sphere.scale, 32, 32]} />
          <meshBasicMaterial
            color="#0891b2"
            transparent
            opacity={0.12}
          />
        </mesh>
      ))}
    </group>
  );
}

function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <MethaneParticles count={1500} />
        <AmbientParticles count={1000} />
        <GlowingSpheres />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
    </div>
  );
}

export default ParticleField;
