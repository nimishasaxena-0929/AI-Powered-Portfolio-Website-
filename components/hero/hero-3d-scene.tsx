"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Elegant Minimalist Abstract 3D Torus Accent
function EditorialTorus() {
  const torusRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    // Slow continuous low-frequency motion
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.15;
      torusRef.current.rotation.y += delta * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.1;
    }

    // Gentle cursor response
    const pointerX = state.pointer.x * 0.4;
    const pointerY = state.pointer.y * 0.4;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, pointerX, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, pointerY, 0.04);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group scale={1.1}>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={torusRef}>
          <torusKnotGeometry args={[1.4, 0.35, 128, 32]} />
          <meshStandardMaterial
            color="#181C19"
            roughness={0.2}
            metalness={0.85}
            wireframe={true}
            emissive="#C8FF3D"
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>

      {/* Thin Outer Axis Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.4, 0.01, 16, 100]} />
        <meshBasicMaterial color="#9DA39D" opacity={0.4} transparent wireframe />
      </mesh>
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.0} color="#F2F3EE" />
      <pointLight position={[-5, -5, -2]} intensity={0.8} color="#C8FF3D" />
      <EditorialTorus />
    </>
  );
}
